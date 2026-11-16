"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqsData } from "@/data/site-content";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {faqsData.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl border border-[#E8E0D2] bg-white overflow-hidden transition-all"
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
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
