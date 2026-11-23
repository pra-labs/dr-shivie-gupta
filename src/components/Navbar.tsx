"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCall, Sparkles, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services & Pricing", href: "/services" },
    { name: "FAQs", href: "/guide" },
    { name: "Request Session", href: "/connect" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E0D2] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#2D4A3E] text-[#C5A059] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2D4A3E] block leading-none">
              {siteConfig.name}
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-[#9E4A2A] hidden sm:block whitespace-nowrap">
              Counselling &amp; Healing (~35 Yrs Exp)
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors relative py-1 ${
                  active
                    ? "text-[#2D4A3E] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#2D4A3E]"
                    : "text-[#52635A] hover:text-[#2D4A3E] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2D4A3E] hover:after:w-full after:transition-all"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold tracking-wider hover:bg-[#1E332A] transition-all shadow-xs"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Direct Call</span>
          </a>
        </nav>

        {/* Mobile Top Header: Compact Availability & WhatsApp */}
        <div className="md:hidden flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#2D4A3E]/10 border border-[#2D4A3E]/20 text-[#2D4A3E] text-[10px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E] animate-pulse" />
            <span>Available</span>
          </div>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 min-w-[44px] min-h-[44px] rounded-full bg-[#2D4A3E] text-white flex items-center justify-center hover:bg-[#1E332A] transition-colors shadow-xs active:scale-95"
            aria-label="Direct WhatsApp Message"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
