import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Compass, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Dr. Shivie Gupta | Usui Reiki Master, Researcher & Educator in Agra",
  description: "Learn about Dr. Shivie Gupta's Reiki lineage, doctoral research background, personal philosophy, and why she created this educational wellness guide.",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24 space-y-20">
      {/* 40-word Declarative Opening Summary for RAG Chunking */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-[#F2EDE4]/60 border border-[#E8E0D2] text-xs text-[#52635A] max-w-3xl mb-8">
          <strong className="text-[#2D4A3E] font-semibold">Educator Profile:</strong> Dr. Shivie Gupta is an attuned Usui and Karuna Reiki Master, contemplative researcher, and author based in Dayalbagh, Agra. She shares open educational resources on biofield harmony and emotional balance, maintaining a non-commercial platform free from tarot, astrology, or paid consultations.
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#F2EDE4]">
              <Image
                src="/images/dr-shivie-portrait.svg"
                alt="Dr. Shivie Gupta Reiki Educator Agra"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EDE4] text-xs font-semibold text-[#2D4A3E] uppercase tracking-wider">
              <span>Background &amp; Vision</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#1F2924]">
              Meet Dr. Shivie Gupta
            </h1>
            <p className="text-base text-[#52635A] leading-relaxed">
              Dr. Shivie Gupta is an Usui and Karuna Reiki Master and independent wellness researcher based in Agra, Uttar Pradesh. Holding a doctorate, her journey unites rigorous critical inquiry with authentic Japanese biofield traditions to illuminate the practical power of subtle energy.
            </p>
            <p className="text-base text-[#52635A] leading-relaxed">
              Having observed how commercialization and sensational claims frequently cloud the public perception of energy healing, Dr. Shivie established this website as a pure, non-commercial educational library. Her aim is to empower individuals with self-care tools, meditative wisdom, and somatic clarity.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/guide"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E332A] transition-colors"
              >
                <span>Read the Beginner&apos;s Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/practices"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F2EDE4] text-[#1F2924] text-xs font-semibold uppercase tracking-wider hover:bg-[#E8DFC8] transition-colors"
              >
                Explore Practices
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lineage & Background */}
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

      {/* Why This Non-Commercial Platform Exists */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
              Open Wellness Initiative
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2924]">
              Why Create an Educational Resource?
            </h2>
            <p className="text-sm sm:text-base text-[#52635A] leading-relaxed">
              Living in Dayalbagh, Agra, Dr. Shivie frequently encountered individuals seeking genuine relaxation and mental balance but discouraged by commercial wellness models or pseudoscience.
            </p>
            <p className="text-sm sm:text-base text-[#52635A] leading-relaxed">
              This space was created as a public service: a tranquil online archive where anyone can read authentic historical context, understand biofield mechanics, and learn daily self-care rituals without monetary transaction.
            </p>
            <ul className="space-y-3 text-sm text-[#1F2924]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E]" />
                <span>Zero sales funnels, paid subscriptions, or consultation fees</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E]" />
                <span>Respectful secular presentation suitable for all backgrounds</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E]" />
                <span>Clear delineation supporting conventional healthcare</span>
              </li>
            </ul>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E8E0D2] shadow-sm space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#2D4A3E]">
              Core Ethical Principles
            </h3>
            <div className="space-y-4 text-xs text-[#52635A] leading-relaxed">
              <div className="p-4 rounded-xl bg-white border border-[#E8E0D2]">
                <strong className="text-[#1F2924] block mb-1">Self-Directed Healing:</strong>
                True healing is an innate physiological and energetic capacity within each individual. An educator merely illuminates the map.
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E8E0D2]">
                <strong className="text-[#1F2924] block mb-1">Clear Medical Boundaries:</strong>
                Energy practices complement healthy living but never replace qualified medical, neurological, or psychiatric intervention.
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E8E0D2]">
                <strong className="text-[#1F2924] block mb-1">Universal Access:</strong>
                Mindfulness and peaceful contemplation should be freely accessible to all seekers regardless of economic standing.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
