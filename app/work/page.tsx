"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useSettings } from "@/lib/settings-context";

const projectGradients = [
  "from-[var(--accent)] to-[var(--accent-2)]",
  "from-[var(--accent-2)] to-[var(--accent)]",
  "from-[color-mix(in_srgb,var(--accent)_70%,white)] to-[var(--accent-2)]",
  "from-[var(--accent)] to-[color-mix(in_srgb,var(--accent-2)_70%,white)]",
  "from-[color-mix(in_srgb,var(--accent-2)_70%,black)] to-[var(--accent)]",
  "from-[var(--accent-2)] to-[color-mix(in_srgb,var(--accent)_70%,black)]",
];

export default function WorkPage() {
  const { t } = useSettings();
  const work = t.work;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16 text-center sm:pt-32">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
            {work.kicker}
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{work.h1}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            {work.sub}
          </p>
        </Reveal>
      </section>

      {/* Services */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {work.servicesTitle}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {work.services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[color-mix(in_srgb,var(--accent)_15%,transparent)] dark:hover:shadow-none">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {work.processTitle}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {work.process.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="pl-2">
                <span className="text-4xl font-semibold text-[color-mix(in_srgb,var(--accent)_25%,transparent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {work.portfolioTitle}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {work.projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div className="group cursor-pointer overflow-hidden rounded-2xl border border-[var(--border)]">
                  <div
                    className={`h-40 bg-gradient-to-br ${projectGradients[i]} transition-transform duration-500 group-hover:scale-110`}
                  />
                  <div className="bg-[var(--card)] p-6">
                    <h3 className="font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{p.tag}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{work.ctaTitle}</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">{work.ctaSub}</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-zinc-900 px-7 py-3 text-sm font-medium text-white transition-transform hover:scale-105 dark:bg-white dark:text-zinc-900"
          >
            {work.ctaButton}
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
