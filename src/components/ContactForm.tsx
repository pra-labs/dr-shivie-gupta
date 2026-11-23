"use client";

import { useActionState, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { submitContactInquiry, type ContactFormState } from "@/app/actions/contact";
import { Send, CheckCircle2, AlertCircle, Loader2, PhoneCall, ShieldCheck, Clock } from "lucide-react";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

const SERVICE_OPTIONS = [
  { value: "Individual Counselling (Voice Call)", label: "Individual Counselling (Voice Call - 50m)" },
  { value: "Couple Counselling (Voice Call)", label: "Couple & Relationship Counselling (Voice Call - 60m)" },
  { value: "Family Counselling (Voice Call)", label: "Family Counselling (Voice Call - 60m)" },
  { value: "Reiki Healing (Optional)", label: "Reiki Energy Balancing (Optional / On Request - 45m)" },
  { value: "General Consultation Question", label: "General Inquiries & Availability" },
];

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
          Request a Voice Counselling Session
        </h2>
      </div>
      <p className="text-xs text-[#52635A] mb-6">
        All sessions are conducted strictly over audio/phone call for full privacy. Fill out this form to coordinate a consultation, or reach out directly during practice hours via WhatsApp.
      </p>

      {state.success ? (
        <div className="p-6 rounded-2xl bg-[#F2EDE4] border border-[#2D4A3E]/20 text-[#2D4A3E] space-y-3 animate-in fade-in duration-300">
          <div className="flex items-center gap-2 font-serif text-lg font-bold">
            <CheckCircle2 className="w-5 h-5 text-[#2D4A3E]" />
            <span>Inquiry Received</span>
          </div>
          <p className="text-xs leading-relaxed">
            {state.message}
          </p>
          <div className="pt-2 text-[11px] text-[#52635A] flex items-center gap-1.5 border-t border-[#E8E0D2]/50">
            <ShieldCheck className="w-4 h-4 text-[#2D4A3E]" />
            <span>Your contact details remain strictly confidential and private.</span>
          </div>
        </div>
      ) : (
        <form action={formAction} className="space-y-4 sm:space-y-5">
          {state.message && !state.success && (
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#9E4A2A]/30 text-[#9E4A2A] text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{state.message}</span>
            </div>
          )}

          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_url">Leave this field empty</label>
            <input type="text" id="website_url" name="website_url" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-[#1F2924] uppercase tracking-wider mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder="e.g. Aarti Saxena"
                className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-base sm:text-sm text-[#1F2924] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:bg-white transition-all shadow-2xs"
              />
              {state.errors?.name && (
                <p className="text-[11px] text-[#9E4A2A] mt-1">{state.errors.name[0]}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-[#1F2924] uppercase tracking-wider mb-1.5">
                Phone Number (for Audio Call) *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                inputMode="tel"
                autoComplete="tel"
                placeholder="e.g. +91 98378 12345"
                className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-base sm:text-sm text-[#1F2924] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:bg-white transition-all shadow-2xs"
              />
              {state.errors?.phone && (
                <p className="text-[11px] text-[#9E4A2A] mt-1">{state.errors.phone[0]}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="serviceType" className="block text-xs font-semibold text-[#1F2924] uppercase tracking-wider mb-1.5">
                Service Requested
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={activeService}
                onChange={(e) => setUserSelectedService(e.target.value)}
                className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-base sm:text-sm text-[#1F2924] focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:bg-white transition-all shadow-2xs"
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-xs font-semibold text-[#1F2924] uppercase tracking-wider mb-1.5">
                Preferred Call Timing
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                defaultValue="Morning (10 AM - 1 PM)"
                className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-base sm:text-sm text-[#1F2924] focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:bg-white transition-all shadow-2xs"
              >
                <option value="Morning (10 AM - 1 PM)">Morning (10:00 AM – 1:00 PM IST)</option>
                <option value="Afternoon (1 PM - 4 PM)">Afternoon (1:00 PM – 4:00 PM IST)</option>
                <option value="Evening (4 PM - 7 PM)">Evening (4:00 PM – 7:00 PM IST)</option>
                <option value="Flexible / As Available">Flexible / Any Available Time</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-[#1F2924] uppercase tracking-wider mb-1.5">
              Email Address (Optional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="your.email@example.com (optional)"
              className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-base sm:text-sm text-[#1F2924] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:bg-white transition-all shadow-2xs"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-[#1F2924] uppercase tracking-wider mb-1.5">
              Brief Context or Reason for Calling
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="A brief sentence on what you wish to discuss (stress, marriage communication, low mood, etc.)..."
              className="w-full px-4 py-3 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-base sm:text-sm text-[#1F2924] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:bg-white transition-all shadow-2xs"
            />
          </div>

          <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E0D2]/70 text-[11px] text-[#52635A] flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#9E4A2A] shrink-0" />
            <span>Regular calling hours: Monday to Saturday, 10:00 AM – 7:00 PM IST.</span>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full h-12 py-3 px-6 rounded-full bg-[#2D4A3E] text-white font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-[#1E332A] transition-colors disabled:opacity-50 flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-98"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Request...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Session Request</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
