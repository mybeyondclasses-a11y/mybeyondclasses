"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2, LockKeyhole, Mail, Phone, User } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export function PasswordAuthForm({
  mode,
  redirectPath = "/student/dashboard",
}: {
  mode: "login" | "register";
  redirectPath?: string;
}) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [mobile, setMobile] = useState("");
  const [grade, setGrade] = useState("");
  const [accountType, setAccountType] = useState<"student" | "parent">("student");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);

  const inputClass = "w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100";

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage(null);

    if (mode === "register" && password !== confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match." });
      return;
    }
    if (password.length < 8) {
      setMessage({ type: "error", text: "Password must be at least 8 characters." });
      return;
    }

    setLoading(true);
    try {
      const supabase = createClient();
      if (mode === "register") {
        if (!fullName.trim()) throw new Error("Please enter your name.");
        if (!mobile.trim()) throw new Error("Please enter your mobile number.");
        if (accountType === "student" && (!studentName.trim() || !grade)) {
          throw new Error("Please enter the student name and grade.");
        }

        const metadata = {
          full_name: fullName.trim(),
          student_name: accountType === "student" ? studentName.trim() : fullName.trim(),
          phone: mobile.trim(),
          account_type: accountType,
          role: accountType,
          grade_number: accountType === "student" ? Number(grade) : null,
        };

        const { data, error } = await supabase.auth.signUp({
          email: email.trim().toLowerCase(),
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(redirectPath)}`,
            data: metadata,
          },
        });
        if (error) throw error;

        if (!data.session) {
          setMessage({ type: "success", text: "Account created. Please check your email to confirm your account, then sign in." });
          return;
        }

        router.push(redirectPath);
        router.refresh();
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim().toLowerCase(),
          password,
        });
        if (error) throw error;
        router.push(redirectPath);
        router.refresh();
      }
    } catch (error) {
      setMessage({ type: "error", text: error instanceof Error ? error.message : "Authentication failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const googleSignIn = async () => {
    setMessage(null);
    setLoading(true);
    try {
      if (mode === "register") {
        sessionStorage.setItem("mbc_pending_registration", JSON.stringify({
          fullName: fullName.trim(),
          studentName: accountType === "student" ? studentName.trim() : "",
          mobile: mobile.trim(),
          grade: grade ? Number(grade) : null,
          accountType,
        }));
      }
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(redirectPath)}`,
        },
      });
      if (error) throw error;
    } catch (error) {
      setMessage({ type: "error", text: error instanceof Error ? error.message : "Google authentication failed." });
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {message && (
        <div role="alert" className={`rounded-xl border px-4 py-3 text-sm ${message.type === "error" ? "border-red-200 bg-red-50 text-red-700" : "border-emerald-200 bg-emerald-50 text-emerald-800"}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={submit} className="space-y-4">
        {mode === "register" && (
          <>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">I am registering as</label>
              <div className="grid grid-cols-2 gap-2">
                {(["student", "parent"] as const).map((type) => (
                  <button key={type} type="button" onClick={() => setAccountType(type)} className={`rounded-xl border px-3 py-2 text-sm font-medium capitalize ${accountType === type ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-600"}`}>
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">{accountType === "student" ? "Name" : "Parent Name"}</label>
              <div className="relative"><User className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-slate-400" /><input required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter name" className={`${inputClass} pl-10`} /></div>
            </div>

            {accountType === "student" && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Student Name</label>
                  <input required value={studentName} onChange={(e) => setStudentName(e.target.value)} placeholder="Student name" className={inputClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Grade</label>
                  <select required value={grade} onChange={(e) => setGrade(e.target.value)} className={inputClass}><option value="">Select grade</option>{Array.from({ length: 12 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>Grade {n}</option>)}</select>
                </div>
              </div>
            )}

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Mobile Number</label>
              <div className="relative"><Phone className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-slate-400" /><input required type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter mobile number" className={`${inputClass} pl-10`} /></div>
            </div>
          </>
        )}

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">Email Address</label>
          <div className="relative"><Mail className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-slate-400" /><input required type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className={`${inputClass} pl-10`} /></div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">Password</label>
          <div className="relative"><LockKeyhole className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-slate-400" /><input required type={showPassword ? "text" : "password"} autoComplete={mode === "register" ? "new-password" : "current-password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 8 characters" className={`${inputClass} pl-10 pr-10`} /><button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword((value) => !value)} className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-700">{showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button></div>
        </div>

        {mode === "register" && (
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Confirm Password</label>
            <input required type={showPassword ? "text" : "password"} autoComplete="new-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Re-enter password" className={inputClass} />
          </div>
        )}

        <button type="submit" disabled={loading} className="brand-gradient-bg flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60">
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {mode === "register" ? "Create Account" : "Sign In"}
        </button>
      </form>

      <div className="relative py-1"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200" /></div><div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-500">Or</span></div></div>

      <button type="button" onClick={googleSignIn} disabled={loading} className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-60">
        <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
        Continue with Google
      </button>
    </div>
  );
}
