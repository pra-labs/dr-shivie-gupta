"use client";

import { useState, useMemo } from "react";
import { ChevronDown, HelpCircle, Search, Languages, PhoneCall } from "lucide-react";
import { faqsData } from "@/data/site-content";
import { expandSearchQuery } from "@/lib/search-synonyms";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Voice Sessions",
    "Counselling",
    "Hindi & Local",
    "Reiki (Optional)",
  ];

  const filteredFaqs = useMemo(() => {
    const cleanQuery = searchQuery.trim().toLowerCase();
    const expandedTerms = expandSearchQuery(cleanQuery);

    return faqsData.filter((faq) => {
      const matchesCategory =
        selectedCategory === "All" || faq.category === selectedCategory;

      if (!cleanQuery) return matchesCategory;

      const qText = faq.question.toLowerCase();
      const aText = faq.answer.toLowerCase();

      const directMatch = qText.includes(cleanQuery) || aText.includes(cleanQuery);
      if (directMatch) return matchesCategory;

      const synonymMatch = expandedTerms.some(
        (term) => qText.includes(term) || aText.includes(term)
      );

      return matchesCategory && synonymMatch;
    });
  }, [selectedCategory, searchQuery]);

  const toggle = (idx: number) => {
    const newIdx = openIndex === idx ? null : idx;
    setOpenIndex(newIdx);

    if (newIdx !== null && filteredFaqs[newIdx]) {
      try {
        fetch("/api/analytics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "faq_click",
            target: filteredFaqs[newIdx].question,
          }),
        }).catch(() => {});
      } catch {
        // Non-blocking
      }
    }
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setOpenIndex(0);

    if (val.trim().length >= 3) {
      try {
        fetch("/api/analytics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "faq_search",
            query: val.trim().toLowerCase(),
          }),
        }).catch(() => {});
      } catch {
        // Non-blocking
      }
    }
  };

  return (
    <div className="space-y-5">
      {/* Search Input */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#52635A]" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="Search topics (e.g. phone, confidentiality, fees, rishte, reiki)..."
          className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#E8E0D2] bg-white text-xs sm:text-sm text-[#1F2924] placeholder:text-[#52635A]/60 focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:border-transparent transition-all shadow-xs"
        />
        {searchQuery && (
          <button
            onClick={() => handleSearchChange("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#52635A] hover:text-[#1F2924] cursor-pointer"
          >
            Clear
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar -mx-2 px-2 touch-pan-x">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          const isVoice = cat === "Voice Sessions";
          const isHindi = cat === "Hindi & Local";
          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              className={`shrink-0 px-3.5 py-1.5 min-h-[38px] rounded-full text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer active:scale-95 ${
                isSelected
                  ? "bg-[#2D4A3E] text-white shadow-xs font-semibold"
                  : isVoice
                  ? "bg-[#FAF8F5] text-[#2D4A3E] border border-[#2D4A3E]/30 hover:bg-[#F2EDE4]"
                  : isHindi
                  ? "bg-[#FAF8F5] text-[#9E4A2A] border border-[#9E4A2A]/40 hover:bg-[#F2EDE4]"
                  : "bg-white border border-[#E8E0D2] text-[#52635A] hover:bg-[#F2EDE4] hover:text-[#1F2924]"
              }`}
            >
              {isVoice && <PhoneCall className="w-3.5 h-3.5" />}
              {isHindi && <Languages className="w-3.5 h-3.5" />}
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Accordion Questions List */}
      <div className="space-y-3 pt-1">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center rounded-2xl bg-white border border-[#E8E0D2] text-xs text-[#52635A]">
            No matching answers found for &ldquo;{searchQuery}&rdquo;. Try another term (e.g. <em>voice</em>, <em>phone</em>, <em>rishte</em>, <em>fees</em>).
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#E8E0D2] bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2D4A3E] shrink-0 mt-0.5" />
                    <span className="font-serif text-base sm:text-lg font-bold text-[#1F2924] leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-[#52635A] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-[#2D4A3E]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#52635A] leading-relaxed border-t border-[#E8E0D2]/50 animate-in fade-in duration-200">
                    <div className="mb-2">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-[#F2EDE4] text-[#9E4A2A]">
                        {faq.category}
                      </span>
                    </div>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
