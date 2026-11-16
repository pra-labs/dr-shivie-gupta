import type { Metadata } from "next";
import { Sun, Heart, Coffee } from "lucide-react";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Beginner's Guide to Reiki & Frequently Asked Questions | Dr. Shivie Gupta",
  description: "New to energy healing? Read what happens before, during, and after your first Reiki session with Dr. Shivie Gupta in Agra, alongside comprehensive FAQs.",
};

export default function GuidePage() {
  return (
    <div className="py-16 sm:py-24 space-y-24">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
          Clarity &amp; Education
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1F2924]">
          Beginner’s Guide to Reiki Healing
        </h1>
        <p className="text-base text-[#52635A] leading-relaxed">
          It is natural to feel curious or hesitant when approaching energy healing for the first time. Here is a clear, transparent walkthrough of what to expect at every stage.
        </p>
      </section>

      {/* The 3-Stage Walkthrough */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Before */}
          <div className="p-8 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-[#F2EDE4] text-[#2D4A3E] flex items-center justify-center">
              <Coffee className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#B86B4B]">
              Phase 1
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#1F2924]">
              Before Your Session
            </h2>
            <ul className="space-y-3 text-xs text-[#52635A] leading-relaxed">
              <li>• Wear comfortable, loose natural cotton or linen clothing.</li>
              <li>• Avoid heavy meals or excessive caffeine 2 hours prior.</li>
              <li>• Arrive 10 minutes early in Dayalbagh to decompress with water or tea.</li>
              <li>• Bring an open mind; you do not need to &apos;believe&apos; for your nervous system to respond.</li>
            </ul>
          </div>

          {/* During */}
          <div className="p-8 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-[#F2EDE4] text-[#C5A059] flex items-center justify-center">
              <Sun className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#B86B4B]">
              Phase 2
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#1F2924]">
              During the Experience
            </h2>
            <ul className="space-y-3 text-xs text-[#52635A] leading-relaxed">
              <li>• You remain fully clothed on a supportive, cushioned therapy table.</li>
              <li>• Soft ambient soundscapes promote an alpha/theta brainwave state.</li>
              <li>• Hands rest lightly on or hovering slightly above major chakras.</li>
              <li>• Common sensations: subtle heat, tingling, muscle twitches, or restful sleep.</li>
            </ul>
          </div>

          {/* After */}
          <div className="p-8 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-[#F2EDE4] text-[#2D4A3E] flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#B86B4B]">
              Phase 3
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#1F2924]">
              Post-Session Integration
            </h2>
            <ul className="space-y-3 text-xs text-[#52635A] leading-relaxed">
              <li>• A brief grounding chat to process emotions or physical releases noticed.</li>
              <li>• Drink plenty of room-temperature water to facilitate somatic cleansing.</li>
              <li>• Many experience an unusually deep, restorative sleep that evening.</li>
              <li>• Gentle walking in nature or quiet journaling is strongly encouraged.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
            Have Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2924]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#52635A]">
            Answers to common questions regarding ethics, religion, physical sensations, and session mechanics.
          </p>
        </div>

        <FaqAccordion />
      </section>
    </div>
  );
}
