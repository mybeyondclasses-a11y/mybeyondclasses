import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/academics";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
        <Badge variant="purple">{post.category}</Badge>
        <h1 className="mt-3 font-heading text-3xl font-extrabold text-slate-900">{post.title}</h1>
        <p className="mt-2 text-xs text-slate-500">Published {post.publishedAt} · {post.readTime}</p>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-slate-700">
          {post.content.map((para, i) => <p key={i}>{para}</p>)}
        </div>
      </article>
      <Footer />
    </>
  );
}
