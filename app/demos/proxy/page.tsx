import Link from "next/link";

export default function ProxyIndexPage() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">proxy.ts</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        proxy.ts, in the project root, redirects /demos/proxy/old to
        /demos/proxy/new before the page ever renders. This file was called
        &quot;middleware&quot; before Next.js 16 — same behavior, new name.
      </p>
      <Link href="/demos/proxy/old" className="w-fit text-sm underline">
        Visit /demos/proxy/old →
      </Link>
    </div>
  );
}
