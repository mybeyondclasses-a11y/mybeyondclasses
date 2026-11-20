import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
      <Link href="/" className="hover:text-blue-700">
        Home
      </Link>
      {items.map((item, idx) => (
        <span key={idx} className="inline-flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          {item.href ? (
            <Link href={item.href} className="hover:text-blue-700">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-slate-800">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
