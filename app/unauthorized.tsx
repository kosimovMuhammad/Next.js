import Link from "next/link";

export default function Unauthorized() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-start justify-center gap-3 px-6">
      <h1 className="text-2xl font-semibold">401 — Unauthorized</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        unauthorized() was called. This is app/unauthorized.tsx.
      </p>
      <Link href="/demos/auth-demo" className="text-sm underline">
        ← Back to the demo
      </Link>
    </div>
  );
}
