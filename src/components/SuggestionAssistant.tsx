"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Sparkles, X, Send, ShieldCheck, Loader2, ArrowRight, RotateCcw } from "lucide-react";
import { routeIntent, type AssistantResponse } from "@/lib/assistant-intent";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  suggestedAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

// Lightweight Markdown renderer for bold (**text**), bullet items, and markdown links ([text](url))
function renderFormattedContent(text: string) {
  const lines = text.split("\n");

  return lines.map((line, lineIdx) => {
    const isBullet = line.trim().startsWith("- ") || line.trim().startsWith("• ");
    const cleanLine = isBullet ? line.trim().replace(/^[-•]\s+/, "") : line;

    const parts: (string | React.ReactNode)[] = [];
    const regex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(cleanLine)) !== null) {
      if (match.index > lastIndex) {
        parts.push(cleanLine.substring(lastIndex, match.index));
      }

      const token = match[0];
      if (token.startsWith("[") && token.includes("](")) {
        const linkText = token.substring(1, token.indexOf("]("));
        const linkHref = token.substring(token.indexOf("](") + 2, token.length - 1);
        parts.push(
          <Link
            key={`link-${lineIdx}-${match.index}`}
            href={linkHref}
            className="text-[#2D4A3E] font-semibold underline underline-offset-2 hover:text-[#1E332A]"
          >
            {linkText}
          </Link>
        );
      } else if (token.startsWith("**") && token.endsWith("**")) {
        parts.push(
          <strong key={`bold-${lineIdx}-${match.index}`} className="font-semibold text-[#1F2924]">
            {token.substring(2, token.length - 2)}
          </strong>
        );
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < cleanLine.length) {
      parts.push(cleanLine.substring(lastIndex));
    }

    if (isBullet) {
      return (
        <div key={lineIdx} className="flex items-start gap-1.5 pl-1 my-0.5">
          <span className="text-[#2D4A3E] font-bold shrink-0">•</span>
          <span>{parts}</span>
        </div>
      );
    }

    if (!cleanLine.trim()) {
      return <div key={lineIdx} className="h-1.5" />;
    }

    return (
      <p key={lineIdx} className="my-0.5">
        {parts}
      </p>
    );
  });
}

const INITIAL_GREETING = `Namaste and welcome. I am Mrs. Shivie Gupta's practice assistant.

Mrs. Shivie Gupta brings **~35 years of experience** offering confidential, voice-only telephone consultations from Dayalbagh, Agra.

**How can I assist you today?**
- **Individual Voice Counselling** (₹1,200 / 50m) — personal stress, anxiety, emotional clarity
- **Couple & Relationship Counselling** (₹1,800 / 60m) — communication gaps, marital harmony
- **Family Counselling** (₹2,200 / 60m) — household dynamics, parenting, generational respect
- **Optional Reiki Healing** (₹1,000 / 45m) — traditional biofield relaxation (on request)`;

export function SuggestionAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: INITIAL_GREETING,
      suggestedAction: {
        label: "View Services & Pricing",
        href: "/services",
      },
      secondaryAction: {
        label: "Request a Voice Session",
        href: "/connect",
      },
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const handleCustomOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener("open-session-assistant", handleCustomOpen);
    return () => window.removeEventListener("open-session-assistant", handleCustomOpen);
  }, []);

  const handleReset = () => {
    setMessages([
      {
        role: "assistant",
        content: INITIAL_GREETING,
        suggestedAction: {
          label: "View Services & Pricing",
          href: "/services",
        },
        secondaryAction: {
          label: "Request a Voice Session",
          href: "/connect",
        },
      },
    ]);
    setInput("");
  };

  const handleSend = async (textToSend?: string) => {
    const userText = (textToSend || input).trim();
    if (!userText || loading) return;

    setInput("");
    const updatedMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: userText },
    ];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      const result: AssistantResponse = routeIntent(userText);
      await new Promise((resolve) => setTimeout(resolve, 250));

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: result.reply,
          suggestedAction: result.suggestedAction,
          secondaryAction: result.secondaryAction,
        },
      ]);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            "Thank you. Mrs. Shivie Gupta offers confidential phone counselling for Individual (₹1,200), Couple (₹1,800), and Family (₹2,200) guidance, plus optional Reiki (₹1,000). You can reach out directly via call/WhatsApp at **+91 98378 91692** or submit an inquiry on [Request a Voice Session](/connect).",
          suggestedAction: {
            label: "Request a Voice Session",
            href: "/connect",
          },
          secondaryAction: {
            label: "Call +91 98378 91692",
            href: "tel:+919837891692",
          },
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button (Desktop Only: hidden on mobile to avoid colliding with navigation dock) */}
      <div className="hidden md:block fixed bottom-5 right-5 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-4 py-3 min-h-[48px] rounded-full bg-[#2D4A3E] text-white shadow-xl hover:bg-[#1E332A] transition-all hover:scale-105 active:scale-95 cursor-pointer border border-white/20 group"
            aria-label="Open Session Guidance Assistant"
          >
            <Sparkles className="w-4 h-4 text-[#C5A059] animate-pulse shrink-0" />
            <span className="text-xs font-semibold tracking-wider">Session Guidance AI</span>
          </button>
        )}
      </div>

      {/* Slide-over Assistant Drawer / Mobile Bottom Sheet */}
      {isOpen && (
        <>
          {/* Mobile backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs sm:hidden animate-in fade-in duration-200"
            aria-hidden="true"
          />

          <div className="fixed inset-x-0 bottom-0 sm:inset-x-auto sm:bottom-5 sm:right-5 z-50 w-full sm:w-[420px] h-[85vh] sm:h-[550px] max-h-[90vh] sm:max-h-[85vh] bg-white rounded-t-3xl sm:rounded-3xl border border-[#E8E0D2] shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Header with Clear Button */}
            <div className="p-4 bg-[#2D4A3E] text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#C5A059]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold leading-tight">
                    Session Guidance Assistant
                  </h3>
                  <span className="text-[10px] text-[#C5A059] block">
                    Confidential Guidance • Voice-Only Format
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 px-2.5 py-1.5 min-h-[36px] rounded-lg text-xs text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Reset conversation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Clear</span>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 min-w-[44px] min-h-[44px] rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer flex items-center justify-center"
                  aria-label="Close Assistant"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

          {/* Quick Reply Filter Chips */}
          <div className="px-3 py-2 bg-[#FAF8F5] border-b border-[#E8E0D2] flex flex-wrap items-center gap-1.5 text-[11px]">
            <button
              onClick={() => handleSend("Individual call")}
              className="px-2.5 py-1 rounded-full bg-white border border-[#E8E0D2] text-[#52635A] hover:bg-[#F2EDE4] hover:text-[#1F2924] cursor-pointer shadow-2xs"
            >
              Individual call
            </button>
            <button
              onClick={() => handleSend("Couple guidance")}
              className="px-2.5 py-1 rounded-full bg-white border border-[#E8E0D2] text-[#52635A] hover:bg-[#F2EDE4] hover:text-[#1F2924] cursor-pointer shadow-2xs"
            >
              Couple guidance
            </button>
            <button
              onClick={() => handleSend("Family call")}
              className="px-2.5 py-1 rounded-full bg-white border border-[#E8E0D2] text-[#52635A] hover:bg-[#F2EDE4] hover:text-[#1F2924] cursor-pointer shadow-2xs"
            >
              Family call
            </button>
            <button
              onClick={() => handleSend("How a voice call works & privacy")}
              className="px-2.5 py-1 rounded-full bg-white border border-[#E8E0D2] text-[#52635A] hover:bg-[#F2EDE4] hover:text-[#1F2924] cursor-pointer shadow-2xs"
            >
              How it works
            </button>
            <button
              onClick={() => handleSend("Optional Reiki")}
              className="px-2.5 py-1 rounded-full bg-white border border-[#E8E0D2] text-[#52635A] hover:bg-[#F2EDE4] hover:text-[#1F2924] cursor-pointer shadow-2xs"
            >
              Optional Reiki
            </button>
            <button
              onClick={() => handleSend("Fees & timing")}
              className="px-2.5 py-1 rounded-full bg-white border border-[#E8E0D2] text-[#52635A] hover:bg-[#F2EDE4] hover:text-[#1F2924] cursor-pointer shadow-2xs"
            >
              Fees &amp; timing
            </button>
          </div>

          {/* Message History */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs leading-relaxed">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] p-3.5 rounded-2xl ${
                    m.role === "user"
                      ? "bg-[#2D4A3E] text-white rounded-br-xs whitespace-pre-line"
                      : "bg-[#FAF8F5] text-[#52635A] border border-[#E8E0D2] rounded-bl-xs"
                  }`}
                >
                  {m.role === "user" ? m.content : renderFormattedContent(m.content)}

                  {m.suggestedAction && (
                    <div className="mt-2.5 pt-2 border-t border-[#E8E0D2]/60 flex items-center gap-2 flex-wrap">
                      <Link
                        href={m.suggestedAction.href}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#2D4A3E] bg-white px-3 py-1.5 rounded-full border border-[#E8E0D2] shadow-2xs hover:bg-[#F2EDE4] transition-colors"
                      >
                        <span>{m.suggestedAction.label}</span>
                        <ArrowRight className="w-3 h-3 text-[#9E4A2A]" />
                      </Link>

                      {m.secondaryAction && (
                        <a
                          href={m.secondaryAction.href}
                          target={m.secondaryAction.href.startsWith("http") ? "_blank" : undefined}
                          rel={m.secondaryAction.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#52635A] bg-[#F2EDE4] px-2.5 py-1.5 rounded-full border border-[#E8E0D2] hover:text-[#1F2924] transition-colors"
                        >
                          <span>{m.secondaryAction.label}</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E8E0D2] text-[#52635A] flex items-center gap-2">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[#2D4A3E]" />
                  <span>Preparing guidance...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Crisis Boundary Notice */}
          <div className="px-4 py-1.5 bg-[#F2EDE4]/60 border-t border-[#E8E0D2] text-[10px] text-[#52635A] flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2D4A3E] shrink-0" />
            <span className="truncate">Voice calls only. For mental health emergencies, call Tele-MANAS (14416).</span>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2.5 sm:p-3 bg-white border-t border-[#E8E0D2] flex items-center gap-2 shrink-0 pb-safe"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about stress, marriage, family, fees, or Reiki..."
              className="flex-1 min-h-[44px] px-4 py-2.5 rounded-full border border-[#E8E0D2] bg-[#FAF8F5] text-base sm:text-xs text-[#1F2924] placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-[#2D4A3E]"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-3 min-w-[44px] min-h-[44px] rounded-full bg-[#2D4A3E] text-white disabled:opacity-40 hover:bg-[#1E332A] transition-colors cursor-pointer shrink-0 flex items-center justify-center shadow-xs"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
        </>
      )}
    </>
  );
}
