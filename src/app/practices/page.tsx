import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { practicesData } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Reiki Disciplines & Biofield Practices | Dr. Shivie Gupta",
  description: "Educational breakdown of Usui Reiki Ryoho, Chakra biofield alignment, contemplative emotional inquiry, and non-local distance energy concepts.",
};

export default function PracticesPage() {
  return (
    <div className="py-16 sm:py-24 space-y-20">
      {/* 40-word Declarative Opening Summary for RAG Chunking */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
          Educational Knowledge Base
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1F2924]">
          Reiki &amp; Energy Disciplines
        </h1>
        <p className="text-base text-[#52635A] leading-relaxed max-w-2xl mx-auto">
          Explore the philosophical foundations, biofield mechanics, and practical self-care rituals of traditional Japanese Reiki and subtle energy awareness. This educational guide by Dr. Shivie Gupta contains zero commercial services, paid packages, or clinical booking funnels.
        </p>
      </section>

      {/* Conceptual Overview Table */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F2EDE4]/80 border border-[#E8E0D2] space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
              Comparative Study
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1F2924]">
              Traditions &amp; Focus Areas Matrix
            </h2>
            <p className="text-xs text-[#52635A]">
              An analytical comparison of core energy frameworks and their daily contemplative benefits.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#1F2924] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
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
                    <td className="p-4 font-bold text-[#2D4A3E]">{p.title}</td>
                    <td className="p-4 font-medium text-[#B86B4B]">{p.tradition}</td>
                    <td className="p-4 text-[#52635A]">{p.keyThemes[0]}</td>
                    <td className="p-4 text-[#52635A]">{p.selfCareTakeaways[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Practices Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {practicesData.map((practice) => (
            <div
              key={practice.id}
              id={practice.slug}
              className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Philosophical Overview */}
              <div className="lg:col-span-7 space-y-5">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#F2EDE4] text-[#2D4A3E] inline-block">
                  {practice.tradition}
                </span>

                <h3 className="font-serif text-3xl font-bold text-[#1F2924]">
                  {practice.title}
                </h3>

                <p className="text-sm text-[#52635A] leading-relaxed">
                  {practice.tagline}
                </p>

                {/* Core Principles */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D4A3E]">
                    Foundational Principles:
                  </h4>
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
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                    Key Exploration Themes:
                  </h4>
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
              <div className="lg:col-span-5 bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#E8E0D2] flex flex-col justify-between h-full space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#B86B4B] block mb-1">
                    Home Contemplation
                  </span>
                  <h4 className="text-xl font-serif font-bold text-[#1F2924]">
                    Daily Self-Care Takeaways
                  </h4>
                  <p className="text-[11px] text-[#52635A] mt-1">
                    Practical habits you can integrate immediately into your personal morning or evening routine:
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-[#52635A]">
                  {practice.selfCareTakeaways.map((takeaway, tkIdx) => (
                    <li key={tkIdx} className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-[#E8E0D2]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B86B4B] mt-1.5 shrink-0" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#E8E0D2] space-y-2 text-center">
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
