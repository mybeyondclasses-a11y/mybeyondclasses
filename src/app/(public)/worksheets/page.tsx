import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Chapter-Wise Worksheets',
  description: 'Progressive practice problems spanning foundation, intermediate, and challenge difficulty levels.',
  path: "/worksheets",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Practice'
      title='Chapter-Wise Worksheets'
      subtitle='Progressive practice problems spanning foundation, intermediate, and challenge difficulty levels.'
      breadcrumbLabel='Chapter-Wise Worksheets'
      sections={[{'heading': 'Structured Skill Building', 'body': 'Worksheets reinforce conceptual understanding with step-by-step worked solutions available for teacher-approved chapters.'}]}
    />
  );
}
