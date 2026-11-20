import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Find a Subject Tutor',
  description: 'Connect with curriculum-aligned tutors for Mathematics, Science, English, Commerce, and Computer Science.',
  path: "/tutors",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='1-on-1 & Group'
      title='Find a Subject Tutor'
      subtitle='Connect with curriculum-aligned tutors for Mathematics, Science, English, Commerce, and Computer Science.'
      breadcrumbLabel='Find a Subject Tutor'
      sections={[{'heading': 'Personalized Matching', 'body': 'Submit your grade, curriculum, subject focus, and preferred timezone via our Free Demo request to be matched with an authorized subject specialist.'}]}
    />
  );
}
