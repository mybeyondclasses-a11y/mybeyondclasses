import Link from "next/link";
import { notFound } from "next/navigation";
import { CURRICULA, GRADES } from "@/data/academics";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";

export default async function CurriculumBoardPage({ params }: { params: Promise<{ board: string }> }) {
  const { board } = await params;
  const info = CURRICULA.find((c) => c.slug === board);
  if (!info) notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Curricula", href: "/curricula" }, { label: info.code }]} />
        <Badge variant="blue">{info.regions.join(" · ")}</Badge>
        <h1 className="mt-3 font-heading text-3xl font-extrabold text-slate-900">{info.name}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">{info.overview}</p>
        <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/40 p-5 text-sm text-slate-700">
          <strong>Assessment Focus:</strong> {info.assessmentFocus}
        </div>
        <h2 className="mt-10 font-heading text-xl font-bold text-slate-900">Select a Grade under {info.code}</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3 md:grid-cols-4">
          {GRADES.map((g) => (
            <Link key={g.slug} href={`/curriculum/${info.slug}/${g.slug}`} className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 hover:border-blue-400 hover:text-blue-700">
              {info.code} {g.title} →
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
