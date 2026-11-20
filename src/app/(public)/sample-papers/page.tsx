import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Sample Papers & Previous-Year Papers',
  description: 'Legally available sample papers and structured mock sets for CBSE, ICSE, IGCSE, IB, and AP.',
  path: "/sample-papers",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Exam Practice'
      title='Sample Papers & Previous-Year Papers'
      subtitle='Legally available sample papers and structured mock sets for CBSE, ICSE, IGCSE, IB, and AP.'
      breadcrumbLabel='Sample Papers & Previous-Year Papers'
      sections={[{'heading': 'Timed Exam Readiness', 'body': 'Simulate real paper timing, understand step-marking rubrics, and review high-yield chapters.'}]}
    />
  );
}
