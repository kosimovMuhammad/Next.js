export default function ParallelLayout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Parallel Routes</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        @team and @analytics render simultaneously, alongside children, from
        this one layout. Click into @team&apos;s settings link with normal
        (soft) navigation first, then hard-refresh the /settings URL to see
        default.js kick in.
      </p>
      {children}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-800">
          <p className="mb-2 text-xs font-semibold uppercase text-zinc-500">
            @team slot
          </p>
          {team}
        </div>
        <div className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-800">
          <p className="mb-2 text-xs font-semibold uppercase text-zinc-500">
            @analytics slot
          </p>
          {analytics}
        </div>
      </div>
    </div>
  );
}
