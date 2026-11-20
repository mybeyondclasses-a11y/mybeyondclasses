import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Our Teachers & Subject Specialists',
  description: 'Vetted educators dedicated to conceptual clarity, structured feedback, and student safeguarding.',
  path: "/teachers",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Faculty'
      title='Our Teachers & Subject Specialists'
      subtitle='Vetted educators dedicated to conceptual clarity, structured feedback, and student safeguarding.'
      breadcrumbLabel='Our Teachers & Subject Specialists'
      sections={[{'heading': 'Educator Standards', 'body': 'All teachers and tutors are onboarded through authorized administrative verification and invitation-only staff accounts.'}]}
    />
  );
}
