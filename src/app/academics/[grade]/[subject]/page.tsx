import Link from "next/link";
import { notFound } from "next/navigation";
import { GRADES } from "@/data/academics";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";

export default async function SubjectPage({ params }: { params: Promise<{ grade: string; subject: string }> }) {
  const { grade, subject } = await params;
  const g = GRADES.find((item) => item.slug === grade);
  const sub = g?.subjects.find((s) => s.slug === subject);
  if (!g || !sub) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: g.title, href: `/academics/${g.slug}` }, { label: sub.name }]} />
      <Badge variant="blue">{g.title} · {sub.category}</Badge>
      <h1 className="mt-3 font-heading text-3xl font-extrabold text-slate-900">{g.title} {sub.name}</h1>
      <p className="mt-3 text-sm text-slate-600">{sub.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {["formula-sheets", "notes", "worksheets", "question-bank"].map((tab) => (
          <Link key={tab} href={`/academics/${g.slug}/${sub.slug}/${tab}`} className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold capitalize text-slate-700 hover:border-blue-400 hover:text-blue-700">
            {tab.replace("-", " ")}
          </Link>
        ))}
      </div>
      <h2 className="mt-10 font-heading text-xl font-bold text-slate-900">Chapter Directory</h2>
      <div className="mt-4 space-y-4">
        {sub.chapters.map((ch) => (
          <div key={ch.slug} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-slate-900">Chapter {ch.number}: {ch.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{ch.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
              <Link href={`/academics/${g.slug}/${sub.slug}/${ch.slug}`} className="rounded-lg bg-blue-50 px-3 py-1.5 text-blue-700">Overview</Link>
              <Link href={`/academics/${g.slug}/${sub.slug}/${ch.slug}/notes`} className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700">Notes</Link>
              <Link href={`/academics/${g.slug}/${sub.slug}/${ch.slug}/solutions`} className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700">Solutions</Link>
              <Link href={`/academics/${g.slug}/${sub.slug}/${ch.slug}/formulas`} className="rounded-lg bg-violet-50 px-3 py-1.5 text-violet-700">Formulas</Link>
              <Link href={`/academics/${g.slug}/${sub.slug}/${ch.slug}/practice`} className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-700">Practice</Link>
              <Link href={`/academics/${g.slug}/${sub.slug}/${ch.slug}/quiz`} className="rounded-lg bg-emerald-50 px-3 py-1.5 text-emerald-700">Chapter Quiz</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
