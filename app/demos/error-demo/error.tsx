"use client";

import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error("[error.js] caught:", error);
  }, [error]);

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-red-300 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
      <h1 className="text-xl font-semibold text-red-900 dark:text-red-100">
        Something went wrong
      </h1>
      <p className="font-mono text-sm text-red-800 dark:text-red-300">
        {error.message}
      </p>
      <button
        onClick={() => unstable_retry()}
        className="w-fit rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
      >
        Try again (unstable_retry)
      </button>
    </div>
  );
}
