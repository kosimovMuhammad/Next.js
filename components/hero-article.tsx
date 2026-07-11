import Link from "next/link";
import type { Article } from "#site/content";
import { CATEGORIES } from "@/lib/categories";
import { CATEGORY_GRADIENTS } from "@/lib/category-styles";
import { formatDate } from "@/lib/format";

export function HeroArticle({ article }: { article: Article }) {
  return (
    <Link
      href={article.permalink}
      className={`group relative flex min-h-80 flex-col justify-end overflow-hidden rounded-2xl border border-border bg-gradient-to-br p-8 ${CATEGORY_GRADIENTS[article.category]}`}
    >
      <span className="mb-4 w-fit rounded-full bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground">
        {CATEGORIES[article.category]}
      </span>
      <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-foreground group-hover:text-primary sm:text-4xl">
        {article.title}
      </h2>
      <p className="mt-3 max-w-xl text-muted-foreground">{article.excerpt}</p>
      <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
        <span>{article.author}</span>
        <span aria-hidden>&middot;</span>
        <span>{formatDate(article.publishedAt)}</span>
        <span aria-hidden>&middot;</span>
        <span>{article.metadata.readingTime} min read</span>
      </div>
    </Link>
  );
}
