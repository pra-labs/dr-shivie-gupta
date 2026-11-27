"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import en from "@/locales/en.json";
import hi from "@/locales/hi.json";
import { trackUmamiEvent, identifyUmami, type Language } from "@/lib/analytics";

export type { Language };
export type TranslationDict = typeof en;

const STORAGE_KEY = "dr_shivie_lang";
const DICTIONARIES: Record<Language, TranslationDict> = { en, hi };

// Module-level guard so React StrictMode double-mount does not fire auto-detect twice
let hasFiredAutoDetect = false;

interface LanguageContextValue {
  lang: Language;
  setLang: (newLang: Language, source?: string) => void;
  t: TranslationDict;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to 'en' on initial SSR & first client render to prevent hydration mismatches
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    let activeLang: Language = "en";
    let storedLang: string | null = null;

    try {
      storedLang = localStorage.getItem(STORAGE_KEY);
    } catch {
      // Ignore storage access errors in restricted modes
    }

    if (storedLang === "en" || storedLang === "hi") {
      activeLang = storedLang;
    } else {
      const rawLangs =
        typeof navigator !== "undefined"
          ? navigator.languages?.length
            ? Array.from(navigator.languages)
            : navigator.language
            ? [navigator.language]
            : []
          : [];

      const browserLangs = rawLangs.filter((l): l is string => Boolean(l));
      const detected: Language = browserLangs.some((l) =>
        l.toLowerCase().startsWith("hi")
      )
        ? "hi"
        : "en";

      activeLang = detected;

      if (!hasFiredAutoDetect) {
        hasFiredAutoDetect = true;
        trackUmamiEvent("lang_auto_detected", {
          detected,
          browser_langs: browserLangs.slice(0, 3).join(","),
        });
      }
    }

    setLangState(activeLang);
    document.documentElement.lang = activeLang;
    identifyUmami({ preferred_lang: activeLang });
  }, []);

  const setLang = useCallback(
    (newLang: Language, source = "header") => {
      if (newLang === lang) return;

      const prevLang = lang;
      setLangState(newLang);

      try {
        localStorage.setItem(STORAGE_KEY, newLang);
      } catch {
        // Ignore storage write errors
      }

      if (typeof document !== "undefined") {
        document.documentElement.lang = newLang;
      }

      identifyUmami({ preferred_lang: newLang });
      trackUmamiEvent("lang_toggled", {
        from: prevLang,
        to: newLang,
        source,
      });
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: DICTIONARIES[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
