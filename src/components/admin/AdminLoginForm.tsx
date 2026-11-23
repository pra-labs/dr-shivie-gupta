"use client";

import { useActionState } from "react";
import { loginAdmin } from "@/app/actions/admin";
import { Lock, ArrowRight, ShieldCheck } from "lucide-react";

export function AdminLoginForm() {
  const [state, formAction, isPending] = useActionState(
    async (_prev: { success: boolean; message: string } | null, formData: FormData) => {
      return await loginAdmin(formData);
    },
    null
  );

  return (
    <div className="max-w-md mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E0D2] shadow-sm space-y-6">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 mx-auto rounded-2xl bg-[#F2EDE4] border border-[#2D4A3E]/20 flex items-center justify-center text-[#2D4A3E]">
          <Lock className="w-5 h-5" />
        </div>
        <h1 className="font-serif text-2xl font-bold text-[#1F2924]">
          Practice Admin Access
        </h1>
        <p className="text-xs text-[#52635A]">
          Administrative workspace for Dr. Shivie Gupta — Session inquiries, pricing management, and client FAQs.
        </p>
      </div>

      {state && !state.success && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs text-center">
          {state.message}
        </div>
      )}

      <form action={formAction} className="space-y-4">
        <div>
          <label
            htmlFor="password"
            className="block text-xs font-semibold uppercase tracking-wider text-[#1F2924] mb-1.5"
          >
            Sanctuary Passcode
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            autoComplete="current-password"
            placeholder="Enter administrative passcode..."
            className="w-full px-4 py-3 rounded-xl border border-[#E8E0D2] bg-[#FAF8F5] text-sm text-[#1F2924] focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] focus:bg-white transition-all"
          />
          <p className="text-[10px] text-[#52635A] mt-1.5 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2D4A3E]" />
            <span>Default local development secret enabled.</span>
          </p>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3 px-6 rounded-full bg-[#2D4A3E] text-white font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-[#1E332A] transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
        >
          <span>{isPending ? "Unlocking Sanctuary..." : "Enter Workspace"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
