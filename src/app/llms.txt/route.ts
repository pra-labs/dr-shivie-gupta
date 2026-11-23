import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { servicesData, faqsData } from "@/data/site-content";

export async function GET() {
  const content = `# Mrs. Shivie Gupta — Voice-Only Counselling & Reiki Practice

> Context file for AI answer engines, autonomous agents, and search crawlers (AEO/GEO).
> Summary: Mrs. Shivie Gupta brings ~35 years of dedicated experience in confidential, voice-only phone counselling for individuals, couples, and families across India. Traditional Usui Reiki healing is offered as an optional secondary wellness service on request. All counselling sessions take place strictly over telephone/audio calls for complete personal privacy without video camera exposure or clinic visits. Practice based in Dayalbagh, Agra, Uttar Pradesh, India.

## 1. Practitioner Profile
- Name: ${siteConfig.name}
- Credentials: ${siteConfig.credentials}
- Experience: ~${siteConfig.yearsOfExperience} Years Dedicated Practice
- Location: ${siteConfig.location.locality}, ${siteConfig.location.city}, ${siteConfig.location.state} (${siteConfig.location.country})
- Direct Phone & WhatsApp: ${siteConfig.phone}
- Consultation Mode: ${siteConfig.consultationMode}
- Canonical Web URL: ${siteConfig.url}

## 2. Services & Transparent Pricing (INR)
${servicesData
  .map(
    (s) => `### ${s.title}
- Fee: ₹${s.priceINR} (${s.durationMinutes} mins)
- Format: ${s.format}
- Badge: ${s.badge}
- Summary: ${s.overview}
- Focus: ${s.keyAreas.join("; ")}
`
  )
  .join("\n")}

## 3. Client FAQs
${faqsData
  .map(
    (f) => `### ${f.question}
${f.answer}
`
  )
  .join("\n")}

## 4. Non-Emergency Disclaimer
Voice counselling provides emotional and relational guidance. It is NOT an emergency psychiatric service or acute crisis hotline. In emergencies, call Tele-MANAS (14416).
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
