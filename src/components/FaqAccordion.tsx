"use client";

import { useState, useMemo } from "react";
import { ChevronDown, HelpCircle, Search, Languages } from "lucide-react";
import { faqsData } from "@/data/site-content";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Re-ordered categories to prioritize Hindi/Hinglish directly after General
  const categories = [
    "All",
    "General",
    "Hindi & Local",
    "Practice Understanding",
    "Mindfulness & Science",
  ];

  const filteredFaqs = useMemo(() => {
    return faqsData.filter((faq) => {
      const matchesCategory =
        selectedCategory === "All" || faq.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-5">
      {/* Quick Search Input */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#52635A]" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setOpenIndex(0);
          }}
          placeholder="Search questions (e.g. stress, sleep, religion)..."
          className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#E8E0D2] bg-white text-xs sm:text-sm text-[#1F2924] placeholder:text-[#52635A]/60 focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:border-transparent transition-all shadow-xs"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#52635A] hover:text-[#1F2924]"
          >
            Clear
          </button>
        )}
      </div>

      {/* Horizontal Swipeable Category Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar -mx-2 px-2 touch-pan-x">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
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
                  : isHindi
                  ? "bg-[#FAF8F5] text-[#9E4A2A] border border-[#9E4A2A]/40 hover:bg-[#F2EDE4]"
                  : "bg-white border border-[#E8E0D2] text-[#52635A] hover:bg-[#F2EDE4] hover:text-[#1F2924]"
              }`}
            >
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
            No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another term.
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
