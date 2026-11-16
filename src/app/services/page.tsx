import type { Metadata } from "next";
import { Clock, CheckCircle, MessageCircle } from "lucide-react";
import { servicesData } from "@/data/site-content";
import { getWhatsAppBookingUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Reiki Sessions & Emotional Counseling Services | Agra & Distance",
  description: "Explore in-person Usui Reiki healing in Agra, international distance healing sessions, chakra cord-cutting, and integrative emotional counseling with Dr. Shivie Gupta.",
};

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24 space-y-20">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
          Healing Modalities &amp; Pricing
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1F2924]">
          Therapeutic Offerings
        </h1>
        <p className="text-base text-[#52635A] leading-relaxed">
          Every human biofield and emotional landscape is unique. Each session is tailored around your immediate intentions, combining Japanese energy balancing with empathetic counseling.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Overview */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#F2EDE4] text-[#2D4A3E]">
                    {service.format}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-[#B86B4B]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.duration}</span>
                  </span>
                </div>

                <h2 className="font-serif text-3xl font-bold text-[#1F2924]">
                  {service.title}
                </h2>

                <p className="text-sm text-[#52635A] leading-relaxed">
                  {service.tagline}
                </p>

                {/* What happens */}
                <div className="space-y-2 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#2D4A3E]">
                    What Happens During the Session:
                  </h3>
                  <ul className="space-y-2 text-xs text-[#52635A]">
                    {service.whatHappens.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expected Benefits */}
                <div className="space-y-2 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                    Tangible Benefits:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((b, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-3 py-1 rounded-lg bg-[#FAF8F5] border border-[#E8E0D2] text-[11px] text-[#1F2924]"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Pricing & Booking */}
              <div className="lg:col-span-5 bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#E8E0D2] flex flex-col justify-between h-full space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#52635A] block mb-1">
                    Exchange &amp; Contribution
                  </span>
                  <div className="text-2xl font-serif font-bold text-[#2D4A3E]">
                    {service.pricingPlaceholder}
                  </div>
                  <p className="text-[11px] text-[#52635A] mt-2">
                    Includes initial intake review, herbal tea integration, and post-session guidance.
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1F2924] block">
                    Ideal For:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#52635A]">
                    {service.idealFor.map((ideal, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B86B4B]" />
                        <span>{ideal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E8E0D2] space-y-3">
                  <a
                    href={getWhatsAppBookingUrl(`Hello Dr. Shivie, I would like to schedule: ${service.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E332A] transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Reserve via WhatsApp</span>
                  </a>
                  <p className="text-[10px] text-center text-[#52635A]">
                    Advance reservation recommended. Flexible rescheduling with 12h notice.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
