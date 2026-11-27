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
        "name": siteConfig.brandName,
        "alternateName": siteConfig.brandNameHi,
        "description": siteConfig.description,
        "publisher": {
          "@id": `${siteConfig.url}/#organization`,
        },
        "inLanguage": ["en-IN", "hi-IN"],
      },

      // 2. ProfessionalService Entity (SamvadUrja)
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#organization`,
        "name": siteConfig.brandName,
        "alternateName": siteConfig.brandNameHi,
        "url": siteConfig.url,
        "description": siteConfig.description,
        "telephone": siteConfig.phone,
        "email": siteConfig.email,
        "founder": {
          "@id": `${siteConfig.url}/#practitioner`,
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": siteConfig.location.locality,
          "addressRegion": siteConfig.location.state,
          "addressCountry": siteConfig.location.country,
        },
      },

      // 3. Person Entity (Dr. Shivie Gupta)
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#practitioner`,
        "name": siteConfig.practitionerName,
        "jobTitle": "Founder, Counsellor & Reiki Practitioner",
        "worksFor": {
          "@id": `${siteConfig.url}/#organization`,
        },
        "description": `Founder of SamvadUrja with ~${siteConfig.yearsOfExperience} years of experience offering voice-only counselling for individuals, couples, and families, plus optional Reiki healing in Dayalbagh, Agra.`,
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

      // 4. Service Offerings
      ...servicesData.map((svc) => ({
        "@type": "Service",
        "@id": `${siteConfig.url}/services#${svc.slug}`,
        "name": svc.title,
        "description": svc.overview,
        "provider": {
          "@id": `${siteConfig.url}/#organization`,
        },
        "offers": {
          "@type": "Offer",
          "price": svc.priceINR,
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
        },
      })),

      // 5. FAQPage Schema
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
