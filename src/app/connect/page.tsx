import type { Metadata } from "next";
import { Mail, PhoneCall, MapPin, Clock, MessageCircle, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Request a Voice Session | Mrs. Shivie Gupta | Agra, India",
  description: "Request a confidential voice-only phone counselling session or optional Reiki consultation with Mrs. Shivie Gupta (~35 years experience).",
};

export default function ConnectPage() {
  return (
    <div className="py-10 sm:py-16 lg:py-20 space-y-10 sm:space-y-16">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 pb-2 sm:pb-4">
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#9E4A2A]">
          Direct Telephone &amp; WhatsApp Inquiries
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1F2924] text-balance">
          Request a Voice Counselling Session
        </h1>
        <p className="text-xs sm:text-sm lg:text-base text-[#52635A] leading-relaxed max-w-2xl mx-auto text-balance">
          Every consultation with Mrs. Shivie Gupta is held strictly over audio/phone call for your privacy and peace of mind. Use this form to request your preferred day and time, or reach out directly by phone.
        </p>
      </section>

      {/* Main Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Form Column */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <ContactForm />
          </div>

          {/* Contact Details Column */}
          <div className="order-2 lg:order-1 lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="bg-[#F2EDE4] p-6 sm:p-8 rounded-3xl border border-[#E8E0D2] space-y-5">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2924]">
                Direct Contact Details
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#52635A]">
                <div className="flex items-start gap-3">
                  <PhoneCall className="w-5 h-5 text-[#2D4A3E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F2924] block">Phone / Audio Calls:</strong>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-[#2D4A3E] font-semibold text-base hover:underline"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F2924] block">WhatsApp Message:</strong>
                    <a
                      href={siteConfig.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9E4A2A] font-semibold underline hover:text-[#2D4A3E]"
                    >
                      Send Message via WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#9E4A2A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F2924] block">Calling Hours:</strong>
                    <span>Monday to Saturday: 10:00 AM – 7:00 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#52635A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F2924] block">Location:</strong>
                    <span>{siteConfig.location.locality}, {siteConfig.location.city}, {siteConfig.location.state}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#2D4A3E] shrink-0" />
                  <div>
                    <strong className="text-[#1F2924] block">Email:</strong>
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
                  <strong>Confidentiality Notice:</strong> All discussions remain private between you and Mrs. Shivie Gupta. Voice sessions eliminate video recordings, webcam exposure, or clinic waiting room visibility.
                </p>
              </div>
            </div>

            {/* Emergency Boundary Notice */}
            <div className="p-6 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-[#9E4A2A]">
                <ShieldCheck className="w-4 h-4 text-[#9E4A2A]" />
                <span className="font-serif text-sm font-bold">Mental Health Emergency Note</span>
              </div>
              <p className="text-xs text-[#52635A] leading-relaxed">
                This practice provides personal and relational guidance; it is not an emergency psychiatric hospital or acute crisis line. If in acute crisis, please call Tele-MANAS (14416) or visit a hospital.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
