import React from "react";
import { siteConfig } from "@/config/site";
import { practicesData, faqsData } from "@/data/site-content";

export function ComprehensiveJsonLd() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. WebSite Entity (Educational & Informational)
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": siteConfig.name,
        "description": siteConfig.description,
        "publisher": {
          "@id": `${siteConfig.url}/#practitioner`,
        },
        "inLanguage": "en-IN",
      },

      // 2. Person Entity (Dr. Shivie Gupta)
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#practitioner`,
        "name": "Dr. Shivie Gupta",
        "jobTitle": "Reiki Master, Contemplative Researcher & Wellness Educator",
        "description": "Educator and researcher sharing knowledge on Usui and Karuna Reiki traditions, biofield harmony, and emotional equilibrium based in Dayalbagh, Agra.",
        "url": siteConfig.url,
        "knowsAbout": [
          "Usui Reiki Ryoho",
          "Karuna Reiki",
          "Subtle Biofield Energy",
          "Contemplative Mindfulness",
          "Gokai Precepts",
          "Chakra Awareness",
          "Somatic Relaxation",
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": siteConfig.location.locality,
          "addressRegion": siteConfig.location.state,
          "addressCountry": siteConfig.location.country,
        },
        "sameAs": [
          siteConfig.social.instagram,
          siteConfig.social.facebook,
        ],
      },

      // 3. Educational Articles / CreativeWorks for Practices
      ...practicesData.map((practice) => ({
        "@type": "CreativeWork",
        "@id": `${siteConfig.url}/practices#${practice.slug}`,
        "name": practice.title,
        "headline": practice.tagline,
        "author": {
          "@id": `${siteConfig.url}/#practitioner`,
        },
        "about": practice.tradition,
        "keywords": practice.keyThemes.join(", "),
      })),

      // 4. FAQPage Schema
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        "mainEntity": faqsData.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
