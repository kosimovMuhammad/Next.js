"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function RouteHandlerDemoPage() {
  const t = useTranslations("RouteHandlerDemo");
  const [result, setResult] = useState("");

  async function callGet() {
    // Relative to the current (locale-prefixed) URL, e.g. /en/demos/route-handler-demo/api
    const res = await fetch("api");
    setResult(JSON.stringify(await res.json(), null, 2));
  }

  async function callPost() {
    const res = await fetch("api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hello: "world" }),
    });
    setResult(JSON.stringify(await res.json(), null, 2));
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">{t("title")}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {t("description")}
      </p>
      <div className="flex gap-3">
        <button
          onClick={callGet}
          className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900"
        >
          {t("getButton")}
        </button>
        <button
          onClick={callPost}
          className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900"
        >
          {t("postButton")}
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
