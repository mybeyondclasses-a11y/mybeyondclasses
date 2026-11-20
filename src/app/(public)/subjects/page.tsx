import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Subjects Directory',
  description: 'Structured learning libraries across Mathematics, Sciences, English, Social Sciences, Commerce, and Technology.',
  path: "/subjects",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Academic Library'
      title='Subjects Directory'
      subtitle='Structured learning libraries across Mathematics, Sciences, English, Social Sciences, Commerce, and Technology.'
      breadcrumbLabel='Subjects Directory'
      sections={[{'heading': 'Core & Elective Subject Hubs', 'body': 'Every subject connects directly to grade-wise chapters, KaTeX formula sheets, worked solutions, and practice tests.', 'bullets': ['Mathematics (Arithmetic to Calculus)', 'Physics, Chemistry & Biology', 'English Language, Grammar & Literature', 'History, Geography, Civics & Economics', 'Accountancy & Business Studies', 'Computer Science, Python & AI Education']}]}
    />
  );
}
