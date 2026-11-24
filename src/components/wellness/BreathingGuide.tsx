'use client';

import React, { useState, useEffect, useRef } from 'react';
import { BotanicalLeafMotif } from '../motifs/SanctuaryMotifs';

interface BreathCyclePhase {
  name: 'inhale' | 'hold' | 'exhale';
  label: string;
  duration: number; // in seconds
  prompt: string;
  scale: string; // Tailwind transform scale
  opacity: string;
}

interface BreathingPattern {
  id: string;
  title: string;
  subtitle: string;
  phases: BreathCyclePhase[];
}

const BREATHING_PATTERNS: BreathingPattern[] = [
  {
    id: 'gentle',
    title: 'Gentle',
    subtitle: '4 · 4 · 6',
    phases: [
      { name: 'inhale', label: 'Inhale', duration: 4, prompt: 'Breathe in gently...', scale: 'scale-110', opacity: 'opacity-90' },
      { name: 'hold', label: 'Soft Hold', duration: 4, prompt: 'Hold softly...', scale: 'scale-110', opacity: 'opacity-100' },
      { name: 'exhale', label: 'Exhale', duration: 6, prompt: 'Slowly release...', scale: 'scale-75', opacity: 'opacity-50' },
    ],
  },
  {
    id: 'relaxation',
    title: 'Deep Relaxation',
    subtitle: '4 · 7 · 8',
    phases: [
      { name: 'inhale', label: 'Inhale', duration: 4, prompt: 'Breathe in gently...', scale: 'scale-115', opacity: 'opacity-90' },
      { name: 'hold', label: 'Soft Hold', duration: 7, prompt: 'Hold softly and rest...', scale: 'scale-115', opacity: 'opacity-100' },
      { name: 'exhale', label: 'Exhale', duration: 8, prompt: 'Slowly, softly release...', scale: 'scale-70', opacity: 'opacity-45' },
    ],
  },
  {
    id: 'equal',
    title: 'Equal Breathing',
    subtitle: '4 · 4',
    phases: [
      { name: 'inhale', label: 'Inhale', duration: 4, prompt: 'Breathe in softly...', scale: 'scale-110', opacity: 'opacity-85' },
      { name: 'exhale', label: 'Exhale', duration: 4, prompt: 'Breathe out at ease...', scale: 'scale-80', opacity: 'opacity-55' },
    ],
  },
];

export const BreathingGuide: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [selectedPatternId, setSelectedPatternId] = useState<string>('gentle');
  const [isActive, setIsActive] = useState<boolean>(false);
  const [phaseIndex, setPhaseIndex] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const pattern = BREATHING_PATTERNS.find((p) => p.id === selectedPatternId) || BREATHING_PATTERNS[0];
  const currentPhase = pattern.phases[phaseIndex] || pattern.phases[0];

  // Cycle phase handler
  useEffect(() => {
    if (!isActive) {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    const durationMs = currentPhase.duration * 1000;
    timerRef.current = setTimeout(() => {
      setPhaseIndex((prevIndex) => (prevIndex + 1) % pattern.phases.length);
    }, durationMs);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isActive, phaseIndex, currentPhase.duration, pattern.phases.length]);

  const handlePatternChange = (newPatternId: string) => {
    setSelectedPatternId(newPatternId);
    setPhaseIndex(0);
  };

  const togglePlay = () => {
    setIsActive((prev) => !prev);
  };

  const resetCycle = () => {
    setIsActive(false);
    setPhaseIndex(0);
  };

  return (
    <section
      aria-label="Calm breathing sanctuary guide"
      className={`relative overflow-hidden rounded-2xl border border-[#2D4A3E]/10 bg-gradient-to-b from-[#FAF8F5] via-[#F5EFE6]/70 to-[#FAF8F5] p-6 sm:p-8 text-[#1F2924] shadow-xs ${className}`}
    >
      {/* Decorative Botanical Motif */}
      <div className="absolute -top-4 -right-4 pointer-events-none opacity-25">
        <BotanicalLeafMotif size={130} color="#2D4A3E" />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-xl mx-auto text-center mb-6">
        <span className="inline-block text-xs uppercase tracking-widest font-medium text-[#9E4A2A] mb-2">
          Sanctuary Grounding
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#2D4A3E] font-normal tracking-tight">
          A Moment to Settle In
        </h3>
        <p className="text-sm text-[#52635A] mt-2 font-normal leading-relaxed">
          Take a quiet pause before exploring therapy or reaching out. There is nothing to achieve, count, or measure here.
        </p>
      </div>

      {/* Rhythm Switcher (Pace selector) */}
      <div
        role="group"
        aria-label="Choose breathing rhythm"
        className="relative z-10 flex flex-wrap justify-center gap-2 max-w-md mx-auto mb-8"
      >
        {BREATHING_PATTERNS.map((p) => {
          const isSelected = p.id === pattern.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => handlePatternChange(p.id)}
              aria-pressed={isSelected}
              className={`text-xs px-3.5 py-1.5 rounded-full transition-all duration-300 font-medium ${
                isSelected
                  ? 'bg-[#2D4A3E] text-[#FAF8F5] shadow-xs'
                  : 'bg-white/70 text-[#52635A] hover:bg-white border border-[#2D4A3E]/10'
              }`}
            >
              <span>{p.title}</span>
              <span className={`ml-1.5 text-[10px] ${isSelected ? 'text-[#E0C17E]' : 'text-[#52635A]/70'}`}>
                ({p.subtitle})
              </span>
            </button>
          );
        })}
      </div>

      {/* Interactive Breath Ring Visualizer */}
      <div className="relative z-10 flex flex-col items-center justify-center my-4">
        <div
          className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Subtle Outer Halo Ring */}
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-tr from-[#2D4A3E]/10 via-[#C5A059]/15 to-[#9E4A2A]/10 blur-xl transition-all duration-[3000ms] ease-in-out ${
              isActive ? currentPhase.scale : 'scale-90 opacity-40'
            }`}
          />

          {/* Outer Boundary Ring */}
          <div className="absolute inset-4 rounded-full border border-[#2D4A3E]/15 border-dashed pointer-events-none" />

          {/* Expanding / Contracting Organic Circle */}
          <div
            className={`w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#E8E0D2] via-[#FAF8F5] to-[#E3D9C9] border border-[#C5A059]/40 shadow-inner flex flex-col items-center justify-center text-center p-4 transition-all ease-in-out ${
              isActive ? `${currentPhase.scale} ${currentPhase.opacity}` : 'scale-95 opacity-80'
            }`}
            style={{
              transitionDuration: isActive ? `${currentPhase.duration}s` : '0.8s',
            }}
          >
            <p className="font-serif text-lg sm:text-xl text-[#2D4A3E] transition-all duration-700 font-medium px-2">
              {isActive ? currentPhase.prompt : 'Rest softly'}
            </p>
            {isActive && (
              <span className="text-[11px] uppercase tracking-wider text-[#9E4A2A] font-medium mt-1">
                {currentPhase.label}
              </span>
            )}
          </div>
        </div>

        {/* Status Prompt & Reassurance */}
        <div className="mt-4 text-center min-h-[28px]">
          <p className="text-xs text-[#52635A] font-normal italic">
            {isActive
              ? 'Follow the motion gently, only as it feels comfortable for your lungs.'
              : 'Press play whenever you are ready to begin.'}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="relative z-10 flex items-center justify-center gap-3 mt-6">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isActive ? 'Pause breathing rhythm' : 'Start breathing rhythm'}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#2D4A3E] text-[#FAF8F5] text-sm font-medium hover:bg-[#3D6454] active:scale-98 transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D4A3E]"
        >
          {isActive ? (
            <>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="6" y="4" width="4" height="16" rx="1.5" />
                <rect x="14" y="4" width="4" height="16" rx="1.5" />
              </svg>
              <span>Pause</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z" />
              </svg>
              <span>Begin Breathing</span>
            </>
          )}
        </button>

        {isActive && (
          <button
            type="button"
            onClick={resetCycle}
            aria-label="Reset breathing exercise"
            className="text-xs px-3 py-2 text-[#52635A] hover:text-[#1F2924] underline underline-offset-4 transition-colors"
          >
            Reset
          </button>
        )}
      </div>
    </section>
  );
};
