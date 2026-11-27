import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SamvadUrja — Dr. Shivie Gupta | Voice-Only Counselling & Reiki",
    short_name: "SamvadUrja",
    description:
      "SamvadUrja: Confidential voice-only counselling and optional Reiki healing by Dr. Shivie Gupta (~35 years experience, Dayalbagh, Agra).",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F5",
    theme_color: "#2D4A3E",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
