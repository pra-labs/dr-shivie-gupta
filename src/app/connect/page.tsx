import type { Metadata } from "next";
import { Mail, MapPin, Sparkles, BookOpen } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Connect & Reflections | Dr. Shivie Gupta | Agra, India",
  description: "Connect with Dr. Shivie Gupta, share personal mindfulness reflections, or ask questions regarding Usui Reiki traditions and biofield harmony.",
};

export default function ConnectPage() {
  return (
    <div className="py-16 sm:py-24 space-y-20">
      {/* 40-word Declarative Opening Summary for RAG Chunking */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
          Correspondence &amp; Feedback
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1F2924]">
          Connect &amp; Share Reflections
        </h1>
        <p className="text-base text-[#52635A] leading-relaxed max-w-2xl mx-auto">
          We welcome thoughtful dialogue from readers, researchers, and individuals interested in mindfulness and subtle energy traditions. Use this form to share reflections, ask philosophical questions, or connect with Dr. Shivie Gupta in Dayalbagh, Agra.
        </p>
      </section>

      {/* Main Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Educational Context */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#F2EDE4] p-8 rounded-3xl border border-[#E8E0D2] space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#1F2924]">
                Reader Dialogue &amp; Inquiries
              </h2>

              <div className="space-y-4 text-xs text-[#52635A]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B86B4B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F2924] block">Location:</strong>
                    <span>{siteConfig.location.locality}, {siteConfig.location.city}, {siteConfig.location.state} ({siteConfig.location.country})</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#2D4A3E] shrink-0" />
                  <div>
                    <strong className="text-[#1F2924] block">Direct Email:</strong>
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-[#2D4A3E]">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-[#C5A059] shrink-0" />
                  <div>
                    <strong className="text-[#1F2924] block">Purpose:</strong>
                    <span>Non-commercial educational knowledge exchange</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E0D2] text-[11px] text-[#52635A] leading-relaxed">
                <p>
                  Please note: This website does not offer medical diagnoses, psychiatric therapy, or commercial appointments. Inquiries regarding health emergencies should be directed to licensed healthcare providers.
                </p>
              </div>
            </div>

            {/* Quote / Reflection Box */}
            <div className="p-6 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-[#2D4A3E]">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span className="font-serif text-base font-bold">The Spirit of Inquiry</span>
              </div>
              <p className="text-xs text-[#52635A] italic leading-relaxed">
                &ldquo;True learning is not the accumulation of dogma, but the patient clearing away of mental agitation so our natural inner stillness can shine through.&rdquo;
              </p>
              <div className="text-[11px] font-semibold text-[#1F2924]">
                — Dr. Shivie Gupta
              </div>
            </div>
          </div>

          {/* Right: Thought / Reflection Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
