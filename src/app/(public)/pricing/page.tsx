"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PRICING_PLANS } from "@/data/academics";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";

const CURRENCIES = ["INR", "AED", "USD", "GBP"] as const;

export default function PricingPage() {
  const [currency, setCurrency] = useState<(typeof CURRENCIES)[number]>("INR");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Pricing" }]} />
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Badge variant="blue">Transparent Plans</Badge>
          <h1 className="mt-3 font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl">Flexible Learning &amp; Tutoring Plans</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Clear distinction between self-paced digital learning access (starting at ₹99/month where applicable) and personalized live tutoring.
          </p>
        </div>
        <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1">
          {CURRENCIES.map((c) => (
            <button key={c} type="button" onClick={() => setCurrency(c)} className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${currency === c ? "bg-white text-blue-700 shadow-sm" : "text-slate-600 hover:text-slate-900"}`}>
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {PRICING_PLANS.map((plan) => (
          <div key={plan.id} className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div>
              <Badge variant="purple">{plan.badge}</Badge>
              <h2 className="mt-3 font-heading text-xl font-bold text-slate-900">{plan.name}</h2>
              <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
              <p className="mt-5 font-heading text-3xl font-extrabold text-blue-700">{plan.prices[currency]}</p>
              <p className="mt-1 text-xs text-slate-500">{plan.note}</p>
              <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" /><span>{f}</span></li>
                ))}
              </ul>
            </div>
            <Link href={plan.ctaHref} className="brand-gradient-bg mt-8 block rounded-xl px-4 py-2.5 text-center text-sm font-semibold text-white">{plan.ctaLabel}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
