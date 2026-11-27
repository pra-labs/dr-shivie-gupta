"use client";

import { useActionState, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { submitContactInquiry, type ContactFormState } from "@/app/actions/contact";
import { Send, CheckCircle2, AlertCircle, Loader2, PhoneCall, ShieldCheck, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { trackUmamiEvent } from "@/lib/analytics";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

function resolveInitialService(serviceParam?: string | null): string {
  if (!serviceParam) return "Individual Counselling (Voice Call)";
  const param = serviceParam.toLowerCase();
  if (param.includes("couple") || param.includes("relationship")) {
    return "Couple Counselling (Voice Call)";
  }
  if (param.includes("family") || param.includes("intergenerational")) {
    return "Family Counselling (Voice Call)";
  }
  if (param.includes("reiki") || param.includes("healing")) {
    return "Reiki Healing (Optional)";
  }
  if (param.includes("general")) {
    return "General Consultation Question";
  }
  return "Individual Counselling (Voice Call)";
}

export function ContactForm() {
  const { lang, t } = useLanguage();
  const [state, formAction, isPending] = useActionState(submitContactInquiry, initialState);
  const searchParams = useSearchParams();
  const serviceQuery = searchParams.get("service");
  const computedDefault = useMemo(() => resolveInitialService(serviceQuery), [serviceQuery]);
  const [userSelectedService, setUserSelectedService] = useState<string | null>(null);

  const activeService = userSelectedService ?? computedDefault;

  return (
    <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#E8E0D2] shadow-sm">
      <div className="flex items-center gap-2 mb-2 text-[#2D4A3E]">
        <PhoneCall className="w-5 h-5 text-[#9E4A2A]" />
        <h2 className="font-serif text-2xl font-bold text-[#1F2924]">
          {t.contactForm.title}
        </h2>
      </div>
      <p className="text-xs sm:text-sm text-[#52635A] mb-6 leading-relaxed">
        {t.contactForm.subtitle}
      </p>

      {state.success ? (
        <div className="p-6 rounded-2xl bg-[#F2EDE4] border border-[#2D4A3E]/20 text-[#2D4A3E] space-y-3 animate-in fade-in duration-300">
          <div className="flex items-center gap-2 font-serif text-lg font-bold">
            <CheckCircle2 className="w-5 h-5 text-[#2D4A3E]" />
            <span>{t.contactForm.successTitle}</span>
          </div>
          <p className="text-xs leading-relaxed">
            {state.message}
          </p>
          <div className="pt-2 text-[11px] text-[#52635A] flex items-center gap-1.5 border-t border-[#E8E0D2]/50">
            <ShieldCheck className="w-4 h-4 text-[#2D4A3E]" />
            <span>{t.contactForm.successPrivacy}</span>
          </div>
        </div>
      ) : (
        <form
          action={formAction}
          onSubmit={() => {
            trackUmamiEvent("session_cta_click", {
              channel: "form",
              lang,
            });
          }}
          className="space-y-4 sm:space-y-5"
        >
          {state.message && !state.success && (
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#9E4A2A]/30 text-[#9E4A2A] text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{state.message}</span>
            </div>
          )}

          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_url">{t.contactForm.honeypotLabel}</label>
            <input type="text" id="website_url" name="website_url" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-[#1F2924] mb-1.5">
                {t.contactForm.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder={t.contactForm.namePlaceholder}
                className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-base sm:text-sm text-[#1F2924] placeholder:text-sm placeholder:text-[#52635A]/60 focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:bg-white transition-all shadow-2xs"
              />
              {state.errors?.name && (
                <p className="text-[11px] text-[#9E4A2A] mt-1">{state.errors.name[0]}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-medium text-[#1F2924] mb-1.5">
                {t.contactForm.phoneLabel}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                inputMode="tel"
                autoComplete="tel"
                placeholder={t.contactForm.phonePlaceholder}
                className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-base sm:text-sm text-[#1F2924] placeholder:text-sm placeholder:text-[#52635A]/60 focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:bg-white transition-all shadow-2xs"
              />
              {state.errors?.phone && (
                <p className="text-[11px] text-[#9E4A2A] mt-1">{state.errors.phone[0]}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="serviceType" className="block text-xs font-medium text-[#1F2924] mb-1.5">
                {t.contactForm.serviceLabel}
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={activeService}
                onChange={(e) => setUserSelectedService(e.target.value)}
                className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-base sm:text-sm text-[#1F2924] focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:bg-white transition-all shadow-2xs"
              >
                {t.contactForm.serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-xs font-medium text-[#1F2924] mb-1.5">
                {t.contactForm.timeLabel}
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                defaultValue="Morning (10 AM - 1 PM)"
                className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-base sm:text-sm text-[#1F2924] focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:bg-white transition-all shadow-2xs"
              >
                {t.contactForm.timeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-medium text-[#1F2924] mb-1.5">
              {t.contactForm.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder={t.contactForm.emailPlaceholder}
              className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-base sm:text-sm text-[#1F2924] placeholder:text-sm placeholder:text-[#52635A]/60 focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:bg-white transition-all shadow-2xs"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="message" className="block text-xs font-medium text-[#1F2924]">
                {t.contactForm.messageLabel}
              </label>
              <span className="text-[11px] text-[#52635A]/70">{t.contactForm.messageHint}</span>
            </div>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder={t.contactForm.messagePlaceholder}
              className="w-full px-4 py-3 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-base sm:text-sm text-[#1F2924] placeholder:text-sm placeholder:text-[#52635A]/60 focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:bg-white transition-all shadow-2xs"
            />
          </div>

          <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E0D2]/70 text-[11px] text-[#52635A] flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#9E4A2A] shrink-0" />
            <span>{t.contactForm.hoursNote}</span>
          </div>

          <button
            type="submit"
            disabled={isPending}
            data-umami-event="session_cta_click"
            data-umami-event-channel="form"
            data-umami-event-lang={lang}
            className="w-full h-12 py-3 px-6 rounded-full bg-[#2D4A3E] text-white font-medium text-xs sm:text-sm hover:bg-[#1E332A] transition-colors disabled:opacity-50 flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-98"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{t.contactForm.submittingBtn}</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>{t.contactForm.submitBtn}</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
