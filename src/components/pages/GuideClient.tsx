"use client";

import { FaqAccordion } from "@/components/FaqAccordion";
import { useLanguage } from "@/context/LanguageContext";

export function GuideClient() {
  const { t } = useLanguage();
  const g = t.guide;

  return (
    <div className="py-10 sm:py-16 lg:py-20 space-y-12 sm:space-y-16">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 pb-2 sm:pb-4">
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#9E4A2A]">
          {g.eyebrow}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1F2924] text-balance">
          {g.title}
        </h1>
        <p className="text-xs sm:text-sm lg:text-base text-[#52635A] leading-relaxed max-w-2xl mx-auto text-balance">
          {g.subtitle}
        </p>
      </section>

      {/* 3 Step Walkthrough */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E8E0D2] space-y-2 shadow-xs">
            <span className="text-xs font-bold text-[#9E4A2A] uppercase tracking-wider">
              {g.step1Label}
            </span>
            <h3 className="font-serif text-lg font-bold text-[#1F2924]">
              {g.step1Title}
            </h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              {g.step1Desc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E0D2] space-y-2 shadow-xs">
            <span className="text-xs font-bold text-[#2D4A3E] uppercase tracking-wider">
              {g.step2Label}
            </span>
            <h3 className="font-serif text-lg font-bold text-[#1F2924]">
              {g.step2Title}
            </h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              {g.step2Desc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E0D2] space-y-2 shadow-xs">
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
              {g.step3Label}
            </span>
            <h3 className="font-serif text-lg font-bold text-[#1F2924]">
              {g.step3Title}
            </h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              {g.step3Desc}
            </p>
          </div>
        </div>

        {/* What to Expect Subsection */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#E8E0D2] space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9E4A2A] bg-[#F2EDE4] px-2.5 py-1 rounded-full border border-[#E8E0D2]">
              {g.firstCallBadge}
            </span>
            <h3 className="font-serif text-xl font-bold text-[#1F2924]">
              {g.firstCallTitle}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
            {g.firstCallDesc}
          </p>
        </div>
      </section>

      {/* Interactive FAQ Search & Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion />
      </section>
    </div>
  );
}
