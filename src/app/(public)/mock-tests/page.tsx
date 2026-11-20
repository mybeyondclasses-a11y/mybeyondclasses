import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Online Mock Tests & Daily Practice',
  description: 'Timed digital assessments inside the Student Portal with automated scoring and topic analytics.',
  path: "/mock-tests",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Simulations'
      title='Online Mock Tests & Daily Practice'
      subtitle='Timed digital assessments inside the Student Portal with automated scoring and topic analytics.'
      breadcrumbLabel='Online Mock Tests & Daily Practice'
      sections={[{'heading': 'Measure Real Readiness', 'body': 'Sign in to the Student Dashboard to attempt chapter quizzes and full-length mock tests and track your actual score history.'}]}
    />
  );
}
