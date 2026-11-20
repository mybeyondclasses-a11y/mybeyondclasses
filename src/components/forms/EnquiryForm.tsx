"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

export function EnquiryForm({
  defaultType = "demo",
  heading = "Book a Free Academic Demo or Send an Enquiry",
}: {
  defaultType?: "general" | "demo" | "tutor_application" | "partnership";
  heading?: string;
}) {
  const [form, setForm] = useState({
    enquiryType: defaultType,
    fullName: "",
    email: "",
    country: "India",
    grade: "Grade 10",
    curriculum: "CBSE",
    message: "",
    consentGiven: false,
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed.");
      setStatus({ ok: true, text: data.message || "Your request has been recorded. Our academic team will contact you via email." });
      setForm({ ...form, fullName: "", email: "", message: "", consentGiven: false });
    } catch (err) {
      setStatus({ ok: false, text: err instanceof Error ? err.message : "Could not submit form." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="font-heading text-lg font-bold text-slate-900">{heading}</h3>
      {status && (
        <div
          className={`flex items-start gap-2 rounded-xl border p-3.5 text-sm ${
            status.ok ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {status.ok && <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />}
          <span>{status.text}</span>
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">Full Name</label>
          <input
            required
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none"
            placeholder="Student or Parent Name"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">Email Address</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">Country</label>
          <select
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none"
          >
            {["India", "UAE", "USA", "UK", "China", "Singapore", "Other"].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">Grade & Curriculum</label>
          <div className="grid grid-cols-2 gap-2">
            <select
              value={form.grade}
              onChange={(e) => setForm({ ...form, grade: e.target.value })}
              className="rounded-xl border border-slate-300 px-2.5 py-2 text-sm"
            >
              {Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`).map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
            <select
              value={form.curriculum}
              onChange={(e) => setForm({ ...form, curriculum: e.target.value })}
              className="rounded-xl border border-slate-300 px-2.5 py-2 text-sm"
            >
              {["CBSE", "ICSE", "ISC", "IB", "IGCSE", "Cambridge", "British", "American"].map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">Learning Goals / Message</label>
        <textarea
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none"
          placeholder="Tell us the subjects, target exams, or preferred schedule..."
        />
      </div>
      <label className="flex items-start gap-2 text-xs text-slate-600">
        <input
          type="checkbox"
          required
          checked={form.consentGiven}
          onChange={(e) => setForm({ ...form, consentGiven: e.target.checked })}
          className="mt-0.5 rounded border-slate-300 text-blue-600"
        />
        <span>I agree to receive email responses regarding this academic enquiry in accordance with the Privacy Policy.</span>
      </label>
      <button
        type="submit"
        disabled={loading}
        className="brand-gradient-bg inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-95 disabled:opacity-60"
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        Submit Request
      </button>
    </form>
  );
}
