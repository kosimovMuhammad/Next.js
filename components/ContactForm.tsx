"use client";

import { useState, type FormEvent } from "react";
import { useSettings } from "@/lib/settings-context";

export default function ContactForm() {
  const { t } = useSettings();
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("sent"), 900);
  }

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-[color-mix(in_srgb,var(--accent)_35%,transparent)] bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] p-10 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-xl text-white animate-float">
          ✓
        </span>
        <h3 className="mt-4 text-lg font-semibold">{t.contact.form.sentTitle}</h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {t.contact.form.sentDesc}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-[var(--border)] p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            {t.contact.form.name}
          </label>
          <input
            id="name"
            required
            type="text"
            placeholder={t.contact.form.namePlaceholder}
            className="mt-2 w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            {t.contact.form.email}
          </label>
          <input
            id="email"
            required
            type="email"
            placeholder={t.contact.form.emailPlaceholder}
            className="mt-2 w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="budget" className="text-sm font-medium">
          {t.contact.form.budget}
        </label>
        <select
          id="budget"
          className="mt-2 w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
        >
          {t.contact.form.budgetOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          {t.contact.form.message}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder={t.contact.form.messagePlaceholder}
          className="mt-2 w-full resize-none rounded-lg border border-[var(--border)] bg-transparent px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-zinc-900 px-7 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 dark:bg-white dark:text-zinc-900"
      >
        {status === "loading" ? t.contact.form.submitting : t.contact.form.submit}
      </button>
    </form>
  );
}
