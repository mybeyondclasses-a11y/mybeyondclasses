import Link from "next/link";
import { notFound } from "next/navigation";
import { GRADES, CURRICULA } from "@/data/academics";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  return GRADES.map((g) => ({ grade: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ grade: string }> }) {
  const { grade } = await params;
  const info = GRADES.find((g) => g.slug === grade);
  if (!info) return {};
  return buildMetadata({
    title: `${info.title} Subjects, Chapters, Notes & Formula Sheets`,
    description: info.overview,
    path: `/academics/${info.slug}`,
  });
}

export default async function GradeLandingPage({ params }: { params: Promise<{ grade: string }> }) {
  const { grade } = await params;
  const info = GRADES.find((g) => g.slug === grade);
  if (!info) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Classes", href: "/classes" }, { label: info.title }]} />
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="blue">{info.stage}</Badge>
        <Badge variant="purple">International Curricula Ready</Badge>
      </div>
      <h1 className="mt-3 font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl">{info.title} Academic Learning Hub</h1>
      <p className="mt-3 max-w-3xl text-base text-slate-600">{info.overview}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {CURRICULA.map((c) => (
          <Link key={c.slug} href={`/curriculum/${c.slug}/${info.slug}`} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700">
            {c.code} {info.title}
          </Link>
        ))}
      </div>

      <h2 className="mt-10 font-heading text-2xl font-bold text-slate-900">Subjects for {info.title}</h2>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {info.subjects.map((sub) => (
          <div key={sub.slug} className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div>
              <Badge variant="slate">{sub.category}</Badge>
              <h3 className="mt-2 font-heading text-lg font-bold text-slate-900">{sub.name}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{sub.description}</p>
              <ul className="mt-3 space-y-1 text-xs text-slate-700">
                {sub.chapters.map((ch) => (
                  <li key={ch.slug}>
                    <Link href={`/academics/${info.slug}/${sub.slug}/${ch.slug}`} className="text-blue-700 hover:underline">
                      Ch. {ch.number}: {ch.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-3 text-xs font-semibold">
              <Link href={`/academics/${info.slug}/${sub.slug}`} className="text-blue-700 hover:underline">Subject Hub →</Link>
              <Link href={`/academics/${info.slug}/${sub.slug}/formula-sheets`} className="text-violet-700 hover:underline">Formulas</Link>
              <Link href={`/academics/${info.slug}/${sub.slug}/notes`} className="text-slate-600 hover:underline">Notes</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-blue-100 bg-blue-50/40 p-6">
          <h2 className="font-heading text-lg font-bold text-slate-900">Examination &amp; Revision Guidance</h2>
          <p className="mt-2 text-sm text-slate-700">{info.examGuidance}</p>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-heading text-lg font-bold text-slate-900">{info.title} FAQs</h2>
          <div className="mt-3 space-y-3">
            {info.faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-sm font-semibold text-slate-900">{faq.q}</h3>
                <p className="mt-1 text-xs text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
