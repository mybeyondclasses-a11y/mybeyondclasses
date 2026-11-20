import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Beyond Board Exams',
  description: 'Developing creativity, computational thinking, communication, and real-world problem solving alongside school academics.',
  path: "/beyond-board-exams",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Enrichment'
      title='Beyond Board Exams'
      subtitle='Developing creativity, computational thinking, communication, and real-world problem solving alongside school academics.'
      breadcrumbLabel='Beyond Board Exams'
      sections={[{'heading': 'Future-Ready Tracks', 'body': 'Students explore AI literacy, Python programming, robotics logic, public speaking, and Olympiad problem solving.'}]}
    />
  );
}
