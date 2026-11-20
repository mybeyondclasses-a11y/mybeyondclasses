import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Why Choose MY BEYOND CLASSES',
  description: 'Designed from the ground up for academic trust, measurable progress, and international standards.',
  path: "/why-us",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Advantage'
      title='Why Choose MY BEYOND CLASSES'
      subtitle='Designed from the ground up for academic trust, measurable progress, and international standards.'
      breadcrumbLabel='Why Choose MY BEYOND CLASSES'
      sections={[{'heading': 'Verified Academic Content', 'body': 'Every published formula sheet, revision note, and chapter solution follows a Draft → Review → Approval → Publish workflow.'}, {'heading': 'Complete Family Visibility', 'body': 'Dedicated Parent Portals link directly to verified student schedules, assignments, and assessment progress.'}]}
    />
  );
}
