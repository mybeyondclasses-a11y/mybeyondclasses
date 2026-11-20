import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export default async function TeacherProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Teachers", href: "/teachers" }, { label: slug }]} />
        <h1 className="font-heading text-3xl font-extrabold text-slate-900">Verified Educator Profile</h1>
        <p className="mt-3 text-sm text-slate-600">
          Public educator profiles load directly from authorized, admin-approved records in the <code>public.teachers</code> Supabase table.
        </p>
      </main>
      <Footer />
    </>
  );
}
