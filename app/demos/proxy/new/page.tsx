import Link from "next/link";

export default function NewPage() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">Redirected by proxy.ts ✓</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        proxy.ts matched /demos/proxy/old and redirected here server-side.
        Check the terminal for the &quot;[proxy.ts] intercepted request&quot;
        log line.
      </p>
      <Link href="/demos/proxy" className="text-sm underline">
        ← Back
      </Link>
    </div>
  );
}
