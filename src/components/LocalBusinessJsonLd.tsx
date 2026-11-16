import React from "react";
import { siteConfig } from "@/config/site";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["HealthAndBeautyBusiness", "MedicalBusiness", "ProfessionalService"],
    "name": siteConfig.name,
    "image": `${siteConfig.url}/images/og-image.png`,
    "description": siteConfig.description,
    "@id": siteConfig.url,
    "url": siteConfig.url,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.state,
      "postalCode": siteConfig.address.postalCode,
      "addressCountry": siteConfig.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.geo.latitude,
      "longitude": siteConfig.geo.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Agra"
      },
      {
        "@type": "State",
        "name": "Uttar Pradesh"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Dr. Shivie Gupta",
      "jobTitle": "Reiki Master & Emotional Counselor",
      "knowsAbout": [
        "Usui Reiki Ryoho",
        "Karuna Reiki",
        "Chakra Balancing",
        "Aura Cleansing",
        "Emotional Counseling",
        "Stress Management",
        "Mind-Body Wellness"
      ]
    },
    "sameAs": [
      siteConfig.social.instagram,
      siteConfig.social.facebook
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
