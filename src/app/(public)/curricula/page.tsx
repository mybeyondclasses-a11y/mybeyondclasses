import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'International Curricula Supported',
  description: 'Compare CBSE, ICSE, ISC, IB, IGCSE, Cambridge, British and American curricula for students in India, UAE, USA, UK, Canada, China and Singapore.',
  path: "/curricula",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Global Boards'
      title='International Curricula Supported'
      subtitle='Compare curriculum-aligned learning options for India, UAE, USA, UK, Canada, China and Singapore.'
      breadcrumbLabel='International Curricula Supported'
      sections={[{'heading': 'Supported Curricula', 'body': 'We provide curriculum-mapped subjects and chapters for students in India, UAE, USA, UK, Canada, China and Singapore rather than forcing a one-size-fits-all syllabus.', 'bullets': ['CBSE (India, UAE, USA, UK & Canada)', 'ICSE & ISC', 'IB PYP, MYP & DP', 'Cambridge Primary, Lower Secondary & IGCSE', 'British National Curriculum (KS1–KS5 / GCSE / A-Level)', 'American Common Core, NGSS & AP']}]}
    />
  );
}
