export default function InstrumentationDemoPage() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">
        instrumentation.ts & instrumentation-client.ts
      </h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        These are root-level files, not routes — there&apos;s nothing to
        click here. Instead:
      </p>
      <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-400">
        <li>
          Look at the terminal running{" "}
          <code className="font-mono">npm run dev</code> —{" "}
          <code className="font-mono">instrumentation.ts</code> logged once
          when the server booted.
        </li>
        <li>
          Open the browser DevTools console —{" "}
          <code className="font-mono">instrumentation-client.ts</code>{" "}
          logged on page load, and logs again on every navigation via
          onRouterTransitionStart.
        </li>
      </ul>
    </div>
  );
}
