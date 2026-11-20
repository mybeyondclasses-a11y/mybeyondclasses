import { notFound } from "next/navigation";
import { GRADES, FORMULA_SHEETS } from "@/data/academics";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { MathFormula } from "@/components/academic/MathFormula";

export default async function ChapterSubPage({ params }: { params: Promise<{ grade: string; subject: string; chapter: string }> }) {
  const { grade, subject, chapter } = await params;
  const g = GRADES.find((x) => x.slug === grade);
  const s = g?.subjects.find((x) => x.slug === subject);
  const ch = s?.chapters.find((x) => x.slug === chapter);
  if (!g || !s || !ch) notFound();

  const formulas = FORMULA_SHEETS.filter((f) => f.chapterSlug === ch.slug || f.subjectSlug === s.slug).slice(0, 2);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: g.title, href: `/academics/${g.slug}` }, { label: s.name, href: `/academics/${g.slug}/${s.slug}` }, { label: ch.title, href: `/academics/${g.slug}/${s.slug}/${ch.slug}` }, { label: "Chapter Formula Sheet" }]} />
      <h1 className="font-heading text-3xl font-extrabold text-slate-900">{ch.title} — Chapter Formula Sheet</h1>
      <p className="mt-3 text-sm text-slate-600">{ch.summary}</p>
      <div className="mt-8 space-y-5">
        {"formulas" === "formulas" && formulas.length > 0 ? (
          formulas.map((f) => (
            <div key={f.id} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="font-heading text-lg font-bold text-slate-900">{f.title}</h2>
              <div className="mt-3"><MathFormula latex={f.latex} /></div>
              <p className="mt-3 text-sm text-slate-700">{f.workedExample}</p>
            </div>
          ))
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="font-heading text-lg font-bold text-slate-900">Structured Academic Module</h2>
            <p className="mt-2 text-sm text-slate-600">
              Published content for {g.title} {s.name} — {ch.title} (Chapter Formula Sheet) is managed by authorized subject editors and synchronized with the Supabase database.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
