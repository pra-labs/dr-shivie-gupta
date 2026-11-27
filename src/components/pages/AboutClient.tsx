"use client";

import Link from "next/link";
import { Award, PhoneCall, ShieldCheck, ArrowRight, Clock, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";

export function AboutClient() {
  const { lang, t } = useLanguage();
  const a = t.about;

  return (
    <div className="py-10 sm:py-16 lg:py-20 space-y-14 sm:space-y-20">
      {/* 1. Hero Bio Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EDE4] border border-[#E8E0D2] text-[11px] sm:text-xs font-semibold text-[#2D4A3E] uppercase tracking-wider">
          <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>{a.badge}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1F2924] leading-[1.15] text-balance">
          {a.title}
        </h1>

        <div className="prose prose-stone text-xs sm:text-sm lg:text-base text-[#52635A] leading-relaxed space-y-4">
          <p>{a.p1}</p>
          <p>{a.p2}</p>
          <p>{a.p3}</p>
        </div>

        {/* Action CTAs */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#2D4A3E] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#1E332A] transition-colors shadow-sm"
          >
            <span>{a.ctaServices}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`tel:${siteConfig.phone}`}
            data-umami-event="session_cta_click"
            data-umami-event-channel="call"
            data-umami-event-lang={lang}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#2D4A3E] border-2 border-[#2D4A3E]/30 text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#F2EDE4] transition-colors shadow-xs"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{a.ctaCall}</span>
          </a>
        </div>
      </section>

      {/* 2. Three Pillars of Practice */}
      <section className="bg-[#F2EDE4]/60 py-14 sm:py-16 border-y border-[#E8E0D2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-2 sm:space-y-3 mb-10 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#9E4A2A]">
              {a.philosophyEyebrow}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1F2924]">
              {a.philosophyTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E0D2] space-y-3 shadow-xs">
              <PhoneCall className="w-7 h-7 sm:w-8 sm:h-8 text-[#2D4A3E]" />
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1F2924]">
                {a.pillar1Title}
              </h3>
              <p className="text-xs text-[#52635A] leading-relaxed">
                {a.pillar1Desc}
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E0D2] space-y-3 shadow-xs">
              <Award className="w-7 h-7 sm:w-8 sm:h-8 text-[#C5A059]" />
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1F2924]">
                {a.pillar2Title}
              </h3>
              <p className="text-xs text-[#52635A] leading-relaxed">
                {a.pillar2Desc}
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E0D2] space-y-3 shadow-xs">
              <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-[#9E4A2A]" />
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1F2924]">
                {a.pillar3Title}
              </h3>
              <p className="text-xs text-[#52635A] leading-relaxed">
                {a.pillar3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Boundaries & Disclaimers */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E8E0D2] space-y-4">
          <div className="flex items-center gap-2 text-[#9E4A2A] font-serif text-lg font-bold">
            <ShieldCheck className="w-5 h-5" />
            <span>{a.boundaryTitle}</span>
          </div>
          <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
            {a.boundaryP1}
          </p>
          <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
            {a.boundaryP2Before}
            <strong>
              <a href="tel:14416" className="inline-block w-fit underline hover:text-[#2D4A3E]">
                14416
              </a>
              {" "}/{" "}
              <a href="tel:18008914416" className="inline-block w-fit underline hover:text-[#2D4A3E]">
                1800 891 4416
              </a>
            </strong>
            {a.boundaryP2Mid}
            <strong>
              <a href="tel:9999666555" className="inline-block w-fit underline hover:text-[#2D4A3E]">
                9999 666 555
              </a>
            </strong>
            {a.boundaryP2After}
          </p>
        </div>
      </section>
    </div>
  );
}
