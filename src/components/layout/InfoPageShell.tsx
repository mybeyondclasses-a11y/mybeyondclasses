import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";

export function InfoPageShell({
  badge,
  title,
  subtitle,
  breadcrumbLabel,
  sections,
  ctaHref = "/contact?topic=demo",
  ctaLabel = "Book a Free Demo",
}: {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: breadcrumbLabel }]} />
      <Badge variant="blue">{badge}</Badge>
      <h1 className="mt-3 font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">{subtitle}</p>
      <div className="mt-10 space-y-6">
        {sections.map((sec) => (
          <section key={sec.heading} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-slate-900">{sec.heading}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{sec.body}</p>
            {sec.bullets && (
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
                {sec.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            )}
          </section>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href={ctaHref} className="brand-gradient-bg rounded-xl px-6 py-3 text-sm font-semibold text-white">{ctaLabel}</Link>
        <Link href="/classes" className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-blue-300">Explore Grades 1–12</Link>
      </div>
    </div>
  );
}
