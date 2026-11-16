"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Practice } from "@/data/site-content";

interface DisciplineCarouselProps {
  practices: Practice[];
}

export function DisciplineCarousel({ practices }: DisciplineCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollLeft, clientWidth } = el;
      if (clientWidth === 0) return;
      const newIndex = Math.round(scrollLeft / (clientWidth * 0.85));
      setActiveIndex(Math.min(practices.length - 1, Math.max(0, newIndex)));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [practices.length]);

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
      setActiveIndex(index);
    }
  };

  return (
    <div className="relative">
      {/* Mobile Snap Carousel & Desktop Grid */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 sm:pb-0 sm:grid sm:grid-cols-2 sm:gap-8 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar"
      >
        {practices.map((practice) => (
          <div
            key={practice.id}
            className="w-[85vw] max-w-[340px] shrink-0 snap-start sm:w-auto sm:max-w-none p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3 sm:space-y-4">
              <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-[#F2EDE4] text-[#2D4A3E] inline-block">
                {practice.tradition}
              </span>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2924]">
                {practice.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                {practice.tagline}
              </p>

              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] font-semibold text-[#1F2924] uppercase tracking-wider block">
                  Core Themes:
                </span>
                <ul className="space-y-1 text-xs text-[#52635A]">
                  {practice.keyThemes.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-5 border-t border-[#E8E0D2] mt-5 flex items-center justify-between">
              <Link
                href={`/practices#${practice.slug}`}
                className="text-xs font-semibold text-[#2D4A3E] hover:underline flex items-center gap-1"
              >
                <span>Explore principles &amp; self-care</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-[10px] sm:text-[11px] text-[#B86B4B] font-medium">Educational</span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Dot Indicators */}
      <div
        className="flex sm:hidden justify-center items-center gap-2 pt-3"
        aria-label="Carousel navigation"
      >
        {practices.map((practice, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={practice.id}
              type="button"
              onClick={() => scrollTo(idx)}
              aria-label={`Go to slide ${idx + 1}: ${practice.title}`}
              aria-current={isActive ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                isActive ? "w-6 bg-[#2D4A3E]" : "w-2 bg-[#E8E0D2] hover:bg-[#C5A059]"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
