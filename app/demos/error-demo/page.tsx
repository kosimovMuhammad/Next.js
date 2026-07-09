"use client";

import { useState } from "react";

export default function ErrorDemoPage() {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error("Boom! This error was thrown on purpose.");
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">error.js</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Click the button to throw during render and trigger the nearest
        error.js boundary.
      </p>
      <button
        onClick={() => setShouldThrow(true)}
        className="w-fit rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
      >
        Throw an error
      </button>
    </div>
  );
}
