import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "#site/content";
import { MDXContent } from "@/components/mdx-content";
import { CATEGORIES } from "@/lib/categories";
import { formatDate } from "@/lib/format";

export const revalidate = 3600;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-2xl px-6 py-12">
      <Link
        href={`/category/${article.category}`}
        className="text-xs font-semibold uppercase tracking-wide text-primary"
      >
        {CATEGORIES[article.category]}
      </Link>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {article.title}
      </h1>
      <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
        <span>{article.author}</span>
        <span aria-hidden>&middot;</span>
        <span>{formatDate(article.publishedAt)}</span>
        <span aria-hidden>&middot;</span>
        <span>{article.metadata.readingTime} min read</span>
      </div>

      <div className="prose prose-neutral dark:prose-invert mt-8 max-w-none">
        <MDXContent code={article.body} />
      </div>

      {article.tags.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-6">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
