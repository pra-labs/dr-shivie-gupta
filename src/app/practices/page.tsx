import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, ArrowDownRight } from "lucide-react";
import { practicesData } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Reiki Disciplines & Biofield Practices | Dr. Shivie Gupta",
  description: "Educational breakdown of Usui Reiki Ryoho, Chakra biofield alignment, contemplative emotional inquiry, and non-local distance energy concepts.",
};

export default function PracticesPage() {
  return (
    <div className="py-10 sm:py-16 lg:py-20 space-y-12 sm:space-y-16">
      {/* 40-word Declarative Opening Summary for RAG Chunking - Tightened Spacing */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 pb-2 sm:pb-4">
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#9E4A2A]">
          Educational Knowledge Base
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1F2924] text-balance">
          Reiki &amp; Energy Disciplines
        </h1>
        <p className="text-xs sm:text-sm lg:text-base text-[#52635A] leading-relaxed max-w-2xl mx-auto text-balance">
          Explore the philosophical foundations, biofield mechanics, and practical self-care rituals of traditional Japanese Reiki and subtle energy awareness. This educational guide by Dr. Shivie Gupta contains zero commercial services, paid packages, or clinical booking funnels.
        </p>
      </section>

      {/* Comparative Matrix: Responsive Stacked Cards on Mobile + Clean Aligned Table on Desktop */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-[#F2EDE4]/80 border border-[#E8E0D2] space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#9E4A2A]">
                Comparative Study
              </span>
              <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#1F2924]">
                Traditions &amp; Focus Areas Matrix
              </h2>
            </div>
            <div className="sm:hidden text-[11px] text-[#9E4A2A] font-medium flex items-center gap-1">
              <span>Scroll down to study full deep dives</span>
              <ArrowDownRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Desktop Table View (Hidden on Mobile) */}
          <div className="hidden sm:block overflow-x-auto rounded-2xl border border-[#E8E0D2] bg-white shadow-xs">
            <table className="w-full text-left text-xs text-[#1F2924] border-collapse">
              <thead className="bg-[#2D4A3E] text-white">
                <tr>
                  <th className="p-4 font-semibold">Practice Name</th>
                  <th className="p-4 font-semibold">Lineage / Tradition</th>
                  <th className="p-4 font-semibold">Primary Physiological / Mental Focus</th>
                  <th className="p-4 font-semibold">Key Self-Care Takeaway</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E0D2]">
                {practicesData.map((p) => (
                  <tr key={p.id} className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="p-4 font-bold text-[#2D4A3E] align-top">{p.title}</td>
                    <td className="p-4 font-medium text-[#9E4A2A] align-top">{p.tradition}</td>
                    <td className="p-4 text-[#52635A] align-top leading-relaxed">{p.keyThemes[0]}</td>
                    <td className="p-4 text-[#52635A] align-top leading-relaxed">{p.selfCareTakeaways[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Comparison Cards (< 640px) */}
          <div className="grid grid-cols-1 gap-3 sm:hidden">
            {practicesData.map((p) => (
              <div key={p.id} className="p-4 rounded-2xl bg-white border border-[#E8E0D2] space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-base font-bold text-[#2D4A3E]">{p.title}</h3>
                  <span className="text-[10px] font-semibold text-[#9E4A2A] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#E8E0D2]">
                    {p.tradition.split(" ")[0]}
                  </span>
                </div>
                <div className="text-xs text-[#52635A] leading-relaxed">
                  <strong className="text-[#1F2924] block">Focus:</strong>
                  {p.keyThemes[0]}
                </div>
                <div className="text-xs text-[#52635A] leading-relaxed pt-1 border-t border-[#E8E0D2]/50">
                  <strong className="text-[#9E4A2A] block">Daily Takeaway:</strong>
                  {p.selfCareTakeaways[0]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Jump Anchor Bar for Deep Dives */}
      <nav
        aria-label="Discipline Jump Navigation"
        className="sticky top-20 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-y border-[#E8E0D2] py-2.5 shadow-2xs"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto no-scrollbar touch-pan-x">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#52635A] shrink-0 mr-1 hidden sm:inline">
            Jump to:
          </span>
          {practicesData.map((p) => (
            <a
              key={p.id}
              href={`#${p.slug}`}
              className="shrink-0 px-3 py-1.5 rounded-full text-xs font-medium bg-white text-[#2D4A3E] border border-[#E8E0D2] hover:bg-[#2D4A3E] hover:text-white transition-all whitespace-nowrap active:scale-95"
            >
              {p.title.split(" ")[0]} {p.title.split(" ")[1] ?? ""}
            </a>
          ))}
        </div>
      </nav>

      {/* Detailed Practices Cards with Semantic H2 -> H3 Structure */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 sm:space-y-14">
          {practicesData.map((practice) => (
            <div
              key={practice.id}
              id={practice.slug}
              className="scroll-mt-32 p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Philosophical Overview */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-[#F2EDE4] text-[#2D4A3E] inline-block">
                  {practice.tradition}
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2924]">
                  {practice.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                  {practice.tagline}
                </p>

                {/* Core Principles */}
                <div className="space-y-2 pt-2">
                  <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2D4A3E]">
                    Foundational Principles:
                  </h3>
                  <ul className="space-y-2 text-xs text-[#52635A]">
                    {practice.principles.map((pr, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
                        <span>{pr}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Themes */}
                <div className="space-y-2 pt-2">
                  <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#9E4A2A]">
                    Key Exploration Themes:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {practice.keyThemes.map((theme, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-[#FAF8F5] border border-[#E8E0D2] text-[11px] text-[#1F2924]"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Daily Self-Care Practices */}
              <div className="lg:col-span-5 bg-[#FAF8F5] p-5 sm:p-8 rounded-2xl border border-[#E8E0D2] flex flex-col justify-between h-full space-y-5">
                <div>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#9E4A2A] block mb-1">
                    Home Contemplation
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1F2924]">
                    Daily Self-Care Takeaways
                  </h3>
                  <p className="text-[11px] text-[#52635A] mt-1">
                    Practical habits you can integrate immediately into your personal morning or evening routine:
                  </p>
                </div>

                <ul className="space-y-2 text-xs text-[#52635A]">
                  {practice.selfCareTakeaways.map((takeaway, tkIdx) => (
                    <li key={tkIdx} className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-[#E8E0D2] shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9E4A2A] mt-1.5 shrink-0" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-[#E8E0D2] text-center">
                  <Link
                    href="/guide"
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#2D4A3E] hover:underline"
                  >
                    <span>Read step-by-step beginner walkthrough</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
