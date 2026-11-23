import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export async function GET() {
  const agentMetadata = {
    schema_version: "1.0",
    name: "Dr. Shivie Gupta — Voice Counselling Practice",
    description: "Voice-only counselling for individuals, couples, and families across India with ~35 years experience, plus optional Reiki.",
    practitioner: {
      name: siteConfig.name,
      credentials: siteConfig.credentials,
      experience_years: siteConfig.yearsOfExperience,
      phone: siteConfig.phone,
      consultation_mode: "Voice / Telephone Call Only",
      location: siteConfig.location,
    },
    services: [
      {
        name: "Individual Counselling (Voice Call)",
        duration: "50 mins",
        price_inr: 1200,
        type: "primary",
      },
      {
        name: "Couple Counselling (Voice Call)",
        duration: "60 mins",
        price_inr: 1800,
        type: "primary",
      },
      {
        name: "Family Counselling (Voice Call)",
        duration: "60 mins",
        price_inr: 2200,
        type: "primary",
      },
      {
        name: "Reiki Energy Balancing (Optional)",
        duration: "45 mins",
        price_inr: 1000,
        type: "optional_secondary",
      },
    ],
    url: siteConfig.url,
  };

  return NextResponse.json(agentMetadata);
}
