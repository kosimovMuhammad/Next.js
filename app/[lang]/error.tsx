"use client"; // Error boundaries must be Client Components

// ---------------------------------------------------------------------------
// ROUTE-LEVEL ERROR BOUNDARY — wraps app/[lang]/page.tsx (and loading.tsx,
// not-found.tsx) in a React error boundary. If getTodos(), a Server Action,
// or any component during rendering throws, this replaces the page with
// fallback UI instead of crashing the whole app.
//
// `unstable_retry()` re-runs the failed render in place (the recommended
// recovery path in this Next.js version); `reset()` is available too but
// only clears local error state without re-fetching.
//
// Error boundaries don't receive route params as props, so this reads the
// locale straight from the URL via `useParams()` and keeps its own tiny,
// client-safe string table — `./dictionaries.ts` is `server-only` and can't
// be imported from a Client Component.
// ---------------------------------------------------------------------------

import { useEffect } from "react";
import { useParams } from "next/navigation";

const STRINGS = {
  en: { title: "Something went wrong", generic: "An unexpected error occurred while loading todos.", retry: "Try again" },
  ru: { title: "Что-то пошло не так", generic: "Произошла непредвиденная ошибка при загрузке задач.", retry: "Попробовать снова" },
  tg: { title: "Хатогӣ рӯй дод", generic: "Ҳангоми боркунии корҳо хатогии ногаҳонӣ рух дод.", retry: "Аз нав кӯшиш кунед" },
} satisfies Record<string, { title: string; generic: string; retry: string }>;

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  const params = useParams<{ lang: string }>();
  const t = STRINGS[params.lang as keyof typeof STRINGS] ?? STRINGS.en;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-start gap-4 px-6 py-16">
      <h2 className="text-lg font-semibold text-zinc-50">{t.title}</h2>
      <p className="text-sm text-zinc-400">{error.message || t.generic}</p>
      <button
        onClick={() => unstable_retry()}
        className="rounded-md bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
      >
        {t.retry}
      </button>
    </div>
  );
}
