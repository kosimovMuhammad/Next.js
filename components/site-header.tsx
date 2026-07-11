import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Pitchside<span className="text-primary">.</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground sm:flex">
          {Object.entries(CATEGORIES).map(([slug, label]) => (
            <Link
              key={slug}
              href={`/category/${slug}`}
              className="transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
