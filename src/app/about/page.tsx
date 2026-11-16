import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Compass, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "About Dr. Shivie Gupta | Usui Reiki Master & Counselor in Agra",
  description: "Learn about Dr. Shivie Gupta's Reiki lineage, counseling philosophy, academic background, and compassionate approach to biofield healing in Agra, UP.",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24 space-y-20">
      {/* Header Profile */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#F2EDE4]">
              <Image
                src="/images/dr-shivie-portrait.svg"
                alt="Dr. Shivie Gupta Reiki Counselor Agra"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EDE4] text-xs font-semibold text-[#2D4A3E] uppercase tracking-wider">
              <span>Bio &amp; Philosophy</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#1F2924]">
              Meet Dr. Shivie Gupta
            </h1>
            <p className="text-base text-[#52635A] leading-relaxed">
              Dr. Shivie Gupta is an attuned Usui and Karuna Reiki Master, educator, and intuitive emotional wellness counselor based in Agra, Uttar Pradesh. With a background blending academic rigor and holistic biofield disciplines, she provides a grounded alternative to sensationalized energy healing.
            </p>
            <p className="text-base text-[#52635A] leading-relaxed">
              Her practice was born from the conviction that emotional disharmony, unexpressed grief, and chronic mental anxiety leave undeniable imprints on the physical and energetic body. Rather than treating symptoms in isolation, she assists clients in rediscovering their internal equilibrium.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={getWhatsAppBookingUrl("Hello Dr. Shivie, I'd like to schedule an introductory consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2D4A3E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E332A] transition-colors"
              >
                <span>Connect with Dr. Shivie</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F2EDE4] text-[#1F2924] text-xs font-semibold uppercase tracking-wider hover:bg-[#E8DFC8] transition-colors"
              >
                View Modalities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lineage & Credentials */}
      <section className="bg-[#F2EDE4]/60 py-16 border-y border-[#E8E0D2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
              Authenticity &amp; Training
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2924]">
              Lineage &amp; Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#E8E0D2] space-y-3">
              <Award className="w-8 h-8 text-[#C5A059]" />
              <h3 className="font-serif text-xl font-bold text-[#1F2924]">
                Usui Shiki Ryoho Master
              </h3>
              <p className="text-xs text-[#52635A] leading-relaxed">
                Direct lineage attunements honoring Mikao Usui’s traditional Japanese healing system, emphasizing ethical stewardship, self-purification, and subtle vibrational resonance.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E8E0D2] space-y-3">
              <BookOpen className="w-8 h-8 text-[#2D4A3E]" />
              <h3 className="font-serif text-xl font-bold text-[#1F2924]">
                Doctorate &amp; Research Discipline
              </h3>
              <p className="text-xs text-[#52635A] leading-relaxed">
                Her doctorate reflects deep commitment to analytical clarity, mental health inquiry, and empathetic listening without sensational claims or dogma.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E8E0D2] space-y-3">
              <Compass className="w-8 h-8 text-[#B86B4B]" />
              <h3 className="font-serif text-xl font-bold text-[#1F2924]">
                Karuna® Reiki Attunements
              </h3>
              <p className="text-xs text-[#52635A] leading-relaxed">
                Advanced compassionate healing frequencies specifically suited for cellular trauma release, shadow work, and deep emotional cord dissolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Agra Practice */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
              Local Roots &amp; Global Reach
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2924]">
              Why Practice in Dayalbagh, Agra?
            </h2>
            <p className="text-sm sm:text-base text-[#52635A] leading-relaxed">
              Agra is a city of timeless history, architectural magnificence, and vibrant commerce, yet its fast-paced daily life often brings significant stress, familial pressure, and unvoiced burdens to its residents.
            </p>
            <p className="text-sm sm:text-base text-[#52635A] leading-relaxed">
              Establishing a sanctuary in Dayalbagh allows Dr. Shivie to offer a peaceful, unhurried counterweight: a space where local professionals, students, homemakers, and elders can experience attentive care without judgment.
            </p>
            <ul className="space-y-3 text-sm text-[#1F2924]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E]" />
                <span>Dedicated private suite with tranquil garden access</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E]" />
                <span>Zero clinical sterility—warm, grounded, welcoming atmosphere</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E]" />
                <span>Convenient parking and central accessibility in North Agra</span>
              </li>
            </ul>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E8E0D2] shadow-sm space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#2D4A3E]">
              Core Ethical Principles
            </h3>
            <div className="space-y-4 text-xs text-[#52635A] leading-relaxed">
              <div className="p-4 rounded-xl bg-white border border-[#E8E0D2]">
                <strong className="text-[#1F2924] block mb-1">Total Client Sovereignty:</strong>
                Reiki never imposes will or invasive energies. The practitioner simply facilitates an environment where your innate wisdom steers the healing process.
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E8E0D2]">
                <strong className="text-[#1F2924] block mb-1">Absolute Confidentiality:</strong>
                All counseling discussions, personal life details, and intuitive observations remain strictly private and sacred.
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E8E0D2]">
                <strong className="text-[#1F2924] block mb-1">Honest Complementarity:</strong>
                We respect conventional medicine and encourage clients to maintain all medical regimens under doctor supervision.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
