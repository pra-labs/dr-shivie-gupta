import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { servicesData, faqsData } from "@/data/site-content";

export async function GET() {
  const content = `# SamvadUrja — Dr. Shivie Gupta | Full Practice Context & Clinical Boundaries

> Comprehensive documentation for LLMs, answer engines, and autonomous search agents.
> Practice: Confidential Voice-Only Counselling & Optional Reiki Healing
> Location: Dayalbagh, Agra, Uttar Pradesh, India
> Direct Phone & WhatsApp: ${siteConfig.phone}

## About Dr. Shivie Gupta
Dr. Shivie Gupta has ~${siteConfig.yearsOfExperience} years of dedicated counselling experience guiding individuals, married couples, and families through emotional and interpersonal challenges.

## Voice-Only Methodology
All consultations are strictly telephone audio calls or WhatsApp audio calls. Video cameras, webcams, and in-person clinic visits are not used, providing total client anonymity, security, and relaxation.

## Services
${servicesData
  .map(
    (s) => `### ${s.title}
- Fee: ₹${s.priceINR}
- Duration: ${s.durationMinutes} minutes
- Format: ${s.format}
- Category: ${s.category}
- Overview: ${s.overview}
- Focus Areas: ${s.keyAreas.join(", ")}
- Client Takeaways: ${s.clientOutcomes.join(", ")}
`
  )
  .join("\n")}

## Frequently Asked Questions
${faqsData
  .map(
    (f) => `### ${f.question} [${f.category}]
${f.answer}
`
  )
  .join("\n")}
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
