import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog.data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Блог",
  description:
    "Материалы для покерных клубов и партнёров: управление, автоматизация, аналитика и рост игровой активности."
};

export default function BlogPage() {
  return (
    <div className="section">
      <div className="container-page">
        <SectionHeading
          title="Блог для покерных клубов, менеджеров и партнёров"
          description="Материалы про управление клубом, автоматизацию процессов, аналитику и рост игровой активности."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.slug}>
              <div className="text-sm text-text-hint">{post.date}</div>
              <h2 className="mt-3 text-xl font-semibold">{post.title}</h2>
              <p className="mt-3 text-text-secondary">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-divider px-3 py-1 text-xs text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`} className="btn-secondary mt-6 w-full text-center">
                Читать статью
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
