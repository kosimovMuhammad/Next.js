// ---------------------------------------------------------------------------
// STREAMING / SUSPENSE — this Server Component is deliberately slow (an
// artificial 2s delay before it resolves). app/page.tsx wraps it in
// <Suspense fallback={...}> instead of awaiting it inline, so:
//   1. The rest of the page (header, add-todo form, todo list) renders and
//      is sent to the browser immediately.
//   2. This component's fallback is shown in its place.
//   3. Once the 2s "query" finishes, Next.js streams the real markup in and
//      swaps it into the DOM — no full page reload, no client-side fetch.
// ---------------------------------------------------------------------------

import { getTodoStats } from "@/lib/api";

async function artificialDelay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function SlowStats() {
  await artificialDelay(2000);
  const { total, completed, active } = await getTodoStats();

  return (
    <dl className="grid grid-cols-3 gap-3 text-center">
      <div className="rounded-xl border border-zinc-200 bg-white py-3 dark:border-zinc-800 dark:bg-zinc-900">
        <dt className="text-xs text-zinc-500 dark:text-zinc-400">Total</dt>
        <dd className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {total}
        </dd>
      </div>
      <div className="rounded-xl border border-zinc-200 bg-white py-3 dark:border-zinc-800 dark:bg-zinc-900">
        <dt className="text-xs text-zinc-500 dark:text-zinc-400">Active</dt>
        <dd className="text-lg font-semibold text-amber-600 dark:text-amber-400">
          {active}
        </dd>
      </div>
      <div className="rounded-xl border border-zinc-200 bg-white py-3 dark:border-zinc-800 dark:bg-zinc-900">
        <dt className="text-xs text-zinc-500 dark:text-zinc-400">Completed</dt>
        <dd className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
          {completed}
        </dd>
      </div>
    </dl>
  );
}
