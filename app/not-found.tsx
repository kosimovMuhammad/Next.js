import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-start justify-center gap-3 px-6">
      <h1 className="text-2xl font-semibold">404 — Not Found</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        This is the root app/not-found.tsx. It also catches any URL that
        doesn&apos;t match a route in this app — try a nonsense URL, e.g.
        /this-does-not-exist.
      </p>
      <Link href="/" className="text-sm underline">
        ← Back home
      </Link>
    </div>
  );
}
