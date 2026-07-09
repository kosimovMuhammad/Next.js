export const revalidate = 10; // seconds

async function getTimestamp() {
  return new Date().toISOString();
}

export default async function SegmentConfigDemoPage() {
  const generatedAt = await getTimestamp();
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">Route Segment Config</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        This page exports <code className="font-mono">revalidate = 10</code>.
        In dev mode every request is fresh, so this timestamp always changes.
        Run <code className="font-mono">npm run build</code> then{" "}
        <code className="font-mono">npm run start</code> and reload
        repeatedly to see it stay frozen for ~10s at a time.
      </p>
      <p className="rounded-lg bg-zinc-100 p-3 font-mono text-sm dark:bg-zinc-900">
        generated at {generatedAt}
      </p>
      <a href="/demos/segment-config-demo" className="w-fit text-sm underline">
        Reload
      </a>
    </div>
  );
}
