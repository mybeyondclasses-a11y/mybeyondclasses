import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Online Tuition & Structured Courses',
  description: 'Flexible learning pathways combining self-paced study access, small-group classes, and 1-on-1 tutoring.',
  path: "/courses",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Programs'
      title='Online Tuition & Structured Courses'
      subtitle='Flexible learning pathways combining self-paced study access, small-group classes, and 1-on-1 tutoring.'
      breadcrumbLabel='Online Tuition & Structured Courses'
      sections={[{'heading': 'Program Formats', 'body': 'Choose the structure that fits your learning goals.', 'bullets': ['One-to-One Personalized Tutoring', 'Small-Group Curriculum-Aligned Live Classes', 'All-Subject Academic Support', 'Board & International Exam Crash Courses']}]}
    />
  );
}
