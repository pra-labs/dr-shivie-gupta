"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppUrl } from "@/lib/analytics";

export function ServicesClient() {
  const { lang, t } = useLanguage();
  const s = t.services;
  const items = s.pageItems;

  return (
    <div className="py-10 sm:py-16 lg:py-20 space-y-12 sm:space-y-16">
      {/* Opening Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EDE4] border border-[#E8E0D2] text-[11px] font-semibold text-[#2D4A3E] uppercase tracking-wider">
          <span>{s.eyebrow}</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1F2924] text-balance">
          {s.title}
        </h1>
        <p className="text-xs sm:text-sm lg:text-base text-[#52635A] leading-relaxed max-w-2xl mx-auto text-balance">
          {s.subtitle}
        </p>
      </section>

      {/* Services Grid with Transparent Pricing */}
      <section id="services-list" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* 1. Individual Counselling */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#2D4A3E]/30 shadow-sm space-y-5 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9E4A2A]">
                {items.individual.meta}
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#1F2924]">
                {items.individual.title}
              </h2>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#2D4A3E] [font-variant-numeric:lining-nums]">
                {items.individual.price}{" "}
                <span className="text-xs font-sans font-normal text-[#52635A]">
                  {items.individual.unit}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                {items.individual.desc}
              </p>

              <div className="pt-2 border-t border-[#E8E0D2] space-y-2">
                <strong className="text-xs font-semibold text-[#1F2924] block uppercase tracking-wider">
                  {s.keyFocusAreas}
                </strong>
                <ul className="text-xs text-[#52635A] space-y-1.5 list-disc list-inside">
                  {items.individual.areas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/connect?service=individual"
                data-umami-event="session_cta_click"
                data-umami-event-channel="form"
                data-umami-event-lang={lang}
                className="w-full inline-flex items-center justify-center py-3 px-6 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E332A] transition-colors shadow-xs"
              >
                {items.individual.cta}
              </Link>
            </div>
          </div>

          {/* 2. Couple Counselling */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9E4A2A]">
                  {items.couple.meta}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#52635A]">
                  {s.bothPartners}
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#1F2924]">
                {items.couple.title}
              </h2>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#2D4A3E] [font-variant-numeric:lining-nums]">
                {items.couple.price}{" "}
                <span className="text-xs font-sans font-normal text-[#52635A]">
                  {items.couple.unit}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                {items.couple.desc}
              </p>

              <div className="pt-2 border-t border-[#E8E0D2] space-y-2">
                <strong className="text-xs font-semibold text-[#1F2924] block uppercase tracking-wider">
                  {s.keyFocusAreas}
                </strong>
                <ul className="text-xs text-[#52635A] space-y-1.5 list-disc list-inside">
                  {items.couple.areas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/connect?service=couple"
                data-umami-event="session_cta_click"
                data-umami-event-channel="form"
                data-umami-event-lang={lang}
                className="w-full inline-flex items-center justify-center py-3 px-6 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E332A] transition-colors shadow-xs"
              >
                {items.couple.cta}
              </Link>
            </div>
          </div>

          {/* 3. Family Counselling */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9E4A2A]">
                  {items.family.meta}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#52635A]">
                  {s.familyDialogue}
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#1F2924]">
                {items.family.title}
              </h2>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#2D4A3E] [font-variant-numeric:lining-nums]">
                {items.family.price}{" "}
                <span className="text-xs font-sans font-normal text-[#52635A]">
                  {items.family.unit}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                {items.family.desc}
              </p>

              <div className="pt-2 border-t border-[#E8E0D2] space-y-2">
                <strong className="text-xs font-semibold text-[#1F2924] block uppercase tracking-wider">
                  {s.keyFocusAreas}
                </strong>
                <ul className="text-xs text-[#52635A] space-y-1.5 list-disc list-inside">
                  {items.family.areas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/connect?service=family"
                data-umami-event="session_cta_click"
                data-umami-event-channel="form"
                data-umami-event-lang={lang}
                className="w-full inline-flex items-center justify-center py-3 px-6 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E332A] transition-colors shadow-xs"
              >
                {items.family.cta}
              </Link>
            </div>
          </div>

          {/* 4. Reiki Healing (Optional / Secondary) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#E8E0D2] shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9E4A2A]">
                  {items.reiki.meta}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F2EDE4] text-[#9E4A2A] border border-[#9E4A2A]/30 text-[10px] uppercase font-bold tracking-wider">
                  {s.optionalSecondary}
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#1F2924]">
                {items.reiki.title}
              </h2>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#2D4A3E] [font-variant-numeric:lining-nums]">
                {items.reiki.price}{" "}
                <span className="text-xs font-sans font-normal text-[#52635A]">
                  {items.reiki.unit}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                {items.reiki.desc}
              </p>

              <div className="pt-2 border-t border-[#E8E0D2] space-y-2">
                <strong className="text-xs font-semibold text-[#1F2924] block uppercase tracking-wider">
                  {s.importantClarification}
                </strong>
                <p className="text-xs text-[#52635A] leading-relaxed">
                  {items.reiki.clarification}
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/connect?service=reiki"
                data-umami-event="session_cta_click"
                data-umami-event-channel="form"
                data-umami-event-lang={lang}
                className="w-full inline-flex items-center justify-center py-3 px-6 rounded-full border-2 border-[#2D4A3E] text-[#2D4A3E] text-xs font-semibold uppercase tracking-wider hover:bg-[#2D4A3E] hover:text-white transition-colors shadow-xs"
              >
                {items.reiki.cta}
              </Link>
            </div>
          </div>
        </div>

        {/* Direct Phone/WhatsApp Booking Box */}
        <div className="mt-12 p-8 rounded-3xl bg-[#F2EDE4] border border-[#E8E0D2] text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#1F2924]">
            {s.directBoxTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#52635A] max-w-xl mx-auto leading-relaxed">
            {s.directBoxDesc}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              data-umami-event="session_cta_click"
              data-umami-event-channel="call"
              data-umami-event-lang={lang}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E332A] transition-colors shadow-sm"
            >
              <span>
                {s.callPrefix} {siteConfig.phoneDisplay}
              </span>
            </a>
            <a
              href={getWhatsAppUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="session_cta_click"
              data-umami-event-channel="whatsapp"
              data-umami-event-lang={lang}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white border border-[#2D4A3E]/30 text-[#2D4A3E] text-xs font-semibold uppercase tracking-wider hover:bg-[#FAF8F5] transition-colors shadow-xs"
            >
              <span>{s.whatsappBtn}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
