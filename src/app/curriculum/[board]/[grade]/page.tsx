import Link from "next/link";
import { notFound } from "next/navigation";
import { CURRICULA, GRADES } from "@/data/academics";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export default async function CurriculumGradePage({ params }: { params: Promise<{ board: string; grade: string }> }) {
  const { board, grade } = await params;
  const c = CURRICULA.find((x) => x.slug === board);
  const g = GRADES.find((x) => x.slug === grade);
  if (!c || !g) notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: c.code, href: `/curriculum/${c.slug}` }, { label: g.title }]} />
        <h1 className="font-heading text-3xl font-extrabold text-slate-900">{c.code} {g.title} Syllabus &amp; Learning Hub</h1>
        <p className="mt-3 text-sm text-slate-600">{g.overview}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {g.subjects.map((sub) => (
            <Link key={sub.slug} href={`/academics/${g.slug}/${sub.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-300">
              <h2 className="font-heading text-lg font-bold text-slate-900">{sub.name}</h2>
              <p className="mt-1 text-xs text-slate-600">{sub.description}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
