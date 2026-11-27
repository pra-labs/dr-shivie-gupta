"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function SessionCardsCarousel() {
  const { lang, t } = useLanguage();

  const SERVICES = [
    {
      id: "individual" as const,
      title: t.services.cards.individual.title,
      duration: t.services.cards.individual.duration,
      price: t.services.cards.individual.price,
      description: t.services.cards.individual.description,
    },
    {
      id: "couple" as const,
      title: t.services.cards.couple.title,
      duration: t.services.cards.couple.duration,
      price: t.services.cards.couple.price,
      description: t.services.cards.couple.description,
      badge: t.services.cards.couple.badge,
    },
    {
      id: "family" as const,
      title: t.services.cards.family.title,
      duration: t.services.cards.family.duration,
      price: t.services.cards.family.price,
      description: t.services.cards.family.description,
    },
  ];

  const handleOpenBooking = (serviceId: string) => {
    window.dispatchEvent(
      new CustomEvent("open-booking-modal", {
        detail: { service: serviceId },
      })
    );
  };

  return (
    <div>
      {/* Mobile Swipeable Snap-Scroll Carousel (< md) */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar touch-pan-x">
        {SERVICES.map((card) => (
          <div
            key={card.id}
            className="snap-center shrink-0 w-[82vw] max-w-[340px] p-6 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E4A2A] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#E8E0D2]">
                  {card.duration}
                </span>
                {card.badge && (
                  <span className="text-[10px] font-medium text-[#52635A]">
                    {card.badge}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1F2924]">
                {card.title}
              </h3>
              <div className="text-2xl font-serif font-bold text-[#2D4A3E]">
                {card.price}{" "}
                <span className="text-xs font-sans font-normal text-[#52635A]">
                  {t.services.perSession}
                </span>
              </div>
              <p className="text-xs text-[#52635A] leading-relaxed">
                {card.description}
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                data-umami-event="session_cta_click"
                data-umami-event-channel="form"
                data-umami-event-lang={lang}
                onClick={() => handleOpenBooking(card.id)}
                className="w-full text-center py-3 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold uppercase tracking-wider transition-all active:scale-[0.97] shadow-xs cursor-pointer"
              >
                {t.services.requestSessionBtn}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Grid (>= md) */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {SERVICES.map((card) => (
          <div
            key={card.id}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E4A2A] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#E8E0D2]">
                  {card.duration}
                </span>
                {card.badge && (
                  <span className="text-[10px] font-medium text-[#52635A]">
                    {card.badge}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2924]">
                {card.title}
              </h3>
              <div className="text-2xl font-serif font-bold text-[#2D4A3E]">
                {card.price}{" "}
                <span className="text-xs font-sans font-normal text-[#52635A]">
                  {t.services.perSession}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                {card.description}
              </p>
            </div>

            <Link
              href={`/connect?service=${card.id}`}
              data-umami-event="session_cta_click"
              data-umami-event-channel="form"
              data-umami-event-lang={lang}
              className="w-full text-center py-2.5 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E332A] transition-colors"
            >
              {t.services.requestSessionBtn}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
