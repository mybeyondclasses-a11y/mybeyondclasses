import type { ReactNode } from "react";

export function PremiumSurface({
  children,
  className = "",
  tone = "blue",
}: {
  children: ReactNode;
  className?: string;
  tone?: "blue" | "purple" | "cyan" | "mint" | "orange" | "navy";
}) {
  return <div className={`premium-card premium-card-${tone} ${className}`}>{children}</div>;
}
