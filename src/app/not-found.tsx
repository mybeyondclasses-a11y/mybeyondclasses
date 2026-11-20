import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-700">404 — Page Not Found</p>
        <h1 className="mt-3 font-heading text-3xl font-extrabold text-slate-900">
          We couldn&apos;t find that academic page.
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Explore Grades 1–12, Formula Sheets, or return to the MY BEYOND CLASSES homepage.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/" className="brand-gradient-bg rounded-xl px-5 py-2.5 text-sm font-semibold text-white">
            Back to Home
          </Link>
          <Link href="/classes" className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700">
            Explore Grades 1–12
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
