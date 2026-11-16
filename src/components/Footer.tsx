import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1E332A] text-[#F2EDE4] pt-16 pb-12 border-t border-[#2D4A3E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#2D4A3E]/70">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-white">
              {siteConfig.name}
            </h3>
            <p className="text-xs text-[#FAF8F5]/80 leading-relaxed">
              Integrative Reiki Master, Biofield Healer, and Emotional Counselor providing non-dogmatic space for restoration in Agra & online worldwide.
            </p>
            <div className="pt-2 text-xs text-[#C5A059] font-medium">
              Registered Practice • Dayalbagh, Agra (UP)
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C5A059]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Dr. Shivie
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Therapy &amp; Sessions
                </Link>
              </li>
              <li>
                <Link href="/guide" className="hover:text-white transition-colors">
                  Beginner’s Guide &amp; FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Clinic Location &amp; Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Sessions Summary */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C5A059]">
              Modalities
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/80">
              <li>• In-Person Usui Reiki (Agra Clinic)</li>
              <li>• Global Distance Energy Projection</li>
              <li>• Emotional Integrative Counseling</li>
              <li>• Chakra Balancing &amp; Cord Cutting</li>
              <li>• Nervous System Rest &amp; Burnout Recovery</li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C5A059]">
              Agra Sanctuary
            </h4>
            <div className="space-y-2 text-xs text-[#FAF8F5]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B86B4B] shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.city}, UP {siteConfig.address.postalCode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Mon – Sat: 10:00 AM – 7:00 PM (By Appt)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{siteConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{siteConfig.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 text-center md:flex md:justify-between items-center text-xs text-[#FAF8F5]/60 space-y-4 md:space-y-0">
          <p className="max-w-xl text-left">
            <span className="font-semibold text-[#FAF8F5]/80">Medical Disclaimer:</span> Reiki and emotional wellness counseling are complementary holistic modalities meant to support self-healing, relaxation, and inner balance. They do not substitute for licensed medical diagnosis, clinical psychiatric care, or prescribed medical treatment.
          </p>
          <div className="flex items-center justify-center gap-1">
            <span>© 2026 {siteConfig.name}. Crafted with care.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
