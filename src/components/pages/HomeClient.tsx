"use client";

import Link from "next/link";
import { PhoneCall, Clock, CheckCircle2, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SessionCardsCarousel } from "@/components/SessionCardsCarousel";
import { BreathingGuide } from "@/components/wellness/BreathingGuide";
import { ThoughtUnloader } from "@/components/wellness/ThoughtUnloader";
import { BotanicalLeafMotif, CalmWavesMotif, RelationshipArcsMotif } from "@/components/motifs/SanctuaryMotifs";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppUrl } from "@/lib/analytics";

export function HomeClient() {
  const { lang, t } = useLanguage();
  const h = t.home;

  return (
    <div className="space-y-12 sm:space-y-20 lg:space-y-24 pb-20">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-6 sm:pt-12 lg:pt-16 pb-4 sm:pb-6">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-[#2D4A3E]/5 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="absolute -top-6 -left-8 text-[#2D4A3E] opacity-20 hidden md:block">
          <BotanicalLeafMotif size={130} />
        </div>
        <div className="absolute top-12 -right-8 text-[#9E4A2A] opacity-15 hidden md:block rotate-45">
          <RelationshipArcsMotif size={140} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#F2EDE4] border border-[#E8E0D2] text-[#2D4A3E] text-[11px] sm:text-xs font-medium tracking-wide shadow-2xs whitespace-normal">
            <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
            <span>{h.heroBadge}</span>
          </div>

          {/* Editorial Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.12] text-[#1F2924] text-balance">
            {h.heroTitlePrefix}{" "}
            <span className="italic font-serif text-[#2D4A3E] font-medium">
              {h.heroTitleHighlight1}
            </span>{" "}
            {h.heroTitleMid}{" "}
            <span className="italic font-serif text-[#9E4A2A]">
              {h.heroTitleHighlight2}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-[#52635A] max-w-2xl mx-auto leading-relaxed font-normal text-balance">
            {h.heroSubtitleBefore ? `${h.heroSubtitleBefore} ` : ""}
            <strong>{lang === "hi" ? "डॉ. शिवी गुप्ता" : "Dr. Shivie Gupta"}</strong>
            {lang === "en" ? "." : ""} {h.heroSubtitleAfter}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/connect"
              data-umami-event="session_cta_click"
              data-umami-event-channel="form"
              data-umami-event-lang={lang}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#2D4A3E] text-white font-medium text-xs sm:text-sm shadow-md hover:bg-[#1E332A] transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{h.ctaRequestSession}</span>
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              data-umami-event="session_cta_click"
              data-umami-event-channel="call"
              data-umami-event-lang={lang}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#2D4A3E]/30 text-[#2D4A3E] font-medium text-xs sm:text-sm hover:bg-[#FAF8F5] transition-all"
            >
              <span>{h.ctaCallHours}</span>
            </a>
          </div>

          {/* Reassuring Pillars Strip */}
          <div className="pt-6 sm:pt-8 border-t border-[#E8E0D2]/80 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-2 sm:gap-6 text-center">
              <div className="px-2 py-3 sm:p-4 rounded-2xl bg-white/60 border border-[#E8E0D2]/80 shadow-2xs flex flex-col justify-center min-h-[72px] sm:min-h-0">
                <div className="text-xs sm:text-lg font-serif font-semibold text-[#2D4A3E] whitespace-nowrap">
                  {h.pillars.yearsTitle}
                </div>
                <div className="text-[10px] sm:text-xs text-[#52635A] mt-0.5 leading-tight">
                  {h.pillars.yearsSub}
                </div>
              </div>
              <div className="px-2 py-3 sm:p-4 rounded-2xl bg-white/60 border border-[#E8E0D2]/80 shadow-2xs flex flex-col justify-center min-h-[72px] sm:min-h-0">
                <div className="text-xs sm:text-lg font-serif font-semibold text-[#2D4A3E] whitespace-nowrap">
                  {h.pillars.audioTitle}
                </div>
                <div className="text-[10px] sm:text-xs text-[#52635A] mt-0.5 leading-tight">
                  {h.pillars.audioSub}
                </div>
              </div>
              <div className="px-2 py-3 sm:p-4 rounded-2xl bg-white/60 border border-[#E8E0D2]/80 shadow-2xs flex flex-col justify-center min-h-[72px] sm:min-h-0">
                <div className="text-xs sm:text-lg font-serif font-semibold text-[#2D4A3E] whitespace-nowrap">
                  <span className="sm:hidden">{h.pillars.feesTitleMobile}</span>
                  <span className="hidden sm:inline">{h.pillars.feesTitleDesktop}</span>
                </div>
                <div className="text-[10px] sm:text-xs text-[#52635A] mt-0.5 leading-tight">
                  {h.pillars.feesSub}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Wave Divider */}
      <div className="text-[#E8E0D2] -my-4 sm:-my-6 max-w-5xl mx-auto px-4 opacity-75">
        <CalmWavesMotif />
      </div>

      {/* 2. Core Voice Counselling Offerings & Pricing */}
      <section className="bg-[#F2EDE4]/60 py-14 sm:py-20 border-y border-[#E8E0D2]/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9E4A2A]">
              {h.offeringsEyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2924]">
              {h.offeringsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
              {h.offeringsSubtitle}
            </p>
          </div>

          <SessionCardsCarousel />

          {/* Secondary Reiki Callout */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E0D2] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#1F2924]">
                  {h.reikiCalloutTitle}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#52635A]">
                {h.reikiCalloutDesc}
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D4A3E] hover:underline shrink-0"
            >
              <span>{h.reikiCalloutLink}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. How a Voice Session Unfolds */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#9E4A2A]">
            {h.journeyEyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2924]">
            {h.journeyTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
            {h.journeySubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8E0D2] shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-full bg-[#F2EDE4] text-[#2D4A3E] font-serif font-bold text-sm flex items-center justify-center">
              1
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1F2924]">
              {h.step1Title}
            </h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              {h.step1DescBefore}{" "}
              <Link
                href="/connect"
                data-umami-event="session_cta_click"
                data-umami-event-channel="form"
                data-umami-event-lang={lang}
                className="text-[#2D4A3E] font-semibold underline"
              >
                {h.step1DescLink}
              </Link>{" "}
              {h.step1DescAfter}
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8E0D2] shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-full bg-[#F2EDE4] text-[#2D4A3E] font-serif font-bold text-sm flex items-center justify-center">
              2
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1F2924]">
              {h.step2Title}
            </h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              {h.step2Desc}
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8E0D2] shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-full bg-[#F2EDE4] text-[#2D4A3E] font-serif font-bold text-sm flex items-center justify-center">
              3
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1F2924]">
              {h.step3Title}
            </h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              {h.step3Desc}
            </p>
          </div>
        </div>

        {/* What to Expect Callout */}
        <div className="mt-8 p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E0D2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2D4A3E]">
              {h.firstCallEyebrow}
            </span>
            <p className="text-xs text-[#52635A] leading-relaxed">
              {h.firstCallDesc}
            </p>
          </div>
          <Link
            href="/guide"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D4A3E] hover:underline shrink-0"
          >
            <span>{h.firstCallLink}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 4. Gentle Wellness Tools */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-medium uppercase tracking-wider text-[#9E4A2A]">
            {h.wellnessEyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2924]">
            {h.wellnessTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
            {h.wellnessSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <BreathingGuide />
          </div>
          <div className="lg:col-span-7">
            <ThoughtUnloader />
          </div>
        </div>
      </section>

      {/* 5. Why Voice-Only Phone Calls */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9E4A2A]">
              {h.whyEyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2924]">
              {h.whyTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
              {h.whyDesc}
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#1F2924]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                <span>{h.whyBullet1}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                <span>{h.whyBullet2}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                <span>{h.whyBullet3}</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-[#F2EDE4] border border-[#E8E0D2] space-y-4 text-center sm:text-left">
            <h3 className="font-serif text-xl font-bold text-[#2D4A3E]">
              {h.connectCardTitle}
            </h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              {h.connectCardDesc}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                data-umami-event="session_cta_click"
                data-umami-event-channel="call"
                data-umami-event-lang={lang}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E332A] shadow-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={getWhatsAppUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                data-umami-event="session_cta_click"
                data-umami-event-channel="whatsapp"
                data-umami-event-lang={lang}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-[#2D4A3E]/30 text-[#2D4A3E] text-xs font-semibold uppercase tracking-wider hover:bg-[#FAF8F5]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>{h.whatsappLabel}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
