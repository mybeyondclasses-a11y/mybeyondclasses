export function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string | number;
  hint: string;
}) {
  return (
    <div className="premium-card premium-card-blue group p-5">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-3 font-heading text-2xl font-extrabold text-[#101b3d]">{value}</p>
      <p className="mt-2 text-xs leading-relaxed text-slate-500">{hint}</p>
    </div>
  );
}
