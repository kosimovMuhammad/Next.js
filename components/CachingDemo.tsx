// ---------------------------------------------------------------------------
// CACHING & REVALIDATION — three fetches to the same public "current time"
// API (timeapi.io), each using a different `fetch` cache strategy. Reload
// this page a few times and watch the three timestamps:
//
//   - force-cache        -> frozen at whatever time the route was first
//                            rendered/cached; identical on every reload
//                            until the underlying page cache is purged.
//   - no-store            -> a brand new value on every single request
//                            (fully dynamic, never cached).
//   - revalidate: 30      -> updates at most once every 30 seconds (ISR);
//                            reloads within that window show the same value,
//                            reloads after it show a fresh one.
// ---------------------------------------------------------------------------

const TIME_API = "https://timeapi.io/api/time/current/zone?timeZone=Etc/UTC";

type TimeResponse = { time: string; date: string };

// The demo degrades to "unavailable" per card, rather than throwing into
// the nearest error.tsx, if the third-party API is unreachable.
async function safeFetch(init: RequestInit & { next?: { revalidate?: number } }) {
  try {
    const res = await fetch(TIME_API, init);
    if (!res.ok) return null;
    return (await res.json()) as TimeResponse;
  } catch {
    return null;
  }
}

async function getStaticTime() {
  // 'force-cache' (static) — fetched once, then served from Next's Data
  // Cache on every subsequent request until explicitly revalidated.
  return safeFetch({ cache: "force-cache" });
}

async function getFreshTime() {
  // 'no-store' (dynamic) — never cached, re-fetched from the network on
  // every request. This also opts the whole route into dynamic rendering.
  return safeFetch({ cache: "no-store" });
}

async function getRevalidatedTime() {
  // next: { revalidate: 30 } (time-based ISR) — cached, but Next.js will
  // fetch a fresh copy in the background once 30 seconds have passed.
  return safeFetch({ next: { revalidate: 30 } });
}

export default async function CachingDemo() {
  const [staticTime, freshTime, revalidatedTime] = await Promise.all([
    getStaticTime(),
    getFreshTime(),
    getRevalidatedTime(),
  ]);

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <TimeCard
        label="force-cache"
        hint="frozen until cache is purged"
        value={staticTime}
      />
      <TimeCard
        label="no-store"
        hint="fresh on every request"
        value={freshTime}
      />
      <TimeCard
        label="revalidate: 30s"
        hint="refreshes at most every 30s"
        value={revalidatedTime}
      />
    </div>
  );
}

function TimeCard({
  label,
  hint,
  value,
}: {
  label: string;
  hint: string;
  value: TimeResponse | null;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white px-3 py-3 dark:border-zinc-800 dark:bg-zinc-900">
      <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
        {label}
      </p>
      <p className="mt-1 text-lg font-semibold tabular-nums text-zinc-900 dark:text-zinc-50">
        {value ? value.time : "unavailable"}
      </p>
      <p className="text-xs text-zinc-400 dark:text-zinc-500">{hint}</p>
    </div>
  );
}
