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

// 3. How a Voice Call Works & Privacy
const HOW_IT_WORKS_PATTERNS = [
  /\b(how\s*it\s*works|how\s*does\s*it\s*work|first\s*call|first\s*session|pehli\s*baar|what\s*happens)\b/i,
  /\b(confidential|confidentiality|privacy|secret|safe|gupt|webcam|camera|video|zoom|in[- ]*person|clinic|audio\s*only|overhearing)\b/i,
];

// 4. Family, Household & In-Laws Inquiries
// Evaluated before couple counselling to catch "husband's family / in-laws" and "ghar ka jhagda" cleanly
const FAMILY_PATTERNS = [
  /\b(family|parent|parents|teen|teenager|adolescent|child|children|son|daughter)\b/i,
  /\b(in[- ]*laws?|mother[- ]*in[- ]*law|father[- ]*in[- ]*law|sasural|saas|sasur|bahu|damad)\b/i,
  /\b(parivar|ghar\s*ke\s*log|ghar\s*ka\s*jhagda|ghar\s*me\s*jhagda|ghar\s*ka\s*mahol|sasural\s*ka\s*pressure|bache|maa|baap|mummy|papa|intergenerational|joint\s*family)\b/i,
];

// 5. Couple & Relationship Inquiries
const COUPLE_PATTERNS = [
  /\b(couple|marriage|marital|husband|wife|spouse|partner|relationship|dating|breakup|divorce|intimacy)\b/i,
  /\b(shaadi|pati|patni|rishte|sambandh|jhagda|ladai|arguments|communication\s*gap|khich[-\s]*khich)\b/i,
];

// 6. Optional Reiki & Biofield Inquiries
const REIKI_PATTERNS = [
  /\b(reiki|energy|biofield|chakra|healing|vibration|relaxation|somatic|stillness|body|usui)\b/i,
  /\b(urja|dhyan|shakti|spiritual\s*healing|body\s*tight|somatic\s*grounding)\b/i,
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
  /\b(tanav|tanaav|chinta|fakar|fikr|dimag|man|sukoon|shanti|udaas|pareshan|sochna|ghabrahat|dam\s*ghut|dimag\s*shant|overthinking\s*ho\s*rahi)\b/i,
];

// 9. Explicit Off-Topic Patterns
const OFF_TOPIC_PATTERNS = [
  /\b(code|coding|python|javascript|react|crypto|bitcoin|stocks?|shares?|trading|mutual\s*funds?|invest|tax|legal|court|lawyer|recipe|weather|medicine|dawa|tablets)\b/i,
];

export function routeIntent(userInput: string): AssistantResponse {
  const text = userInput.trim();

  // 1. SAFETY FIRST: Crisis & Acute Distress Guardrail
  if (CRISIS_PATTERNS.some((pattern) => pattern.test(text))) {
    return {
      matchedIntent: "crisis",
      reply: `If you are in distress, feeling overwhelmed, or having thoughts of self-harm, please know that you are not alone and professional crisis help is immediately available.

**Important:** Phone counselling with Dr. Shivie Gupta is an emotional support and personal guidance practice—it is **NOT an emergency crisis hotline** or psychiatric hospital service.

Please contact certified 24x7 emergency helplines right away:
- **Tele-MANAS (Government of India):** Call **14416** or **1800 891 4416** (Toll-Free, 24x7)
- **Vandrevala Foundation:** Call or WhatsApp **9999 666 555** (Free, Confidential, 24x7)
- **National Emergency Number:** Call **112** or visit your nearest hospital emergency department.

Please reach out to one of these dedicated crisis resources immediately.`,
      suggestedAction: {
        label: "Call Tele-MANAS (14416)",
        href: "tel:14416",
      },
      secondaryAction: {
        label: "Vandrevala (9999666555)",
        href: "tel:9999666555",
      },
    };
  }

  // 2. WARM GREETING: Balanced Overview (Does not presume single service)
  if (GREETING_PATTERNS.some((pattern) => pattern.test(text))) {
    return {
      matchedIntent: "greeting",
      reply: `Namaste and welcome. I am Dr. Shivie Gupta's practice assistant.

Dr. Shivie Gupta brings **~35 years of experience** offering confidential, voice-only phone consultations from Dayalbagh, Agra. All consultations take place strictly over telephone or WhatsApp audio call for complete personal comfort and privacy.

**Session Options & Transparent Fees:**
- **Individual Voice Counselling:** ₹1,200 (50 mins) — for overthinking, personal stress, anxiety, or emotional crossroads.
- **Couple & Relationship Counselling:** ₹1,800 (60 mins) — for communication breakdowns, marital conflict, or trust rebuilding.
- **Family Counselling:** ₹2,200 (60 mins) — for intergenerational misunderstandings and household harmony.
- **Optional Reiki Healing:** ₹1,000 (45 mins) — traditional Usui biofield relaxation (strictly on request).

What would you like to explore today? You can view all options on [Services & Pricing](/services), read client questions on [Client Guide](/guide), or [Request a Voice Session](/connect).`,
      suggestedAction: {
        label: "View Services & Pricing",
        href: "/services",
      },
      secondaryAction: {
        label: "Call +91 98378 91692",
        href: "tel:+919837891692",
      },
    };
  }

  // 3. HOW A VOICE CALL WORKS & PRIVACY
  if (HOW_IT_WORKS_PATTERNS.some((pattern) => pattern.test(text))) {
    return {
      matchedIntent: "how_it_works",
      reply: `Here is how consultations work with Dr. Shivie Gupta:

**1. Strictly Voice-Only (Phone / Audio Call):**
There are no webcams, Zoom screens, or video camera requirements. Speaking over audio eliminates camera anxiety, letting you focus entirely on your thoughts and feelings from your private room.

**2. Complete Confidentiality:**
All discussions are held in strict confidence between you and Dr. Gupta. You do not need to visit a clinic or sit in waiting rooms.

**3. What to Expect During the First Call:**
Dr. Gupta listens actively to your current situation without judgment, helps untangle the emotional knots, and offers practical reflective tools.

Learn more on our [About Dr. Shivie Gupta](/about) page, read answers on [Client Guide](/guide), or submit your preferred timing on [Request a Voice Session](/connect).`,
      suggestedAction: {
        label: "Read Client Guide",
        href: "/guide",
      },
      secondaryAction: {
        label: "Request a Voice Session",
        href: "/connect",
      },
    };
  }

  // 4. FAMILY, HOUSEHOLD & IN-LAWS COUNSELLING
  // Checked BEFORE couple so phrases like "husband's family / in-laws" route accurately
  if (FAMILY_PATTERNS.some((pattern) => pattern.test(text))) {
    return {
      matchedIntent: "family",
      reply: `For household disputes, parent-teen communication gaps, or in-law friction, **Family Counselling (Voice Call • 60 mins • ₹2,200)** offers neutral, patient guidance.

With ~35 years of practice in Dayalbagh, Agra, Dr. Gupta helps families untangle complex domestic dynamics while preserving dignity and mutual respect for all members.

**Helpful themes to explore during your consultation:**
1. Where do generational perspectives or differing expectations clash most frequently?
2. How can family members set healthy personal boundaries without hostility?
3. What shared routines can help restore peace and warmth at home?

To coordinate a suitable time for your family phone session, visit [Request a Voice Session](/connect), read our [Client Guide](/guide), or call directly at **+91 98378 91692**.`,
      suggestedAction: {
        label: "Request Family Session",
        href: "/connect?service=family",
      },
      secondaryAction: {
        label: "Call +91 98378 91692",
        href: "tel:+919837891692",
      },
    };
  }

  // 5. COUPLE & RELATIONSHIP COUNSELLING
  if (COUPLE_PATTERNS.some((pattern) => pattern.test(text))) {
    return {
      matchedIntent: "couple",
      reply: `For marital tension, relationship friction, or communication difficulties, **Couple & Relationship Counselling (Voice Call • 60 mins • ₹1,800)** provides a safe, mediated space.

Dr. Shivie Gupta offers an empathetic, balanced perspective where both partners can speak openly without interruption or camera self-consciousness.

**Helpful questions to bring to your phone call:**
1. What recurring trigger or misunderstanding tends to turn everyday conversations into arguments or silence?
2. What is an unmet emotional need you feel has gone unacknowledged?
3. How can both of you re-establish emotional safety and active listening?

Sessions are held strictly via telephone/WhatsApp audio. You can reserve a slot on the [Request a Voice Session](/connect) page, review full details on [Services & Pricing](/services), or call directly at **+91 98378 91692**.`,
      suggestedAction: {
        label: "Request Couple Session",
        href: "/connect?service=couple",
      },
      secondaryAction: {
        label: "WhatsApp +91 98378 91692",
        href: "https://wa.me/919837891692?text=Hello%20Dr.%20Shivie%20Gupta,%20I%20would%20like%20to%20inquire%20about%20a%20couple%20counselling%20session.",
      },
    };
  }

  // 6. OPTIONAL REIKI HEALING
  if (REIKI_PATTERNS.some((pattern) => pattern.test(text))) {
    return {
      matchedIntent: "reiki",
      reply: `**Reiki Energy Balancing (45 mins • ₹1,000)** is offered by Dr. Shivie Gupta strictly as an **optional secondary wellness complement** upon client request.

Traditional Usui Reiki biofield balancing supports parasympathetic nervous system calm, somatic tension release, and restful sleep.

**Important practice clarifications:**
- Reiki is completely optional—it is never required for counselling clients.
- It is a gentle contemplative energy practice, not a medical or psychiatric treatment.
- You can request it on its own or alongside voice counselling.

For details, view [Services & Pricing](/services), read common questions on [Client Guide](/guide), or inquire via [Request a Voice Session](/connect).`,
      suggestedAction: {
        label: "Inquire for Reiki Balancing",
        href: "/connect?service=reiki",
      },
      secondaryAction: {
        label: "WhatsApp +91 98378 91692",
        href: "https://wa.me/919837891692?text=Hello%20Dr.%20Shivie%20Gupta,%20I%20would%20like%20to%20inquire%20about%20an%20optional%20Reiki%20session.",
      },
    };
  }

  // 7. PRICING, TIMING & DIRECT CONTACT
  if (PRICING_FORMAT_PATTERNS.some((pattern) => pattern.test(text))) {
    return {
      matchedIntent: "pricing_format",
      reply: `Here are the complete details regarding session format, fees, and scheduling:

**Transparent Session Pricing:**
- **Individual Voice Counselling:** ₹1,200 / 50-minute phone session
- **Couple & Relationship Counselling:** ₹1,800 / 60-minute phone session
- **Family Counselling:** ₹2,200 / 60-minute phone session
- **Optional Reiki Balancing:** ₹1,000 / 45-minute session

**Why Voice-Only?**
All sessions are held strictly over telephone or WhatsApp audio calls. Speaking without a webcam eliminates video fatigue and camera self-consciousness, allowing you to reflect from the privacy of your own space.

**Direct Booking & Hours:**
- **Calling Hours:** Monday to Saturday, 10:00 AM – 7:00 PM IST
- **Direct Phone / WhatsApp:** **+91 98378 91692**
- **Online Form:** [Request a Voice Session](/connect)
- **Full Scope:** [Services & Pricing](/services) and [Client Guide](/guide)`,
      suggestedAction: {
        label: "Request a Voice Session",
        href: "/connect",
      },
      secondaryAction: {
        label: "Call +91 98378 91692",
        href: "tel:+919837891692",
      },
    };
  }

  // 8. OFF-TOPIC & SCOPE GUARDRAIL
  if (OFF_TOPIC_PATTERNS.some((pattern) => pattern.test(text))) {
    return {
      matchedIntent: "off_topic",
      reply: `I am specialized in helping visitors understand Dr. Shivie Gupta's voice counselling practice and session options. I cannot assist with technical, legal, financial, or medical prescription queries.

If you have questions regarding:
- **Individual Voice Counselling** (₹1,200 / 50 mins)
- **Couple & Relationship Counselling** (₹1,800 / 60 mins)
- **Family Counselling** (₹2,200 / 60 mins)
- **Optional Reiki Healing** (₹1,000 / 45 mins)

Please feel free to ask, review [Services & Pricing](/services), read [Client Guide](/guide), or submit an inquiry on [Request a Voice Session](/connect).`,
      suggestedAction: {
        label: "View Services & Pricing",
        href: "/services",
      },
      secondaryAction: {
        label: "Request a Voice Session",
        href: "/connect",
      },
    };
  }

  // 9. INDIVIDUAL COUNSELLING & EMOTIONAL WELLBEING (Default Contextual Match)
  if (INDIVIDUAL_PATTERNS.some((pattern) => pattern.test(text))) {
    return {
      matchedIntent: "individual",
      reply: `For personal stress, overthinking, anxiety loops, or low emotional energy, **Individual Voice Counselling (Voice Call • 50 mins • ₹1,200)** is the recommended path.

Dr. Shivie Gupta brings ~35 years of dedicated active listening to help you disentangle mental knots and build grounded self-worth in complete confidence.

**Helpful questions to bring to your telephone call:**
1. What recurring thought, doubt, or pressure drains your energy the most during your day?
2. How is this stress affecting your sleep routine, physical body, or work focus?
3. What personal boundary or self-care step feels difficult to take on your own?

All sessions are held over telephone call—no video camera pressure or clinic travel. You can submit your preferred time on [Request a Voice Session](/connect), review details on [Services & Pricing](/services), or call directly at **+91 98378 91692**.`,
      suggestedAction: {
        label: "Request Individual Session",
        href: "/connect?service=individual",
      },
      secondaryAction: {
        label: "Call +91 98378 91692",
        href: "tel:+919837891692",
      },
    };
  }

  // Default fallback
  return {
    matchedIntent: "individual",
    reply: `Based on what you've shared, **Individual Voice Counselling (Voice Call • 50 mins • ₹1,200)** is an ideal starting place for confidential guidance.

Dr. Shivie Gupta offers a calm, non-judgmental space over phone to help unpack whatever is weighing on your mind.

You can view all session types on [Services & Pricing](/services), read answers on [Client Guide](/guide), or submit a convenient time on [Request a Voice Session](/connect). Direct calling and WhatsApp are also available at **+91 98378 91692**.`,
    suggestedAction: {
      label: "Request a Voice Session",
      href: "/connect",
    },
    secondaryAction: {
      label: "Call +91 98378 91692",
      href: "tel:+919837891692",
    },
  };
}
