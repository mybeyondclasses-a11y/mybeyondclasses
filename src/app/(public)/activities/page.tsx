import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'STEM Learning & Student Activities',
  description: 'Hands-on science challenges, coding showcases, quizzes, and collaborative academic clubs.',
  path: "/activities",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Co-Curricular'
      title='STEM Learning & Student Activities'
      subtitle='Hands-on science challenges, coding showcases, quizzes, and collaborative academic clubs.'
      breadcrumbLabel='STEM Learning & Student Activities'
      sections={[{'heading': 'Learning by Building', 'body': 'Weekly interactive challenges encourage curiosity and practical application beyond textbook exercises.'}]}
    />
  );
}
