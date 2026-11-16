import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MapPin, Mail, Sparkles, BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1E332A] text-[#F2EDE4] pt-16 pb-12 border-t border-[#2D4A3E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#2D4A3E]/70">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#C5A059]" />
              <span>{siteConfig.name}</span>
            </h3>
            <p className="text-xs text-[#FAF8F5]/80 leading-relaxed">
              An educational and contemplative knowledge space dedicated to Usui Reiki traditions, subtle biofield awareness, and emotional balance based in Dayalbagh, Agra.
            </p>
            <div className="pt-2 text-xs text-[#C5A059] font-medium">
              Purely Educational &amp; Non-Commercial
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C5A059]">
              Educational Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Dr. Shivie
                </Link>
              </li>
              <li>
                <Link href="/practices" className="hover:text-white transition-colors">
                  Reiki &amp; Energy Practices
                </Link>
              </li>
              <li>
                <Link href="/guide" className="hover:text-white transition-colors">
                  Beginner’s Guide &amp; FAQs
                </Link>
              </li>
              <li>
                <Link href="/connect" className="hover:text-white transition-colors">
                  Connect &amp; Share Reflections
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Principles */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C5A059]">
              Five Reiki Precepts (Gokai)
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/80 italic">
              <li>• Do not be angry</li>
              <li>• Do not worry</li>
              <li>• Be filled with gratitude</li>
              <li>• Devote yourself to your work</li>
              <li>• Be kind to all living beings</li>
            </ul>
          </div>

          {/* Roots & Inquiries */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C5A059]">
              Personal Sanctuary
            </h4>
            <div className="space-y-2 text-xs text-[#FAF8F5]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B86B4B] shrink-0 mt-0.5" />
                <span>
                  {siteConfig.location.locality}, {siteConfig.location.city}, {siteConfig.location.state}, {siteConfig.location.country}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <BookOpen className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="text-[11px] text-[#FAF8F5]/70">Open Access Educational Resource</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 text-center md:flex md:justify-between items-center text-xs text-[#FAF8F5]/60 space-y-4 md:space-y-0">
          <p className="max-w-2xl text-left">
            <span className="font-semibold text-[#FAF8F5]/80">Educational Disclaimer:</span> The information provided on this website is for educational and contemplative self-awareness purposes only. It does not constitute medical, psychological, or psychiatric advice, diagnosis, or clinical treatment.
          </p>
          <div className="flex items-center justify-center gap-1">
            <span>© 2026 {siteConfig.name}. Curated with care.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
