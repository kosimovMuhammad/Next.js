import { articles } from "#site/content";
import { HeroArticle } from "@/components/hero-article";
import { ArticleCard } from "@/components/article-card";

export const revalidate = 3600;

export default function Home() {
  const sorted = [...articles].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt),
  );
  const featured = sorted.find((a) => a.featured) ?? sorted[0];
  const latest = sorted.filter((a) => a.slug !== featured?.slug);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      {featured && (
        <section className="mb-12">
          <HeroArticle article={featured} />
        </section>
      )}

      <section>
        <h2 className="mb-6 text-xl font-semibold tracking-tight">
          Latest Stories
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
