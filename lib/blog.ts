import { client } from "./sanity";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  body?: unknown;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      "slug": slug.current,
      title,
      excerpt,
      "date": publishedAt,
      tags
    }`
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      "slug": slug.current,
      title,
      excerpt,
      "date": publishedAt,
      tags,
      body
    }`,
    { slug }
  );
}
