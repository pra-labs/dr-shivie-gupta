import { NextResponse } from "next/server";
import { routeIntent } from "@/lib/assistant-intent";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const userMessage = body.userMessage?.toString() || "";

    // Use deterministic, curated intent & safety router
    const result = routeIntent(userMessage);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Assistant API error:", error);
    return NextResponse.json(
      {
        reply:
          "Namaste. Mrs. Shivie Gupta offers confidential phone counselling for Individual (₹1,200), Couple (₹1,800), and Family (₹2,200) guidance, plus optional Reiki (₹1,000). You may also call or WhatsApp directly at **+91 98378 91692**.",
        matchedIntent: "greeting",
      },
      { status: 200 }
    );
  }
}
