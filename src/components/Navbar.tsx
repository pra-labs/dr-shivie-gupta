"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { siteConfig, getWhatsAppBookingUrl } from "@/config/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Beginner's Guide", href: "/guide" },
    { name: "Contact & Visit", href: "/contact" },
  ];

  return (
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
            <span className="text-[11px] font-medium tracking-wider uppercase text-[#B86B4B]">
              Reiki Master • Agra
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#1F2924] hover:text-[#2D4A3E] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2D4A3E] hover:after:w-full after:transition-all"
            >
              {link.name}
            </Link>
          ))}
          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#2D4A3E] text-white hover:bg-[#1E332A] transition-all shadow-sm hover:shadow"
          >
            Consultation
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-[#1F2924] hover:bg-[#F2EDE4] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8E0D2] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-[#1F2924] hover:text-[#2D4A3E] py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-[#E8E0D2]">
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 px-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#2D4A3E] text-white hover:bg-[#1E332A]"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
