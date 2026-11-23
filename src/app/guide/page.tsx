import type { Metadata } from "next";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Client Guide & FAQs | Dr. Shivie Gupta | Agra, India",
  description: "Frequently asked questions regarding voice-only phone counselling, session confidentiality, fees, duration, and optional Reiki with Dr. Shivie Gupta.",
};

export default function GuidePage() {
  return (
    <div className="py-10 sm:py-16 lg:py-20 space-y-12 sm:space-y-16">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 pb-2 sm:pb-4">
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#9E4A2A]">
          Client Orientation &amp; FAQs
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1F2924] text-balance">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm lg:text-base text-[#52635A] leading-relaxed max-w-2xl mx-auto text-balance">
          Learn how voice-only telephone counselling sessions operate, what to expect regarding confidentiality, pricing, and how Dr. Shivie Gupta supports your personal journey.
        </p>
      </section>

      {/* 3 Step Walkthrough */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E8E0D2] space-y-2 shadow-xs">
            <span className="text-xs font-bold text-[#9E4A2A] uppercase tracking-wider">Step 1</span>
            <h3 className="font-serif text-lg font-bold text-[#1F2924]">Request Your Slot</h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              Submit your preferred time slot on the session form or send a message via WhatsApp during practice hours.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E0D2] space-y-2 shadow-xs">
            <span className="text-xs font-bold text-[#2D4A3E] uppercase tracking-wider">Step 2</span>
            <h3 className="font-serif text-lg font-bold text-[#1F2924]">Find a Quiet Space</h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              Sit in a comfortable, private room with no distractions. Zero need for video setup, formal clothes, or travel.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E0D2] space-y-2 shadow-xs">
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">Step 3</span>
            <h3 className="font-serif text-lg font-bold text-[#1F2924]">Confidential Phone Call</h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              Speak openly and vulnerably with Dr. Shivie Gupta (~35 years experience) with complete confidentiality.
            </p>
          </div>
        </div>

        {/* What to Expect Subsection */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#E8E0D2] space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9E4A2A] bg-[#F2EDE4] px-2.5 py-1 rounded-full border border-[#E8E0D2]">
              First-Time Callers
            </span>
            <h3 className="font-serif text-xl font-bold text-[#1F2924]">
              What to Expect on Your First Call
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
            There is no need to prepare formal notes or rehearse your concerns. Dr. Shivie Gupta guides the conversation with patient, non-judgmental listening. No video cameras are ever used, and whatever you share remains strictly between you and Dr. Gupta.
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
