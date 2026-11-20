import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Our Mission',
  description: 'Learn Beyond Limits. Achieve Beyond Expectations.',
  path: "/mission",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Purpose'
      title='Our Mission'
      subtitle='Learn Beyond Limits. Achieve Beyond Expectations.'
      breadcrumbLabel='Our Mission'
      sections={[{'heading': 'Accessible International Academic Excellence', 'body': 'Our mission is to empower every Grade 1–12 student with crystal-clear conceptual mastery, reliable revision tools, and personalized mentorship regardless of geography.'}]}
    />
  );
}
