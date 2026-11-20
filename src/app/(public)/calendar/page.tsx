import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Academic Calendar & Live Schedule',
  description: 'Timezone-aware schedule for classes, webinars, bootcamps, demo sessions, and exam milestones.',
  path: "/calendar",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Scheduling'
      title='Academic Calendar & Live Schedule'
      subtitle='Timezone-aware schedule for classes, webinars, bootcamps, demo sessions, and exam milestones.'
      breadcrumbLabel='Academic Calendar & Live Schedule'
      sections={[{'heading': 'Google Calendar Integration', 'body': 'Authorized students, teachers, and administrators can synchronize their scheduled classes and deadlines using OAuth-connected Google Calendar inside their dashboards.'}]}
    />
  );
}
