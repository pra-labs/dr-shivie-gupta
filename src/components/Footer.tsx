"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MapPin, Mail, PhoneCall, Clock, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppUrl } from "@/lib/analytics";

export function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-[#1E332A] text-[#F2EDE4] pt-16 pb-12 border-t border-[#2D4A3E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#2D4A3E]/70">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div>
              <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                <span>{t.footer.brandTitle}</span>
              </h3>
              <span className="text-xs font-medium text-[#C5A059] block mt-0.5">
                {t.footer.brandPractitioner}
              </span>
            </div>
            <p className="text-xs text-[#FAF8F5]/80 leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="pt-1 text-xs text-[#C5A059] font-medium">
              {t.footer.audioBadge}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C5A059]">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t.footer.navHome}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {t.footer.navAbout}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t.footer.navServices}
                </Link>
              </li>
              <li>
                <Link href="/guide" className="hover:text-white transition-colors">
                  {t.footer.navFaqs}
                </Link>
              </li>
              <li>
                <Link
                  href="/connect"
                  data-umami-event="session_cta_click"
                  data-umami-event-channel="form"
                  data-umami-event-lang={lang}
                  className="hover:text-white transition-colors"
                >
                  {t.footer.navConnect}
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Principles */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C5A059]">
              {t.footer.offeringsTitle}
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/80">
              <li>{t.footer.offering1}</li>
              <li>{t.footer.offering2}</li>
              <li>{t.footer.offering3}</li>
              <li>{t.footer.offering4}</li>
              <li>{t.footer.offering5}</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C5A059]">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-2.5 text-xs text-[#FAF8F5]/80">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  data-umami-event="session_cta_click"
                  data-umami-event-channel="call"
                  data-umami-event-lang={lang}
                  className="hover:text-white font-medium text-sm"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={getWhatsAppUrl(lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event="session_cta_click"
                  data-umami-event-channel="whatsapp"
                  data-umami-event-lang={lang}
                  className="hover:text-white underline"
                >
                  {t.footer.whatsappLink}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#B86B4B] shrink-0 mt-0.5" />
                <span>{t.footer.hours}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B86B4B] shrink-0 mt-0.5" />
                <span>{t.footer.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 text-center md:flex md:justify-between items-center text-xs text-[#FAF8F5]/60 space-y-4 md:space-y-0">
          <p className="max-w-2xl text-left">
            <span className="font-semibold text-[#FAF8F5]/80">{t.footer.emergencyStrong}</span>{" "}
            {t.footer.emergencyTextBefore}
            <a href="tel:14416" className="underline hover:text-white font-medium">
              14416
            </a>
            {t.footer.emergencyTextAfter}
          </p>
          <div className="flex items-center justify-center gap-1">
            <span>{t.footer.copyright}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
