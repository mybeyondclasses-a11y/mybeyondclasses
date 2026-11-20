"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ ok: boolean; text: string } | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enquiryType: "newsletter",
          fullName: "Newsletter Subscriber",
          email,
          consentGiven: consent,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Subscription could not be confirmed.");
      setFeedback({ ok: true, text: "Subscription confirmed via backend." });
      setEmail("");
      setConsent(false);
    } catch (err) {
      setFeedback({ ok: false, text: err instanceof Error ? err.message : "Failed to subscribe." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubscribe} className="space-y-2.5">
      <div className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          aria-label="Newsletter email address"
          className="w-full rounded-xl border border-slate-700 bg-slate-800/80 px-3.5 py-2 text-sm text-white placeholder:text-slate-400 focus:border-blue-400 focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:opacity-60"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
          Join
        </button>
      </div>
      <label className="flex items-start gap-2 text-xs text-slate-400">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 rounded border-slate-600 bg-slate-800"
        />
        <span>I consent to receive MY BEYOND CLASSES study updates & event alerts.</span>
      </label>
      {feedback && (
        <p className={`text-xs font-medium ${feedback.ok ? "text-emerald-400" : "text-amber-300"}`}>
          {feedback.text}
        </p>
      )}
    </form>
  );
}
