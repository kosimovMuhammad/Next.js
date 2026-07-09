export default function Loading() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">loading.js</h1>
      <div className="h-24 w-full animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
      <p className="text-sm text-zinc-500">
        Streaming fallback, shown instantly while the page suspends…
      </p>
    </div>
  );
}
