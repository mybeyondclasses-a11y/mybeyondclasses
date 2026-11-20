import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Our Teaching Methodology',
  description: 'A four-stage active mastery cycle designed for deep retention and exam confidence.',
  path: "/methodology",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Pedagogy'
      title='Our Teaching Methodology'
      subtitle='A four-stage active mastery cycle designed for deep retention and exam confidence.'
      breadcrumbLabel='Our Teaching Methodology'
      sections={[{'heading': '1. Concept Diagnosis & Curriculum Alignment', 'body': 'Every learner starts with grade and board alignment across CBSE, ICSE, IB, IGCSE, Cambridge, British, or American syllabi.'}, {'heading': '2. Interactive Instruction & Worked Examples', 'body': 'Visual derivations, KaTeX formula breakdowns, and live guided problem solving replace rote memorization.'}, {'heading': '3. Active Recall, Quizzes & Feedback Loops', 'body': 'Chapter practice tests, timed mock papers, and actionable teacher feedback close knowledge gaps early.'}]}
    />
  );
}
