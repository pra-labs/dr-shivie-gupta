"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Desktop navigation links - Guide is handled exclusively by the prominent CTA pill
  const desktopNavLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Practices", href: "/practices" },
    { name: "Connect", href: "/connect" },
  ];

  // Mobile drawer links
  const mobileNavLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Practices", href: "/practices" },
    { name: "Connect", href: "/connect" },
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
              <span className="text-[11px] font-medium tracking-wider uppercase text-[#B86B4B]">
                Reiki &amp; Wellness Education
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {desktopNavLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    active
                      ? "text-[#2D4A3E] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#2D4A3E]"
                      : "text-[#52635A] hover:text-[#2D4A3E] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2D4A3E] hover:after:w-full after:transition-all"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/guide"
              className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-xs ${
                pathname === "/guide"
                  ? "bg-[#2D4A3E] text-white"
                  : "border border-[#2D4A3E] text-[#2D4A3E] hover:bg-[#2D4A3E] hover:text-white"
              }`}
            >
              Start Guide
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
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
              {mobileNavLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base rounded-xl px-4 py-2.5 min-h-[44px] flex items-center transition-colors ${
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
            <div className="pt-2 border-t border-[#E8E0D2]">
              <Link
                href="/guide"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center py-3 px-4 min-h-[46px] rounded-full text-xs font-semibold uppercase tracking-wider border-2 border-[#2D4A3E] bg-[#2D4A3E] text-white hover:bg-[#1E332A] transition-colors shadow-xs"
              >
                Start Beginner&apos;s Guide
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop Dimming when Mobile Drawer is Open */}
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
