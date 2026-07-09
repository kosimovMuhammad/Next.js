"use client";

import { useState } from "react";

export default function RouteHandlerDemoPage() {
  const [result, setResult] = useState("");

  async function callGet() {
    const res = await fetch("/demos/route-handler-demo/api");
    setResult(JSON.stringify(await res.json(), null, 2));
  }

  async function callPost() {
    const res = await fetch("/demos/route-handler-demo/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hello: "world" }),
    });
    setResult(JSON.stringify(await res.json(), null, 2));
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">route.js</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        app/demos/route-handler-demo/api/route.ts exports GET and POST
        handlers using the Web Request/Response APIs.
      </p>
      <div className="flex gap-3">
        <button
          onClick={callGet}
          className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900"
        >
          GET
        </button>
        <button
          onClick={callPost}
          className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900"
        >
          POST
        </button>
      </div>
      {result && (
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-3 text-xs dark:bg-zinc-900">
          {result}
        </pre>
      )}
    </div>
  );
}
