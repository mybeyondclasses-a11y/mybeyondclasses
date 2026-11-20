import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Academic Events & Global Competitions',
  description: 'Discover upcoming bootcamps, quiz championships, demo weeks, and live workshops.',
  path: "/events",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Community'
      title='Academic Events & Global Competitions'
      subtitle='Discover upcoming bootcamps, quiz championships, demo weeks, and live workshops.'
      breadcrumbLabel='Academic Events & Global Competitions'
      sections={[{'heading': 'Stay Updated', 'body': 'All confirmed events are published in our synchronized platform calendar and announced across our official social channels.'}]}
    />
  );
}
