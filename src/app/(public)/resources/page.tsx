import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Learning Resources Hub',
  description: 'Central access to Grade 1–12 study materials, formula sheets, revision notes, worksheets, and practice papers.',
  path: "/resources",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Library'
      title='Learning Resources Hub'
      subtitle='Central access to Grade 1–12 study materials, formula sheets, revision notes, worksheets, and practice papers.'
      breadcrumbLabel='Learning Resources Hub'
      sections={[{'heading': 'Structured Study Ecosystem', 'body': 'Filter resources by grade, curriculum, subject, and chapter. Downloadable PDFs are provided only where verified documents exist.'}]}
    />
  );
}
