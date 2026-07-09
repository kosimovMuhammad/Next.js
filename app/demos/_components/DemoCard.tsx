import Link from "next/link";

export function DemoCard({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block rounded-xl border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600"
    >
      <h3 className="font-mono text-sm font-semibold text-zinc-950 dark:text-zinc-50">
        {title}
      </h3>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{children}</p>
    </Link>
  );
}
