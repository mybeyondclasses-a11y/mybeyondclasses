import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube, Linkedin, MessageCircle, Mail, Globe } from "lucide-react";
import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/config/navigation";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

const SOCIAL_ICONS = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Top Brand + Newsletter Strip */}
        <div className="grid gap-10 border-b border-slate-800 pb-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <Link href="/" className="inline-block">
              <Image src="/logo/logo.jpeg" alt="MY BEYOND CLASSES" width={80} height={80} className="h-20 w-20 object-contain" />
            </Link>
            <p className="text-sm font-semibold text-blue-300">{siteConfig.tagline}</p>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              {siteConfig.description}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 text-blue-400" />
                {siteConfig.markets.join(" · ")}
              </span>
              <a
                href={`mailto:${siteConfig.companyEmail}`}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 text-blue-400" />
                {siteConfig.companyEmail}
              </a>
            </div>
            {/* Official Social Media Icons */}
            <div className="pt-2">
              <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Follow MY BEYOND CLASSES for learning resources, educational updates & opportunities
              </p>
              <div className="flex flex-wrap gap-2">
                {siteConfig.social.map((s) => {
                  const Icon = SOCIAL_ICONS[s.id];
                  return (
                    <a
                      key={s.id}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      title={`${s.name} — ${s.description}`}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-blue-500 hover:text-white"
                    >
                      <Icon className="h-4 w-4 text-blue-400" />
                      <span>{s.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">Company</h3>
                <ul className="space-y-2 text-sm">
                  {footerNavigation.company.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-slate-400 transition hover:text-white">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">Learning Resources</h3>
                <ul className="space-y-2 text-sm">
                  {footerNavigation.learningResources.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-slate-400 transition hover:text-white">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">Newsletter & Alerts</h3>
                <p className="mb-3 text-xs text-slate-400">
                  Receive verified formula sheets, board exam schedules, and upcoming AI & STEM bootcamp dates.
                </p>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>

        {/* Academic Classes, Subjects, Beyond Academics, Support & Legal */}
        <div className="grid gap-8 border-b border-slate-800 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">Academic Classes & Boards</h3>
            <div className="flex flex-wrap gap-1.5">
              {footerNavigation.academicClasses.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg border border-slate-800 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-300 transition hover:border-blue-500 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">Subjects</h3>
            <ul className="space-y-2 text-sm">
              {footerNavigation.subjects.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">Beyond Academics</h3>
            <ul className="space-y-2 text-sm">
              {footerNavigation.beyondAcademics.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">Learning & Support</h3>
              <ul className="space-y-2 text-sm">
                {footerNavigation.support.map((item) => (
                  <li key={item.href}>
                    {item.href.startsWith("http") ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 transition hover:text-blue-300"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link href={item.href} className="text-slate-400 transition hover:text-white">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">Legal & Safeguarding</h3>
              <ul className="space-y-1.5 text-xs">
                {footerNavigation.legal.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-slate-400 transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {year} MY BEYOND CLASSES. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/legal/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-white">Terms & Conditions</Link>
            <Link href="/legal/child-safety" className="hover:text-white">Child Safety</Link>
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
