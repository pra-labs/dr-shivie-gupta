import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ComprehensiveJsonLd } from "@/components/seo/JsonLd";
import { SuggestionAssistant } from "@/components/SuggestionAssistant";
import { MobileNavigationDock } from "@/components/MobileNavigationDock";
import { BookingBottomSheet } from "@/components/BookingBottomSheet";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2D4A3E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s`,
  },
  description: siteConfig.description,
  keywords: [
    "Voice counselling India",
    "Dr Shivie Gupta",
    "Audio phone counselling",
    "Individual counselling phone call",
    "Couple counselling Agra",
    "Relationship counselling phone call",
    "Family guidance India",
    "Reiki healing Agra",
    "Confidential voice therapy"
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1F2924] selection:bg-[#2D4A3E] selection:text-white pb-20 md:pb-0">
        <ComprehensiveJsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <SuggestionAssistant />
        <MobileNavigationDock />
        <BookingBottomSheet />
      </body>
    </html>
  );
}
