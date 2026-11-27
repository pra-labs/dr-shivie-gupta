import type { Metadata } from "next";
import { ServicesClient } from "@/components/pages/ServicesClient";

export const metadata: Metadata = {
  title: "Voice Counselling & Reiki Services",
  description:
    "Explore SamvadUrja's confidential voice-only phone counselling services (Individual, Couple, Family) and optional traditional Reiki healing by Dr. Shivie Gupta (~35 years experience).",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
