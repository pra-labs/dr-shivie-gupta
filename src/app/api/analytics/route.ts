import { NextResponse } from "next/server";
import { getDatabase, saveDatabase, type AnalyticsEvent } from "@/lib/storage";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, path, query, target } = body;

    const db = getDatabase();

    if (type === "pageview" && path) {
      db.analytics.pageViews[path] = (db.analytics.pageViews[path] || 0) + 1;
    } else if (type === "faq_search" && query) {
      db.analytics.searchQueries[query] = (db.analytics.searchQueries[query] || 0) + 1;
    } else if (type === "faq_click" && target) {
      db.analytics.faqClicks[target] = (db.analytics.faqClicks[target] || 0) + 1;
    }

    const event: AnalyticsEvent = {
      id: `evt-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      type,
      path,
      query,
      target,
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
