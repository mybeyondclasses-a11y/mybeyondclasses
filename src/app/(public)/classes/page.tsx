import { InfoPageShell } from "@/components/layout/InfoPageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: 'All Classes & Grade Directory',
  description: 'Choose your grade to access curriculum-mapped subjects, chapters, notes, formula sheets, and practice.',
  path: "/classes",
});

export default function Page() {
  return (
    <InfoPageShell
      badge='Grades 1–12'
      title='All Classes & Grade Directory'
      subtitle='Choose your grade to access curriculum-mapped subjects, chapters, notes, formula sheets, and practice.'
      breadcrumbLabel='All Classes & Grade Directory'
      sections={[{'heading': 'Primary (Grades 1–5)', 'body': 'Foundational numeracy, phonics, grammar, EVS/Science, Social Studies, and early digital literacy.'}, {'heading': 'Middle School (Grades 6–8)', 'body': 'Pre-algebra, structured Science, Humanities, Python coding foundations, and Olympiad readiness.'}, {'heading': 'Secondary & Senior Secondary (Grades 9–12)', 'body': 'Board exam mastery, Calculus, Physics, Chemistry, Biology, Economics, Accountancy, and Computer Science.'}]}
    />
  );
}
