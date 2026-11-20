import Link from "next/link";
import { notFound } from "next/navigation";
import { BOOTCAMPS } from "@/data/academics";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";

export default async function BootcampDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = BOOTCAMPS.find((x) => x.slug === slug);
  if (!b) notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Bootcamps", href: "/bootcamps" }, { label: b.title }]} />
        <Badge variant="purple">{b.category} · {b.targetGrades}</Badge>
        <h1 className="mt-3 font-heading text-3xl font-extrabold text-slate-900">{b.title}</h1>
        <p className="mt-3 text-base text-slate-600">{b.summary}</p>
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-heading text-lg font-bold text-slate-900">Cohort Modules</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
            {b.modules.map((m) => <li key={m}>{m}</li>)}
          </ol>
          <Link href="/contact?topic=demo" className="brand-gradient-bg mt-6 inline-block rounded-xl px-5 py-2.5 text-sm font-semibold text-white">
            Enquire / Reserve Cohort Seat
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
