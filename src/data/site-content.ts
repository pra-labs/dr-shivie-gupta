export interface Service {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  duration: string;
  format: "In-Person (Agra)" | "Online / Distance" | "Hybrid (In-Person & Online)";
  pricingPlaceholder: string;
  idealFor: string[];
  whatHappens: string[];
  benefits: string[];
}

export interface FAQ {
  question: string;
  answer: string;
  category: "General" | "Session Details" | "Medical & Religious";
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  service: string;
}

export const servicesData: Service[] = [
  {
    id: "in-person-reiki",
    title: "In-Person Usui Reiki & Aura Cleanse",
    slug: "in-person-reiki",
    tagline: "Deep restorative energy healing in the tranquil sanctuary of our Agra clinic.",
    duration: "60 mins",
    format: "In-Person (Agra)",
    pricingPlaceholder: "₹1,800 per session / Packages available",
    idealFor: [
      "Physical exhaustion & chronic fatigue",
      "Accumulated somatic stress and nervous system burnout",
      "Emotional heaviness & grief transitions",
      "Restoring grounded mental clarity"
    ],
    whatHappens: [
      "Gentle intake discussion over warm herbal tea to identify immediate emotional blockages",
      "Fully clothed relaxation on a supportive healing couch with soothing soundscapes",
      "Systematic palm placements over seven primary chakras and energy meridians",
      "Aura sweeping and post-session grounding review with tailored home practices"
    ],
    benefits: [
      "Immediate calming of fight-or-flight sympathetic response",
      "Release of unexpressed emotional tension stored in the body",
      "Deep, restorative sleep following the session",
      "Renewed sense of lightness and centered presence"
    ]
  },
  {
    id: "distance-reiki",
    title: "Global Distance Reiki & Quantum Healing",
    slug: "distance-reiki",
    tagline: "Transcend geographical boundaries with high-frequency non-local energy transmission.",
    duration: "45 mins",
    format: "Online / Distance",
    pricingPlaceholder: "₹1,500 / $35 USD per session",
    idealFor: [
      "Clients outside Agra, NCR, or residing overseas",
      "Bed-bound individuals or post-operative recovery",
      "Acute anxiety episodes requiring immediate gentle support",
      "Regular energetic maintenance from the comfort of home"
    ],
    whatHappens: [
      "Pre-session WhatsApp/Zoom check-in and energetic alignment intention setting",
      "Client rests comfortably in their personal space during the dedicated transfer window",
      "Sacred Usui Hon Sha Ze Sho Nen symbol invocation and targeted remote energy projection",
      "Detailed voice-note reflection detailing detected blockages and energetic insights"
    ],
    benefits: [
      "Zero travel stress or environmental disruption",
      "Equally potent energetic resonance validated across quantum physics principles",
      "Flexible international scheduling across multiple timezones",
      "Recorded intuitive observations for ongoing personal reflection"
    ]
  },
  {
    id: "integrative-counseling",
    title: "Integrative Emotional Counseling & Mind-Body Synthesis",
    slug: "integrative-counseling",
    tagline: "Evidence-grounded emotional dialogue paired with subtle energy awareness.",
    duration: "60 mins",
    format: "Hybrid (In-Person & Online)",
    pricingPlaceholder: "₹2,200 per session / 4-Week Intensive ₹7,500",
    idealFor: [
      "Life crossroads, career transitions, and relationship turbulence",
      "Repetitive emotional patterns and unresolved subconscious conditioning",
      "Existential emptiness, mild depressive states, and high-functioning anxiety",
      "Individuals seeking rational, compassionate counseling without clinical coldness"
    ],
    whatHappens: [
      "Explorative cognitive dialogue uncovering core emotional stressors and narratives",
      "Somatic check-ins to map bodily responses to specific thoughts and memories",
      "Targeted emotional release techniques combining gentle breathwork with biofield resetting",
      "Practical behavioral micro-habits designed for daily integration"
    ],
    benefits: [
      "Synergy between cognitive clarity and nervous system de-escalation",
      "Freedom from circular ruminative thought loops",
      "Cultivation of compassionate self-boundaries and assertiveness",
      "Actionable roadmap for ongoing emotional resilience"
    ]
  },
  {
    id: "chakra-aura-balancing",
    title: "Chakra Alignment & Energetic Cord Cutting",
    slug: "chakra-aura-balancing",
    tagline: "Release draining energetic entanglements and recalibrate your biofield.",
    duration: "60 mins",
    format: "In-Person (Agra)",
    pricingPlaceholder: "₹2,000 per session",
    idealFor: [
      "Lingering ties to past toxic relationships or professional burnout",
      "Unexplained emotional heaviness absorbed from empathetic overload",
      "Feeling scattered, ungrounded, or chronically indecisive",
      "Seasonal or milestone spiritual resets"
    ],
    whatHappens: [
      "Pendulum and biometer assessment of all 7 primary energetic vortexes",
      "Intuitive identification of external emotional cords and etheric drainage",
      "Etheric cord detachment using Karuna Reiki Master frequencies",
      "Aura sealing and crystalline frequency balancing"
    ],
    benefits: [
      "Immediate reclamation of personal vitality and sovereign energy",
      "Relief from obsessive mental focus on past individuals",
      "Enhanced physical stamina and emotional equilibrium",
      "Shielding against energetic depletion in crowded or stressful settings"
    ]
  }
];

export const faqsData: FAQ[] = [
  {
    category: "General",
    question: "What is Reiki and how does it work?",
    answer: "Reiki is a Japanese biofield modality rooted in the principle that all living organisms are animated by universal life force energy ('Ki'). When stress, trauma, or fatigue stagnate this flow, we experience physical tiredness and emotional vulnerability. A Reiki master acts as an attuned conduit, channeling gentle, high-frequency energy to facilitate your autonomic nervous system's innate self-healing response."
  },
  {
    category: "Medical & Religious",
    question: "Is Reiki a religion or associated with any religious faith?",
    answer: "No. Reiki is completely non-religious and non-dogmatic. It requires no belief system, faith, or spiritual conversion to be effective. Dr. Shivie Gupta works with individuals of all cultural, philosophical, and spiritual backgrounds, as well as rational skeptics and medical professionals."
  },
  {
    category: "Session Details",
    question: "What should I expect during my first session with Dr. Shivie in Agra?",
    answer: "You will arrive at our calm Dayalbagh clinic, remove your shoes, and enjoy a warm herbal infusion while discussing your intentions and current challenges. You will then lie fully clothed on a padded treatment bed. Soft music will play as Dr. Shivie gently places her hands on or slightly above key energy centers. Most clients feel gentle warmth, subtle tingling, or a state of profound meditative tranquility."
  },
  {
    category: "Session Details",
    question: "How does Distance Reiki work if I am not in Agra?",
    answer: "In quantum energy traditions and non-local physics models, consciousness and biofield intent are not bound by Euclidean space. Using sacred distance protocols (Hon Sha Ze Sho Nen), energy is focused specifically on your energetic coordinates. Distance clients worldwide consistently report experiencing the exact same sensations of warmth, relief, and release as in-person visitors."
  },
  {
    category: "Medical & Religious",
    question: "Can Reiki replace medical treatment or psychiatric care?",
    answer: "Never. Reiki is an integrative, complementary wellness practice. Dr. Shivie strictly upholds that Reiki and holistic counseling work in harmony with—and never as a substitute for—conventional medical treatments, psychotherapy, or prescribed medications. If you have an acute medical condition, consult your physician."
  },
  {
    category: "General",
    question: "How many sessions will I need to feel significant improvement?",
    answer: "While many clients experience substantial relief, mental clarity, and improved sleep following a single session, deep-seated emotional patterns or chronic stress typically benefit from a structured series of 3 to 5 sessions spaced weekly or bi-weekly."
  }
];

export const testimonialsData: Testimonial[] = [
  {
    name: "Sunita Agarwal",
    location: "Kamla Nagar, Agra",
    quote: "After months of insomnia and work-related panic, Dr. Shivie's calm presence and gentle touch brought a stillness I hadn't felt in years. Her studio in Agra is a sanctuary of peace.",
    service: "In-Person Usui Reiki"
  },
  {
    name: "Rohit K. Verma",
    location: "Civil Lines, Agra / Delhi NCR",
    quote: "I was skeptical about energy healing until our counseling session. Dr. Shivie bridges grounded psychological inquiry with subtle energy work masterfully. No superstition, just deep emotional renewal.",
    service: "Integrative Emotional Counseling"
  },
  {
    name: "Ananya Deshmukh",
    location: "Mumbai (Distance Client)",
    quote: "Her distance sessions are deeply calming. Despite being hundreds of kilometers away, I could distinctly feel the warmth in my chest and shoulders. The voice notes she sends post-session are remarkably perceptive.",
    service: "Global Distance Reiki"
  }
];
