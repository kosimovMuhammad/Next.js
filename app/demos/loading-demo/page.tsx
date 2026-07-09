export const dynamic = "force-dynamic";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return { loadedAt: new Date().toLocaleTimeString() };
}

export default async function LoadingDemoPage() {
  const data = await getData();
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">loading.js</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        This page awaits a fake 1.5s fetch before rendering. Use the plain
        link below (full reload) to see the loading.js fallback again.
      </p>
      <p className="rounded-lg bg-zinc-100 p-3 font-mono text-sm dark:bg-zinc-900">
        Loaded at {data.loadedAt}
      </p>
      <a href="/demos/loading-demo" className="w-fit text-sm underline">
        Reload
      </a>
    </div>
  );
}
