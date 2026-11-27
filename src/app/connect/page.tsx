import type { Metadata } from "next";
import { ConnectClient } from "@/components/pages/ConnectClient";

export const metadata: Metadata = {
  title: "Request a Voice Session",
  description: "Request a confidential voice-only phone counselling session or optional Reiki consultation at SamvadUrja with Dr. Shivie Gupta (~35 years experience).",
};

export default function ConnectPage() {
  return <ConnectClient />;
}
