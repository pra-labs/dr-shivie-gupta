import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Compass, BookOpen, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, Globe2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Dr. Shivie Gupta | Usui Reiki Master, Researcher & Educator in Agra",
  description: "Learn about Dr. Shivie Gupta's Reiki lineage, doctoral research background, personal philosophy, and why she created this educational wellness guide.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 lg:py-24 space-y-20">
      {/* 1. Clean Top Hero Section - Immediate Portrait & Bio Command */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Portrait Container with Uniform 4:5 Aspect Ratio */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#F2EDE4] group">
              <Image
                src="/images/dr-shivie-portrait.svg"
                alt="Dr. Shivie Gupta Reiki Educator Agra"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur shadow-md border border-[#E8E0D2]/70 text-left">
                <div className="font-serif text-base sm:text-lg font-bold text-[#2D4A3E]">
                  Dr. Shivie Gupta, PhD
                </div>
                <div className="text-[11px] sm:text-xs text-[#52635A]">
                  Usui &amp; Karuna Reiki Master • Educator
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Bio */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EDE4] border border-[#E8E0D2] text-[11px] sm:text-xs font-semibold text-[#2D4A3E] uppercase tracking-wider">
              <span>Background &amp; Vision</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1F2924] leading-[1.15] text-balance">
              Meet Dr. Shivie Gupta
            </h1>
            <p className="text-sm sm:text-base text-[#52635A] leading-relaxed">
              Dr. Shivie Gupta is an Usui and Karuna Reiki Master and independent wellness researcher based in Agra, Uttar Pradesh. Holding a doctorate, her journey unites rigorous critical inquiry with authentic Japanese biofield traditions to illuminate the practical power of subtle energy.
            </p>
            <p className="text-sm sm:text-base text-[#52635A] leading-relaxed">
              Having observed how commercialization and sensational claims frequently cloud the public perception of energy healing, Dr. Shivie established this website as a pure, non-commercial educational library. Her aim is to empower individuals with self-care tools, meditative wisdom, and somatic clarity.
            </p>

            {/* CTAs with Crisp Border on Secondary Action */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="/guide"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#2D4A3E] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#1E332A] transition-colors shadow-sm"
              >
                <span>Read the Beginner&apos;s Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/practices"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-white sm:bg-[#F2EDE4] text-[#1F2924] border-2 border-[#2D4A3E]/30 sm:border-[#2D4A3E]/25 text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#E8DFC8] transition-colors shadow-xs"
              >
                Explore Practices
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Lineage & Research Foundations */}
      <section className="bg-[#F2EDE4]/60 py-16 border-y border-[#E8E0D2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
              Authenticity &amp; Integrity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2924]">
              Lineage &amp; Research Foundations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#E8E0D2] space-y-3">
              <Award className="w-8 h-8 text-[#C5A059]" />
              <h3 className="font-serif text-xl font-bold text-[#1F2924]">
                Usui Shiki Ryoho Master
              </h3>
              <p className="text-xs text-[#52635A] leading-relaxed">
                Direct lineage attunements honoring Mikao Usui’s traditional Japanese healing system, emphasizing ethical stewardship, self-purification, and subtle vibrational resonance.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E8E0D2] space-y-3">
              <BookOpen className="w-8 h-8 text-[#2D4A3E]" />
              <h3 className="font-serif text-xl font-bold text-[#1F2924]">
                Doctoral Inquiry
              </h3>
              <p className="text-xs text-[#52635A] leading-relaxed">
                Academic training that grounds all educational writing in clear logic, verifiable principles, and psychological empathy rather than fear-based dogma.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E8E0D2] space-y-3">
              <Compass className="w-8 h-8 text-[#B86B4B]" />
              <h3 className="font-serif text-xl font-bold text-[#1F2924]">
                Karuna® Reiki Studies
              </h3>
              <p className="text-xs text-[#52635A] leading-relaxed">
                Exploration of compassionate resonance frequencies specifically focused on emotional cord awareness, shadow integration, and gentle somatic release.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why This Non-Commercial Platform Exists & Ethical Principles */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
              Open Wellness Initiative
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2924]">
              Why Create an Educational Resource?
            </h2>
            <p className="text-sm sm:text-base text-[#52635A] leading-relaxed">
              Living in Dayalbagh, Agra, Dr. Shivie frequently encountered individuals seeking genuine relaxation and mental balance but discouraged by commercial wellness models, occultism, or superstitious promises.
            </p>
            <p className="text-sm sm:text-base text-[#52635A] leading-relaxed">
              This space was created as a public service: a tranquil online archive where anyone can read authentic historical context, understand biofield mechanics, and learn daily self-care rituals without monetary transaction.
            </p>

            {/* Repositioned & Refined Profile Callout */}
            <div className="p-5 rounded-2xl bg-[#F2EDE4] border border-[#E8E0D2] text-xs text-[#52635A] leading-relaxed space-y-1.5">
              <strong className="text-[#2D4A3E] font-semibold block">Non-Commercial Charter:</strong>
              This platform shares open educational resources on biofield harmony and emotional balance. It maintains an ethical, non-commercial posture free from tarot, astrology, or paid consultations.
            </div>

            <ul className="space-y-3 text-sm text-[#1F2924] pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                <span>Zero sales funnels, paid subscriptions, or consultation fees</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                <span>Respectful secular presentation suitable for all backgrounds</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                <span>Clear delineation supporting conventional healthcare</span>
              </li>
            </ul>
          </div>

          {/* Core Ethical Principles with Clean Minimal Icon Cards */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E8E0D2] shadow-sm space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#2D4A3E]">
              Core Ethical Principles
            </h3>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-[#E8E0D2] space-y-2 hover:shadow-xs transition-shadow">
                <div className="flex items-center gap-2.5 text-[#2D4A3E]">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E8E0D2] flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-4 h-4 text-[#2D4A3E]" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#1F2924]">
                    1. Self-Directed Healing
                  </h4>
                </div>
                <p className="text-xs text-[#52635A] leading-relaxed pl-10">
                  True healing is an innate physiological and energetic capacity within each individual. An educator merely illuminates the map while your nervous system guides restoration.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E8E0D2] space-y-2 hover:shadow-xs transition-shadow">
                <div className="flex items-center gap-2.5 text-[#2D4A3E]">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E8E0D2] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#B86B4B]" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#1F2924]">
                    2. Clear Medical Boundaries
                  </h4>
                </div>
                <p className="text-xs text-[#52635A] leading-relaxed pl-10">
                  Energy practices complement healthy living but never replace qualified medical, neurological, or psychiatric diagnosis and treatment.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E8E0D2] space-y-2 hover:shadow-xs transition-shadow">
                <div className="flex items-center gap-2.5 text-[#2D4A3E]">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E8E0D2] flex items-center justify-center shrink-0">
                    <Globe2 className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#1F2924]">
                    3. Universal Open Access
                  </h4>
                </div>
                <p className="text-xs text-[#52635A] leading-relaxed pl-10">
                  Mindfulness, contemplative philosophy, and peaceful inner practices should remain freely accessible to all readers without paywalls or commercial barriers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
