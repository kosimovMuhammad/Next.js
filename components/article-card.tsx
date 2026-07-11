import Link from "next/link";
import type { Article } from "#site/content";
import { CATEGORIES } from "@/lib/categories";
import { CATEGORY_GRADIENTS } from "@/lib/category-styles";
import { formatDate } from "@/lib/format";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={article.permalink}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50"
    >
      <div
        className={`flex h-32 items-end bg-gradient-to-br p-4 ${CATEGORY_GRADIENTS[article.category]}`}
      >
        <span className="rounded-full bg-background/80 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-foreground">
          {CATEGORIES[article.category]}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="line-clamp-2 text-lg font-semibold tracking-tight group-hover:text-primary">
          {article.title}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {article.excerpt}
        </p>
        <div className="mt-auto flex items-center gap-2 pt-2 text-xs text-muted-foreground">
          <span>{article.author}</span>
          <span aria-hidden>&middot;</span>
          <span>{formatDate(article.publishedAt)}</span>
          <span aria-hidden>&middot;</span>
          <span>{article.metadata.readingTime} min read</span>
        </div>
      </div>
    </Link>
  );
}
