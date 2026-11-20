import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Topic & Chapter Question Bank',
  description: 'Curated MCQs, short-answer, numerical, and case-study questions aligned with board marking schemes.',
  path: "/question-bank",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Assessments'
      title='Topic & Chapter Question Bank'
      subtitle='Curated MCQs, short-answer, numerical, and case-study questions aligned with board marking schemes.'
      breadcrumbLabel='Topic & Chapter Question Bank'
      sections={[{'heading': 'Exam-Pattern Questions', 'body': 'Practice competency-based and analytical questions across Mathematics, Physics, Chemistry, Biology, English, and Commerce.'}]}
    />
  );
}
