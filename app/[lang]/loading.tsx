// ---------------------------------------------------------------------------
// ROUTE-LEVEL LOADING UI — Next.js automatically wraps app/[lang]/page.tsx
// (and everything below it) in a <Suspense> boundary using this file as the
// fallback. It's shown the instant you navigate to "/[lang]" and swapped out
// once the Server Component has finished rendering. This is distinct from the
// <Suspense> boundary inside app/[lang]/page.tsx around <SlowStats>: this one
// covers the *whole route*, that one covers a single slow section.
// ---------------------------------------------------------------------------

export default function Loading() {
  return (
    <div className="mx-auto flex w-full max-w-2xl animate-pulse flex-col gap-10 px-6 py-16">
      <div className="flex flex-col gap-2">
        <div className="h-7 w-32 rounded bg-zinc-800" />
        <div className="h-4 w-64 rounded bg-zinc-800" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-10 w-full rounded bg-zinc-800" />
        <div className="h-10 w-full rounded bg-zinc-800" />
        <div className="h-10 w-full rounded bg-zinc-800" />
      </div>
    </div>
  );
}
