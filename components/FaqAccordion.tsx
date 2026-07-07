"use client";

import { useState } from "react";

export default function FaqAccordion({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)]">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-medium">{f.q}</span>
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-sm transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="px-6 pb-5 text-sm text-zinc-600 dark:text-zinc-400">
                {f.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
