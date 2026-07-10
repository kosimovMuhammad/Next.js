"use client";

// ---------------------------------------------------------------------------
// CLIENT COMPONENT + SWR — fetches from the Route Handler (app/api/todos)
// over HTTP, from the browser, the same way an external client would. This
// sits next to the Server Component list (app/page.tsx) so both data-fetching
// patterns are visible side by side:
//   - app/page.tsx        -> reads SQLite directly on the server
//   - components/StatsWidget.tsx -> fetches JSON from /api/todos on the client
//
// SWR gives this widget its own client-side cache, background revalidation,
// and refetch-on-focus, independent of Next.js's server-side caching.
// ---------------------------------------------------------------------------

import useSWR from "swr";

type StatsResponse = {
  stats: { total: number; completed: number; active: number };
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function StatsWidget() {
  const { data, error, isLoading } = useSWR<StatsResponse>(
    "/api/todos",
    fetcher,
    { refreshInterval: 5000 } // re-poll every 5s to demonstrate client-side revalidation
  );

  if (error) {
    return (
      <p className="text-xs text-red-600 dark:text-red-400">
        Failed to load stats from /api/todos
      </p>
    );
  }

  if (isLoading || !data) {
    return (
      <p className="text-xs text-zinc-400 dark:text-zinc-500">
        Loading stats via SWR…
      </p>
    );
  }

  const { total, completed, active } = data.stats;

  return (
    <div className="flex flex-wrap gap-2">
      <Pill value={total} label="total" color="zinc" />
      <Pill value={active} label="active" color="amber" />
      <Pill value={completed} label="done" color="emerald" />
    </div>
  );
}

function Pill({
  value,
  label,
  color,
}: {
  value: number;
  label: string;
  color: "zinc" | "amber" | "emerald";
}) {
  const colors = {
    zinc: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
    amber:
      "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-400",
    emerald:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-400",
  }[color];

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${colors}`}
    >
      <span className="font-semibold tabular-nums">{value}</span>
      {label}
    </span>
  );
}
