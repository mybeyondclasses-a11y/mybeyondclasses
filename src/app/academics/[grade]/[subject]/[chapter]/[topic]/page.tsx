import { notFound } from "next/navigation";
import { GRADES } from "@/data/academics";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export default async function TopicPage({ params }: { params: Promise<{ grade: string; subject: string; chapter: string; topic: string }> }) {
  const { grade, subject, chapter, topic } = await params;
  const g = GRADES.find((x) => x.slug === grade);
  const s = g?.subjects.find((x) => x.slug === subject);
  const ch = s?.chapters.find((x) => x.slug === chapter);
  const t = ch?.topics.find((x) => x.slug === topic);
  if (!g || !s || !ch || !t) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: g.title, href: `/academics/${g.slug}` }, { label: s.name, href: `/academics/${g.slug}/${s.slug}` }, { label: ch.title, href: `/academics/${g.slug}/${s.slug}/${ch.slug}` }, { label: t.title }]} />
      <h1 className="font-heading text-3xl font-extrabold text-slate-900">{t.title}</h1>
      <p className="mt-3 text-sm text-slate-600">{g.title} · {s.name} · Chapter {ch.number}: {ch.title}</p>
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="font-heading text-lg font-bold text-slate-900">Conceptual Breakdown</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          This dedicated topic page delivers focused conceptual explanations, worked examples, and practice prompts for {t.title}, aligned with the active curriculum configuration.
        </p>
      </div>
    </div>
  );
}
