'use client';

import React, { useState, useEffect } from 'react';
import { QuietCupPhoneMotif } from '../motifs/SanctuaryMotifs';
import { useLanguage } from '@/context/LanguageContext';

const STORAGE_KEY = 'dr_shivie_private_notes';

export const ThoughtUnloader: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { t } = useLanguage();
  const u = t.thoughtUnloader;

  const [noteContent, setNoteContent] = useState<string>('');
  const [hasCopied, setHasCopied] = useState<boolean>(false);
  const [showClearConfirm, setShowClearConfirm] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setNoteContent(saved);
      }
    } catch {
      // Ignore storage read errors
    }
  }, []);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setNoteContent(val);
    try {
      if (val.trim()) {
        localStorage.setItem(STORAGE_KEY, val);
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // Safari private mode quota handling
    }
  };

  const handlePromptClick = (promptText: string) => {
    setNoteContent((prev) => {
      const trimmed = prev.trim();
      const updated = trimmed ? `${trimmed}\n\n• ${promptText}\n` : `• ${promptText}\n`;
      try {
        localStorage.setItem(STORAGE_KEY, updated);
      } catch {
        // Safe ignore
      }
      return updated;
    });
  };

  const handleCopyNotes = async () => {
    if (!noteContent.trim()) return;
    try {
      await navigator.clipboard.writeText(noteContent);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  const handleClear = () => {
    setNoteContent('');
    setShowClearConfirm(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  return (
    <div
      aria-label={u.ariaLabel}
      className={`relative rounded-2xl border border-[#2D4A3E]/10 bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F5] to-[#F5EFE6]/50 p-6 sm:p-8 shadow-xs ${className}`}
    >
      {/* Top Banner & Motif */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
        <div className="flex-1">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-medium text-[#9E4A2A] mb-2">
            <span>{u.eyebrow1}</span>
            <span aria-hidden="true">·</span>
            <span>{u.eyebrow2}</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#2D4A3E] font-normal tracking-tight">
            {u.title}
          </h3>
          <p className="text-sm text-[#52635A] mt-2 font-normal leading-relaxed">
            {u.subtitle}
          </p>
        </div>
        <div className="shrink-0 self-start opacity-70 hidden sm:block">
          <QuietCupPhoneMotif size={52} color="#2D4A3E" />
        </div>
      </div>

      {/* Prompts to nudge reflection gently */}
      <div className="mb-4">
        <p className="text-xs font-medium text-[#52635A] mb-2">{u.promptsHeading}</p>
        <div className="flex flex-wrap gap-1.5">
          {u.starterPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => handlePromptClick(prompt)}
              className="text-xs px-2.5 py-1 rounded-md bg-[#FAF8F5] hover:bg-[#E8E0D2]/60 text-[#2D4A3E] border border-[#2D4A3E]/10 transition-colors text-left"
            >
              + {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Notebook Textarea */}
      <div className="relative">
        <label htmlFor="thought-unloader-textarea" className="sr-only">
          {u.textareaLabel}
        </label>
        <textarea
          id="thought-unloader-textarea"
          value={noteContent}
          onChange={handleTextChange}
          placeholder={u.placeholder}
          rows={6}
          className="w-full rounded-xl border border-[#2D4A3E]/15 bg-white p-4 text-sm sm:text-base text-[#1F2924] placeholder:text-[#52635A]/50 focus:border-[#2D4A3E] focus:outline-none focus:ring-1 focus:ring-[#2D4A3E] resize-y transition-all leading-relaxed"
          style={{ minHeight: '150px' }}
        />
      </div>

      {/* Bottom Bar: Action Controls & Privacy Reassurance */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Privacy Seal Reassurance */}
        <div className="flex items-start sm:items-center gap-2 text-xs text-[#52635A]">
          <svg
            className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5 sm:mt-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <span className="leading-snug">
            <strong>{u.privacyStrong}</strong> {u.privacyText}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleCopyNotes}
            disabled={!noteContent.trim()}
            aria-label={u.copyAria}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#2D4A3E]/20 bg-white hover:bg-[#FAF8F5] text-xs font-medium text-[#2D4A3E] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs"
          >
            {hasCopied ? (
              <>
                <svg className="w-3.5 h-3.5 text-[#2D4A3E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{u.copiedBtn}</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="8" y="8" width="12" height="12" rx="2" />
                  <path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2" />
                </svg>
                <span>{u.copyBtn}</span>
              </>
            )}
          </button>

          {noteContent.trim() && (
            <>
              {showClearConfirm ? (
                <div className="inline-flex items-center gap-1 bg-[#FAF8F5] p-1 rounded-lg border border-[#9E4A2A]/30">
                  <span className="text-[11px] text-[#9E4A2A] px-1">{u.clearConfirm}</span>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="text-xs px-2 py-0.5 rounded bg-[#9E4A2A] text-white hover:bg-[#853C20] transition-colors"
                  >
                    {u.yesBtn}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowClearConfirm(false)}
                    className="text-xs px-2 py-0.5 rounded bg-gray-200 text-[#1F2924] hover:bg-gray-300 transition-colors"
                  >
                    {u.noBtn}
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowClearConfirm(true)}
                  aria-label={u.clearAria}
                  className="text-xs text-[#52635A] hover:text-[#9E4A2A] px-2 py-1 transition-colors underline underline-offset-2"
                >
                  {u.clearBtn}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
