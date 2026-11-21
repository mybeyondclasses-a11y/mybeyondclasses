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
    blue: "bg-[#eaf1ff] text-[#3156d9] border-[#cddaff]",
    purple: "bg-[#f0edff] text-[#7955d9] border-[#ddd3ff]",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    emerald: "bg-[#e5f8f2] text-[#108a78] border-[#bfece0]",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
