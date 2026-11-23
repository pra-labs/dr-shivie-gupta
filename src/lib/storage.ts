import fs from "node:fs";
import path from "node:path";
import { servicesData, faqsData, type ServiceOffering, type FAQ, type ClientNote } from "@/data/site-content";

export type { ServiceOffering, ClientNote };

export interface SessionInquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  preferredTime: string;
  message: string;
  timestamp: string;
  status: "new" | "contacted" | "scheduled" | "archived";
  internalNotes?: string;
}

export interface SiteSettings {
  practitionerName: string;
  experienceYears: number;
  phone: string;
  whatsappUrl: string;
  email: string;
  locality: string;
  city: string;
  state: string;
  consultationMode: string;
  callingHours: string;
  disclaimer: string;
  emergencyNotice: string;
}

export interface AnalyticsEvent {
  id: string;
  type: "pageview" | "faq_search" | "service_click" | "faq_click" | "cta_click" | "session_guide_open" | "service_card_swipe" | "booking_flow_start";
  path?: string;
  query?: string;
  target?: string;
  timestamp: string;
}

export interface AppDatabase {
  inquiries: SessionInquiry[];
  services: ServiceOffering[];
  faqs: (FAQ & { id: string; order: number; isVisible: boolean })[];
  clientNotes: ClientNote[];
  settings: SiteSettings;
  analytics: {
    pageViews: Record<string, number>;
    serviceClicks: Record<string, number>;
    searchQueries: Record<string, number>;
    faqClicks: Record<string, number>;
    recentEvents: AnalyticsEvent[];
  };
}

const DATA_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "app-store.json");

const DEFAULT_SETTINGS: SiteSettings = {
  practitionerName: "Dr. Shivie Gupta",
  experienceYears: 35,
  phone: "+91 9837891692",
  whatsappUrl: "https://wa.me/919837891692?text=Hello%20Dr.%20Shivie%20Gupta,%20I%20would%20like%20to%20inquire%20about%20a%20voice%20counselling%20session.",
  email: "contact@drshiviegupta.com",
  locality: "Dayalbagh",
  city: "Agra",
  state: "Uttar Pradesh",
  consultationMode: "Voice-Only (Phone / Audio Calls)",
  callingHours: "Monday to Saturday, 10:00 AM - 7:00 PM IST",
  disclaimer:
    "Confidential voice counselling services are focused on emotional wellbeing, relationship communication, and personal clarity. They are not a substitute for licensed psychiatric medication, clinical diagnosis, or hospital interventions.",
  emergencyNotice:
    "Please Note: This is not an emergency crisis intervention service. If you are experiencing a mental health emergency, please immediately call national helplines (Tele-MANAS: 14416 or Vandrevala Foundation: 9999 666 555 in India) or visit your nearest medical facility.",
};

function getInitialDatabase(): AppDatabase {
  return {
    inquiries: [
      {
        id: "inq-init-1",
        name: "Rohit Saxena",
        phone: "+91 98200 12345",
        email: "rohit.saxena@example.com",
        serviceType: "Individual Counselling (Voice Call)",
        preferredTime: "Evening (5 PM - 8 PM)",
        message: "Looking for guidance regarding ongoing work stress and sleep restlessness.",
        timestamp: new Date(Date.now() - 86400000).toISOString(),
        status: "new",
        internalNotes: "Prefers phone call between 6-7 PM IST.",
      },
    ],
    services: servicesData,
    faqs: faqsData.map((item, idx) => ({
      ...item,
      id: `faq-${idx + 1}`,
      order: idx + 1,
      isVisible: true,
    })),
    clientNotes: [], // Starts clean and empty with zero fabricated quotes
    settings: DEFAULT_SETTINGS,
    analytics: {
      pageViews: {
        "/": 28,
        "/about": 16,
        "/services": 24,
        "/guide": 20,
        "/connect": 15,
      },
      serviceClicks: {
        "individual-counselling": 12,
        "couple-counselling": 9,
        "family-counselling": 6,
        "reiki-healing": 4,
      },
      searchQueries: {
        "fees": 8,
        "phone": 7,
        "couple": 6,
        "tanav": 5,
        "confidentiality": 4,
      },
      faqClicks: {
        "faq-1": 11,
        "faq-2": 9,
        "faq-4": 8,
      },
      recentEvents: [],
    },
  };
}

export function getDatabase(): AppDatabase {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DB_FILE)) {
      const initial = getInitialDatabase();
      fs.writeFileSync(DB_FILE, JSON.stringify(initial, null, 2), "utf-8");
      return initial;
    }
    const data = fs.readFileSync(DB_FILE, "utf-8");
    const parsed = JSON.parse(data) as AppDatabase;

    // Self-healing migration: Ensure services, inquiries, and settings exist
    if (!parsed.services || parsed.services.length === 0) {
      parsed.services = servicesData;
    }
    if (!parsed.settings || !parsed.settings.phone) {
      parsed.settings = DEFAULT_SETTINGS;
    }
    if (!parsed.inquiries) {
      parsed.inquiries = [];
    }
    if (!parsed.clientNotes) {
      parsed.clientNotes = [];
    }
    if (!parsed.analytics.serviceClicks) {
      parsed.analytics.serviceClicks = {};
    }

    return parsed;
  } catch (error) {
    console.error("Error reading database primary file:", error);
    // If primary file failed to parse, attempt recovery from backup before giving up
    if (fs.existsSync(BACKUP_FILE)) {
      try {
        console.warn("Attempting recovery from backup database file:", BACKUP_FILE);
        const backupRaw = fs.readFileSync(BACKUP_FILE, "utf-8");
        return JSON.parse(backupRaw);
      } catch (backupError) {
        console.error("Backup recovery also failed:", backupError);
      }
    }
    // Only return initial defaults if file truly does not exist or both reads failed, but log loudly
    return getInitialDatabase();
  }
}

const BACKUP_FILE = path.join(DATA_DIR, "app-store.json.bak");

export function saveDatabase(db: AppDatabase): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const payload = JSON.stringify(db, null, 2);
    const tempFile = path.join(DATA_DIR, `app-store.tmp.${Date.now()}.${Math.random().toString(36).slice(2, 8)}`);

    // 1. Write to temporary file first
    fs.writeFileSync(tempFile, payload, "utf-8");

    // 2. Backup existing primary file if it exists
    if (fs.existsSync(DB_FILE)) {
      try {
        fs.copyFileSync(DB_FILE, BACKUP_FILE);
      } catch {
        // Continue even if backup copy fails
      }
    }

    // 3. Atomic rename temp file to primary file
    fs.renameSync(tempFile, DB_FILE);
  } catch (error) {
    console.error("Error writing database atomically:", error);
  }
}
