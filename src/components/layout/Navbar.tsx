"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, GraduationCap, Shield } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNavigation } from "@/config/navigation";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`navbar-shell sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "navbar-scrolled border-[#dce5f5] bg-white/95" : "border-white/60 bg-white/85"}`}>
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="MY BEYOND CLASSES Home">
          <Image src="/logo/logo.jpeg" alt="MY BEYOND CLASSES" width={48} height={48} className="h-11 w-11 rounded-xl object-contain sm:h-12 sm:w-12" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary Navigation">
          {primaryNavigation.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className="inline-flex min-h-11 items-center gap-1 rounded-xl px-2.5 py-2 text-[14px] font-semibold text-[#475569] transition hover:bg-[#eef3ff] hover:text-[#244fe5]"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.16 }}
                      className="absolute left-0 top-full w-80 rounded-2xl border border-[#dfe6f3] bg-white/95 p-3 shadow-[0_22px_55px_rgba(16,27,61,.16)] backdrop-blur-xl"
                    >
                      <div className="grid gap-1">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setOpenDropdown(null)}
                            className="rounded-xl p-2.5 transition hover:bg-blue-50/70"
                          >
                            <div className="text-sm font-semibold text-slate-900">{sub.label}</div>
                            {sub.description && (
                              <p className="mt-0.5 text-xs text-slate-500">{sub.description}</p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link-premium inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Registration entry points */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/register"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
          >
            <Shield className="h-3.5 w-3.5" />
            Teacher Registration
          </Link>
          <Link
            href="/register"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-[#bdd0ff] bg-[#eef3ff] px-3.5 py-2 text-xs font-semibold text-[#244fe5] transition hover:-translate-y-0.5 hover:bg-[#e4edff]"
          >
            <GraduationCap className="h-3.5 w-3.5" />
            Student / Parent Registration
          </Link>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdZgwfd0RrtK0tookj3PVaLbw5f3I3kS3CbJbX_EZDeMF6A7g/viewform?usp=header"
            className="premium-button-primary !min-h-11 !rounded-xl px-4 py-2 text-xs"
          >
            🎓 Book Your FREE Demo Class
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg border border-slate-200 p-2 text-slate-700 lg:hidden"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="space-y-3 px-4 py-4">
              {primaryNavigation.map((item) => (
                <div key={item.label} className="space-y-1">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-2 py-1.5 text-sm font-semibold text-slate-900"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="grid gap-1 pl-3">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="rounded-lg px-2 py-1 text-xs text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  href="/register"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-center text-xs font-semibold text-blue-700"
                >
                  Student / Parent Registration
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-center text-xs font-semibold text-slate-700"
                >
                  Teacher Registration
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
