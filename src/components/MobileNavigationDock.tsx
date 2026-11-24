"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Layers, Sparkles, CalendarCheck } from "lucide-react";

export function MobileNavigationDock() {
  const pathname = usePathname();

  const handleOpenAssistant = () => {
    window.dispatchEvent(new CustomEvent("open-session-assistant"));
  };

  const handleOpenBooking = () => {
    window.dispatchEvent(
      new CustomEvent("open-booking-modal", {
        detail: { service: "individual" },
      })
    );
  };

  const isHome = pathname === "/";
  const isServices = pathname.startsWith("/services");
  const isConnect = pathname.startsWith("/connect");

  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#E8E0D2] px-2 sm:px-3 pt-1.5 pb-[calc(0.6rem+env(safe-area-inset-bottom,0px))] shadow-lg select-none"
      aria-label="Mobile Bottom Dock"
    >
      <div className="max-w-md mx-auto grid grid-cols-4 items-center gap-1">
        {/* 1. Home */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center gap-1 min-h-[46px] rounded-xl transition-all active:scale-[0.96] ${
            isHome ? "text-[#2D4A3E] font-bold" : "text-[#52635A] hover:text-[#1F2924]"
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] tracking-wide">Home</span>
        </Link>

        {/* 2. Sessions */}
        <Link
          href="/services"
          className={`flex flex-col items-center justify-center gap-1 min-h-[46px] rounded-xl transition-all active:scale-[0.96] ${
            isServices ? "text-[#2D4A3E] font-bold" : "text-[#52635A] hover:text-[#1F2924]"
          }`}
        >
          <Layers className="w-5 h-5" />
          <span className="text-[10px] tracking-wide">Sessions</span>
        </Link>

        {/* 3. Session Companion (Triggers Guidance AI Bottom Sheet) */}
        <button
          onClick={handleOpenAssistant}
          className="flex flex-col items-center justify-center gap-1 min-h-[46px] rounded-xl text-[#52635A] hover:text-[#2D4A3E] transition-all active:scale-[0.96] cursor-pointer"
          aria-label="Open Session Companion"
        >
          <Sparkles className="w-5 h-5 text-[#C5A059]" />
          <span className="text-[10px] tracking-wide">Companion</span>
        </button>

        {/* 4. Primary Book Action */}
        <div className="flex items-center justify-center px-0.5">
          <Link
            href="/connect"
            onClick={(e) => {
              // If already on /connect, open the bottom sheet modal for direct in-page booking
              if (isConnect) {
                e.preventDefault();
                handleOpenBooking();
              }
            }}
            className="flex items-center justify-center gap-1.5 w-full min-h-[44px] py-2 px-3 rounded-full bg-[#2D4A3E] text-white shadow-sm font-semibold text-xs tracking-wider transition-all active:scale-[0.95]"
            aria-label="Book a voice session"
          >
            <CalendarCheck className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Book</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
