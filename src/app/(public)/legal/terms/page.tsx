import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Terms and Conditions',
  description: 'Governing terms for using the MY BEYOND CLASSES website, LMS, and tutoring services.',
  path: "/legal/terms",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Legal'
      title='Terms and Conditions'
      subtitle='Governing terms for using the MY BEYOND CLASSES website, LMS, and tutoring services.'
      breadcrumbLabel='Terms and Conditions'
      sections={[{'heading': 'Acceptable Academic Use', 'body': 'Users agree to maintain respectful conduct, protect account credentials, and respect intellectual property across published learning materials.'}]}
    />
  );
}
