"use client";

import { useState, useEffect } from "react";
import { X, Send, ShieldCheck, CheckCircle2, Loader2, Sparkles, MessageCircle } from "lucide-react";
import { submitContactInquiry, type ContactFormState } from "@/app/actions/contact";
import { siteConfig } from "@/config/site";

const SERVICE_OPTIONS = [
  { value: "Individual Counselling (Voice Call)", label: "Individual Voice (₹1,200 / 50m)" },
  { value: "Couple Counselling (Voice Call)", label: "Couple Guidance (₹1,800 / 60m)" },
  { value: "Family Counselling (Voice Call)", label: "Family Dialogue (₹2,200 / 60m)" },
  { value: "Reiki Healing (Optional)", label: "Reiki Balancing (₹1,000 / 45m)" },
];

export function BookingBottomSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState("Individual Counselling (Voice Call)");
  const [includeReiki, setIncludeReiki] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredTime, setPreferredTime] = useState("Morning (10 AM - 1 PM)");
  const [notes, setNotes] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [formState, setFormState] = useState<ContactFormState | null>(null);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ service?: string }>;
      const s = customEvent.detail?.service?.toLowerCase();
      if (s) {
        if (s.includes("couple")) setService("Couple Counselling (Voice Call)");
        else if (s.includes("family")) setService("Family Counselling (Voice Call)");
        else if (s.includes("reiki")) setService("Reiki Healing (Optional)");
        else setService("Individual Counselling (Voice Call)");
      }
      setFormState(null);
      setIsOpen(true);
    };

    window.addEventListener("open-booking-modal", handleOpen);
    return () => window.removeEventListener("open-booking-modal", handleOpen);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    setFormState(null);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("preferredTime", preferredTime);
    formData.append(
      "serviceType",
      includeReiki && !service.includes("Reiki")
        ? `${service} + Optional Reiki Add-on`
        : service
    );
    formData.append("message", notes);

    try {
      const res = await submitContactInquiry(
        { success: false, message: "" },
        formData
      );
      setFormState(res);
      if (res.success) {
        setName("");
        setPhone("");
        setNotes("");
      }
    } catch {
      setFormState({
        success: false,
        message: "An error occurred while submitting your request. Please try WhatsApp.",
      });
    } finally {
      setIsPending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs transition-opacity duration-200 animate-in fade-in"
        aria-hidden="true"
      />

      {/* Sheet Container */}
      <div className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-3xl border-t border-[#E8E0D2] shadow-2xl max-h-[92vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
        {/* Grab Handle */}
        <div className="pt-3 pb-2 flex justify-center shrink-0">
          <div className="w-12 h-1.5 rounded-full bg-[#E8E0D2]" />
        </div>

        {/* Sheet Header */}
        <div className="px-5 pb-3 border-b border-[#E8E0D2] flex items-center justify-between shrink-0">
          <div>
            <h3 className="font-serif text-lg font-bold text-[#1F2924]">
              Request a Voice Session
            </h3>
            <p className="text-[11px] text-[#52635A]">
              Audio / Phone Call Only • Complete Confidentiality
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 min-w-[44px] min-h-[44px] rounded-full text-[#52635A] hover:bg-[#FAF8F5] flex items-center justify-center transition-colors active:scale-95"
            aria-label="Close booking sheet"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sheet Content */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {formState?.success ? (
            <div className="p-5 rounded-2xl bg-[#F2EDE4] border border-[#2D4A3E]/20 text-[#2D4A3E] space-y-3">
              <div className="flex items-center gap-2 font-serif text-base font-bold">
                <CheckCircle2 className="w-5 h-5 text-[#2D4A3E]" />
                <span>Inquiry Received</span>
              </div>
              <p className="text-xs leading-relaxed">{formState.message}</p>
              <div className="pt-2 text-[11px] text-[#52635A] flex items-center gap-1.5 border-t border-[#E8E0D2]/50">
                <ShieldCheck className="w-4 h-4 text-[#2D4A3E]" />
                <span>Your details remain completely private.</span>
              </div>
              <button
                onClick={handleClose}
                className="w-full mt-2 py-2.5 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {formState?.message && !formState.success && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                  {formState.message}
                </div>
              )}

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1.5">
                  Select Session Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {SERVICE_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setService(opt.value)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all active:scale-[0.98] ${
                        service === opt.value
                          ? "border-[#2D4A3E] bg-[#F2EDE4] font-semibold text-[#2D4A3E]"
                          : "border-[#E8E0D2] bg-[#FAF8F5] text-[#52635A]"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Reiki Add-on Toggle */}
              {!service.includes("Reiki") && (
                <div
                  onClick={() => setIncludeReiki(!includeReiki)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between active:scale-[0.98] ${
                    includeReiki
                      ? "bg-[#FAF8F5] border-[#9E4A2A] text-[#1F2924]"
                      : "bg-white border-[#E8E0D2] text-[#52635A]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C5A059]" />
                    <div>
                      <span className="text-xs font-semibold block">
                        Include Reiki Balancing Add-on?
                      </span>
                      <span className="text-[10px] text-[#52635A]">
                        +₹1,000 • Traditional Usui biofield relaxation
                      </span>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={includeReiki}
                    onChange={() => {}}
                    className="w-4 h-4 accent-[#2D4A3E]"
                  />
                </div>
              )}

              {/* Contact Inputs (16px to prevent iOS auto-zoom) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Meera Sharma"
                  className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-base text-[#1F2924] focus:outline-none focus:ring-2 focus:ring-[#2D4A3E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                  Phone Number (for Audio Call) *
                </label>
                <input
                  type="tel"
                  required
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98378 12345"
                  className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-base text-[#1F2924] focus:outline-none focus:ring-2 focus:ring-[#2D4A3E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                  Preferred Call Timing
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-base text-[#1F2924] focus:outline-none focus:ring-2 focus:ring-[#2D4A3E]"
                >
                  <option value="Morning (10 AM - 1 PM)">Morning (10:00 AM – 1:00 PM IST)</option>
                  <option value="Afternoon (1 PM - 4 PM)">Afternoon (1:00 PM – 4:00 PM IST)</option>
                  <option value="Evening (4 PM - 7 PM)">Evening (4:00 PM – 7:00 PM IST)</option>
                  <option value="Flexible / As Available">Flexible / Any Available Time</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1">
                  Brief Topic or Concern (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="A sentence on what you'd like to talk through..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-base text-[#1F2924] focus:outline-none focus:ring-2 focus:ring-[#2D4A3E]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col gap-2 pb-safe">
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full min-h-[48px] py-3 rounded-full bg-[#2D4A3E] text-white font-medium text-xs uppercase tracking-wider hover:bg-[#1E332A] transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] disabled:opacity-50"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Session Request</span>
                    </>
                  )}
                </button>

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] py-2.5 rounded-full border border-emerald-600/40 text-emerald-800 bg-emerald-50 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Or Schedule via WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
