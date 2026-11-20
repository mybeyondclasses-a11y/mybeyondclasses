import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Disclaimer, Accessibility & Copyright Policy',
  description: 'Intellectual property notices, accessibility commitment, and academic content disclaimers.',
  path: "/legal/disclaimer",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Legal'
      title='Disclaimer, Accessibility & Copyright Policy'
      subtitle='Intellectual property notices, accessibility commitment, and academic content disclaimers.'
      breadcrumbLabel='Disclaimer, Accessibility & Copyright Policy'
      sections={[{'heading': 'Original Educational Content & Accessibility', 'body': 'MY BEYOND CLASSES publishes original educational materials and respects copyright law. We strive for WCAG 2.1 AA accessibility, keyboard navigation, and reduced-motion support.'}]}
    />
  );
}
