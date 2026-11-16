"use client";

import { useState } from "react";
import { Sparkles, Heart, ShieldCheck, Sun, Compass } from "lucide-react";

interface GokaiPrecept {
  id: string;
  romaji: string;
  kanji: string;
  english: string;
  shortLabel: string;
  icon: typeof Sparkles;
  contemplation: string;
  dailyPractice: string;
}

const GOKAI_PRECEPTS: GokaiPrecept[] = [
  {
    id: "anger",
    shortLabel: "Do not be angry",
    english: "Just for today, do not be angry",
    romaji: "Kyo dake wa, Okoru-na",
    kanji: "今日だけは、怒るな",
    icon: ShieldCheck,
    contemplation:
      "Anger often signals a boundary crossed or unmet expectation. Rather than suppressing it, pause and notice the somatic heat before reacting.",
    dailyPractice:
      "When irritation spikes, take three slow diaphragmatic exhales. Acknowledge the friction without letting it direct your speech.",
  },
  {
    id: "worry",
    shortLabel: "Do not worry",
    english: "Just for today, do not worry",
    romaji: "Shinpai suna",
    kanji: "心配すな",
    icon: Compass,
    contemplation:
      "Worry projects our awareness into imagined futures beyond our immediate influence, depleting vital present-moment vitality.",
    dailyPractice:
      "Ask: 'Is there a concrete action I can take right now?' If yes, take one step. If not, return focus to the feeling of feet on the floor.",
  },
  {
    id: "gratitude",
    shortLabel: "Be grateful",
    english: "Be filled with gratitude",
    romaji: "Kansha shite",
    kanji: "感謝して",
    icon: Heart,
    contemplation:
      "Gratitude shifts our autonomic nervous system out of lack and survival threat into receptive ease and abundance.",
    dailyPractice:
      "Mentally recognize three humble elements supporting you today: clean water, a breath of air, or quiet morning light.",
  },
  {
    id: "diligence",
    shortLabel: "Be diligent",
    english: "Work with diligence and honesty",
    romaji: "Gyo o hage-me",
    kanji: "業をはげめ",
    icon: Sun,
    contemplation:
      "Diligence in Reiki is not relentless hustle—it is devoted presence and sincerity in ordinary spiritual and personal endeavors.",
    dailyPractice:
      "Approach your next simple task (cooking, writing, listening) with undivided attentiveness, free from multitasking rush.",
  },
  {
    id: "kindness",
    shortLabel: "Be kind",
    english: "Be kind to people and all living things",
    romaji: "Hito ni shinsetsu ni",
    kanji: "人に親切に",
    icon: Sparkles,
    contemplation:
      "Compassion starts within our self-dialogue. Harsh self-judgment restricts subtle biofield harmony; kindness softens physical tension.",
    dailyPractice:
      "Extend silent goodwill to a stranger or someone who strained your patience today, wishing them relief and peace.",
  },
];

export function GokaiReflectionWidget() {
  const [activeId, setActiveId] = useState<string>(GOKAI_PRECEPTS[0].id);
  const activePrecept =
    GOKAI_PRECEPTS.find((p) => p.id === activeId) ?? GOKAI_PRECEPTS[0];
  const IconComponent = activePrecept.icon;

  return (
    <div className="mt-10 sm:mt-12 rounded-3xl bg-white border border-[#E8E0D2] p-5 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-[#E8E0D2]">
        <div>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#B86B4B]">
            Daily Contemplation
          </span>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1F2924]">
            The Five Reiki Precepts (五戒, Gokai)
          </h3>
        </div>
        <span className="text-[11px] text-[#52635A] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E8E0D2] w-fit">
          Mikao Usui Lineage (1920s)
        </span>
      </div>

      {/* Pill Tabs */}
      <div
        role="tablist"
        aria-label="Gokai Precepts"
        className="flex items-center gap-2 overflow-x-auto pb-2 pt-4 no-scrollbar -mx-1 px-1 touch-pan-x"
      >
        {GOKAI_PRECEPTS.map((precept) => {
          const isActive = precept.id === activeId;
          return (
            <button
              key={precept.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(precept.id)}
              className={`shrink-0 px-3.5 py-2 min-h-[40px] rounded-full text-xs font-medium transition-all flex items-center justify-center whitespace-nowrap active:scale-95 cursor-pointer ${
                isActive
                  ? "bg-[#2D4A3E] text-white shadow-xs font-semibold"
                  : "bg-[#F2EDE4]/80 text-[#52635A] hover:bg-[#E8E0D2] hover:text-[#1F2924]"
              }`}
            >
              {precept.shortLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        key={activePrecept.id}
        className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E0D2]/80 transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            {/* Japanese & Romaji */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-serif text-lg sm:text-xl font-bold text-[#2D4A3E]">
                {activePrecept.kanji}
              </span>
              <span className="text-xs sm:text-sm italic text-[#52635A]">
                ({activePrecept.romaji})
              </span>
            </div>

            {/* English translation */}
            <div className="text-sm sm:text-base font-serif font-medium text-[#1F2924]">
              &ldquo;{activePrecept.english}&rdquo;
            </div>

            {/* Contemplation */}
            <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed pt-1">
              {activePrecept.contemplation}
            </p>
          </div>

          {/* Quick takeaway card */}
          <div className="md:w-72 shrink-0 p-4 rounded-xl bg-white border border-[#E8E0D2] space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#B86B4B] uppercase tracking-wider">
              <IconComponent className="w-4 h-4 text-[#B86B4B]" />
              <span>Somatic Takeaway</span>
            </div>
            <p className="text-xs text-[#1F2924] leading-relaxed">
              {activePrecept.dailyPractice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
