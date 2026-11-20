import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Frequently Asked Questions',
  description: 'Clear answers on curricula, Email OTP login, pricing, student privacy, and live classes.',
  path: "/faq",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Help Centre'
      title='Frequently Asked Questions'
      subtitle='Clear answers on curricula, Email OTP login, pricing, student privacy, and live classes.'
      breadcrumbLabel='Frequently Asked Questions'
      sections={[{'heading': 'How do students and parents log in?', 'body': 'We use secure email-only 6-digit OTP verification and Google Sign-In via Supabase Auth—no mobile number or SMS OTP is required.'}, {'heading': 'Which countries and curricula are supported?', 'body': 'We serve learners in India, UAE, USA, UK, China, Singapore, and worldwide across CBSE, ICSE, ISC, IB, IGCSE, Cambridge, British, and American curricula.'}]}
    />
  );
}
