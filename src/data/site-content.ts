export interface Practice {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  tradition: string;
  keyThemes: string[];
  principles: string[];
  selfCareTakeaways: string[];
}

export interface FAQ {
  question: string;
  answer: string;
  category: "General" | "Practice Understanding" | "Mindfulness & Science" | "Hindi & Local";
}

export interface Reflection {
  name: string;
  location: string;
  note: string;
  topic: string;
}

export const practicesData: Practice[] = [
  {
    id: "usui-reiki-ryoho",
    title: "Usui Reiki Ryoho Foundations",
    slug: "usui-reiki-ryoho",
    tagline: "The traditional Japanese art of channeling subtle life force energy for systemic calm.",
    tradition: "Mikao Usui Lineage (Japan, 1920s)",
    keyThemes: [
      "Parasympathetic nervous system restoration",
      "Somatic stress dissipation and emotional stillness",
      "Cultivating meditative daily presence (Gokai principles)",
      "Unblocking stagnant biofield meridians",
    ],
    principles: [
      "Just for today, do not be angry (Kyo dake wa Okoru-na)",
      "Just for today, do not worry (Shinpai suna)",
      "Be grateful (Kansha shite)",
      "Do your duties with diligence (Gyo o hage-me)",
      "Be kind to every living being (Hito ni shinsetsu ni)",
    ],
    selfCareTakeaways: [
      "Daily self-treatment hand placements over the heart, belly, and head",
      "Conscious diaphragmatic breathwork paired with palm warmth",
      "Setting non-reactive emotional intentions each morning",
    ],
  },
  {
    id: "chakra-biofield-awareness",
    title: "Chakra & Biofield Energy Alignment",
    slug: "chakra-biofield-awareness",
    tagline: "Understanding the seven vital energetic centers and their somatic correlations.",
    tradition: "Vedic & Subtle Energy Studies",
    keyThemes: [
      "Mapping physical tension to emotional centers",
      "Releasing lingering emotional cords and empathetic fatigue",
      "Cultivating energetic boundaries and vitality",
      "Grounding exercises for high-stress living",
    ],
    principles: [
      "Energy follows intention and mindful awareness",
      "Balanced chakras foster emotional resilience and cognitive clarity",
      "Releasing external psychological weight preserves personal sovereignty",
    ],
    selfCareTakeaways: [
      "Visualizing grounding roots connecting into the earth beneath your feet",
      "Observing breath resonance across the chest, solar plexus, and throat",
      "Mindful water hydration to support biofield conductivity",
    ],
  },
  {
    id: "integrative-emotional-inquiry",
    title: "Integrative Mindfulness & Emotional Harmony",
    slug: "integrative-emotional-inquiry",
    tagline: "Bridging cognitive self-reflection with somatic biofield awareness.",
    tradition: "Contemplative Psychology & Energy Synergy",
    keyThemes: [
      "Observing emotional loops without immediate self-judgment",
      "Somatic check-ins mapping emotions inside the body",
      "Developing self-compassion during life crossroads and grief",
      "Freedom from rigid mental dogmas and superstition",
    ],
    principles: [
      "Cognitive understanding paired with somatic ease creates enduring peace",
      "Emotions are physiological energies that desire gentle acknowledgement",
      "Mental stillness begins by honoring the physical body's signals",
    ],
    selfCareTakeaways: [
      "Ten-minute evening silent reflection without digital screens",
      "Gentle journal prompts exploring emotional crossroads",
      "Loving-kindness meditation for personal and collective well-being",
    ],
  },
  {
    id: "distance-reiki-concepts",
    title: "Non-Local Healing & Distance Energy Concepts",
    slug: "distance-reiki-concepts",
    tagline: "Exploring quantum biofield resonance and intentional connection across space.",
    tradition: "Usui Hon Sha Ze Sho Nen Principle",
    keyThemes: [
      "Non-local physics analogies and conscious interconnectedness",
      "Focused intention and meditative presence across distance",
      "Supporting loved ones and inner peace from afar",
      "Overcoming spatial limitations in contemplative energy work",
    ],
    principles: [
      "Consciousness and subtle energetic fields transcend Euclidean boundaries",
      "Ethical stewardship: healing intention always respects recipient willingness",
      "Quiet personal meditation deepens universal empathy",
    ],
    selfCareTakeaways: [
      "Quietly holding a peaceful, loving intention for family and community",
      "Cultivating unified consciousness through regular silent stillness",
    ],
  },
];

export const faqsData: FAQ[] = [
  {
    category: "General",
    question: "What is Reiki and what is the purpose of this website?",
    answer: "This platform is an independent, non-commercial educational resource curated by Dr. Shivie Gupta. Its purpose is to demystify traditional Usui and Karuna Reiki, clarify subtle biofield concepts, and share practical mindfulness techniques for emotional harmony without commercial sales or paid appointments.",
  },
  {
    category: "General",
    question: "Does Dr. Shivie Gupta offer paid therapy or commercial clinic appointments here?",
    answer: "No. This website is purely informational and educational. Dr. Shivie Gupta does not sell sessions, commercial packages, or clinic slots here. The content exists to foster awareness, self-care practices, and academic inquiry into energy modalities.",
  },
  {
    category: "General",
    question: "How does Reiki differ from fortune-telling, tarot, or astrology?",
    answer: "Reiki is an evidence-informed contemplative biofield practice centered on relaxation, autonomic regulation, and emotional awareness. It has no connection to future prediction, horoscope readings, psychic phenomena, or supernatural fortune-telling.",
  },
  {
    category: "Practice Understanding",
    question: "What do people typically experience during a Reiki session?",
    answer: "Recipients commonly experience soothing warmth from the practitioner's hands, gentle tingling, rhythmic muscle relaxation, stomach gurgling signaling parasympathetic vagal activation, and a deeply peaceful meditative state between wakefulness and sleep.",
  },
  {
    category: "Practice Understanding",
    question: "Do you have to undress or change clothes for Reiki?",
    answer: "Never. Reiki is practiced fully clothed. Comfortable, loose-fitting cotton or linen attire that allows natural, unconstrained breathing is recommended for all personal relaxation and energy exercises.",
  },
  {
    category: "Mindfulness & Science",
    question: "Can Reiki replace medical or psychiatric treatment?",
    answer: "Never. Reiki is an integrative, complementary wellness practice. It is designed to support relaxation and emotional well-being, and should never be viewed as a substitute for licensed medical care, psychiatric diagnosis, or prescribed therapies.",
  },
  {
    category: "Mindfulness & Science",
    question: "Is Reiki associated with any specific religion or creed?",
    answer: "No. Reiki is universally secular and non-dogmatic. It requires no religious belief, faith conversion, or philosophical adherence, welcoming practitioners and researchers of all cultures, faiths, and scientific backgrounds.",
  },
  {
    category: "Practice Understanding",
    question: "How does distance energy work conceptually?",
    answer: "Distance Reiki is framed around non-local quantum biofield principles, wherein focused conscious intention bridges spatial separation. In Usui traditions, it represents a meditative state connecting individuals to universal peace regardless of geographic boundaries.",
  },
  {
    category: "Hindi & Local",
    question: "Kya Reiki se overthinking aur mental stress kam hota hai?",
    answer: "Haan, Reiki dhyan aur biofield relaxation ke madhyam se autonomic nervous system ko shant karti hai, jisse dimag me chal rahi anavashyak chinta aur overthinking natural tareeqe se shant hoti hai.",
  },
  {
    category: "Hindi & Local",
    question: "Kya is website par koi paid appointment ya fees lagti hai?",
    answer: "Nahi, yeh website ek poori tarah se non-commercial aur educational resource hai. Yahan koi paid session, fees ya clinic booking nahi hoti; yeh keval Reiki aur mental peace ki jankari ke liye banayi gayi hai.",
  },
  {
    category: "Hindi & Local",
    question: "Kya Reiki kisi dharam ya pooja-path se judi hui hai?",
    answer: "Bilkul nahi. Reiki kisi bhi dharam ya dharmik kriya se nahi judi hai. Yeh ek secular aur universal energy-balancing vidhi hai jise koi bhi vyakti apna sakta hai.",
  },
];

export const reflectionsData: Reflection[] = [
  {
    name: "A. Sharma",
    location: "Agra, Uttar Pradesh",
    note: "Reading Dr. Shivie's reflections on the Gokai principles brought a profound calm to my daily routine. A wonderfully grounded perspective on subtle energy.",
    topic: "Gokai Mindfulness",
  },
  {
    name: "P. Mehta",
    location: "New Delhi",
    note: "Finally, an explanation of Reiki and biofields stripped of commercial hype and superstition. The scientific and emotional harmony here is rare.",
    topic: "Integrative Biofields",
  },
  {
    name: "R. Sen",
    location: "Bengaluru",
    note: "The self-care takeaways and beginner guide have become part of my evening grounding ritual. Grateful for this open educational resource.",
    topic: "Self-Care Meditation",
  },
];
