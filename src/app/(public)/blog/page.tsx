import Link from "next/link";
import { BLOG_POSTS } from "@/data/academics";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Blog — Study Strategies, Board Exam Tips & STEM Insights",
  description: "Original academic guides, exam planners, and STEM education articles from MY BEYOND CLASSES.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <Badge variant="purple">Academic Publication</Badge>
      <h1 className="mt-3 font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl">MY BEYOND CLASSES Blog</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-md">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-blue-700">{post.category}</span>
                <span>{post.publishedAt}</span>
              </div>
              <h2 className="mt-3 font-heading text-lg font-bold text-slate-900">{post.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
            </div>
            <span className="mt-5 text-xs font-semibold text-violet-700">Read Article →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
