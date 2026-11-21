import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";

export function InfoPageShell({
  badge,
  title,
  subtitle,
  breadcrumbLabel,
  sections,
  ctaHref = "https://docs.google.com/forms/d/e/1FAIpQLSdZgwfd0RrtK0tookj3PVaLbw5f3I3kS3CbJbX_EZDeMF6A7g/viewform?usp=header",
  ctaLabel = "🎓 Book Your FREE Demo Class",
}: {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="page-ambient">
        <Breadcrumbs items={[{ label: breadcrumbLabel }]} />
        <Badge variant="blue">{badge}</Badge>
        <h1 className="mt-4 max-w-4xl font-heading text-4xl font-extrabold tracking-tight text-[#101b3d] sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">{subtitle}</p>
      </div>
      <div className="mt-10 space-y-6">
        {sections.map((sec) => (
          <section key={sec.heading} className="premium-card premium-card-blue p-6 sm:p-7">
            <h2 className="font-heading text-xl font-bold text-[#101b3d]">{sec.heading}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{sec.body}</p>
            {sec.bullets && (
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
                {sec.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            )}
          </section>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href={ctaHref} className="premium-button-primary">{ctaLabel}</Link>
        <Link href="/classes" className="premium-button-secondary">Explore Grades 1–12</Link>
      </div>
    </div>
  );
}
