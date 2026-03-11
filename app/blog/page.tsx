import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Блог",
  description:
    "Материалы для покерных клубов и партнёров: управление, автоматизация, аналитика и рост игровой активности."
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="section">
      <div className="container-page">
        <SectionHeading
          title="Блог для покерных клубов, менеджеров и партнёров"
          description="Материалы про управление клубом, автоматизацию процессов, аналитику и рост игровой активности."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.length === 0 ? (
            <p className="text-text-secondary col-span-3">Статьи скоро появятся.</p>
          ) : (
            posts.map((post) => (
              <Card key={post.slug}>
                <div className="text-sm text-text-hint">{post.date}</div>
                <h2 className="mt-3 text-xl font-semibold">{post.title}</h2>
                <p className="mt-3 text-text-secondary">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
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
            ))
          )}
        </div>
      </div>
    </div>
  );
}
