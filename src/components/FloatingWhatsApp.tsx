"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/config/site";

export function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 flex items-center group">
      <div className="mr-3 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur shadow-md text-xs font-medium text-[#1F2924] border border-[#E8E0D2] hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Message Dr. Shivie on WhatsApp
      </div>
      <a
        href={getWhatsAppBookingUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp consultation with Dr. Shivie Gupta"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
      </a>
    </aside>
  );
}
