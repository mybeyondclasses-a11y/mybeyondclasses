import Link from "next/link";
import { notFound } from "next/navigation";
import { GRADES, FORMULA_SHEETS } from "@/data/academics";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { MathFormula } from "@/components/academic/MathFormula";

export default async function SubjectResourcePage({ params }: { params: Promise<{ grade: string; subject: string }> }) {
  const { grade, subject } = await params;
  const g = GRADES.find((x) => x.slug === grade);
  const s = g?.subjects.find((x) => x.slug === subject);
  if (!g || !s) notFound();

  const matchingFormulas = FORMULA_SHEETS.filter((f) => f.subjectSlug === s.slug);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: g.title, href: `/academics/${g.slug}` }, { label: s.name, href: `/academics/${g.slug}/${s.slug}` }, { label: "Subject Question Bank" }]} />
      <h1 className="font-heading text-3xl font-extrabold text-slate-900">{g.title} {s.name} — Subject Question Bank</h1>
      <p className="mt-2 text-sm text-slate-600">Curriculum-aligned study resources managed via the MY BEYOND CLASSES Academic CMS.</p>
      <div className="mt-8 space-y-5">
        {matchingFormulas.length > 0 && "question-bank" === "formula-sheets" ? (
          matchingFormulas.map((f) => (
            <div key={f.id} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="font-heading text-lg font-bold text-slate-900">{f.title}</h2>
              <div className="mt-3"><MathFormula latex={f.latex} /></div>
              <p className="mt-3 text-sm text-slate-600">{f.explanation}</p>
            </div>
          ))
        ) : (
          s.chapters.map((ch) => (
            <div key={ch.slug} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-heading text-base font-bold text-slate-900">Chapter {ch.number}: {ch.title}</h2>
              <p className="mt-1 text-sm text-slate-600">{ch.summary}</p>
              <Link href={`/academics/${g.slug}/${s.slug}/${ch.slug}`} className="mt-3 inline-block text-xs font-semibold text-blue-700 hover:underline">
                Open Chapter Resources →
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
