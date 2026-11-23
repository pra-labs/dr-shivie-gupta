import { cookies } from "next/headers";

const ADMIN_COOKIE_NAME = "dr_shivie_admin_session";
const DEFAULT_SECRET = "shivie-dayalbagh-reiki-2026";

export async function verifyAdminSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  const expectedSecret = process.env.ADMIN_PASSWORD || DEFAULT_SECRET;
  return session === expectedSecret;
}

export async function setAdminSession(password: string): Promise<boolean> {
  const expectedSecret = process.env.ADMIN_PASSWORD || DEFAULT_SECRET;
  if (password === expectedSecret) {
    const cookieStore = await cookies();
    cookieStore.set(ADMIN_COOKIE_NAME, expectedSecret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
    return true;
  }
  return false;
}

export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
}
