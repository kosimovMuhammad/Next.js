"use client"; // Error boundaries must be Client Components

// ---------------------------------------------------------------------------
// ROUTE-LEVEL ERROR BOUNDARY — wraps app/page.tsx (and loading.tsx,
// not-found.tsx) in a React error boundary. If getTodos(), a Server Action,
// or any component during rendering throws, this replaces the page with
// fallback UI instead of crashing the whole app.
//
// `unstable_retry()` re-runs the failed render in place (the recommended
// recovery path in this Next.js version); `reset()` is available too but
// only clears local error state without re-fetching.
// ---------------------------------------------------------------------------

import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-start gap-4 px-6 py-16">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        Something went wrong
      </h2>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        {error.message || "An unexpected error occurred while loading todos."}
      </p>
      <button
        onClick={() => unstable_retry()}
        className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        Try again
      </button>
    </div>
  );
}
