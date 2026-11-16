import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, BookOpen, Sun, MapPin, Feather, Layers, Compass } from "lucide-react";
import { practicesData, reflectionsData } from "@/data/site-content";

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-32 pb-20">
      {/* 1. Hero Section - Optimized for Mobile Above-the-Fold Rhythm */}
      <section className="relative overflow-hidden pt-6 sm:pt-14 lg:pt-20">
        {/* Soft Ambient Background Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-[#2D4A3E]/5 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
              {/* Eyebrow Pill with Responsive Text Sizing & No Awkward Wrap */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#F2EDE4] border border-[#E8E0D2] text-[#2D4A3E] text-[10px] sm:text-xs font-semibold tracking-wide uppercase max-w-full">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C5A059] shrink-0" />
                <span className="sm:hidden">Wellness Resource • Dayalbagh, Agra</span>
                <span className="hidden sm:inline">Educational Wellness Resource • Dayalbagh, Agra</span>
              </div>

              {/* Title with text-balance and balanced line wraps */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] text-[#1F2924] text-balance">
                Understanding Subtle Energy &amp;{" "}
                <span className="italic font-serif text-[#2D4A3E] font-medium">Reiki Traditions</span> for{" "}
                <span className="italic font-serif text-[#B86B4B]">Inner Stillness</span>
              </h1>

              {/* 40-word Declarative Opening Summary for RAG Chunking */}
              <p className="text-sm sm:text-base lg:text-lg text-[#52635A] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Curated by Dr. Shivie Gupta in Dayalbagh, Agra, this open educational resource explores Usui Reiki traditions, somatic relaxation, and emotional balance. We provide secular, grounded perspectives on biofield harmony—free from commercial sales, fees, or supernatural dogmas.
              </p>

              {/* Action Buttons - Crisp Secondary Button Contrast on Mobile */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
                <Link
                  href="/guide"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#2D4A3E] text-white font-medium text-xs sm:text-sm shadow-md hover:bg-[#1E332A] hover:shadow-lg transition-all"
                >
                  <span>Start the Beginner&apos;s Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/practices"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-white sm:bg-[#F2EDE4] text-[#1F2924] border-2 border-[#2D4A3E]/30 sm:border-[#E8E0D2] font-semibold sm:font-medium text-xs sm:text-sm hover:bg-[#E8DFC8] transition-all shadow-xs"
                >
                  Explore Reiki Practices
                </Link>
              </div>

              {/* Responsive Metrics: 2-column mobile layout + 3rd item centered, 3-column desktop */}
              <div className="pt-4 sm:pt-6 border-t border-[#E8E0D2]/80 max-w-lg mx-auto lg:mx-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-center sm:text-left">
                  <div className="p-2 sm:p-0 rounded-xl bg-white/60 sm:bg-transparent border border-[#E8E0D2]/50 sm:border-0">
                    <div className="text-lg sm:text-xl font-serif font-bold text-[#2D4A3E]">100%</div>
                    <div className="text-[10px] sm:text-[11px] text-[#52635A]">Non-Commercial &amp; Open</div>
                  </div>
                  <div className="p-2 sm:p-0 rounded-xl bg-white/60 sm:bg-transparent border border-[#E8E0D2]/50 sm:border-0">
                    <div className="text-lg sm:text-xl font-serif font-bold text-[#2D4A3E]">Usui &amp; Karuna</div>
                    <div className="text-[10px] sm:text-[11px] text-[#52635A]">Traditional Lineages</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 p-2 sm:p-0 rounded-xl bg-white/60 sm:bg-transparent border border-[#E8E0D2]/50 sm:border-0">
                    <div className="text-lg sm:text-xl font-serif font-bold text-[#2D4A3E]">Dayalbagh, Agra</div>
                    <div className="text-[10px] sm:text-[11px] text-[#52635A]">Contemplative Roots</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual / Portrait - Naturally Framed for Above the Fold */}
            <div className="lg:col-span-5 flex justify-center pt-2 sm:pt-0">
              <div className="relative w-full max-w-[280px] sm:max-w-sm aspect-[5/6] sm:aspect-[6/7] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#F2EDE4] group">
                <Image
                  src="/images/dr-shivie-portrait.svg"
                  alt="Dr. Shivie Gupta, Reiki Master & Contemplative Educator in Agra"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur shadow-md border border-[#E8E0D2]/70 text-left">
                  <div className="font-serif text-base sm:text-lg font-bold text-[#2D4A3E]">
                    Dr. Shivie Gupta, PhD
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#52635A]">
                    Usui &amp; Karuna Reiki Master • Educator
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#B86B4B] font-medium">
                    <MapPin className="w-3 h-3" />
                    <span>Dayalbagh, Agra (UP)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Philosophy & Framework */}
      <section className="bg-[#F2EDE4]/60 py-14 sm:py-20 border-y border-[#E8E0D2]/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
              Contemplative Synthesis
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1F2924] text-balance">
              Bridging Biofield Awareness &amp; Emotional Stillness
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[#52635A] leading-relaxed">
              Energy traditions are often misunderstood as esoteric or supernatural. We explore Reiki as an intentional practice of quiet presence, somatic relaxation, and ethical mindfulness.
            </p>
          </div>

          <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E0D2] shadow-sm hover:shadow-md transition-shadow space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FAF8F5] text-[#2D4A3E] flex items-center justify-center border border-[#E8E0D2]">
                <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-[#2D4A3E]" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1F2924]">
                1. Beyond Mere Intellect
              </h3>
              <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                Analyzing stress through thoughts alone can sometimes reinforce mental looping. Biofield awareness gently attends to where tension lives in the breath and body.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E0D2] shadow-sm hover:shadow-md transition-shadow space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FAF8F5] text-[#B86B4B] flex items-center justify-center border border-[#E8E0D2]">
                <Feather className="w-5 h-5 sm:w-6 sm:h-6 text-[#B86B4B]" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1F2924]">
                2. Secular &amp; Non-Dogmatic
              </h3>
              <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                Zero fortune telling, astrology, or superstitious promises. Our discussions honor psychological dignity, scientific physiology, and traditional Japanese principles.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E0D2] shadow-sm hover:shadow-md transition-shadow space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FAF8F5] text-[#C5A059] flex items-center justify-center border border-[#E8E0D2]">
                <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1F2924]">
                3. Gentle Daily Integration
              </h3>
              <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                Learn how the five historical Gokai precepts can transform ordinary moments of frustration, anxiety, and hurry into quiet opportunities for self-compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Practices Overview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
              Educational Topics
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1F2924] mt-1">
              Core Energy Disciplines
            </h2>
          </div>
          <Link
            href="/practices"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2D4A3E] hover:text-[#1E332A]"
          >
            <span>Read in-depth practice guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {practicesData.map((practice) => (
            <div
              key={practice.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3 sm:space-y-4">
                <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-[#F2EDE4] text-[#2D4A3E] inline-block">
                  {practice.tradition}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2924]">
                  {practice.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                  {practice.tagline}
                </p>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-semibold text-[#1F2924] uppercase tracking-wider block">
                    Core Themes:
                  </span>
                  <ul className="space-y-1 text-xs text-[#52635A]">
                    {practice.keyThemes.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 border-t border-[#E8E0D2] mt-5 flex items-center justify-between">
                <Link
                  href={`/practices#${practice.slug}`}
                  className="text-xs font-semibold text-[#2D4A3E] hover:underline flex items-center gap-1"
                >
                  <span>Explore principles &amp; self-care</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[10px] sm:text-[11px] text-[#B86B4B] font-medium">Educational</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Agra Roots & Reflection Space */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#F2EDE4] border border-[#E8E0D2] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 sm:space-y-6">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
              Personal Roots
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1F2924]">
              A Grounded Perspective from Agra
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[#52635A] leading-relaxed">
              Dr. Shivie Gupta resides and reflects in Dayalbagh, Agra—a peaceful community steeped in rich cultural heritage and quiet nature. This educational portal shares insights gathered over years of contemplative inquiry, offering readers practical pathways to reduce inner turmoil.
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#1F2924]">
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#2D4A3E] shrink-0" />
                <span>Freely shared articles, self-care routines, and guides</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#2D4A3E] shrink-0" />
                <span>Grounded bridge between traditional lineages and modern research</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2D4A3E] hover:underline"
              >
                <span>Read Dr. Shivie&apos;s academic background &amp; lineage</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white shadow-md">
            <Image
              src="/images/clinic-sanctuary.svg"
              alt="Contemplative Sanctuary Dayalbagh Agra"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. Reader Reflections */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3 mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
            Reader Notes
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1F2924]">
            Reflections &amp; Insights
          </h2>
          <p className="text-xs sm:text-sm text-[#52635A]">
            Thoughts from seekers and learners engaging with these educational resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reflectionsData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm flex flex-col justify-between"
            >
              <p className="text-xs sm:text-sm text-[#52635A] italic leading-relaxed">
                &ldquo;{item.note}&rdquo;
              </p>
              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#E8E0D2]">
                <div className="font-serif text-sm sm:text-base font-bold text-[#1F2924]">
                  {item.name}
                </div>
                <div className="text-[11px] sm:text-xs text-[#52635A]">{item.location}</div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-[#C5A059] mt-0.5">
                  Topic: {item.topic}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
