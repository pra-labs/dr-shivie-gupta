export interface AssistantResponse {
  reply: string;
  matchedIntent:
    | "crisis"
    | "greeting"
    | "how_it_works"
    | "couple"
    | "family"
    | "individual"
    | "reiki"
    | "pricing_format"
    | "off_topic";
  suggestedAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

// 1. Crisis & Acute Distress Guardrail (Highest Priority)
const CRISIS_PATTERNS = [
  /\b(suicide|suicidal|kill\s*myself|end\s*my\s*life|want\s*to\s*die|self[-\s]*harm|hurt\s*myself)\b/i,
  /\b(hopeless|no\s*reason\s*to\s*live|can'?t\s*go\s*on|emergency|abuse|danger|severe\s*panic)\b/i,
  /\b(mar\s*jana|jaan\s*dena|khudkushi|aatmhatya)\b/i,
  /\b(end\s*it|killing\s*myself|end\s*everything|give\s*up\s*on\s*life)\b/i,
  /\b(marne\s*ka\s*man|mar\s*jaun|zeher|jeena\s*nahi\s*hai|jeena\s*nahi\s*chahta|khatam\s*karna\s*hai|bheetar\s*se\s*sab\s*khatam)\b/i,
];

// 2. Greeting Patterns
const GREETING_PATTERNS = [
  /^(hi|hello|hey|namaste|pranam|namaskar|good\s*(morning|afternoon|evening)|hlo|helo)[\s!.]*$/i,
  /^(kya\s*hal\s*hai|kaise\s*ho|greeting|help)[\s!.]*$/i,
];

// 3. How a Voice Call Works & Privacy & Starting Hesitation
const HOW_IT_WORKS_PATTERNS = [
  /\b(how\s*it\s*works|how\s*does\s*it\s*work|how\s*voice\s*calls\s*work|first\s*call|first\s*session|pehli\s*baar|what\s*happens)\b/i,
  /\b(confidential|confidentiality|privacy|secret|safe|gupt|webcam|camera|video|zoom|in[- ]*person|clinic|audio\s*only|overhearing)\b/i,
  /\b(nervous|hesitant|anxious\s*about\s*starting|scared\s*to\s*start|never\s*done\s*this|first\s*time)\b/i,
  /\b(living\s*with\s*family|joint\s*family\s*privacy|thin\s*walls|overhear|room\s*privacy)\b/i,
  /(निजता|झिझक|फ़ोन\s*कॉल\s*सेशन\s*कैसे|शुरू\s*करने\s*में)/,
];

// 4. Family, Household & In-Laws Inquiries
// Evaluated before couple counselling to catch "husband's family / in-laws" and "ghar ka jhagda" cleanly
const FAMILY_PATTERNS = [
  /\b(family|parent|parents|teen|teenager|adolescent|child|children|son|daughter)\b/i,
  /\b(in[- ]*laws?|mother[- ]*in[- ]*law|father[- ]*in[- ]*law|sasural|saas|sasur|bahu|damad)\b/i,
  /\b(parivar|ghar\s*ke\s*log|ghar\s*ka\s*jhagda|ghar\s*me\s*jhagda|ghar\s*ka\s*mahol|sasural\s*ka\s*pressure|bache|maa|baap|mummy|papa|intergenerational|joint\s*family)\b/i,
  /(परिवार|ससुराल|घर\s*का\s*माहौल)/,
];

// 5. Couple & Relationship Inquiries
const COUPLE_PATTERNS = [
  /\b(couple|marriage|marital|husband|wife|spouse|partner|relationship|relationships|dating|breakup|divorce|intimacy)\b/i,
  /\b(shaadi|pati|patni|rishte|sambandh|jhagda|ladai|arguments|communication\s*gap|khich[-\s]*khich|tension\s*in\s*relationship|tension\s*in\s*relationships)\b/i,
  /(रिश्तों|शादी|पति|पत्नी)/,
];

// 6. Optional Reiki & Biofield Inquiries
const REIKI_PATTERNS = [
  /\b(reiki|energy|biofield|chakra|healing|vibration|relaxation|somatic|stillness|body|usui)\b/i,
  /\b(urja|dhyan|shakti|spiritual\s*healing|body\s*tight|somatic\s*grounding)\b/i,
  /(रेकी|ऊर्जा|ध्यान)/,
];

// 7. Pricing, Timing & Contact Inquiries
const PRICING_FORMAT_PATTERNS = [
  /\b(fee|fees|price|pricing|charge|charges|cost|inr|rupees|rate|paise|kitne\s*paise)\b/i,
  /\b(timing|hours|when\s*can\s*i\s*call|samay|schedule|appointment|book|slot)\b/i,
  /\b(phone\s*number|call\s*number|whatsapp|contact|phone\s*call|voice)\b/i,
];

// 8. Individual Counselling & Wellbeing Inquiries
const INDIVIDUAL_PATTERNS = [
  /\b(stress|anxiety|depress|depression|mood|sad|alone|lonely|overthinking|worry|fear|phobia)\b/i,
  /\b(confidence|self[-\s]*worth|grief|crossroads|career\s*stress|burnout|restless|insomnia|sleep|neend)\b/i,
  /\b(tanav|tanaav|chinta|fakar|fikr|dimag|man|sukoon|shanti|udaas|pareshan|sochna|ghabrahat|dam\s*ghut|dimag\s*shant|overthinking\s*ho\s*rahi|feeling\s*overwhelmed)\b/i,
];

// 9. Explicit Off-Topic Patterns
const OFF_TOPIC_PATTERNS = [
  /\b(code|coding|python|javascript|react|crypto|bitcoin|stocks?|shares?|trading|mutual\s*funds?|invest|tax|legal|court|lawyer|recipe|weather|medicine|dawa|tablets)\b/i,
];

export function routeIntent(userInput: string, lang: "en" | "hi" = "en"): AssistantResponse {
  const text = userInput.trim();
  const isHi = lang === "hi";

  // 1. SAFETY FIRST: Crisis & Acute Distress Guardrail (Strict priority)
  if (CRISIS_PATTERNS.some((pattern) => pattern.test(text))) {
    return {
      matchedIntent: "crisis",
      reply: isHi
        ? `कृपया जान लें कि इस भारी वक्त में आप अकेले नहीं हैं। आपकी सुरक्षा और आपका जीवन बहुत कीमती है।\n\nडॉ. शिवी गुप्ता के साथ फ़ोन पर बातचीत भावनात्मक सहारे और मार्गदर्शन के लिए है—यह **कोई आपातकालीन क्राइसिस हेल्पलाइन** या अस्पताल नहीं है।\n\nयदि आप बहुत अधिक तकलीफ़ में हैं या मन में हार मानने के विचार आ रहे हैं, तो कृपया अभी 24/7 उपलब्ध प्रमाणित हेल्पलाइन से बात करें:\n- **Tele-MANAS (भारत सरकार):** **14416** या **1800 891 4416** पर कॉल करें (निःशुल्क, 24x7)\n- **Vandrevala Foundation:** **9999 666 555** पर कॉल या WhatsApp करें (गोपनीय, 24x7)\n- **राष्ट्रीय आपातकालीन सेवा:** **112** पर कॉल करें या किसी विश्वसनीय व्यक्ति/नजदीकी अस्पताल से संपर्क करें।\n\nकृपया एक गहरी सांस लें और अभी इनमें से किसी हेल्पलाइन पर कॉल करें।`
        : `Please know that you do not have to carry this overwhelming weight alone right now. Your safety and your life matter deeply.

Phone consultations with Dr. Shivie Gupta offer personal emotional guidance and reflective dialogue—it is **NOT an emergency crisis hotline** or hospital psychiatric facility.

If you are hurting or having thoughts of giving up, compassionate, certified crisis professionals are available 24/7 without judgment:
- **Tele-MANAS (Govt. of India):** Call **14416** or **1800 891 4416** (Toll-Free, 24x7)
- **Vandrevala Foundation:** Call or WhatsApp **9999 666 555** (Confidential, 24x7)
- **National Emergency:** Call **112** or reach out to someone you trust or a nearby hospital.

Please take a gentle breath and reach out to one of these free helplines right now. They are ready to be with you.`,
      suggestedAction: {
        label: isHi ? "Tele-MANAS पर कॉल करें (14416)" : "Call Tele-MANAS (14416)",
        href: "tel:14416",
      },
      secondaryAction: {
        label: "Vandrevala (9999666555)",
        href: "tel:9999666555",
      },
    };
  }

  // 2. WARM GREETING: Gentle Welcome & Reassurance
  if (GREETING_PATTERNS.some((pattern) => pattern.test(text))) {
    return {
      matchedIntent: "greeting",
      reply: `Namaste. Welcome to this quiet, safe corner.

Whatever brought you here today, please take your time. There is no rush to explain everything or make immediate decisions. 

Dr. Shivie Gupta has spent over **35 years** listening with deep patience from Dayalbagh, Agra. All consultations happen strictly over telephone or WhatsApp voice calls, so you never have to be on camera or step outside your comfort zone.

*What has been sitting on your heart or mind lately?*

Whenever you feel comfortable, you can explore session details on [Services & Pricing](/services), read how others navigated their first steps on [Client Guide](/guide), or reach out with a gentle note on [Request a Voice Session](/connect).`,
      suggestedAction: {
        label: "Explore Session Ways",
        href: "/services",
      },
      secondaryAction: {
        label: "Gentle Inquiries (+91 98378 91692)",
        href: "tel:+919837891692",
      },
    };
  }

  // 3. HOW A VOICE CALL WORKS & PRIVACY & STARTING HESITATION
  if (HOW_IT_WORKS_PATTERNS.some((pattern) => pattern.test(text))) {
    return {
      matchedIntent: "how_it_works",
      reply: `It is completely natural to feel hesitant or uneasy before opening up to someone new—especially if you've never spoken to a counsellor before, or if you live with family and worry about being overheard.

Here is how quiet, protected care is shaped here:

- **Strictly Voice-Only:** You never need to turn on a webcam or worry about how you look or where you are sitting. Just a simple phone or WhatsApp audio call.
- **Privacy at Home:** Many clients speak while taking a gentle stroll on their terrace, sitting in a parked car, or using standard earphones while speaking in a whisper. Dr. Gupta listens just as attentively.
- **No Pressure to Be "Articulate":** You don't have to prepare notes or tell your story chronologically. Pauses, silence, and tears are welcomed with gentleness.

*What is one small question or worry you have about having your first conversation?*

Take all the time you need. You can read more about what happens during sessions on [Client Guide](/guide) or reach out softly whenever you feel ready.`,
      suggestedAction: {
        label: "Read Client Guide",
        href: "/guide",
      },
      secondaryAction: {
        label: "Learn About Dr. Shivie",
        href: "/about",
      },
    };
  }

  // 4. FAMILY, HOUSEHOLD & IN-LAWS COUNSELLING
  // Checked BEFORE couple so phrases like "husband's family / in-laws" route accurately
  if (FAMILY_PATTERNS.some((pattern) => pattern.test(text))) {
    return {
      matchedIntent: "family",
      reply: `Living in close quarters or navigating unspoken family expectations can feel deeply draining, especially when you feel caught between loyalty, tradition, and your own personal peace.

It takes immense emotional strength to hold a family together while trying to protect your own boundaries. Dr. Shivie Gupta brings over 35 years of grounded, compassionate perspective to Indian household dynamics and intergenerational conversations.

*When was the last time you felt truly heard at home without having to defend yourself?*
*What would peaceful coexistence look like for your heart right now?*

Whenever you and your family are ready to speak, **Family Voice Counselling** offers a neutral, patient space. You can read more on [Services & Pricing](/services) or leave a quiet note on [Request a Voice Session](/connect) when the time feels right.`,
      suggestedAction: {
        label: "Explore Family Guidance",
        href: "/services#services-list",
      },
      secondaryAction: {
        label: "Speak with Dr. Gupta",
        href: "tel:+919837891692",
      },
    };
  }

  // 5. COUPLE & RELATIONSHIP COUNSELLING
  if (COUPLE_PATTERNS.some((pattern) => pattern.test(text))) {
    return {
      matchedIntent: "couple",
      reply: `When distance, misunderstandings, or repeated arguments build up in a relationship, even small conversations can feel like walking on eggshells. Feeling disconnected from someone you love is one of the heaviest things to carry.

In relationship counselling, the goal isn't to assign blame or point fingers. It is about creating a calm, dignified voice space where both partners can finally hear what lies beneath the frustration.

*What is a feeling or need you wish your partner could understand without it turning into conflict?*

Whether you choose to speak together or start with individual clarity first, support is here whenever you feel ready. You can explore details on [Services & Pricing](/services) or send a soft inquiry on [Request a Voice Session](/connect).`,
      suggestedAction: {
        label: "Relationship Support",
        href: "/services#services-list",
      },
      secondaryAction: {
        label: "Soft WhatsApp Note",
        href: "https://wa.me/919837891692?text=Hello%20Dr.%20Shivie%20Gupta,%20I%20would%20like%20to%20learn%20more%20about%20couple%20guidance%20sessions.",
      },
    };
  }

  // 6. OPTIONAL REIKI HEALING
  if (REIKI_PATTERNS.some((pattern) => pattern.test(text))) {
    return {
      matchedIntent: "reiki",
      reply: `Sometimes stress doesn't just sit in the mind—it settles into the physical body as tightness in the chest, a clenched jaw, or restless nights where calm feels out of reach.

**Usui Reiki Biofield Balancing** is offered by Dr. Shivie Gupta strictly as an optional, contemplative complement for clients who seek somatic relaxation and energetic stillness. It is a peaceful, meditative practice to help your nervous system gently reset.

*Where do you feel the tension settling in your body most right now?*

Please note that Reiki is entirely optional and never required alongside counselling. You are welcome to learn more on [Services & Pricing](/services) or inquire quietly on [Request a Voice Session](/connect) if this resonance calls to you.`,
      suggestedAction: {
        label: "Learn About Reiki",
        href: "/services#services-list",
      },
      secondaryAction: {
        label: "Quiet Inquiry",
        href: "/connect?service=reiki",
      },
    };
  }

  // 7. PRICING, TIMING & DIRECT CONTACT
  if (PRICING_FORMAT_PATTERNS.some((pattern) => pattern.test(text))) {
    return {
      matchedIntent: "pricing_format",
      reply: `Clear, open communication begins with transparent expectations, so you never have to wonder or worry about hidden costs.

**Consultation Offerings & Honorarium:**
- **Individual Voice Counselling:** ₹1,200 (50 mins) — personal stress, clarity, life transitions
- **Couple & Relationship Counselling:** ₹1,800 (60 mins) — marital harmony, communication repair
- **Family Counselling:** ₹2,200 (60 mins) — household understanding and parenting support
- **Optional Reiki Relaxation:** ₹1,000 (45 mins) — somatic stillness and energetic balance

**Consultation Hours:**
Monday to Saturday, 10:00 AM – 7:00 PM IST via private phone or WhatsApp voice call.

*Would you like to take your time reading through our [Client Guide](/guide), or is there a particular day or time of day when your space feels quietest?*

Whenever you are ready, you can submit your details at [Request a Voice Session](/connect) or reach out directly at **+91 98378 91692**.`,
      suggestedAction: {
        label: "View Client Guide",
        href: "/guide",
      },
      secondaryAction: {
        label: "Request a Voice Session",
        href: "/connect",
      },
    };
  }

  // 8. OFF-TOPIC & SCOPE GUARDRAIL
  if (OFF_TOPIC_PATTERNS.some((pattern) => pattern.test(text))) {
    return {
      matchedIntent: "off_topic",
      reply: `I am here specifically as a compassionate companion for Dr. Shivie Gupta's emotional counselling and personal guidance practice. I am unable to assist with technical, legal, financial, or medical prescription matters.

If you are carrying personal stress, navigating family conversations, or seeking a quiet, confidential space to talk, Dr. Gupta's voice practice is here for you.

*Is there an emotional challenge or session detail you would like to gently explore today?*

You can always review the sanctuary of services on [Services & Pricing](/services) or read answers on [Client Guide](/guide).`,
      suggestedAction: {
        label: "Explore Guidance Services",
        href: "/services",
      },
      secondaryAction: {
        label: "Read FAQs & Guide",
        href: "/guide",
      },
    };
  }

  // 9. INDIVIDUAL COUNSELLING & EMOTIONAL WELLBEING (Default Contextual Match)
  if (INDIVIDUAL_PATTERNS.some((pattern) => pattern.test(text))) {
    return {
      matchedIntent: "individual",
      reply: `Feeling overwhelmed, anxious, or mentally tired is deeply exhausting. When thoughts spin in circles, even getting through routine days can feel like wading through heavy water.

Please know that feeling this way does not mean you have failed or that you are weak. It simply means you have been holding things together on your own for a very long time.

*When did things start feeling this heavy for you?*
*What is one small burden you wish you didn't have to carry alone today?*

In **Individual Voice Counselling**, Dr. Shivie Gupta offers an unhurried, gentle space over phone to untangle these knots at your own pace. 

Whenever you are ready, you can explore session details on [Services & Pricing](/services), read through our [Client Guide](/guide), or leave a soft note on [Request a Voice Session](/connect).`,
      suggestedAction: {
        label: "Read Client Guide",
        href: "/guide",
      },
      secondaryAction: {
        label: "Request a Voice Session",
        href: "/connect?service=individual",
      },
    };
  }

  // Default fallback
  return {
    matchedIntent: "individual",
    reply: `Thank you for sharing that. It takes courage to put into words what you are experiencing, even in a small way.

In this sanctuary, there is no expectation for you to have everything figured out. Dr. Shivie Gupta brings 35 years of unhurried, empathetic voice consultations to help you find your footing again.

*What would feel most supportive or comforting for you right now?*

Whenever you feel inclined, you can explore the practice on [Services & Pricing](/services), read our gentle [Client Guide](/guide), or take a small step on [Request a Voice Session](/connect).`,
    suggestedAction: {
      label: "Explore Session Ways",
      href: "/services",
    },
    secondaryAction: {
      label: "Leave a Gentle Note",
      href: "/connect",
    },
  };
}
