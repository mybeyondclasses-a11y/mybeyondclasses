import Link from "next/link";
import { notFound } from "next/navigation";
import { GRADES } from "@/data/academics";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";

export default async function ChapterPage({ params }: { params: Promise<{ grade: string; subject: string; chapter: string }> }) {
  const { grade, subject, chapter } = await params;
  const g = GRADES.find((x) => x.slug === grade);
  const s = g?.subjects.find((x) => x.slug === subject);
  const ch = s?.chapters.find((x) => x.slug === chapter);
  if (!g || !s || !ch) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: g.title, href: `/academics/${g.slug}` }, { label: s.name, href: `/academics/${g.slug}/${s.slug}` }, { label: `Ch. ${ch.number}: ${ch.title}` }]} />
      <Badge variant="purple">Chapter {ch.number}</Badge>
      <h1 className="mt-3 font-heading text-3xl font-extrabold text-slate-900">{ch.title}</h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{ch.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {["notes", "solutions", "formulas", "practice", "quiz"].map((sub) => (
          <Link key={sub} href={`/academics/${g.slug}/${s.slug}/${ch.slug}/${sub}`} className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold capitalize text-blue-700 hover:bg-blue-100">
            Chapter {sub}
          </Link>
        ))}
      </div>
      <h2 className="mt-10 font-heading text-xl font-bold text-slate-900">Topics in This Chapter</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {ch.topics.map((t) => (
          <Link key={t.slug} href={`/academics/${g.slug}/${s.slug}/${ch.slug}/${t.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-sm">
            <h3 className="font-heading text-base font-bold text-slate-900">{t.title}</h3>
            <p className="mt-1 text-xs font-semibold text-blue-700">Open Topic Lesson →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
