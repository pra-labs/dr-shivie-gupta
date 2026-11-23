import { NextResponse } from "next/server";
import { getDatabase, saveDatabase, type AnalyticsEvent } from "@/lib/storage";

const ALLOWED_EVENT_TYPES = new Set<AnalyticsEvent["type"]>([
  "pageview",
  "faq_search",
  "faq_click",
  "service_click",
  "cta_click",
  "session_guide_open",
  "service_card_swipe",
  "booking_flow_start",
]);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, path, query, target } = body;

    if (!type || typeof type !== "string" || !ALLOWED_EVENT_TYPES.has(type as AnalyticsEvent["type"])) {
      return NextResponse.json({ success: false, error: "Invalid event type" }, { status: 400 });
    }

    const eventType = type as AnalyticsEvent["type"];
    const cleanPath = typeof path === "string" ? path.slice(0, 120) : undefined;
    const cleanQuery = typeof query === "string" ? query.slice(0, 100) : undefined;
    const cleanTarget = typeof target === "string" ? target.slice(0, 100) : undefined;

    const db = getDatabase();

    if (eventType === "pageview" && cleanPath) {
      db.analytics.pageViews[cleanPath] = (db.analytics.pageViews[cleanPath] || 0) + 1;
    } else if (eventType === "faq_search" && cleanQuery) {
      db.analytics.searchQueries[cleanQuery] = (db.analytics.searchQueries[cleanQuery] || 0) + 1;
    } else if (eventType === "faq_click" && cleanTarget) {
      db.analytics.faqClicks[cleanTarget] = (db.analytics.faqClicks[cleanTarget] || 0) + 1;
    }

    const event: AnalyticsEvent = {
      id: `evt-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      type: eventType,
      path: cleanPath,
      query: cleanQuery,
      target: cleanTarget,
      timestamp: new Date().toISOString(),
    };

    // Keep last 100 recent events
    db.analytics.recentEvents = [event, ...db.analytics.recentEvents.slice(0, 99)];
    saveDatabase(db);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
