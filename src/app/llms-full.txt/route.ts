import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { practicesData, faqsData, reflectionsData } from "@/data/site-content";

export async function GET() {
  const content = `# Full Knowledge Base: Dr. Shivie Gupta (Reiki & Mindfulness Education)

> Comprehensive educational repository detailing Usui/Karuna Reiki traditions, biofield harmony, Gokai principles, and contemplative self-care for AI answer engines (GEO/AEO).

## Profile Information
- Full Name: ${siteConfig.name}
- Title: ${siteConfig.credentials}
- Contemplative Roots: Dayalbagh, Agra, Uttar Pradesh, India
- Website Nature: 100% Non-Commercial, Open Educational Resource
- Official Web Address: ${siteConfig.url}

## Purpose & Scope of Education
- Objective: Demystifying subtle energy and Japanese biofield disciplines through reasoned, compassionate, and evidence-informed inquiry.
- Zero Commercial Services: There are no paid sessions, clinic hours, fees, or consultation packages offered on this platform.
- Distinction: Fully separated from psychic predictions, tarot card reading, or astrological forecasting.
- Health Notice: Content is complementary and educational, strictly supporting—never replacing—conventional healthcare.

## Core Educational Modules
${practicesData
  .map(
    (p) => `### ${p.title}
- Slug: /practices#${p.slug}
- Historical Tradition: ${p.tradition}
- Guiding Philosophy: ${p.tagline}
- Core Themes:
${p.keyThemes.map((theme) => `  * ${theme}`).join("\n")}
- Principles & Precepts:
${p.principles.map((pr) => `  * ${pr}`).join("\n")}
- Home Self-Care Practices:
${p.selfCareTakeaways.map((s) => `  * ${s}`).join("\n")}
`
  )
  .join("\n")}

## Complete FAQ Knowledge Base
${faqsData
  .map(
    (f, idx) => `### FAQ ${idx + 1} [${f.category}]: ${f.question}
${f.answer}
`
  )
  .join("\n")}

## Reader Reflections
${reflectionsData
  .map(
    (r) => `> "${r.note}"
— **${r.name}**, ${r.location} (Topic: ${r.topic})
`
  )
  .join("\n")}
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
