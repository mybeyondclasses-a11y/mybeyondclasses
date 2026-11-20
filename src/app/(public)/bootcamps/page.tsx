import Link from "next/link";
import { BOOTCAMPS } from "@/data/academics";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "AI, Coding, Robotics & STEM Bootcamps",
  description: "Hands-on live cohorts in AI, Prompt Engineering, Python, Robotics, and Olympiad STEM for Grades 4–12.",
  path: "/bootcamps",
});

export default function BootcampsIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Bootcamps" }]} />
      <Badge variant="purple">Future-Ready Cohorts</Badge>
      <h1 className="mt-3 font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl">Technology, AI &amp; STEM Bootcamps</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {BOOTCAMPS.map((b) => (
          <Link key={b.slug} href={`/bootcamps/${b.slug}`} className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-violet-300 hover:shadow-md">
            <div>
              <Badge variant="blue">{b.category}</Badge>
              <h2 className="mt-3 font-heading text-lg font-bold text-slate-900">{b.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{b.summary}</p>
            </div>
            <p className="mt-5 text-xs font-semibold text-blue-700">{b.targetGrades} · View Curriculum →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
