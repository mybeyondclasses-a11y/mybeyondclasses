import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Cookie Policy',
  description: 'How essential session cookies and optional analytics operate on MY BEYOND CLASSES.',
  path: "/legal/cookies",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Legal'
      title='Cookie Policy'
      subtitle='How essential session cookies and optional analytics operate on MY BEYOND CLASSES.'
      breadcrumbLabel='Cookie Policy'
      sections={[{'heading': 'Essential Authentication Cookies', 'body': 'Secure HTTP-only cookies maintain authenticated Supabase sessions across dashboards. Optional analytics are activated only with authorized configuration.'}]}
    />
  );
}
