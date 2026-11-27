"use client";

import { Suspense } from "react";
import { Mail, PhoneCall, MapPin, Clock, MessageCircle, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppUrl } from "@/lib/analytics";

export function ConnectClient() {
  const { lang, t } = useLanguage();
  const c = t.connect;

  return (
    <div className="py-10 sm:py-16 lg:py-20 space-y-10 sm:space-y-16">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 pb-2 sm:pb-4">
        <span className="text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#9E4A2A]">
          {c.eyebrow}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1F2924] text-balance">
          {c.title}
        </h1>
        <p className="text-xs sm:text-sm lg:text-base text-[#52635A] leading-relaxed max-w-2xl mx-auto text-balance">
          {c.subtitle}
        </p>
      </section>

      {/* Main Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Form Column */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <Suspense
              fallback={
                <div className="p-8 text-center text-xs text-[#52635A] bg-white rounded-3xl border border-[#E8E0D2]">
                  {c.loadingFallback}
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>

          {/* Contact Details Column */}
          <div className="order-2 lg:order-1 lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="bg-[#F2EDE4] p-6 sm:p-8 rounded-3xl border border-[#E8E0D2] space-y-5">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2924]">
                {c.detailsTitle}
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#52635A]">
                <div className="flex items-start gap-3">
                  <PhoneCall className="w-5 h-5 text-[#2D4A3E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F2924] block">{c.phoneLabel}</strong>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      data-umami-event="session_cta_click"
                      data-umami-event-channel="call"
                      data-umami-event-lang={lang}
                      className="text-[#2D4A3E] font-semibold text-base hover:underline"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F2924] block">{c.whatsappLabel}</strong>
                    <a
                      href={getWhatsAppUrl(lang)}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-umami-event="session_cta_click"
                      data-umami-event-channel="whatsapp"
                      data-umami-event-lang={lang}
                      className="text-[#9E4A2A] font-semibold underline hover:text-[#2D4A3E]"
                    >
                      {c.whatsappLink}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#9E4A2A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F2924] block">{c.hoursLabel}</strong>
                    <span>{c.hoursValue}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#52635A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F2924] block">{c.locationLabel}</strong>
                    <span>{c.locationValue}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#2D4A3E] shrink-0" />
                  <div>
                    <strong className="text-[#1F2924] block">{c.emailLabel}</strong>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-[#52635A] underline hover:text-[#2D4A3E]"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E0D2] text-[11px] text-[#52635A] leading-relaxed">
                <p>
                  <strong>{c.confidentialityTitle}</strong> {c.confidentialityDesc}
                </p>
              </div>
            </div>

            {/* Emergency Boundary Notice */}
            <div className="p-6 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-[#9E4A2A]">
                <ShieldCheck className="w-4 h-4 text-[#9E4A2A]" />
                <span className="font-serif text-sm font-bold">{c.emergencyTitle}</span>
              </div>
              <p className="text-xs text-[#52635A] leading-relaxed">
                {c.emergencyDesc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
