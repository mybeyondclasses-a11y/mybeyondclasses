"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, GraduationCap, Shield } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNavigation } from "@/config/navigation";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="MY BEYOND CLASSES Home">
          <Image src="/logo/logo.jpeg" alt="MY BEYOND CLASSES" width={44} height={44} className="h-11 w-11 object-contain sm:h-12 sm:w-12" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary Navigation">
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
                  className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
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
                      className="absolute left-0 top-full w-80 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl"
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
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
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
            className="inline-flex items-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50 px-3.5 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-100"
          >
            <GraduationCap className="h-3.5 w-3.5" />
            Student / Parent Registration
          </Link>
          <Link
            href="/contact?topic=demo"
            className="brand-gradient-bg rounded-xl px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-95"
          >
            Book Free Demo
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
