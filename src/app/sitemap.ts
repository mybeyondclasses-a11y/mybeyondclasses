import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { GRADES, CURRICULA, BLOG_POSTS, BOOTCAMPS } from "@/data/academics";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPaths = [
    "", "/about", "/mission", "/vision", "/methodology", "/why-us",
    "/classes", "/curricula", "/subjects", "/teachers", "/tutors",
    "/courses", "/pricing", "/resources", "/formula-sheets", "/revision-notes",
    "/worksheets", "/question-bank", "/sample-papers", "/mock-tests",
    "/exam-preparation", "/beyond-board-exams", "/activities", "/olympiads",
    "/bootcamps", "/webinars", "/events", "/calendar", "/blog", "/careers",
    "/contact", "/faq", "/legal/privacy", "/legal/terms", "/legal/refund",
    "/legal/cookies", "/legal/child-safety", "/legal/disclaimer",
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: p === "" ? "daily" : "weekly",
    priority: p === "" ? 1.0 : 0.8,
  }));

  for (const g of GRADES) {
    entries.push({ url: `${base}/academics/${g.slug}`, lastModified: now, changeFrequency: "weekly", priority: 0.9 });
    for (const s of g.subjects) {
      entries.push({ url: `${base}/academics/${g.slug}/${s.slug}`, lastModified: now, changeFrequency: "weekly", priority: 0.85 });
      for (const ch of s.chapters) {
        entries.push({ url: `${base}/academics/${g.slug}/${s.slug}/${ch.slug}`, lastModified: now, changeFrequency: "weekly", priority: 0.8 });
      }
    }
  }

  for (const c of CURRICULA) {
    entries.push({ url: `${base}/curriculum/${c.slug}`, lastModified: now, changeFrequency: "weekly", priority: 0.85 });
  }
  for (const post of BLOG_POSTS) {
    entries.push({ url: `${base}/blog/${post.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.75 });
  }
  for (const b of BOOTCAMPS) {
    entries.push({ url: `${base}/bootcamps/${b.slug}`, lastModified: now, changeFrequency: "weekly", priority: 0.8 });
  }

  return entries;
}
