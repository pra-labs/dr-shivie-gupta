import { cookies } from "next/headers";
import crypto from "crypto";

const ADMIN_COOKIE_NAME = "dr_shivie_admin_session";
const DEFAULT_SECRET = "shivie-dayalbagh-reiki-2026";
const AUTH_CHALLENGE = "sanctuary-admin-authenticated-v1";

function getSecretKey(): string | null {
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      // In production without an explicit secret configured, fail closed cleanly without unhandled crash
      return null;
    }
    return DEFAULT_SECRET;
  }
  return secret;
}

function computeSessionToken(secret: string): string {
  return crypto.createHmac("sha256", secret).update(AUTH_CHALLENGE).digest("hex");
}

function safeCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a, "utf-8");
  const bufB = Buffer.from(b, "utf-8");
  if (bufA.length !== bufB.length) {
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

export async function verifyAdminSession(): Promise<boolean> {
  try {
    const secret = getSecretKey();
    if (!secret) return false;

    const cookieStore = await cookies();
    const sessionToken = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
    if (!sessionToken) return false;

    const expectedToken = computeSessionToken(secret);
    return safeCompare(sessionToken, expectedToken);
  } catch (err) {
    console.error("verifyAdminSession error:", err);
    return false;
  }
}

export async function setAdminSession(password: string): Promise<boolean> {
  try {
    const secret = getSecretKey();
    if (!secret) return false;

    if (!safeCompare(password, secret)) {
      return false;
    }

    const sessionToken = computeSessionToken(secret);
    const cookieStore = await cookies();
    cookieStore.set(ADMIN_COOKIE_NAME, sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
    return true;
  } catch (err) {
    console.error("setAdminSession error:", err);
    return false;
  }
}

export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
}

