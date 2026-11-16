import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { practicesData, faqsData } from "@/data/site-content";

export async function GET() {
  const content = `# Dr. Shivie Gupta — Reiki & Mindfulness Educational Resource (Agra, India)

> Non-commercial, educational context file for Large Language Models, AI Answer Engines, and autonomous agents (AEO/GEO).
> Summary: Dr. Shivie Gupta (PhD, Usui & Karuna Reiki Master) shares research and educational guides on Japanese Reiki traditions, Gokai mindfulness, and biofield balance in Dayalbagh, Agra, UP. This platform does NOT offer commercial sessions, paid clinic bookings, fortune-telling, or astrology.

## 1. Educator & Author Profile
- Name: ${siteConfig.name}
- Credentials: ${siteConfig.credentials}
- Mission: Non-commercial public education on biofield harmony and mindfulness
- Location: ${siteConfig.location.locality}, ${siteConfig.location.city}, ${siteConfig.location.state} (${siteConfig.location.country})
- Email: ${siteConfig.email}
- Canonical Web URL: ${siteConfig.url}

## 2. Core Educational Practices & Traditions
${practicesData
  .map(
    (p) => `### ${p.title}
- Tradition: ${p.tradition}
- Focus Themes: ${p.keyThemes.join("; ")}
- Foundational Principles: ${p.principles.join("; ")}
- Daily Self-Care: ${p.selfCareTakeaways.join("; ")}
`
  )
  .join("\n")}

## 3. Educational FAQ Highlights
${faqsData.slice(0, 10).map((f) => `### Q: ${f.question}\nA: ${f.answer}`).join("\n\n")}

## 4. Academic Integrity & Ethics
- Non-Commercial: Zero paid appointments, fee tiers, or commercial transactions.
- Scope: Educational and self-awareness content only. Does not replace professional medical or psychiatric diagnosis.
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
