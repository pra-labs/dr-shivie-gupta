import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Compass, Sun, MapPin, Feather, Layers } from "lucide-react";
import { servicesData, testimonialsData } from "@/data/site-content";
import { getWhatsAppBookingUrl } from "@/config/site";

export default function HomePage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 sm:pt-20 lg:pt-24">
        {/* Soft Ambient Background Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-[#2D4A3E]/5 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EDE4] border border-[#E8E0D2] text-[#2D4A3E] text-xs font-semibold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Sanctuary of Healing in Dayalbagh, Agra</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] text-[#1F2924]">
                Restore Inner Equilibrium Through{" "}
                <span className="italic font-serif text-[#2D4A3E] font-medium">Reiki Healing</span> &amp;{" "}
                <span className="italic font-serif text-[#B86B4B]">Emotional Counseling</span>
              </h1>

              <p className="text-base sm:text-lg text-[#52635A] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Dr. Shivie Gupta offers a calm, grounded space where Japanese biofield traditions meet compassionate emotional counseling. Reclaim serenity, resolve somatic fatigue, and release emotional burdens.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={getWhatsAppBookingUrl("Hello Dr. Shivie, I would like to book a consultation in Agra.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#2D4A3E] text-white font-medium text-sm shadow-md hover:bg-[#1E332A] hover:shadow-lg transition-all"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#F2EDE4] text-[#1F2924] border border-[#E8E0D2] font-medium text-sm hover:bg-[#E8DFC8] transition-all"
                >
                  Explore Sessions
                </Link>
              </div>

              {/* Badges / Micro Trust */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-[#E8E0D2]/80 max-w-lg mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-xl font-serif font-bold text-[#2D4A3E]">12+</div>
                  <div className="text-[11px] text-[#52635A]">Years Healing Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl font-serif font-bold text-[#2D4A3E]">100%</div>
                  <div className="text-[11px] text-[#52635A]">Non-Dogmatic Space</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl font-serif font-bold text-[#2D4A3E]">Agra &amp; Global</div>
                  <div className="text-[11px] text-[#52635A]">In-Person &amp; Distance</div>
                </div>
              </div>
            </div>

            {/* Right Visual / Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-[6/7] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#F2EDE4] group">
                <Image
                  src="/images/dr-shivie-portrait.svg"
                  alt="Dr. Shivie Gupta, Reiki Master & Emotional Counselor in Agra"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-x-4 bottom-4 p-4 rounded-2xl bg-white/95 backdrop-blur shadow-md border border-[#E8E0D2]/70 text-left">
                  <div className="font-serif text-lg font-bold text-[#2D4A3E]">
                    Dr. Shivie Gupta, PhD
                  </div>
                  <div className="text-xs text-[#52635A]">
                    Usui &amp; Karuna Reiki Master • Biofield Counselor
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-[11px] text-[#B86B4B] font-medium">
                    <MapPin className="w-3 h-3" />
                    <span>Dayalbagh Sanctuary, Agra</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Bridge: Why Reiki & Counseling */}
      <section className="bg-[#F2EDE4]/60 py-20 border-y border-[#E8E0D2]/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
              Integrated Mind-Body Synthesis
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2924]">
              The Bridge: Why Both Energy Healing &amp; Counseling?
            </h2>
            <p className="text-sm sm:text-base text-[#52635A] leading-relaxed">
              True emotional liberation rarely happens through cognitive analysis alone, nor through passive energetic resets alone. We unite both poles to nurture complete healing.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#E8E0D2] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] text-[#2D4A3E] flex items-center justify-center border border-[#E8E0D2]">
                <Layers className="w-6 h-6 text-[#2D4A3E]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1F2924]">
                1. Beyond Mere Talking
              </h3>
              <p className="text-sm text-[#52635A] leading-relaxed">
                Conventional talk therapy can sometimes perpetuate mental looping. Biofield Reiki directly addresses where trauma and anxiety hide—in the fascia, breath, and autonomic nervous system.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E8E0D2] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] text-[#B86B4B] flex items-center justify-center border border-[#E8E0D2]">
                <Feather className="w-6 h-6 text-[#B86B4B]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1F2924]">
                2. Non-Dogmatic &amp; Grounded
              </h3>
              <p className="text-sm text-[#52635A] leading-relaxed">
                No superstition, rigid dogmas, or occultism. Our work is grounded in respectful psychological ethics, physiological relaxation responses, and ancient biofield wisdom.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E8E0D2] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] text-[#C5A059] flex items-center justify-center border border-[#E8E0D2]">
                <Sun className="w-6 h-6 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1F2924]">
                3. Gentle Emotional Integration
              </h3>
              <p className="text-sm text-[#52635A] leading-relaxed">
                As stagnant emotional energy releases during Reiki, Dr. Shivie provides clear, grounded counseling guidance so you can make informed, courageous life choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Modalities Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
              Session Types
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2924] mt-1">
              Core Healing Modalities
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2D4A3E] hover:text-[#1E332A]"
          >
            <span>View all details &amp; pricing</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#F2EDE4] text-[#2D4A3E]">
                    {service.format}
                  </span>
                  <span className="text-xs font-semibold text-[#B86B4B]">
                    {service.duration}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1F2924]">
                  {service.title}
                </h3>
                <p className="text-sm text-[#52635A] leading-relaxed">
                  {service.tagline}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-[#1F2924] uppercase tracking-wider block">
                    Ideal For:
                  </span>
                  <ul className="space-y-1 text-xs text-[#52635A]">
                    {service.idealFor.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-[#E8E0D2] mt-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#52635A] uppercase block">Exchange</span>
                  <span className="text-sm font-bold text-[#2D4A3E]">
                    {service.pricingPlaceholder}
                  </span>
                </div>
                <a
                  href={getWhatsAppBookingUrl(`Hello Dr. Shivie, I am interested in ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-[#2D4A3E] text-white hover:bg-[#1E332A] transition-colors"
                >
                  Book Session
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Agra Sanctuary Highlight */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F2EDE4] border border-[#E8E0D2] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
              In-Person Sanctuary
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2924]">
              A Quiet Haven in the Heart of Agra
            </h2>
            <p className="text-sm sm:text-base text-[#52635A] leading-relaxed">
              Located in Dayalbagh, our studio provides a fragrant, quiet retreat far removed from the bustle of the city. Soft lighting, botanical scents, natural acoustics, and clean energetic hygiene ensure your nervous system can truly let go.
            </p>
            <div className="space-y-3 text-sm text-[#1F2924]">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#2D4A3E]" />
                <span>Strict 1-on-1 private appointments with zero overlap</span>
              </div>
              <div className="flex items-center gap-3">
                <HeartHandshake className="w-5 h-5 text-[#2D4A3E]" />
                <span>Complete confidentiality for personal counseling disclosures</span>
              </div>
              <div className="flex items-center gap-3">
                <Compass className="w-5 h-5 text-[#2D4A3E]" />
                <span>Easily accessible from Kamla Nagar, Sanjay Place, and Highway</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D4A3E] hover:underline"
              >
                <span>View location details &amp; clinic hours</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white shadow-md">
            <Image
              src="/images/clinic-sanctuary.svg"
              alt="Dr. Shivie Gupta Clinic Sanctuary Dayalbagh Agra"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. Client Reflections / Testimonials */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
            Client Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2924]">
            Reflections from the Path
          </h2>
          <p className="text-sm text-[#52635A]">
            Real impressions from clients who have experienced in-person sessions in Agra and distance healing globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm flex flex-col justify-between"
            >
              <p className="text-sm text-[#52635A] italic leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="pt-6 mt-6 border-t border-[#E8E0D2]">
                <div className="font-serif text-base font-bold text-[#1F2924]">
                  {item.name}
                </div>
                <div className="text-xs text-[#52635A]">{item.location}</div>
                <div className="text-[11px] font-semibold text-[#C5A059] mt-1">
                  {item.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
