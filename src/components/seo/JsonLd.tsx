import React from "react";
import { siteConfig } from "@/config/site";
import { servicesData, faqsData } from "@/data/site-content";

export function ComprehensiveJsonLd() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. WebSite Entity
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
        "name": siteConfig.name,
        "jobTitle": "Counsellor & Reiki Practitioner",
        "description": `Counsellor with ~${siteConfig.yearsOfExperience} years of experience offering voice-only counselling for individuals, couples, and families, plus optional Reiki healing in Dayalbagh, Agra.`,
        "url": siteConfig.url,
        "telephone": siteConfig.phone,
        "email": siteConfig.email,
        "knowsAbout": [
          "Individual Voice Counselling",
          "Couple & Relationship Guidance",
          "Family & Intergenerational Counselling",
          "Stress & Anxiety Management",
          "Traditional Usui Reiki Healing",
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": siteConfig.location.locality,
          "addressRegion": siteConfig.location.state,
          "addressCountry": siteConfig.location.country,
        },
      },

      // 3. Service Offerings
      ...servicesData.map((svc) => ({
        "@type": "Service",
        "@id": `${siteConfig.url}/services#${svc.slug}`,
        "name": svc.title,
        "description": svc.overview,
        "provider": {
          "@id": `${siteConfig.url}/#practitioner`,
        },
        "offers": {
          "@type": "Offer",
          "price": svc.priceINR,
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
        },
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
