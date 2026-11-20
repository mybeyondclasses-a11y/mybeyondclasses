"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, LogOut, Bell, Search } from "lucide-react";

export interface SidebarLink {
  label: string;
  href: string;
}

export function DashboardShell({
  portalTitle,
  roleLabel,
  userEmail,
  navItems,
  children,
}: {
  portalTitle: string;
  roleLabel: string;
  userEmail?: string;
  navItems: SidebarLink[];
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
        <div className="border-b border-slate-100 p-4">
          <Link href="/" className="block">
            <Image src="/logo/logo.jpeg" alt="MY BEYOND CLASSES" width={56} height={56} className="h-14 w-14 object-contain" />
          </Link>
          <span className="mt-2 inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-blue-700">
            {roleLabel}
          </span>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto p-3" aria-label={portalTitle}>
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-xl px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-blue-50 font-semibold text-blue-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-slate-100 p-3">
          <form action="/auth/logout" method="POST">
            <button
              type="submit"
              className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-700"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="w-64 bg-white p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-heading text-sm font-bold text-slate-900">{portalTitle}</span>
              <button onClick={() => setSidebarOpen(false)} aria-label="Close Sidebar">
                <X className="h-5 w-5 text-slate-600" />
              </button>
            </div>
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-blue-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-1 bg-slate-900/40" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg border border-slate-200 p-1.5 text-slate-700 lg:hidden"
              aria-label="Open Navigation"
            >
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="font-heading text-base font-bold text-slate-900 sm:text-lg">{portalTitle}</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-500 sm:flex">
              <Search className="h-3.5 w-3.5" />
              <span>Authorized Database Session</span>
            </div>
            <Link
              href="/student/dashboard/notifications"
              className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4" />
            </Link>
            {userEmail && (
              <span className="hidden text-xs font-medium text-slate-600 md:inline">{userEmail}</span>
            )}
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
