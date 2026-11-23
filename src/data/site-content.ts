export interface ServiceOffering {
  id: string;
  title: string;
  slug: string;
  category: "counselling" | "reiki";
  tagline: string;
  durationMinutes: number;
  priceINR: number;
  format: "Voice / Phone Call Only" | "Remote / On Request";
  badge: "Primary Service" | "Optional Secondary Service";
  overview: string;
  keyAreas: string[];
  clientOutcomes: string[];
  isPopular?: boolean;
}

export interface FAQ {
  id?: string;
  question: string;
  answer: string;
  category: "Counselling" | "Voice Sessions" | "Hindi & Local" | "Reiki (Optional)";
}

export interface ClientNote {
  id: string;
  clientName: string;
  location: string;
  note: string;
  serviceType: string;
  isPublished: boolean;
}

export const servicesData: ServiceOffering[] = [
  {
    id: "individual-counselling",
    title: "Individual Counselling (Voice Call)",
    slug: "individual-counselling",
    category: "counselling",
    tagline: "Confidential phone guidance for personal clarity, stress reduction, and inner emotional balance.",
    durationMinutes: 50,
    priceINR: 1200,
    format: "Voice / Phone Call Only",
    badge: "Primary Service",
    isPopular: true,
    overview:
      "A compassionate, non-judgmental space over phone to unpack persistent emotional roadblocks, life crossroads, and anxiety without video camera fatigue or travel pressure.",
    keyAreas: [
      "Persistent stress, anxiety loops, and overthinking",
      "Low self-confidence, emotional fatigue, and mood lows",
      "Navigating grief, transitions, and life crossroads",
      "Personal boundary setting and self-acceptance",
    ],
    clientOutcomes: [
      "Calm parasympathetic nervous system release during confidential dialogue",
      "Structured somatic and cognitive coping tools tailored to your daily routine",
      "Absolute voice-only privacy from the comfort of your own home",
    ],
  },
  {
    id: "couple-counselling",
    title: "Couple & Relationship Counselling (Voice Call)",
    slug: "couple-counselling",
    category: "counselling",
    tagline: "Bridging communication gaps, resolving recurring conflicts, and restoring emotional warmth.",
    durationMinutes: 60,
    priceINR: 1800,
    format: "Voice / Phone Call Only",
    badge: "Primary Service",
    overview:
      "A balanced, respectful audio consultation for partners seeking to understand unmet expectations, dissolve resentment, and communicate with empathy.",
    keyAreas: [
      "Communication shutdowns and escalating arguments",
      "Navigating marital expectations and in-law dynamics",
      "Rebuilding trust, intimacy, and shared emotional safety",
      "Healthy boundary setting within relationship spaces",
    ],
    clientOutcomes: [
      "Equal, mediated speaking time to express heartfelt needs without interruption",
      "Practical daily conversational protocols for de-escalating friction",
      "Deeper mutual understanding grounded in 35 years of therapeutic experience",
    ],
  },
  {
    id: "family-counselling",
    title: "Family Counselling (Voice Call)",
    slug: "family-counselling",
    category: "counselling",
    tagline: "Harmonizing intergenerational relationships, parenting stresses, and household peace.",
    durationMinutes: 60,
    priceINR: 2200,
    format: "Voice / Phone Call Only",
    badge: "Primary Service",
    overview:
      "Dedicated phone sessions to untangle family friction, parent-teen communication gaps, and elder-care misunderstandings with patience and sensitivity.",
    keyAreas: [
      "Intergenerational communication gaps and differing cultural values",
      "Parenting dilemmas, adolescent anxiety, and academic stress",
      "Sibling conflicts and household emotional tension",
      "Preserving mutual respect during family transitions",
    ],
    clientOutcomes: [
      "Neutral, mature guidance that honors all family members with dignity",
      "Clarified roles, mutual responsibilities, and healthier communication",
      "A calmer, more supportive household atmosphere",
    ],
  },
  {
    id: "reiki-healing",
    title: "Reiki Energy Balancing (Optional / On Request)",
    slug: "reiki-healing",
    category: "reiki",
    tagline: "Traditional Usui biofield relaxation offered as a complementary wellness support.",
    durationMinutes: 45,
    priceINR: 1000,
    format: "Remote / On Request",
    badge: "Optional Secondary Service",
    overview:
      "Offered strictly upon client request as a complementary self-care support. Traditional Usui Reiki biofield balancing facilitates parasympathetic ease and meditative calm.",
    keyAreas: [
      "Subtle energy meridian balancing and autonomic nervous system calm",
      "Dissipating stagnant somatic tension and emotional heaviness",
      "Evening grounding rituals paired with conscious breathwork",
      "Completely optional; never replaces or required for counselling",
    ],
    clientOutcomes: [
      "Deep physical stillness and relief from somatic muscle tension",
      "Restful sleep rhythm restoration and mindful inner alignment",
      "Integration of the five traditional Gokai precepts for daily living",
    ],
  },
];

export const faqsData: FAQ[] = [
  {
    category: "Voice Sessions",
    question: "Why are all counselling sessions conducted exclusively over voice/phone call?",
    answer:
      "Over ~35 years of practice, Dr. Shivie Gupta has found voice-only phone calls to offer the highest emotional safety, complete privacy, and zero video camera self-consciousness. Clients speak with genuine vulnerability from their personal sanctuary without traveling, clinic waiting rooms, or technical video fatigue.",
  },
  {
    category: "Voice Sessions",
    question: "Do I need to turn on my camera or install special video software?",
    answer:
      "No. All consultations take place via standard telephone voice call or WhatsApp audio call. You do not need any special software, webcam, or video setup—just a quiet, comfortable space where you can speak freely.",
  },
  {
    category: "Counselling",
    question: "What is the background and experience of Dr. Shivie Gupta?",
    answer:
      "Dr. Shivie Gupta brings approximately 35 years of dedicated experience in emotional counselling, relationship guidance, and family harmony. Her practice is grounded in empathetic active listening, practical cognitive tools, and gentle biofield awareness in Dayalbagh, Agra.",
  },
  {
    category: "Counselling",
    question: "What are the session charges and how do I schedule an appointment?",
    answer:
      "Sessions range from ₹1,000 to ₹2,200 depending on whether it is an Individual, Couple, Family, or Reiki session. You can request a session using the online inquiry form or connect directly via call or WhatsApp at +91 9837891692.",
  },
  {
    category: "Reiki (Optional)",
    question: "Is Reiki compulsory or is it a separate offering?",
    answer:
      "Reiki is completely optional and secondary. Dr. Shivie Gupta's primary practice is voice-only counselling. Traditional Usui Reiki is available exclusively for clients who specifically express interest in subtle energy balancing and deep relaxation.",
  },
  {
    category: "Counselling",
    question: "Is counselling suitable for emergency mental health crises?",
    answer:
      "No. Voice counselling with Dr. Shivie Gupta is an emotional support and personal guidance practice. It is not an emergency crisis intervention hotline or psychiatric emergency service. Individuals experiencing severe acute distress or crisis should contact national helplines (such as Tele-MANAS at 14416 in India) or visit a local hospital immediately.",
  },
  {
    category: "Hindi & Local",
    question: "Kya phone call par counselling utni hi asardar hoti hai?",
    answer:
      "Haan, bilkul. Phone call par baat karne se aap bina kisi jhijhak, camera ki chinta, ya clinic aane-jane ke bina apne ghar ki shanti me khulkar baat kar sakte hain. Lagbhag 35 saal ke anubhav ke saath, Dr. Shivie Gupta poori confidentiality aur dhyan ke saath sunti hain.",
  },
  {
    category: "Hindi & Local",
    question: "Session book karne ke liye kya karna hoga?",
    answer:
      "Aap is website ke 'Session Request' form ke zariye apna naam, phone number aur suvidhajanak samay bhej sakte hain, ya seedhe +91 9837891692 par Call ya WhatsApp message bhejkar apna session schedule kar sakte hain.",
  },
  {
    category: "Hindi & Local",
    question: "Kya rishton aur parivaarik tanav me voice counselling se madad milti hai?",
    answer:
      "Haan. Couple aur Family counselling me dono pakshon ko shanti se sunkar gusse, communication gap, aur aapsi galatfehmiyon ko suljhane ke vyavharik raste nikaale jaate hain.",
  },
];
