import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MapPin, Mail, PhoneCall, Clock, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1E332A] text-[#F2EDE4] pt-16 pb-12 border-t border-[#2D4A3E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#2D4A3E]/70">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-white">
              <span>{siteConfig.name}</span>
            </h3>
            <p className="text-xs text-[#FAF8F5]/80 leading-relaxed">
              Confidential voice-only counselling for individuals, couples, and families across India, with optional Reiki healing. ~35 years of dedicated practice based in Dayalbagh, Agra.
            </p>
            <div className="pt-1 text-xs text-[#C5A059] font-medium">
              Audio Calls Only • Complete Privacy
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C5A059]">
              Practice Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Mrs. Shivie Gupta
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services &amp; Session Pricing
                </Link>
              </li>
              <li>
                <Link href="/guide" className="hover:text-white transition-colors">
                  Client FAQs
                </Link>
              </li>
              <li>
                <Link href="/connect" className="hover:text-white transition-colors">
                  Request a Voice Session
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Principles */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C5A059]">
              Session Offerings
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/80">
              <li>Individual Counselling (Voice - 50m)</li>
              <li>Couple &amp; Relationship Counselling (60m)</li>
              <li>Family &amp; Intergenerational (60m)</li>
              <li>Traditional Reiki Balancing (Optional)</li>
              <li>Telephone &amp; WhatsApp Audio Consults</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C5A059]">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#FAF8F5]/80">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white font-medium text-sm">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline"
                >
                  Message on WhatsApp
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#B86B4B] shrink-0 mt-0.5" />
                <span>Mon – Sat: 10:00 AM – 7:00 PM IST</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B86B4B] shrink-0 mt-0.5" />
                <span>
                  {siteConfig.location.locality}, {siteConfig.location.city}, {siteConfig.location.state}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 text-center md:flex md:justify-between items-center text-xs text-[#FAF8F5]/60 space-y-4 md:space-y-0">
          <p className="max-w-2xl text-left">
            <span className="font-semibold text-[#FAF8F5]/80">Non-Emergency Notice:</span> This counselling practice provides emotional and relationship guidance via phone call. It does not provide emergency crisis response, medical diagnosis, or psychiatric prescriptions. If experiencing acute distress, call Tele-MANAS (14416).
          </p>
          <div className="flex items-center justify-center gap-1">
            <span>© 2026 {siteConfig.name}. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
