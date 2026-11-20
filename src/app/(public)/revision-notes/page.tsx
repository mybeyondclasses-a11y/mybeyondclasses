import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Revision Notes, Short Notes & Mind Maps',
  description: 'High-retention chapter summaries, key definitions, and quick revision sheets for every grade.',
  path: "/revision-notes",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Study Guides'
      title='Revision Notes, Short Notes & Mind Maps'
      subtitle='High-retention chapter summaries, key definitions, and quick revision sheets for every grade.'
      breadcrumbLabel='Revision Notes, Short Notes & Mind Maps'
      sections={[{'heading': 'Built for Exam Recall', 'body': 'Access detailed notes for deep learning and condensed quick-revision summaries before chapter tests and board examinations.'}]}
    />
  );
}
