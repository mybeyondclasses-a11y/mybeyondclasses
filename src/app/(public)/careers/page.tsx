import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Careers & Tutor Applications',
  description: 'Join MY BEYOND CLASSES as a Subject Specialist Tutor, STEM Mentor, or Academic Content Editor.',
  path: "/careers",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Join Us'
      title='Careers & Tutor Applications'
      subtitle='Join MY BEYOND CLASSES as a Subject Specialist Tutor, STEM Mentor, or Academic Content Editor.'
      breadcrumbLabel='Careers & Tutor Applications'
      sections={[{'heading': 'How to Apply', 'body': 'Submit your teaching profile and subject specialization via our Contact & Applications form. Shortlisted educators receive an official invitation from Super Admin.'}]}
    />
  );
}
