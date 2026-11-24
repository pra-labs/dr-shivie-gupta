'use client';

import React, { useState } from 'react';
import { QuietCupPhoneMotif } from '../motifs/SanctuaryMotifs';

const STORAGE_KEY = 'dr_shivie_private_notes';

const STARTER_PROMPTS = [
  'What feels most heavy right now?',
  'Something I find difficult to say out loud...',
  'A recurring pattern or thought that drains my energy...',
  'What I wish felt softer or easier this week...',
];

export const ThoughtUnloader: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [noteContent, setNoteContent] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      try {
        return localStorage.getItem(STORAGE_KEY) || '';
      } catch {
        return '';
      }
    }
    return '';
  });
  const [hasCopied, setHasCopied] = useState<boolean>(false);
  const [showClearConfirm, setShowClearConfirm] = useState<boolean>(false);

  // Sync to local storage for user convenience across tab switches
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
      aria-label="Private thought unloader notebook"
      className={`relative rounded-2xl border border-[#2D4A3E]/10 bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F5] to-[#F5EFE6]/50 p-6 sm:p-8 shadow-xs ${className}`}
    >
      {/* Top Banner & Motif */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
        <div className="flex-1">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-medium text-[#9E4A2A] mb-2">
            <span>Before You Reach Out</span>
            <span aria-hidden="true">·</span>
            <span>Unload at Your Own Pace</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#2D4A3E] font-normal tracking-tight">
            A Safe Space to Untangle Your Thoughts
          </h3>
          <p className="text-sm text-[#52635A] mt-2 font-normal leading-relaxed">
            You don&apos;t need complete sentences or polished answers. Even a few scattered thoughts, worries, or
            feelings are a meaningful place to begin.
          </p>
        </div>
        <div className="shrink-0 self-start opacity-70 hidden sm:block">
          <QuietCupPhoneMotif size={52} color="#2D4A3E" />
        </div>
      </div>

      {/* Prompts to nudge reflection gently */}
      <div className="mb-4">
        <p className="text-xs font-medium text-[#52635A] mb-2">Gentle prompts if you feel unsure where to begin:</p>
        <div className="flex flex-wrap gap-1.5">
          {STARTER_PROMPTS.map((prompt) => (
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
          Private notes to unload your thoughts
        </label>
        <textarea
          id="thought-unloader-textarea"
          value={noteContent}
          onChange={handleTextChange}
          placeholder="Start writing whatever comes to mind... fears, exhaustion, unresolved questions, or what you hope therapy might help with."
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
            <strong>100% Client-Side Privacy:</strong> These notes live only in your browser. Nothing is ever sent,
            tracked, or uploaded.
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Copy to clipboard button */}
          <button
            type="button"
            onClick={handleCopyNotes}
            disabled={!noteContent.trim()}
            aria-label="Copy private notes to clipboard"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#2D4A3E]/20 bg-white hover:bg-[#FAF8F5] text-xs font-medium text-[#2D4A3E] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs"
          >
            {hasCopied ? (
              <>
                <svg className="w-3.5 h-3.5 text-[#2D4A3E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Copied to notes</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="8" y="8" width="12" height="12" rx="2" />
                  <path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2" />
                </svg>
                <span>Copy for your call</span>
              </>
            )}
          </button>

          {/* Clear notes button */}
          {noteContent.trim() && (
            <>
              {showClearConfirm ? (
                <div className="inline-flex items-center gap-1 bg-[#FAF8F5] p-1 rounded-lg border border-[#9E4A2A]/30">
                  <span className="text-[11px] text-[#9E4A2A] px-1">Clear all?</span>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="text-xs px-2 py-0.5 rounded bg-[#9E4A2A] text-white hover:bg-[#853C20] transition-colors"
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowClearConfirm(false)}
                    className="text-xs px-2 py-0.5 rounded bg-gray-200 text-[#1F2924] hover:bg-gray-300 transition-colors"
                  >
                    No
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowClearConfirm(true)}
                  aria-label="Clear notepad"
                  className="text-xs text-[#52635A] hover:text-[#9E4A2A] px-2 py-1 transition-colors underline underline-offset-2"
                >
                  Clear notes
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
