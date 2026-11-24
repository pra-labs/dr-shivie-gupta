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

// Lightweight Markdown renderer for bold (**text**), italics (*text*), bullet items, and markdown links ([text](url))
function renderFormattedContent(text: string) {
  const lines = text.split("\n");

  return lines.map((line, lineIdx) => {
    const isBullet = line.trim().startsWith("- ") || line.trim().startsWith("• ");
    const cleanLine = isBullet ? line.trim().replace(/^[-•]\s+/, "") : line;

    const parts: (string | React.ReactNode)[] = [];
    // Match links and **bold** first, then *italic* so tokens never collide
    const regex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*|\*[^*\n]+?\*)/g;
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
            className="text-[#2D4A3E] font-medium underline underline-offset-2 hover:text-[#9E4A2A] transition-colors"
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
      } else if (token.startsWith("*") && token.endsWith("*") && token.length > 2) {
        parts.push(
          <em key={`italic-${lineIdx}-${match.index}`} className="italic text-[#37473F]">
            {token.substring(1, token.length - 1)}
          </em>
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
          <span className="text-[#C5A059] font-bold shrink-0">•</span>
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

const INITIAL_GREETING = `Namaste and welcome. I am here to offer a calm, unhurried space for your thoughts.

Dr. Shivie Gupta brings **over 35 years** of compassionate listening from Dayalbagh, Agra. All consultations take place strictly via confidential telephone or WhatsApp audio call, so there is never any video pressure.

*Take your time. What is feeling heavy or in need of gentle care today?*

Whenever you are ready, you can explore the sanctuary of options on [Services & Pricing](/services) or read our gentle [Client Guide](/guide).`;

export function SuggestionAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: INITIAL_GREETING,
      suggestedAction: {
        label: "Explore Session Ways",
        href: "/services",
      },
      secondaryAction: {
        label: "Read Client Guide",
        href: "/guide",
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

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("open-session-assistant", handleCustomOpen);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-session-assistant", handleCustomOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Lock body scroll on small screens when assistant sheet is open
  useEffect(() => {
    if (isOpen && typeof window !== "undefined") {
      const isMobile = window.innerWidth < 640;
      if (isMobile) {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = originalOverflow;
        };
      }
    }
  }, [isOpen]);

  const handleReset = () => {
    setMessages([
      {
        role: "assistant",
        content: INITIAL_GREETING,
        suggestedAction: {
          label: "Explore Session Ways",
          href: "/services",
        },
        secondaryAction: {
          label: "Read Client Guide",
          href: "/guide",
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
            "Thank you for sharing. Dr. Shivie Gupta offers compassionate, confidential phone consultations for personal wellbeing, relationship communication, and family harmony. Whenever you feel ready, you can explore [Services & Pricing](/services) or leave a quiet note on [Request a Voice Session](/connect).",
          suggestedAction: {
            label: "Explore Services",
            href: "/services",
          },
          secondaryAction: {
            label: "Gentle Inquiries (+91 98378 91692)",
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
            className="flex items-center gap-2.5 px-4 py-3 min-h-[48px] rounded-full bg-[#FAF8F5] text-[#2D4A3E] shadow-lg hover:shadow-xl hover:bg-[#F2EDE4] transition-all hover:scale-105 active:scale-95 cursor-pointer border border-[#E8E0D2] group"
            aria-label="Open Session Companion"
          >
            <div className="w-6 h-6 rounded-full bg-[#F2EDE4] flex items-center justify-center text-[#9E4A2A] group-hover:text-[#C5A059] transition-colors">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-serif font-medium tracking-wide text-[#2D4A3E]">
              Session Companion
            </span>
          </button>
        )}
      </div>

      {/* Slide-over Assistant Drawer / Mobile Bottom Sheet */}
      {isOpen && (
        <>
          {/* Mobile backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs sm:hidden animate-in fade-in duration-200"
            aria-hidden="true"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="session-assistant-title"
            className="fixed inset-x-0 bottom-0 sm:inset-x-auto sm:bottom-5 sm:right-5 z-50 w-full sm:w-[420px] h-[85vh] sm:h-[550px] max-h-[90vh] sm:max-h-[85vh] bg-[#FAF8F5] rounded-t-3xl sm:rounded-3xl border border-[#E8E0D2] shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300"
          >
            {/* Header: Soft sanctuary aesthetic (warm sand/sage, delicate border, terracotta & gold accents) */}
            <div className="p-4 bg-[#F2EDE4] text-[#1F2924] border-b border-[#E8E0D2] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E8E0D2] flex items-center justify-center text-[#9E4A2A]">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div>
                  <h3 id="session-assistant-title" className="font-serif text-sm font-semibold text-[#1F2924] leading-tight">
                    Session Companion
                  </h3>
                  <span className="text-[10px] text-[#52635A] block font-sans">
                    Gentle reflection • Confidential voice space
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 px-2.5 py-1.5 min-h-[36px] rounded-lg text-xs text-[#52635A] hover:text-[#1F2924] hover:bg-white/60 transition-colors cursor-pointer"
                  title="Reset conversation"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#9E4A2A]" />
                  <span>Clear</span>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 min-w-[44px] min-h-[44px] rounded-full hover:bg-white/60 text-[#52635A] hover:text-[#1F2924] transition-colors cursor-pointer flex items-center justify-center"
                  aria-label="Close Assistant"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Human-Centered Reflection Chips */}
            <div className="px-3 py-2 bg-[#FAF8F5] border-b border-[#E8E0D2] flex flex-nowrap overflow-x-auto no-scrollbar items-center gap-2 text-[11px] shrink-0">
              <button
                type="button"
                onClick={() => handleSend("Feeling overwhelmed lately")}
                className="inline-flex items-center min-h-[40px] px-3.5 py-1.5 rounded-full bg-white border border-[#E8E0D2] text-[#52635A] hover:border-[#C5A059] hover:bg-[#F2EDE4] hover:text-[#1F2924] cursor-pointer shadow-2xs whitespace-nowrap shrink-0 transition-colors font-medium"
              >
                Feeling overwhelmed lately
              </button>
              <button
                type="button"
                onClick={() => handleSend("Tension in relationships")}
                className="inline-flex items-center min-h-[40px] px-3.5 py-1.5 rounded-full bg-white border border-[#E8E0D2] text-[#52635A] hover:border-[#C5A059] hover:bg-[#F2EDE4] hover:text-[#1F2924] cursor-pointer shadow-2xs whitespace-nowrap shrink-0 transition-colors font-medium"
              >
                Tension in relationships
              </button>
              <button
                type="button"
                onClick={() => handleSend("Living with family / privacy")}
                className="inline-flex items-center min-h-[40px] px-3.5 py-1.5 rounded-full bg-white border border-[#E8E0D2] text-[#52635A] hover:border-[#C5A059] hover:bg-[#F2EDE4] hover:text-[#1F2924] cursor-pointer shadow-2xs whitespace-nowrap shrink-0 transition-colors font-medium"
              >
                Living with family / privacy
              </button>
              <button
                type="button"
                onClick={() => handleSend("Nervous about starting")}
                className="inline-flex items-center min-h-[40px] px-3.5 py-1.5 rounded-full bg-white border border-[#E8E0D2] text-[#52635A] hover:border-[#C5A059] hover:bg-[#F2EDE4] hover:text-[#1F2924] cursor-pointer shadow-2xs whitespace-nowrap shrink-0 transition-colors font-medium"
              >
                Nervous about starting
              </button>
              <button
                type="button"
                onClick={() => handleSend("How voice calls work")}
                className="inline-flex items-center min-h-[40px] px-3.5 py-1.5 rounded-full bg-white border border-[#E8E0D2] text-[#52635A] hover:border-[#C5A059] hover:bg-[#F2EDE4] hover:text-[#1F2924] cursor-pointer shadow-2xs whitespace-nowrap shrink-0 transition-colors font-medium"
              >
                How voice calls work
              </button>
              <button
                type="button"
                onClick={() => handleSend("Optional Reiki support")}
                className="inline-flex items-center min-h-[40px] px-3.5 py-1.5 rounded-full bg-white border border-[#E8E0D2] text-[#52635A] hover:border-[#C5A059] hover:bg-[#F2EDE4] hover:text-[#1F2924] cursor-pointer shadow-2xs whitespace-nowrap shrink-0 transition-colors font-medium"
              >
                Optional Reiki support
              </button>
            </div>

            {/* Message History */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs leading-relaxed bg-[#FAF8F5]">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] p-3.5 rounded-2xl ${
                      m.role === "user"
                        ? "bg-[#2D4A3E] text-[#FAF8F5] rounded-br-xs whitespace-pre-line shadow-xs"
                        : "bg-white text-[#37473F] border border-[#E8E0D2] rounded-bl-xs shadow-2xs"
                    }`}
                  >
                    {m.role === "user" ? m.content : renderFormattedContent(m.content)}

                    {m.suggestedAction && (
                      <div className="mt-2.5 pt-2 border-t border-[#E8E0D2]/70 flex items-center gap-2 flex-wrap">
                        <Link
                          href={m.suggestedAction.href}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 min-h-[40px] text-[11px] font-medium text-[#2D4A3E] bg-[#FAF8F5] px-3.5 py-1.5 rounded-full border border-[#E8E0D2] shadow-2xs hover:bg-[#F2EDE4] hover:border-[#C5A059] transition-colors whitespace-nowrap shrink-0"
                        >
                          <span className="whitespace-nowrap">{m.suggestedAction.label}</span>
                          <ArrowRight className="w-3 h-3 text-[#9E4A2A] shrink-0" />
                        </Link>

                        {m.secondaryAction && (
                          <a
                            href={m.secondaryAction.href}
                            target={m.secondaryAction.href.startsWith("http") ? "_blank" : undefined}
                            rel={m.secondaryAction.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-1.5 min-h-[40px] text-[11px] font-medium text-[#52635A] bg-white px-3.5 py-1.5 rounded-full border border-[#E8E0D2] hover:text-[#1F2924] hover:bg-[#F2EDE4] transition-colors whitespace-nowrap shrink-0"
                          >
                            <span className="whitespace-nowrap">{m.secondaryAction.label}</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="p-3 rounded-2xl bg-white border border-[#E8E0D2] text-[#52635A] flex items-center gap-2 shadow-2xs">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-[#9E4A2A]" />
                    <span className="font-serif italic">Reflecting with care...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Bottom Crisis Boundary Notice */}
            <div className="px-4 py-2 bg-[#F2EDE4]/80 border-t border-[#E8E0D2] text-[10px] text-[#52635A] flex items-center gap-2 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2D4A3E] shrink-0" />
              <span className="truncate">
                Gentle voice consultations. For acute distress or crises, please call Tele-MANAS (14416).
              </span>
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
                placeholder="Share whatever is on your mind..."
                className="flex-1 min-h-[44px] px-4 py-2.5 rounded-full border border-[#E8E0D2] bg-[#FAF8F5] text-base sm:text-xs text-[#1F2924] placeholder:text-[#52635A]/70 placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="p-3 min-w-[44px] min-h-[44px] rounded-full bg-[#2D4A3E] text-white disabled:opacity-40 hover:bg-[#1E332A] transition-colors cursor-pointer shrink-0 flex items-center justify-center shadow-xs"
                aria-label="Send message"
              >
                <Send className="w-4 h-4 text-[#FAF8F5]" />
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}
