import type { ReactNode } from "react";

export function Badge({
  children,
  variant = "blue",
  className = "",
}: {
  children: ReactNode;
  variant?: "blue" | "purple" | "slate" | "emerald";
  className?: string;
}) {
  const styles = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    purple: "bg-violet-50 text-violet-700 border-violet-200",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
