export type Language = "en" | "hi";

declare global {
  interface Window {
    umami?: {
      track?: (
        eventName: string,
        eventData?: Record<string, string | number | boolean>
      ) => void;
      identify?: (data: Record<string, string | number | boolean>) => void;
    };
  }
}

export function trackUmamiEvent(
  name: string,
  data?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;
  try {
    window.umami?.track?.(name, data);
  } catch {
    // Non-blocking: ignore ad-blocker or tracker errors
  }
}

export function identifyUmami(
  data: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;
  try {
    window.umami?.identify?.(data);
  } catch {
    // Non-blocking
  }
}

const WHATSAPP_NUMBER = "919837891692";

export function getWhatsAppUrl(lang: Language, customText?: string): string {
  if (customText) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customText)}`;
  }

  const greeting =
    lang === "hi"
      ? "नमस्ते डॉ. शिवी गुप्ता जी, मैंने संवाद ऊर्जा (SamvadUrja) वेबसाइट देखी और फ़ोन परामर्श के बारे में बात करना चाहता/चाहती हूँ।"
      : "Hello Dr. Shivie Gupta, I visited SamvadUrja and would like to enquire about a voice counselling session. I am comfortable speaking in English or Hindi.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(greeting)}`;
}
