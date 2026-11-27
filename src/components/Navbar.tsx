"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCall, Sparkles, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppUrl } from "@/lib/analytics";

function LanguagePillToggle({ source }: { source: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className="inline-flex items-center rounded-full bg-[#F2EDE4] border border-[#E8E0D2] p-0.5 text-[11px] font-semibold shadow-2xs shrink-0"
    >
      <button
        type="button"
        onClick={() => setLang("en", source)}
        aria-pressed={lang === "en"}
        className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
          lang === "en"
            ? "bg-[#2D4A3E] text-white shadow-2xs"
            : "text-[#52635A] hover:text-[#2D4A3E]"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("hi", source)}
        aria-pressed={lang === "hi"}
        className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
          lang === "hi"
            ? "bg-[#2D4A3E] text-white shadow-2xs"
            : "text-[#52635A] hover:text-[#2D4A3E]"
        }`}
      >
        हिन्दी
      </button>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const { lang, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.faqs, href: "/guide" },
    { name: t.nav.requestSession, href: "/connect" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E0D2] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-20 flex items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#2D4A3E] text-[#C5A059] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <div className="min-w-0">
            <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#2D4A3E] block leading-none truncate">
              {t.nav.brandName}
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-[#9E4A2A] hidden sm:block whitespace-nowrap">
              {t.nav.brandSubtitle}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                data-umami-event={link.href === "/connect" ? "session_cta_click" : undefined}
                data-umami-event-channel={link.href === "/connect" ? "form" : undefined}
                data-umami-event-lang={link.href === "/connect" ? lang : undefined}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors relative py-1 whitespace-nowrap ${
                  active
                    ? "text-[#2D4A3E] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#2D4A3E]"
                    : "text-[#52635A] hover:text-[#2D4A3E] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2D4A3E] hover:after:w-full after:transition-all"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="flex items-center gap-2.5">
            <LanguagePillToggle source="header" />
            <a
              href={`tel:${siteConfig.phone}`}
              data-umami-event="session_cta_click"
              data-umami-event-channel="call"
              data-umami-event-lang={lang}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold tracking-wider hover:bg-[#1E332A] transition-all shadow-xs whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{t.nav.directCall}</span>
            </a>
          </div>
        </nav>

        {/* Mobile Top Header: Language Toggle, Compact Availability & WhatsApp */}
        <div className="md:hidden flex items-center gap-1.5 shrink-0">
          <LanguagePillToggle source="mobile_header" />
          <div className="hidden xs:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#2D4A3E]/10 border border-[#2D4A3E]/20 text-[#2D4A3E] text-[10px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E] animate-pulse" />
            <span>{t.nav.available}</span>
          </div>
          <a
            href={getWhatsAppUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="session_cta_click"
            data-umami-event-channel="whatsapp"
            data-umami-event-lang={lang}
            className="p-2 min-w-[40px] min-h-[40px] rounded-full bg-[#2D4A3E] text-white flex items-center justify-center hover:bg-[#1E332A] transition-colors shadow-xs active:scale-95"
            aria-label={t.nav.whatsappAria}
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
