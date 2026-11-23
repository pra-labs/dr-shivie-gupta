import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Voice Counselling & Reiki Services | Dr. Shivie Gupta | Agra, India",
  description:
    "Explore confidential voice-only phone counselling services (Individual, Couple, Family) and optional traditional Reiki healing by Dr. Shivie Gupta (~35 years experience).",
};

export default function ServicesPage() {
  return (
    <div className="py-10 sm:py-16 lg:py-20 space-y-12 sm:space-y-16">
      {/* Opening Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EDE4] border border-[#E8E0D2] text-[11px] font-semibold text-[#2D4A3E] uppercase tracking-wider">
          <span>Confidential Practice</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1F2924] text-balance">
          Voice-Only Counselling &amp; Healing Services
        </h1>
        <p className="text-xs sm:text-sm lg:text-base text-[#52635A] leading-relaxed max-w-2xl mx-auto text-balance">
          All counselling sessions are conducted strictly over phone/audio calls for complete personal privacy and comfort. With ~35 years of therapeutic experience, Dr. Shivie Gupta provides compassionate, non-judgmental guidance for individuals, couples, and families across India.
        </p>
      </section>

      {/* Services Grid with Transparent Pricing */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* 1. Individual Counselling */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#2D4A3E]/30 shadow-sm space-y-5 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9E4A2A]">
                Voice / Phone Call Only • 50 Minutes
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#1F2924]">
                Individual Voice Counselling
              </h2>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#2D4A3E] [font-variant-numeric:lining-nums]">
                ₹1,200 <span className="text-xs font-sans font-normal text-[#52635A]">/ 50-minute session</span>
              </div>
              <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                A private, comforting space over phone call to reflect on anxiety loops, life dilemmas, emotional fatigue, and personal clarity.
              </p>

              <div className="pt-2 border-t border-[#E8E0D2] space-y-2">
                <strong className="text-xs font-semibold text-[#1F2924] block uppercase tracking-wider">
                  Key Focus Areas:
                </strong>
                <ul className="text-xs text-[#52635A] space-y-1.5 list-disc list-inside">
                  <li>Stress, overthinking, and persistent worry</li>
                  <li>Navigating grief, career transitions, and emotional lows</li>
                  <li>Building grounded self-worth and emotional boundaries</li>
                </ul>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/connect?service=individual"
                className="w-full inline-flex items-center justify-center py-3 px-6 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E332A] transition-colors shadow-xs"
              >
                Request Individual Session
              </Link>
            </div>
          </div>

          {/* 2. Couple Counselling */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9E4A2A]">
                  Voice / Phone Call Only • 60 Minutes
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#52635A]">
                  Both Partners
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#1F2924]">
                Couple &amp; Relationship Counselling
              </h2>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#2D4A3E] [font-variant-numeric:lining-nums]">
                ₹1,800 <span className="text-xs font-sans font-normal text-[#52635A]">/ 60-minute session</span>
              </div>
              <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                Balanced, empathetic phone sessions helping partners de-escalate recurring friction, rebuild emotional trust, and bridge communication breakdowns.
              </p>

              <div className="pt-2 border-t border-[#E8E0D2] space-y-2">
                <strong className="text-xs font-semibold text-[#1F2924] block uppercase tracking-wider">
                  Key Focus Areas:
                </strong>
                <ul className="text-xs text-[#52635A] space-y-1.5 list-disc list-inside">
                  <li>Communication breakdowns and unspoken resentments</li>
                  <li>Marital adjustments and in-law relationship dynamics</li>
                  <li>Restoring emotional warmth and active listening</li>
                </ul>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/connect?service=couple"
                className="w-full inline-flex items-center justify-center py-3 px-6 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E332A] transition-colors shadow-xs"
              >
                Request Couple Session
              </Link>
            </div>
          </div>

          {/* 3. Family Counselling */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9E4A2A]">
                  Voice / Phone Call Only • 60 Minutes
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#52635A]">
                  Family Dialogue
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#1F2924]">
                Family &amp; Intergenerational Counselling
              </h2>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#2D4A3E] [font-variant-numeric:lining-nums]">
                ₹2,200 <span className="text-xs font-sans font-normal text-[#52635A]">/ 60-minute session</span>
              </div>
              <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                Structured telephone dialogue to mediate household tension, parent-teen communication gaps, and differing generational values with patience and warmth.
              </p>

              <div className="pt-2 border-t border-[#E8E0D2] space-y-2">
                <strong className="text-xs font-semibold text-[#1F2924] block uppercase tracking-wider">
                  Key Focus Areas:
                </strong>
                <ul className="text-xs text-[#52635A] space-y-1.5 list-disc list-inside">
                  <li>Intergenerational misunderstandings and household friction</li>
                  <li>Parenting guidance, adolescent stress, and mutual respect</li>
                  <li>Navigating joint-family dynamics with equanimity</li>
                </ul>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/connect?service=family"
                className="w-full inline-flex items-center justify-center py-3 px-6 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E332A] transition-colors shadow-xs"
              >
                Request Family Session
              </Link>
            </div>
          </div>

          {/* 4. Reiki Healing (Optional / Secondary) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#E8E0D2] shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9E4A2A]">
                  Remote / On Request • 45 Minutes
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F2EDE4] text-[#9E4A2A] border border-[#9E4A2A]/30 text-[10px] uppercase font-bold tracking-wider">
                  Optional Secondary
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#1F2924]">
                Reiki Energy Balancing (Optional)
              </h2>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#2D4A3E] [font-variant-numeric:lining-nums]">
                ₹1,000 <span className="text-xs font-sans font-normal text-[#52635A]">/ 45-minute session</span>
              </div>
              <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                Offered strictly on request as a secondary wellness practice for subtle energy alignment, deep somatic relaxation, and restful sleep support.
              </p>

              <div className="pt-2 border-t border-[#E8E0D2] space-y-2">
                <strong className="text-xs font-semibold text-[#1F2924] block uppercase tracking-wider">
                  Important Clarification:
                </strong>
                <p className="text-xs text-[#52635A] leading-relaxed">
                  Reiki is an optional complementary modality. It is never required for counselling clients and never replaces conventional medical or psychiatric care.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/connect?service=reiki"
                className="w-full inline-flex items-center justify-center py-3 px-6 rounded-full border-2 border-[#2D4A3E] text-[#2D4A3E] text-xs font-semibold uppercase tracking-wider hover:bg-[#2D4A3E] hover:text-white transition-colors shadow-xs"
              >
                Inquire for Reiki Balancing
              </Link>
            </div>
          </div>
        </div>

        {/* Direct Phone/WhatsApp Booking Box */}
        <div className="mt-12 p-8 rounded-3xl bg-[#F2EDE4] border border-[#E8E0D2] text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#1F2924]">
            Prefer Direct Booking via Phone or WhatsApp?
          </h3>
          <p className="text-xs sm:text-sm text-[#52635A] max-w-xl mx-auto leading-relaxed">
            You can connect directly with Dr. Shivie Gupta to discuss your preferred timing or clarify any question before confirming your voice session.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E332A] transition-colors shadow-sm"
            >
              <span>Call: {siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white border border-[#2D4A3E]/30 text-[#2D4A3E] text-xs font-semibold uppercase tracking-wider hover:bg-[#FAF8F5] transition-colors shadow-xs"
            >
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
