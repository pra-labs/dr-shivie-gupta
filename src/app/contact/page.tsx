import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { siteConfig, getWhatsAppBookingUrl } from "@/config/site";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Visit Clinic | Dayalbagh, Agra | Dr. Shivie Gupta",
  description: "Schedule a Reiki healing or emotional counseling session with Dr. Shivie Gupta in Dayalbagh, Agra or reserve a distance healing session.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 space-y-20">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
          In-Person &amp; Distance
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1F2924]">
          Connect &amp; Reserve Your Session
        </h1>
        <p className="text-base text-[#52635A] leading-relaxed">
          We welcome inquiries from across Agra, Uttar Pradesh, and internationally. Choose the communication channel most convenient for you.
        </p>
      </section>

      {/* Main Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info & Map placeholder */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#F2EDE4] p-8 rounded-3xl border border-[#E8E0D2] space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#1F2924]">
                Agra Healing Studio
              </h2>

              <div className="space-y-4 text-xs text-[#52635A]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B86B4B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F2924] block">Address:</strong>
                    <span>{siteConfig.address.street}</span>
                    <br />
                    <span>{siteConfig.address.city}, {siteConfig.address.state} — {siteConfig.address.postalCode}</span>
                    <br />
                    <span className="text-[11px] text-[#52635A] italic">(Near Kamla Nagar / Dayalbagh)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#2D4A3E] shrink-0" />
                  <div>
                    <strong className="text-[#1F2924] block">Hours:</strong>
                    <span>Monday – Saturday: 10:00 AM – 7:00 PM</span>
                    <br />
                    <span className="text-[11px] text-[#52635A] italic">Strictly by prior appointment</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#C5A059] shrink-0" />
                  <div>
                    <strong className="text-[#1F2924] block">Phone / WhatsApp:</strong>
                    <a href={`tel:${siteConfig.phone}`} className="hover:text-[#2D4A3E]">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#2D4A3E] shrink-0" />
                  <div>
                    <strong className="text-[#1F2924] block">Email:</strong>
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-[#2D4A3E]">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E0D2] space-y-3">
                <a
                  href={getWhatsAppBookingUrl("Hello Dr. Shivie, I would like to check session availability.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider hover:opacity-95 transition-opacity shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Embedded Map Representation */}
            <div className="p-6 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-[#1F2924]">
                <span>Agra Clinic Coordinates</span>
                <span className="text-[#B86B4B]">Dayalbagh, Agra</span>
              </div>
              <div className="w-full h-48 rounded-2xl bg-[#F2EDE4] border border-[#E8E0D2] flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
                <MapPin className="w-8 h-8 text-[#B86B4B] mb-2 animate-bounce" />
                <div className="font-serif text-sm font-bold text-[#1F2924]">
                  Dayalbagh Road, Agra (UP)
                </div>
                <div className="text-[11px] text-[#52635A] mt-1">
                  Latitude: 27.2185° N, Longitude: 78.0125° E
                </div>
                <div className="mt-3">
                  <a
                    href="https://maps.google.com/?q=Dayalbagh+Agra+Uttar+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2D4A3E] hover:underline"
                  >
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact / Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
