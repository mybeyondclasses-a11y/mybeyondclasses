import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'How MY BEYOND CLASSES collects, protects, and governs student, parent, and educator information.',
  path: "/legal/privacy",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Legal'
      title='Privacy Policy'
      subtitle='How MY BEYOND CLASSES collects, protects, and governs student, parent, and educator information.'
      breadcrumbLabel='Privacy Policy'
      sections={[{'heading': 'Data Minimization & Security', 'body': 'We collect only the information required to deliver educational services, protect all private records using PostgreSQL Row Level Security (RLS), and never sell student data.'}]}
    />
  );
}
