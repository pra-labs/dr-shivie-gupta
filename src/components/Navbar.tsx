"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, PhoneCall, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E0D2] transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#2D4A3E] text-[#C5A059] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#2D4A3E] block leading-none">
                {siteConfig.name}
              </span>
              <span className="text-[11px] font-medium tracking-wider uppercase text-[#9E4A2A]">
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
              <span>{siteConfig.phoneDisplay}</span>
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={`tel:${siteConfig.phone}`}
              className="p-2.5 rounded-full bg-[#2D4A3E] text-white flex items-center justify-center"
              aria-label="Direct Phone Call"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 min-w-[44px] min-h-[44px] rounded-xl text-[#1F2924] hover:bg-[#F2EDE4] transition-colors flex items-center justify-center"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {isOpen && (
          <div className="md:hidden relative z-50 bg-[#FAF8F5] border-b border-[#E8E0D2] px-6 py-5 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm rounded-xl px-4 py-2.5 min-h-[44px] flex items-center transition-colors ${
                      active
                        ? "text-[#2D4A3E] font-bold bg-[#F2EDE4]"
                        : "font-semibold text-[#1F2924] hover:text-[#2D4A3E] hover:bg-[#F2EDE4]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="pt-2 border-t border-[#E8E0D2] flex flex-col gap-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#2D4A3E] text-white hover:bg-[#1E332A] shadow-xs"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call: {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-[1px] md:hidden animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}
    </>
  );
}
