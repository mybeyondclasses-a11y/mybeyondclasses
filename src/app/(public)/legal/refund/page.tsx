import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Refund & Cancellation Policy',
  description: 'Transparent policies governing subscriptions, live class rescheduling, and cancellations.',
  path: "/legal/refund",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Legal'
      title='Refund & Cancellation Policy'
      subtitle='Transparent policies governing subscriptions, live class rescheduling, and cancellations.'
      breadcrumbLabel='Refund & Cancellation Policy'
      sections={[{'heading': 'Clear & Fair Terms', 'body': 'Students and parents may cancel recurring digital subscriptions before the next billing cycle. Live class rescheduling follows advance notice guidelines communicated at enrollment.'}]}
    />
  );
}
