"use client";

import { useState, useMemo } from "react";
import katex from "katex";
import { Copy, Check, Printer } from "lucide-react";

export function MathFormula({
  latex,
  title,
  displayMode = true,
  showActions = true,
}: {
  latex: string;
  title?: string;
  displayMode?: boolean;
  showActions?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const html = useMemo(() => {
    try {
      return katex.renderToString(latex, {
        throwOnError: false,
        displayMode,
        strict: false,
      });
    } catch {
      return latex;
    }
  }, [latex, displayMode]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(latex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard fallback ignored
    }
  };

  return (
    <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50/60 via-white to-violet-50/50 p-4">
      <div className="flex items-center justify-between gap-2 pb-2">
        {title ? (
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
            {title}
          </span>
        ) : (
          <span />
        )}
        {showActions && (
          <div className="flex items-center gap-1.5 print:hidden">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700"
              aria-label="Copy LaTeX formula"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copied" : "Copy LaTeX"}
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700"
              aria-label="Print formula sheet"
            >
              <Printer className="h-3.5 w-3.5" />
              Print
            </button>
          </div>
        )}
      </div>
      <div
        className="overflow-x-auto py-2 text-center text-lg text-slate-900"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
