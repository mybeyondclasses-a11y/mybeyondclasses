import Link from "next/link";
import { FORMULA_SHEETS } from "@/data/academics";
import { MathFormula } from "@/components/academic/MathFormula";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Formula Sheets Centre — Mathematics, Physics & Chemistry",
  description: "Verified Grade 1–12 KaTeX formula sheets with symbol definitions, SI units, worked examples, and revision tips.",
  path: "/formula-sheets",
});

export default function FormulaSheetsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Formula Sheets Centre" }]} />
      <h1 className="mt-3 font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl">Complete Formula Sheets Centre</h1>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
        Explore grade-wise, board-aligned Mathematics, Physics, and Chemistry formulas with exact symbol definitions, SI units, worked examples, common mistakes, and printable layouts.
      </p>
      <div className="mt-10 grid gap-6">
        {FORMULA_SHEETS.map((f) => (
          <article key={f.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="blue">{f.subjectName}</Badge>
                <Badge variant="slate">{f.gradeSlug.replace("-", " ").toUpperCase()}</Badge>
                <Badge variant="purple">{f.difficulty}</Badge>
              </div>
              <span className="text-xs text-slate-500">{f.board}</span>
            </div>
            <h2 className="mt-3 font-heading text-xl font-bold text-slate-900">{f.title}</h2>
            <div className="mt-4"><MathFormula latex={f.latex} title={f.chapterTitle} /></div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">Symbol Definitions &amp; SI Units</h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  {f.symbols.map((s) => (
                    <li key={s.symbol}><code className="font-semibold text-blue-700">{s.symbol}</code>: {s.meaning}</li>
                  ))}
                </ul>
                {f.siUnits && <p className="mt-2 text-xs font-semibold text-violet-700">SI Units: {f.siUnits}</p>}
              </div>
              <div className="rounded-xl bg-blue-50/50 p-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-800">Worked Example</h3>
                <p className="mt-2 text-sm text-slate-700">{f.workedExample}</p>
              </div>
            </div>
            <div className="mt-4 grid gap-3 text-xs text-slate-600 sm:grid-cols-2">
              <p><strong className="text-slate-900">Common Mistake:</strong> {f.commonMistakes}</p>
              <p><strong className="text-slate-900">Revision Tip:</strong> {f.revisionTips}</p>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
              <Link href={`/academics/${f.gradeSlug}/${f.subjectSlug}/${f.chapterSlug}`} className="font-semibold text-blue-700 hover:underline">
                Open Full Chapter: {f.chapterTitle} →
              </Link>
              <span className="text-slate-400">{f.pdfAvailable ? "PDF Available" : "Print-Ready Web Sheet (PDF uploaded via Admin)"}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
