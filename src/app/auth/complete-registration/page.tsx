"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

function CompleteRegistrationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState("Completing your registration...");

  useEffect(() => {
    async function completeRegistration() {
      try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          router.replace("/register");
          return;
        }

        const raw = sessionStorage.getItem("mbc_pending_registration");
        if (raw) {
          const pending = JSON.parse(raw) as {
            fullName?: string;
            studentName?: string;
            mobile?: string;
            grade?: number | null;
            accountType?: "student" | "parent";
          };

          await supabase.from("profiles").update({
            full_name: pending.fullName?.trim() || user.user_metadata?.full_name || user.user_metadata?.name || "Learner",
            mobile_number: pending.mobile?.trim() || null,
            student_name: pending.studentName?.trim() || null,
            grade_number: pending.grade || null,
            role: pending.accountType || "student",
          }).eq("id", user.id);

          if (pending.grade) {
            const { data: gradeRow } = await supabase
              .from("grades")
              .select("id")
              .eq("grade_number", pending.grade)
              .maybeSingle();

            if (gradeRow) {
              await supabase.from("students").update({ grade_id: gradeRow.id }).eq("profile_id", user.id);
            }
          }

          sessionStorage.removeItem("mbc_pending_registration");
        }

        const next = searchParams.get("next") || "/register";
        router.replace(next);
        router.refresh();
      } catch {
        setStatus("Registration could not be completed. Redirecting...");
        setTimeout(() => router.replace("/register?error=registration_failed"), 1200);
      }
    }

    completeRegistration();
  }, [router, searchParams]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
        <Loader2 className="h-5 w-5 animate-spin" />
        {status}
      </div>
    </div>
  );
}

export default function CompleteRegistrationPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-sm text-slate-600">Loading registration...</div>}>
      <CompleteRegistrationContent />
    </Suspense>
  );
}
