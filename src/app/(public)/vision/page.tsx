import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'Our Vision',
  description: 'Shaping confident, analytical, and future-ready learners across global curricula.',
  path: "/vision",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Future'
      title='Our Vision'
      subtitle='Shaping confident, analytical, and future-ready learners across global curricula.'
      breadcrumbLabel='Our Vision'
      sections={[{'heading': 'Beyond Classrooms, Beyond Borders', 'body': 'We envision an interconnected education ecosystem where foundational school subjects seamlessly bridge into computational thinking, scientific research, and ethical AI literacy.'}]}
    />
  );
}
