import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'About MY BEYOND CLASSES',
  description: 'Building a globally trusted K–12 academic ecosystem combining live expert instruction, structured resources, and future-ready skills.',
  path: "/about",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Company'
      title='About MY BEYOND CLASSES'
      subtitle='Building a globally trusted K–12 academic ecosystem combining live expert instruction, structured resources, and future-ready skills.'
      breadcrumbLabel='About MY BEYOND CLASSES'
      sections={[{'heading': 'Who We Are', 'body': 'MY BEYOND CLASSES is an international EdTech platform supporting Grade 1–12 learners, parents, and educators across India, UAE, USA, UK, China, and Singapore.'}, {'heading': 'What Sets Us Apart', 'body': 'We unite board-aligned academic rigor with transparent parent visibility, verified KaTeX formula sheets, and hands-on AI & STEM bootcamps.', 'bullets': ['Curriculum-mapped Grade 1–12 learning hubs', 'Role-based Student, Parent, Teacher, Mentor & Admin Portals', 'Strict child safeguarding and privacy-first architecture']}]}
    />
  );
}
