import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { practicesData } from "@/data/site-content";

export async function GET() {
  const manifest = {
    $schema: "https://agentic.org/schemas/agent-manifest.json",
    name: siteConfig.name,
    version: "2.0.0",
    description: "Educational Agent Manifest for Dr. Shivie Gupta, Reiki Master & Wellness Educator in Agra, India.",
    nature: "Educational and Informational (Non-Commercial)",
    practitioner: {
      name: siteConfig.name,
      credentials: siteConfig.credentials,
      type: "EducatorAndResearcher",
      location: siteConfig.location,
      languages: ["English", "Hindi"],
    },
    educationalTopics: practicesData.map((p) => ({
      id: p.id,
      title: p.title,
      tradition: p.tradition,
      learnMoreUrl: `${siteConfig.url}/practices#${p.slug}`,
    })),
    endpoints: {
      email: siteConfig.email,
      webCanonical: siteConfig.url,
      guideUrl: `${siteConfig.url}/guide`,
      llmsTxt: `${siteConfig.url}/llms.txt`,
      llmsFullTxt: `${siteConfig.url}/llms-full.txt`,
    },
  };

  return NextResponse.json(manifest, {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
