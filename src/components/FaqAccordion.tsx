"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqsData } from "@/data/site-content";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "General", "Session Details", "Emotional Counseling", "Medical & Religious", "Hinglish & Local"];

  const filteredFaqs = selectedCategory === "All"
    ? faqsData
    : faqsData.filter((f) => f.category === selectedCategory);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-6">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setOpenIndex(0);
            }}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === cat
                ? "bg-[#2D4A3E] text-white shadow-sm"
                : "bg-white border border-[#E8E0D2] text-[#52635A] hover:bg-[#F2EDE4]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-[#E8E0D2] bg-white overflow-hidden transition-all shadow-xs"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#2D4A3E] shrink-0" />
                  <span className="font-serif text-lg font-bold text-[#1F2924]">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#52635A] transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 text-[#2D4A3E]" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 pt-2 text-sm text-[#52635A] leading-relaxed border-t border-[#E8E0D2]/50 animate-in fade-in duration-200">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-[#F2EDE4] text-[#B86B4B]">
                      {faq.category}
                    </span>
                  </div>
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
