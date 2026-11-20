import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Child Safety & Safeguarding Policy',
  description: 'Our non-negotiable commitment to protecting minors in every online classroom and digital interaction.',
  path: "/legal/child-safety",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Safeguarding'
      title='Child Safety & Safeguarding Policy'
      subtitle='Our non-negotiable commitment to protecting minors in every online classroom and digital interaction.'
      breadcrumbLabel='Child Safety & Safeguarding Policy'
      sections={[{'heading': 'Student Safeguarding Controls', 'body': 'Strict role-based isolation prevents unauthorized access to student profiles. Parental consent workflows and monitored academic spaces safeguard learners under 18.'}]}
    />
  );
}
