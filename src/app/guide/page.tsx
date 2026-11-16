import type { Metadata } from "next";
import { Coffee, Sun, Heart } from "lucide-react";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Beginner's Guide to Reiki & Frequently Asked Questions | Dr. Shivie Gupta",
  description: "Educational guide on what to expect in a traditional Reiki session (before, during, and after) alongside comprehensive FAQs curated by Dr. Shivie Gupta.",
};

export default function GuidePage() {
  return (
    <div className="py-10 sm:py-16 lg:py-20 space-y-12 sm:space-y-16">
      {/* 40-word Declarative Opening Summary for RAG Chunking - Tightened Spacing */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 pb-2 sm:pb-4">
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#9E4A2A]">
          Educational Walkthrough
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1F2924] text-balance">
          What to Expect in a Traditional Reiki Session
        </h1>
        <p className="text-xs sm:text-sm lg:text-base text-[#52635A] leading-relaxed max-w-2xl mx-auto text-balance">
          Reiki is a non-invasive Japanese biofield tradition focused on systemic relaxation and autonomic restoration. In authentic practice, sessions require no belief system, faith, or undressing, offering a peaceful container to release somatic tension and mental fatigue.
        </p>
      </section>

      {/* The 3-Stage Walkthrough with Inline Icons for Vertical Compactness */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Phase 1: Before */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F2EDE4] text-[#2D4A3E] flex items-center justify-center shrink-0">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#9E4A2A]">
                  Phase 1
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2924]">
                  Before a Session
                </h2>
              </div>
            </div>
            <ul className="space-y-2.5 text-xs text-[#52635A] leading-relaxed border-t border-[#E8E0D2]/60 pt-3">
              <li>• Wear comfortable, loose cotton or linen attire that allows easy breathing.</li>
              <li>• Avoid heavy meals or excessive stimulants 2 hours prior to practice.</li>
              <li>• Dedicate 10 minutes to sit quietly, hydrate, and set an open intention.</li>
              <li>• Approach with curiosity; belief is not required for your nervous system to respond.</li>
            </ul>
          </div>

          {/* Phase 2: During */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F2EDE4] text-[#C5A059] flex items-center justify-center shrink-0">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#9E4A2A]">
                  Phase 2
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2924]">
                  During the Experience
                </h2>
              </div>
            </div>
            <ul className="space-y-2.5 text-xs text-[#52635A] leading-relaxed border-t border-[#E8E0D2]/60 pt-3">
              <li>• You remain fully clothed while resting comfortably on a supported surface.</li>
              <li>• Soft ambient silence promotes an alpha-theta brainwave relaxation state.</li>
              <li>• Hands rest lightly or hover gently above key energetic and autonomic centers.</li>
              <li>• Common sensations: radiant warmth, gentle tingling, or deep meditative sleep.</li>
            </ul>
          </div>

          {/* Phase 3: After */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F2EDE4] text-[#2D4A3E] flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#9E4A2A]">
                  Phase 3
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2924]">
                  Post-Session Integration
                </h2>
              </div>
            </div>
            <ul className="space-y-2.5 text-xs text-[#52635A] leading-relaxed border-t border-[#E8E0D2]/60 pt-3">
              <li>• Take a few quiet moments to ground yourself before returning to daily tasks.</li>
              <li>• Drink room-temperature water to support natural cellular and somatic flushing.</li>
              <li>• Many individuals experience unusually deep, restorative sleep that evening.</li>
              <li>• Gentle nature walks, journaling, or quiet evening rest are strongly encouraged.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs Section with Category Filter & Search */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="text-center space-y-2 sm:space-y-3">
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#9E4A2A]">
            Knowledge Base
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1F2924]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#52635A] max-w-xl mx-auto">
            Comprehensive answers addressing practice ethics, scientific grounding, secular boundaries, and Hindi/Hinglish search intents.
          </p>
        </div>

        <FaqAccordion />
      </section>
    </div>
  );
}
