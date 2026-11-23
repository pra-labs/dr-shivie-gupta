import Link from "next/link";
import { PhoneCall, Clock, CheckCircle2, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SessionCardsCarousel } from "@/components/SessionCardsCarousel";

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-20 lg:space-y-24 pb-20">
      {/* 1. Hero Section - Refined Full-Width Editorial Layout (No Image Card) */}
      <section className="relative overflow-hidden pt-6 sm:pt-12 lg:pt-16 pb-4 sm:pb-6">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-[#2D4A3E]/5 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#F2EDE4] border border-[#E8E0D2] text-[#2D4A3E] text-[11px] sm:text-xs font-semibold tracking-wide uppercase shadow-2xs whitespace-normal sm:whitespace-nowrap">
            <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
            <span>~35 Years Experience • Dayalbagh, Agra</span>
          </div>

          {/* Editorial Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.12] text-[#1F2924] text-balance">
            Confidential <span className="italic font-serif text-[#2D4A3E] font-medium">Voice Counselling</span> for{" "}
            <span className="italic font-serif text-[#9E4A2A]">Inner Peace &amp; Clarity</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-[#52635A] max-w-2xl mx-auto leading-relaxed font-normal text-balance">
            Empathetic, private telephone sessions by <strong>Dr. Shivie Gupta</strong>. Thoughtful guidance for personal anxiety, couple relationships, and family harmony—conducted strictly over phone call with optional Reiki healing on request.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/connect"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#2D4A3E] text-white font-medium text-xs sm:text-sm shadow-md hover:bg-[#1E332A] transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Request a Voice Session</span>
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#2D4A3E]/30 text-[#2D4A3E] font-medium text-xs sm:text-sm hover:bg-[#FAF8F5] transition-all"
            >
              <span>Call During Practice Hours</span>
            </a>
          </div>

          {/* 3-Column Key Guarantees Strip */}
          <div className="pt-6 sm:pt-8 border-t border-[#E8E0D2]/80 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-1.5 sm:gap-6 text-center">
              <div className="px-1.5 py-2.5 sm:p-4 rounded-2xl bg-white/70 border border-[#E8E0D2] shadow-2xs flex flex-col justify-center min-h-[72px] sm:min-h-0">
                <div className="text-[13px] sm:text-2xl font-serif font-bold text-[#2D4A3E] whitespace-nowrap">
                  ~35 Years
                </div>
                <div className="text-[9px] sm:text-xs text-[#52635A] mt-0.5 leading-tight">
                  Counselling
                </div>
              </div>
              <div className="px-1.5 py-2.5 sm:p-4 rounded-2xl bg-white/70 border border-[#E8E0D2] shadow-2xs flex flex-col justify-center min-h-[72px] sm:min-h-0">
                <div className="text-[13px] sm:text-2xl font-serif font-bold text-[#2D4A3E] whitespace-nowrap">
                  Audio Calls
                </div>
                <div className="text-[9px] sm:text-xs text-[#52635A] mt-0.5 leading-tight">
                  No Video
                </div>
              </div>
              <div className="px-1.5 py-2.5 sm:p-4 rounded-2xl bg-white/70 border border-[#E8E0D2] shadow-2xs flex flex-col justify-center min-h-[72px] sm:min-h-0">
                <div className="text-[13px] sm:text-2xl font-serif font-bold text-[#2D4A3E] whitespace-nowrap">
                  <span className="sm:hidden">₹1k – ₹2.2k</span>
                  <span className="hidden sm:inline">₹1,000 – ₹2,200</span>
                </div>
                <div className="text-[9px] sm:text-xs text-[#52635A] mt-0.5 leading-tight">
                  Session Fees
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Voice Counselling Offerings & Pricing */}
      <section className="bg-[#F2EDE4]/60 py-14 sm:py-20 border-y border-[#E8E0D2]/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9E4A2A]">
              Transparent Pricing &amp; Scope
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2924]">
              Primary Counselling Services
            </h2>
            <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
              All sessions take place strictly over audio/phone call. No webcam requirements, clinic travel, or waiting rooms.
            </p>
          </div>

          <SessionCardsCarousel />

          {/* Secondary Reiki Callout */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E0D2] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#1F2924]">
                  Reiki Energy Balancing — Optional on Request (₹1,000 / 45 mins)
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#52635A]">
                Traditional Usui biofield relaxation offered as a secondary wellness complement for bodily stillness and sleep support.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D4A3E] hover:underline shrink-0"
            >
              <span>View all service details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. How a Voice Session Unfolds (3-Step Practice Journey) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#9E4A2A]">
            Client Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2924]">
            How a Voice Session Unfolds
          </h2>
          <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
            A calm, step-by-step process designed so first-time callers feel clear, comfortable, and unhurried.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8E0D2] shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-full bg-[#F2EDE4] text-[#2D4A3E] font-serif font-bold text-sm flex items-center justify-center">
              1
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1F2924]">
              Share &amp; Request
            </h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              Submit your consultation preference on the{" "}
              <Link href="/connect" className="text-[#2D4A3E] font-semibold underline">
                Session Request
              </Link>{" "}
              page or send a brief WhatsApp note with the topics you wish to explore.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8E0D2] shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-full bg-[#F2EDE4] text-[#2D4A3E] font-serif font-bold text-sm flex items-center justify-center">
              2
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1F2924]">
              Coordinate Call Window
            </h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              Agree on a mutually quiet, undisturbed time window during practice hours (Monday to Saturday, 10:00 AM – 7:00 PM IST) with no clinic travel.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8E0D2] shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-full bg-[#F2EDE4] text-[#2D4A3E] font-serif font-bold text-sm flex items-center justify-center">
              3
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1F2924]">
              Speak Privately by Phone
            </h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              Connect directly via telephone or audio call for 50–60 minutes of compassionate, non-judgmental guidance with ~35 years of practice depth.
            </p>
          </div>
        </div>

        {/* What to Expect Callout */}
        <div className="mt-8 p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E0D2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2D4A3E]">
              What to Expect on Your First Call
            </span>
            <p className="text-xs text-[#52635A] leading-relaxed">
              No preparation or formal notes needed. Voice calls work comfortably from any quiet space at home—whether a private bedroom, balcony, or parked car—with zero webcam pressure, app alerts, or domestic eavesdropping.
            </p>
          </div>
          <Link
            href="/guide"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D4A3E] hover:underline shrink-0"
          >
            <span>Read Client FAQs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 4. Why Voice-Only Phone Calls */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9E4A2A]">
              Privacy &amp; Dignity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2924]">
              Why Audio / Phone Sessions?
            </h2>
            <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
              When people are experiencing emotional hurt or marital stress, appearing on camera often creates unwanted performance anxiety. Audio calls provide a sacred layer of confidentiality where you can focus entirely on your words and feelings.
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#1F2924]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                <span>No video cameras or screen fatigue—speak from your personal comfort zone</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                <span>Speak from your quiet room, balcony, or sanctuary anywhere across India</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                <span>Zero travel time, waiting rooms, or clinical awkwardness</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-[#F2EDE4] border border-[#E8E0D2] space-y-4 text-center sm:text-left">
            <h3 className="font-serif text-xl font-bold text-[#2D4A3E]">
              Connect Directly with Dr. Shivie Gupta
            </h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              Call or send a WhatsApp message to coordinate your preferred day and time. Calling hours are Monday to Saturday, 10:00 AM – 7:00 PM IST.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E332A] shadow-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-[#2D4A3E]/30 text-[#2D4A3E] text-xs font-semibold uppercase tracking-wider hover:bg-[#FAF8F5]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
