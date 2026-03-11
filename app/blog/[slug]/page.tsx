import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { PortableText } from "@portabletext/react";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = await getAllPosts();
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="section">
      <div className="container-page max-w-4xl">
        <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary">
          ← Назад к блогу
        </Link>

        <div className="flex flex-wrap gap-2">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-divider px-3 py-1 text-xs text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-3 text-text-hint">{post.date}</p>

        <div className="prose-dark mt-10 max-w-none">
          {post.body ? (
            <PortableText value={post.body as Parameters<typeof PortableText>[0]["value"]} />
          ) : (
            <p>{post.excerpt}</p>
          )}
        </div>

        {related.length > 0 ? (
          <div className="mt-16">
            <h2 className="text-2xl font-bold">Похожие статьи</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="surface block p-5 transition hover:border-accent-green/40"
                >
                  <div className="text-sm text-text-hint">{r.date}</div>
                  <h3 className="mt-2 font-semibold">{r.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-16 surface p-6">
          <h3 className="text-xl font-bold">Обсудить подключение клуба</h3>
          <p className="mt-3 text-text-secondary">
            Расскажите о вашем клубе и мы предложим подходящий формат сотрудничества.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contacts" className="btn-primary">Оставить заявку</Link>
            <Link href="/partners" className="btn-secondary">Партнёрство</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
