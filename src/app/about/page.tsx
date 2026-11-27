import type { Metadata } from "next";
import { AboutClient } from "@/components/pages/AboutClient";

export const metadata: Metadata = {
  title: "About Dr. Shivie Gupta",
  description: "Learn about SamvadUrja and Dr. Shivie Gupta's ~35 years of dedicated experience in voice-only counselling, relationship guidance, and complementary Reiki healing in Agra.",
};

export default function AboutPage() {
  return <AboutClient />;
}
