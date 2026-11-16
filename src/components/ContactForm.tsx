"use client";

import { useActionState } from "react";
import { submitContactInquiry, type ContactFormState } from "@/app/actions/contact";
import { servicesData } from "@/data/site-content";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactInquiry, initialState);

  return (
    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E8E0D2] shadow-sm">
      <h2 className="font-serif text-2xl font-bold text-[#1F2924] mb-2">
        Request a Consultation
      </h2>
      <p className="text-xs text-[#52635A] mb-8">
        Fill out this form and our Agra clinic coordinator will get back to you within 24 hours.
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
        </div>
      ) : (
        <form action={formAction} className="space-y-5">
          {state.message && !state.success && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{state.message}</span>
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-[#1F2924] uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="e.g. Priyanshi Saxena"
              className="w-full px-4 py-3 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-sm text-[#1F2924] focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:bg-white transition-all"
            />
            {state.errors?.name && (
              <p className="text-[11px] text-red-600 mt-1">{state.errors.name[0]}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-[#1F2924] uppercase tracking-wider mb-1.5">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-sm text-[#1F2924] focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:bg-white transition-all"
              />
              {state.errors?.phone && (
                <p className="text-[11px] text-red-600 mt-1">{state.errors.phone[0]}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[#1F2924] uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-sm text-[#1F2924] focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:bg-white transition-all"
              />
              {state.errors?.email && (
                <p className="text-[11px] text-red-600 mt-1">{state.errors.email[0]}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-xs font-semibold text-[#1F2924] uppercase tracking-wider mb-1.5">
              Desired Session Modality *
            </label>
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className="w-full px-4 py-3 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-sm text-[#1F2924] focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:bg-white transition-all"
            >
              <option value="" disabled>Select a session...</option>
              {servicesData.map((svc) => (
                <option key={svc.id} value={svc.title}>
                  {svc.title} ({svc.format})
                </option>
              ))}
              <option value="Undecided / Initial Consultation">
                Not sure yet / General Consultation
              </option>
            </select>
            {state.errors?.service && (
              <p className="text-[11px] text-red-600 mt-1">{state.errors.service[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="notes" className="block text-xs font-semibold text-[#1F2924] uppercase tracking-wider mb-1.5">
              Primary Concerns or Intentions (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              placeholder="e.g. Work stress, sleep issues, feeling emotionally blocked..."
              className="w-full px-4 py-3 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-sm text-[#1F2924] focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:bg-white transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3.5 px-6 rounded-full bg-[#2D4A3E] text-white font-medium text-xs uppercase tracking-wider hover:bg-[#1E332A] transition-colors disabled:opacity-50 flex items-center justify-center gap-2 shadow-sm"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Inquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Consultation Request</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
