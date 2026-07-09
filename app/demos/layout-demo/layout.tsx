"use client";

import { useState } from "react";
import Link from "next/link";

export default function LayoutDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [clicks, setClicks] = useState(0);
  const [mountedAt] = useState(() => new Date().toLocaleTimeString());

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">layout.js (persists)</h1>
      <div className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-800">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          This layout mounted once, at {mountedAt}, and stays mounted as you
          navigate between the child pages below.
        </p>
        <button
          onClick={() => setClicks((c) => c + 1)}
          className="mt-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900"
        >
          Clicks: {clicks}
        </button>
      </div>
      <div className="flex gap-3 text-sm">
        <Link className="underline" href="/demos/layout-demo/a">
          a
        </Link>
        <Link className="underline" href="/demos/layout-demo/b">
          b
        </Link>
        <Link className="underline" href="/demos/layout-demo/c">
          c
        </Link>
      </div>
      {children}
      <p className="text-xs text-zinc-500">
        Compare with <Link className="underline" href="/demos/template-demo">template-demo</Link>.
      </p>
    </div>
  );
}
