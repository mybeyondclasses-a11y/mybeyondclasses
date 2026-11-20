import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Board & International Exam Preparation',
  description: 'Dedicated roadmaps for Grade 10 & 12 Boards, IGCSE, IB DP, GCSE, A-Level, and AP assessments.',
  path: "/exam-preparation",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Exams'
      title='Board & International Exam Preparation'
      subtitle='Dedicated roadmaps for Grade 10 & 12 Boards, IGCSE, IB DP, GCSE, A-Level, and AP assessments.'
      breadcrumbLabel='Board & International Exam Preparation'
      sections={[{'heading': 'Structured 12-Week Countdown', 'body': 'Combine formula drills, chapter solutions, weekly timed mocks, and personalized doubt-clearing sessions.'}]}
    />
  );
}
