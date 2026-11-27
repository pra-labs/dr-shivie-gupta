import type { Metadata } from "next";
import { GuideClient } from "@/components/pages/GuideClient";

export const metadata: Metadata = {
  title: "Client Guide & FAQs",
  description: "Frequently asked questions regarding SamvadUrja's voice-only phone counselling, session confidentiality, fees, duration, and optional Reiki with Dr. Shivie Gupta.",
};

export default function GuidePage() {
  return <GuideClient />;
}
