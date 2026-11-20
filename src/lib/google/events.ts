export interface ScheduledEvent {
  id: string;
  title: string;
  type: "live_class" | "demo" | "bootcamp" | "webinar" | "exam" | "deadline" | "ptm";
  startsAt: string;
  endsAt: string;
  timezone: string;
  status: "scheduled" | "completed" | "cancelled";
}

export function detectScheduleConflict(
  existing: ScheduledEvent[],
  proposedStart: Date,
  proposedEnd: Date
): boolean {
  return existing.some((item) => {
    if (item.status === "cancelled") return false;
    const s = new Date(item.startsAt);
    const e = new Date(item.endsAt);
    return proposedStart < e && proposedEnd > s;
  });
}
