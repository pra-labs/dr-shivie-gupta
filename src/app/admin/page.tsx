import type { Metadata } from "next";
import { Suspense } from "react";
import { verifyAdminSession } from "@/lib/auth";
import { getDatabase } from "@/lib/storage";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { AdminDashboardClient } from "@/components/admin/AdminDashboardClient";

export const metadata: Metadata = {
  title: "Practice Admin Workspace",
  description: "Administrative management panel for SamvadUrja (Dr. Shivie Gupta).",
  robots: {
    index: false,
    follow: false,
  },
};

async function AdminContent() {
  const isAuthenticated = await verifyAdminSession();

  if (!isAuthenticated) {
    return (
      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <AdminLoginForm />
      </div>
    );
  }

  const db = getDatabase();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <AdminDashboardClient initialDb={db} />
    </div>
  );
}

export default function AdminPage() {
  return (
    <Suspense
      fallback={
        <div className="p-16 text-center text-xs text-[#52635A]">
          Loading Sanctuary Workspace...
        </div>
      }
    >
      <AdminContent />
    </Suspense>
  );
}
