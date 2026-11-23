"use server";

import { getDatabase, saveDatabase, type SessionInquiry } from "@/lib/storage";

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    phone?: string[];
    email?: string[];
    serviceType?: string[];
    message?: string[];
  };
}

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const rateLimitMap = new Map<string, number>();

export async function submitContactInquiry(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot check
  const honeypot = formData.get("website_url")?.toString().trim();
  if (honeypot) {
    return {
      success: true,
      message: "Thank you. Your inquiry has been received.",
    };
  }

  const name = formData.get("name")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const serviceType = formData.get("serviceType")?.toString().trim() || "Individual Counselling (Voice Call)";
  const preferredTime = formData.get("preferredTime")?.toString().trim() || "Anytime during calling hours";
  const message = formData.get("message")?.toString().trim() || "";

  // Rate limiting check
  const identifier = phone || email;
  if (identifier) {
    const lastTime = rateLimitMap.get(identifier);
    if (lastTime && Date.now() - lastTime < RATE_LIMIT_WINDOW) {
      return {
        success: false,
        message: "Please wait a moment before sending another session request.",
      };
    }
  }

  const errors: ContactFormState["errors"] = {};

  if (!name || name.length < 2) {
    errors.name = ["Please share your name or how you would like to be addressed."];
  }

  if (!phone || phone.length < 8) {
    errors.phone = ["Please provide a valid phone number for audio call scheduling."];
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ["Please enter a valid email address."];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please review the highlighted fields above.",
      errors,
    };
  }

  if (identifier) {
    rateLimitMap.set(identifier, Date.now());
  }

  try {
    const db = getDatabase();
    const newInquiry: SessionInquiry = {
      id: `inq-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: name!,
      phone: phone!,
      email: email || "",
      serviceType,
      preferredTime,
      message,
      timestamp: new Date().toISOString(),
      status: "new",
    };

    db.inquiries.unshift(newInquiry);
    saveDatabase(db);
  } catch (err) {
    console.error("Failed to persist session inquiry:", err);
  }

  return {
    success: true,
    message: "Thank you for reaching out. Dr. Shivie Gupta will review your inquiry and connect with you directly via call or WhatsApp at your provided number.",
  };
}
