import { defineConfig, defineCollection, s } from "velite";

const articles = defineCollection({
  name: "Article",
  pattern: "articles/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(120),
      slug: s.slug("articles"),
      category: s.enum(["news", "transfer", "match-report", "analysis", "interview"]),
      author: s.string(),
      tags: s.array(s.string()).default([]),
      publishedAt: s.isodate(),
      featured: s.boolean().default(false),
      excerpt: s.excerpt(),
      metadata: s.metadata(),
      body: s.mdx(),
    })
    .transform((data) => ({ ...data, permalink: `/articles/${data.slug}` })),
});

export default defineConfig({
  root: "content",
  collections: { articles },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
