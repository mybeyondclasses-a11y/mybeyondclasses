import Link from "next/link";
import {
  ArrowRight, Calculator, Globe2, Sparkles, CheckCircle2, Trophy,
  Instagram, Facebook, Youtube, Linkedin, MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { GRADES, CURRICULA, FORMULA_SHEETS, BLOG_POSTS, BOOTCAMPS } from "@/data/academics";
import { Badge } from "@/components/ui/Badge";
import { RevealSection } from "@/components/animations/MotionPrimitives";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: `Grade 1–12 Online Tuition & International Curriculum Classes | ${siteConfig.name}`,
  description: "Online tutoring, CBSE, ICSE, ISC, IB, IGCSE, Cambridge, British and American curriculum support for students in India, UAE, USA, UK, Canada, China and Singapore.",
  path: "/",
});

const SOCIAL_ICONS = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
} as const;

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          sameAs: siteConfig.social.map((s) => s.url),
        }}
      />

      <section className="relative isolate overflow-hidden border-b border-[#dce5f5] bg-[linear-gradient(120deg,#eaf0ff_0%,#f5f1ff_55%,#ffffff_100%)]">
        <div aria-hidden="true" className="absolute left-[-5rem] top-[-7rem] h-72 w-72 rounded-full bg-[#3985ff]/10 blur-3xl" />
        <div aria-hidden="true" className="absolute bottom-[-8rem] right-[-4rem] h-80 w-80 rounded-full bg-[#6652e8]/10 blur-3xl" />
        <div aria-hidden="true" className="absolute right-[12%] top-16 h-24 w-24 rounded-full border border-[#244fe5]/10 bg-white/40 blur-sm" />
        <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-[72px]">
          <div className="mx-auto max-w-5xl text-center">
            <Badge variant="purple" className="animate-premium-rise mb-5 border-[#d9e2ff] bg-white/85 px-4 py-2 shadow-[0_8px_24px_rgba(36,79,229,.07)]">
              <Globe2 className="h-4 w-4" />
              Serving India · UAE · USA · UK · Canada · China · Singapore
            </Badge>
            <h1 className="font-heading text-[clamp(32px,7vw,68px)] font-extrabold leading-[1.06] tracking-[-0.045em] text-[#101d40]">
              <span className="brand-gradient-text">Education Beyond Classrooms.</span>
              <span className="mt-1 block">Opportunities Beyond Limits.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-[1.75] text-[#64748b] sm:text-[17px]">
              Learn Beyond Limits. Achieve Beyond Expectations. Explore Grade 1–12 international learning,
              curriculum-aligned live tutoring, verified formula sheets, structured study notes, exam preparation,
              and future-ready AI &amp; STEM bootcamps.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/classes" className="brand-gradient-bg inline-flex min-h-12 items-center gap-2 rounded-xl px-6 py-3 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(36,79,229,.22)] transition duration-300 hover:-translate-y-1">
                Explore Grades 1–12 <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdZgwfd0RrtK0tookj3PVaLbw5f3I3kS3CbJbX_EZDeMF6A7g/viewform?usp=header" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#bdd0ff] bg-white/90 px-5 py-3 text-[15px] font-semibold text-[#244fe5] shadow-[0_8px_20px_rgba(36,79,229,.07)] transition duration-300 hover:-translate-y-1 hover:bg-[#eef3ff]">
                🎓 Book Your FREE Demo Class
              </Link>
              <Link href="/formula-sheets" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#dce5f5] bg-white/85 px-5 py-3 text-[15px] font-semibold text-[#334155] shadow-[0_8px_20px_rgba(16,29,64,.04)] transition duration-300 hover:-translate-y-1 hover:border-[#b9c9f5] hover:text-[#244fe5]">
                <Calculator className="h-4 w-4 text-[#6652e8]" /> Formula Sheets Centre
              </Link>
              <Link href="/courses" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#dce5f5] bg-white/85 px-5 py-3 text-[15px] font-semibold text-[#334155] transition duration-300 hover:-translate-y-1 hover:border-[#b9c9f5] hover:text-[#244fe5]">
                Explore Courses
              </Link>
              <Link href="/olympiads" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#ded8fa] bg-[#f7f5ff]/90 px-5 py-3 text-[15px] font-semibold text-[#6652e8] transition duration-300 hover:-translate-y-1 hover:bg-[#efecff]">
                <Sparkles className="h-4 w-4" /> Olympiad Competition Registration
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RevealSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Badge variant="blue">International Boards</Badge>
            <h2 className="mt-2 font-heading text-2xl font-extrabold text-slate-900 sm:text-3xl">Curricula Mapped to Every Academic Standard</h2>
          </div>
          <Link href="/curricula" className="text-sm font-semibold text-blue-700 hover:underline">Compare all curricula →</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CURRICULA.map((c) => (
            <Link key={c.slug} href={`/curriculum/${c.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-heading text-lg font-extrabold text-blue-700">{c.code}</span>
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">{c.gradeRange}</span>
              </div>
              <p className="mt-2 text-xs font-medium text-slate-500">{c.regions.join(" · ")}</p>
              <p className="mt-2 line-clamp-3 text-sm text-slate-600">{c.overview}</p>
            </Link>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="border-y border-[#e7edf7] bg-[linear-gradient(135deg,#f7f9ff_0%,#eef3ff_50%,#f7f5ff_100%)] py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Badge variant="purple">Complete K–12 Architecture</Badge>
              <h2 className="mt-3 font-heading text-[clamp(26px,4vw,40px)] font-extrabold text-[#101d40]">Individual Learning Hubs for Grades 1 to 12</h2>
            </div>
            <Link href="/classes" className="text-sm font-semibold text-[#244fe5] transition hover:text-[#6652e8]">Open full Grade Directory →</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {GRADES.map((g) => {
              const badgeClass = g.stage === "Primary"
                ? "bg-[#eef4ff] text-[#244fe5]"
                : g.stage === "Middle"
                  ? "bg-[#f1eeff] text-[#6652e8]"
                  : g.stage === "Secondary"
                    ? "bg-[#eaf2ff] text-[#3157b7]"
                    : "bg-[#f2edff] text-[#7047d8]";
              return (
                <Link
                  key={g.slug}
                  href={`/academics/${g.slug}`}
                  className="group flex min-h-[210px] flex-col rounded-[24px] border border-[#e3eaf7] bg-[linear-gradient(120deg,#f0f5ff_0%,#ffffff_100%)] p-6 shadow-[0_8px_30px_rgba(25,55,120,.055)] transition duration-300 hover:-translate-y-[5px] hover:border-[#b9c9f5] hover:shadow-[0_18px_45px_rgba(36,79,229,.12)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-[20px] font-bold text-[#101d40]">{g.title}</h3>
                    <span className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-bold ${badgeClass}`}>{g.stage}</span>
                  </div>
                  <p className="mt-3 text-[14px] leading-[1.7] text-[#64748b]">{g.overview}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-[#edf1f8] pt-4 text-sm font-semibold text-[#6652e8]">
                    <span>{g.subjects.length} Core Subject Hubs</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <Badge variant="blue">Verified Academic Library</Badge>
            <h2 className="font-heading text-2xl font-extrabold text-slate-900 sm:text-3xl">KaTeX Formula Sheets, Chapter Solutions &amp; Quick Revision Notes</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Every formula sheet includes crisp mathematical typesetting, symbol definitions, SI units, worked examples, common exam pitfalls, and teacher-reviewed accuracy.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              {[
                "Algebra, Trigonometry, Coordinate Geometry & Calculus",
                "Mechanics, Electricity, Optics & Thermodynamics with SI units",
                "Chemical Kinetics, Mole Concept & Organic Mechanisms",
                "Printable, bookmarkable, and chapter-linked inside the Student Portal",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/formula-sheets" className="brand-gradient-bg rounded-xl px-5 py-2.5 text-sm font-semibold text-white">Open Formula Sheets</Link>
              <Link href="/revision-notes" className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-blue-300">Browse Revision Notes</Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {FORMULA_SHEETS.slice(0, 4).map((f) => (
              <Link key={f.id} href={`/academics/${f.gradeSlug}/${f.subjectSlug}/${f.chapterSlug}/formulas`} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-blue-700">{f.subjectName}</span>
                  <span>{f.gradeSlug.replace("-", " ").toUpperCase()}</span>
                </div>
                <h3 className="mt-2 font-heading text-base font-bold text-slate-900">{f.title}</h3>
                <p className="mt-1.5 line-clamp-2 text-xs text-slate-600">{f.explanation}</p>
                <p className="mt-3 text-xs font-semibold text-violet-700">View KaTeX Formula &amp; Example →</p>
              </Link>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="border-y border-violet-100 bg-gradient-to-r from-violet-50 via-white to-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Badge variant="purple"><Trophy className="h-3.5 w-3.5" /> International Competition</Badge>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Olympiad &amp; Academic Competition Registration
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Help students strengthen knowledge, test problem-solving skills, build confidence and earn participation
                or achievement certificates. Open to students and schools in India, UAE, USA, UK, Canada, Singapore and worldwide.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Knowledge Enhancement", "Skill Assessment", "Problem Solving", "Certificates", "Global Participation"].map((benefit) => (
                  <span key={benefit} className="rounded-full border border-violet-200 bg-white px-3 py-1.5 text-xs font-semibold text-violet-700">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
              <Link href="/olympiads" className="brand-gradient-bg w-full rounded-xl px-6 py-3.5 text-center text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:opacity-95 lg:w-auto">
                Open Competition Registration
              </Link>
              <span className="text-xs font-medium text-slate-500">Student and school/group registration available</span>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="border-y border-slate-100 bg-gradient-to-br from-blue-50/60 via-white to-violet-50/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Badge variant="purple"><Sparkles className="h-3.5 w-3.5" /> Beyond Board Exams</Badge>
              <h2 className="mt-2 font-heading text-2xl font-extrabold text-slate-900 sm:text-3xl">AI Education, Coding, Robotics &amp; Olympiad Bootcamps</h2>
            </div>
            <Link href="/bootcamps" className="text-sm font-semibold text-blue-700 hover:underline">Explore all bootcamps →</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {BOOTCAMPS.map((b) => (
              <Link key={b.slug} href={`/bootcamps/${b.slug}`} className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-md">
                <div>
                  <Badge variant="blue">{b.category}</Badge>
                  <h3 className="mt-3 font-heading text-lg font-bold text-slate-900">{b.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{b.summary}</p>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-blue-700">
                  <span>{b.targetGrades}</span>
                  <span>View Syllabus →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <Badge variant="slate">Academic Insights</Badge>
            <h2 className="mt-2 font-heading text-2xl font-extrabold text-slate-900 sm:text-3xl">Latest Study Strategies &amp; Education Guides</h2>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-blue-700 hover:underline">Read all articles →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-md">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-violet-700">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-3 font-heading text-lg font-bold text-slate-900">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="border-t border-slate-100 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="blue">Official Channels</Badge>
            <h2 className="mt-2 font-heading text-2xl font-extrabold text-slate-900 sm:text-3xl">Join the MY BEYOND CLASSES Global Community</h2>
            <p className="mt-3 text-sm text-slate-600">Connect on our verified channels for educational updates, webinars, learning highlights, and community announcements.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {siteConfig.social.map((s) => {
              const Icon = SOCIAL_ICONS[s.id];
              return (
                <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-md">
                  <div>
                    <div className="inline-flex rounded-xl bg-blue-50 p-2.5 text-blue-700"><Icon className="h-5 w-5" /></div>
                    <h3 className="mt-3 font-heading text-base font-bold text-slate-900">{s.name}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{s.description}</p>
                  </div>
                  <span className="mt-4 text-xs font-semibold text-blue-700">Open Official Channel ↗</span>
                </a>
              );
            })}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="border-b border-slate-100 bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="blue">Countries We Serve</Badge>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Online Learning for International Students
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              MY BEYOND CLASSES provides Grade 1–12 online classes, tutoring, exam preparation and learning resources
              for students in India, UAE, USA, UK, Canada, China and Singapore. Lessons can be tailored for CBSE,
              ICSE, ISC, IB, IGCSE, Cambridge, British and American curricula.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["India", "UAE", "USA", "UK", "Canada", "China", "Singapore"].map((country) => (
                <span key={country} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>
    </>
  );
}
