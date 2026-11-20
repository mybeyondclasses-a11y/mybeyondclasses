import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Educational Webinars & Parent Workshops',
  description: 'Free interactive sessions covering exam strategies, international curriculum transitions, and AI in education.',
  path: "/webinars",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Live Sessions'
      title='Educational Webinars & Parent Workshops'
      subtitle='Free interactive sessions covering exam strategies, international curriculum transitions, and AI in education.'
      breadcrumbLabel='Educational Webinars & Parent Workshops'
      sections={[{'heading': 'Upcoming Sessions', 'body': 'Check our Academic Calendar or join the official WhatsApp Community for verified webinar links and timings.'}]}
    />
  );
}
