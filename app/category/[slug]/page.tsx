import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles } from "#site/content";
import { ArticleCard } from "@/components/article-card";
import { CATEGORIES, type Category } from "@/lib/categories";

export const revalidate = 3600;

function isCategory(value: string): value is Category {
  return value in CATEGORIES;
}

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isCategory(slug)) return {};
  return { title: CATEGORIES[slug] };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isCategory(slug)) {
    notFound();
  }

  const items = articles
    .filter((article) => article.category === slug)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-8 text-2xl font-bold tracking-tight">
        {CATEGORIES[slug]}
      </h1>
      {items.length === 0 ? (
        <p className="text-muted-foreground">
          No stories in this category yet.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
