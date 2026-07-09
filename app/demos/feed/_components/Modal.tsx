"use client";

import { useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-6">
      <div className="w-full max-w-sm rounded-xl bg-white p-4 dark:bg-zinc-900">
        {children}
        <button
          onClick={() => router.back()}
          className="mt-3 w-full rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900"
        >
          Close modal
        </button>
      </div>
    </div>
  );
}
