import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">not-found.js rendered</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        notFound() was called — Next.js rendered this file instead of the
        page, and returns a 404 status for non-streamed responses.
      </p>
      <Link href="/demos/not-found-demo" className="text-sm underline">
        ← Go back
      </Link>
    </div>
  );
}
