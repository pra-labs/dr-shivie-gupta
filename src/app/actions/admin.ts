"use server";

import { revalidatePath } from "next/cache";
import {
  getDatabase,
  saveDatabase,
  type SessionInquiry,
  type ServiceOffering,
  type SiteSettings,
  type ClientNote,
} from "@/lib/storage";
import { verifyAdminSession, setAdminSession, clearAdminSession } from "@/lib/auth";

// Auth Actions
export async function loginAdmin(formData: FormData): Promise<{ success: boolean; message: string }> {
  const password = formData.get("password")?.toString() || "";
  const success = await setAdminSession(password);
  if (success) {
    revalidatePath("/admin");
    return { success: true, message: "Welcome back, Mrs. Shivie Gupta." };
  }
  return { success: false, message: "Invalid administrative passcode." };
}

export async function logoutAdmin(): Promise<void> {
  await clearAdminSession();
  revalidatePath("/admin");
}

// 1. Session Inquiries Inbox Actions
export async function updateInquiryStatus(
  id: string,
  status: SessionInquiry["status"],
  internalNotes?: string
): Promise<boolean> {
  const isAuth = await verifyAdminSession();
  if (!isAuth) throw new Error("Unauthorized");

  const db = getDatabase();
  const inq = db.inquiries.find((i) => i.id === id);
  if (inq) {
    inq.status = status;
    if (internalNotes !== undefined) {
      inq.internalNotes = internalNotes;
    }
    saveDatabase(db);
    revalidatePath("/admin");
    return true;
  }
  return false;
}

export async function deleteInquiry(id: string): Promise<boolean> {
  const isAuth = await verifyAdminSession();
  if (!isAuth) throw new Error("Unauthorized");

  const db = getDatabase();
  db.inquiries = db.inquiries.filter((i) => i.id !== id);
  saveDatabase(db);
  revalidatePath("/admin");
  return true;
}

// 2. Services & Pricing Actions
export async function saveServiceOffering(service: ServiceOffering): Promise<boolean> {
  const isAuth = await verifyAdminSession();
  if (!isAuth) throw new Error("Unauthorized");

  const db = getDatabase();
  const idx = db.services.findIndex((s) => s.id === service.id);
  if (idx !== -1) {
    db.services[idx] = service;
  } else {
    db.services.push(service);
  }
  saveDatabase(db);
  revalidatePath("/admin");
  revalidatePath("/");
  revalidatePath("/services");
  return true;
}

// 3. FAQ Actions
export async function saveFaq(data: {
  id?: string;
  category: "Counselling" | "Voice Sessions" | "Hindi & Local" | "Reiki (Optional)";
  question: string;
  answer: string;
  isVisible: boolean;
}): Promise<boolean> {
  const isAuth = await verifyAdminSession();
  if (!isAuth) throw new Error("Unauthorized");

  const db = getDatabase();
  if (data.id) {
    const existing = db.faqs.find((f) => f.id === data.id);
    if (existing) {
      existing.category = data.category;
      existing.question = data.question;
      existing.answer = data.answer;
      existing.isVisible = data.isVisible;
    }
  } else {
    const newFaq = {
      id: `faq-${Date.now()}`,
      order: db.faqs.length + 1,
      category: data.category,
      question: data.question,
      answer: data.answer,
      isVisible: data.isVisible,
    };
    db.faqs.push(newFaq);
  }

  saveDatabase(db);
  revalidatePath("/admin");
  revalidatePath("/guide");
  return true;
}

export async function deleteFaq(id: string): Promise<boolean> {
  const isAuth = await verifyAdminSession();
  if (!isAuth) throw new Error("Unauthorized");

  const db = getDatabase();
  db.faqs = db.faqs.filter((f) => f.id !== id);
  saveDatabase(db);
  revalidatePath("/admin");
  revalidatePath("/guide");
  return true;
}

// 4. Verified Client Notes Actions
export async function saveClientNote(note: ClientNote): Promise<boolean> {
  const isAuth = await verifyAdminSession();
  if (!isAuth) throw new Error("Unauthorized");

  const db = getDatabase();
  const idx = db.clientNotes.findIndex((n) => n.id === note.id);
  if (idx !== -1) {
    db.clientNotes[idx] = note;
  } else {
    db.clientNotes.unshift(note);
  }
  saveDatabase(db);
  revalidatePath("/admin");
  return true;
}

export async function deleteClientNote(id: string): Promise<boolean> {
  const isAuth = await verifyAdminSession();
  if (!isAuth) throw new Error("Unauthorized");

  const db = getDatabase();
  db.clientNotes = db.clientNotes.filter((n) => n.id !== id);
  saveDatabase(db);
  revalidatePath("/admin");
  return true;
}

// 5. Site Settings Actions
export async function updateSiteSettings(settings: SiteSettings): Promise<boolean> {
  const isAuth = await verifyAdminSession();
  if (!isAuth) throw new Error("Unauthorized");

  const db = getDatabase();
  db.settings = settings;
  saveDatabase(db);
  revalidatePath("/admin");
  revalidatePath("/");
  revalidatePath("/about");
  revalidatePath("/services");
  revalidatePath("/connect");
  return true;
}

// 6. Analytics Reset
export async function clearAnalytics(): Promise<boolean> {
  const isAuth = await verifyAdminSession();
  if (!isAuth) throw new Error("Unauthorized");

  const db = getDatabase();
  db.analytics = {
    pageViews: {},
    serviceClicks: {},
    searchQueries: {},
    faqClicks: {},
    recentEvents: [],
  };
  saveDatabase(db);
  revalidatePath("/admin");
  return true;
}
