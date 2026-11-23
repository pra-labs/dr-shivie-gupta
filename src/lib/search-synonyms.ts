// Bilingual Hinglish/Hindi synonyms dictionary for FAQ search
export const HINGLISH_SYNONYMS: Record<string, string[]> = {
  // Stress / Anxiety / Mental Wellbeing
  stress: ["tanav", "tanaav", "chinta", "fakar", "fikr", "depression", "overthinking", "tension", "dimag", "dimaag"],
  tanav: ["stress", "anxiety", "chinta", "tension", "overthinking", "mental"],
  chinta: ["worry", "anxiety", "tanav", "stress", "fikr", "fear"],
  shanti: ["peace", "calm", "sukoon", "sthirta", "stillness", "serenity", "rest"],
  sukoon: ["peace", "shanti", "relief", "rest", "relaxation"],
  man: ["mind", "dimag", "chetan", "hriday", "feeling", "thought"],
  dimag: ["mind", "brain", "mental", "man", "buddhi", "thought"],
  overthinking: ["sochna", "vichar", "tanav", "chinta", "stress", "dimag"],

  // Relationships & Family
  rishte: ["relationship", "couple", "marriage", "shaadi", "pati", "patni", "partner", "love"],
  relationship: ["rishte", "sambandh", "couple", "marital", "conflict", "breakdown"],
  couple: ["rishte", "marriage", "husband", "wife", "partner", "marital"],
  ghar: ["family", "home", "parivar", "makan", "household"],
  family: ["ghar", "parivar", "intergenerational", "parents", "children", "bache"],
  parivar: ["family", "ghar", "sambandh", "rishte"],

  // Voice sessions / Phone / Confidentiality
  phone: ["call", "audio", "awaaz", "number", "voice", "mobile", "calling"],
  voice: ["phone", "audio", "call", "baat", "awaaz"],
  audio: ["voice", "phone", "call", "no camera"],
  video: ["camera", "zoom", "screen", "no video", "face"],
  confidentiality: ["privacy", "gupt", "safe", "secret", "bharosa", "trust"],
  privacy: ["confidentiality", "gupt", "safe", "private"],

  // Sleep & Rest
  sleep: ["neend", "nind", "aram", "rest", "insomnia", "soona"],
  neend: ["sleep", "rest", "aram", "insomnia", "shanti"],
  aram: ["rest", "relaxation", "relief", "neend", "sukoon"],

  // Meditation & Reiki
  dhyan: ["meditation", "mindfulness", "concentration", "focus", "sadhana"],
  meditation: ["dhyan", "mindfulness", "chintan", "shanti"],
  reiki: ["energy", "urja", "healing", "usui", "optional", "biofield"],
  urja: ["energy", "reiki", "prana", "shakti"],

  // Fees / Pricing / Booking
  fees: ["fee", "price", "charges", "cost", "paise", "rupees", "inr", "rate"],
  price: ["fees", "cost", "charges", "inr", "rupees", "paise"],
  paise: ["money", "cost", "charges", "fees", "rupees"],
  cost: ["paise", "fees", "charges", "rate"],
  booking: ["appointment", "schedule", "time", "date", "session"],
  duration: ["samay", "minutes", "time", "kitni der"],

  // Emergency / Medical boundaries
  doctor: ["medical", "hospital", "clinic", "treatment", "emergency", "crisis"],
  crisis: ["emergency", "helpline", "urgent", "hospital", "tele-manas"],
  hospital: ["emergency", "doctor", "clinic", "crisis"],
};

export function expandSearchQuery(query: string): string[] {
  const clean = query.trim().toLowerCase();
  if (!clean) return [];

  const tokens = clean.split(/\s+/).filter(Boolean);
  const expandedTokens = new Set<string>(tokens);

  for (const token of tokens) {
    expandedTokens.add(token);
    if (HINGLISH_SYNONYMS[token]) {
      for (const syn of HINGLISH_SYNONYMS[token]) {
        expandedTokens.add(syn);
      }
    }
    for (const [key, synonyms] of Object.entries(HINGLISH_SYNONYMS)) {
      if (key.includes(token) || token.includes(key)) {
        expandedTokens.add(key);
        for (const s of synonyms) {
          expandedTokens.add(s);
        }
      }
    }
  }

  return Array.from(expandedTokens);
}
