"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useSettings } from "@/lib/settings-context";

export default function AboutPage() {
  const { t } = useSettings();
  const about = t.about;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16 text-center sm:pt-32">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
            {about.kicker}
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{about.h1}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            {about.sub}
          </p>
        </Reveal>
      </section>

      {/* Story */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="aspect-square w-full max-w-md rounded-3xl bg-gradient-to-br from-[color-mix(in_srgb,var(--accent)_35%,white)] via-white to-[color-mix(in_srgb,var(--accent-2)_35%,white)] dark:from-[color-mix(in_srgb,var(--accent)_35%,black)] dark:via-[var(--card)] dark:to-[color-mix(in_srgb,var(--accent-2)_35%,black)]" />
          </Reveal>
          <Reveal delay={100}>
            <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
              {about.storyKicker}
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">{about.storyTitle}</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">{about.storyP1}</p>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">{about.storyP2}</p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {about.valuesTitle}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {about.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-[var(--border)] p-8 transition-colors hover:border-[var(--accent)]">
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <Reveal className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {about.timelineTitle}
            </h2>
          </Reveal>

          <div className="mt-14 space-y-8 border-l border-[var(--border)] pl-8">
            {about.timeline.map((tl, i) => (
              <Reveal key={tl.year} delay={i * 80} className="relative">
                <span className="absolute -left-[2.35rem] flex h-4 w-4 items-center justify-center rounded-full bg-[var(--accent)] ring-4 ring-[var(--surface)]" />
                <p className="text-sm font-semibold text-[var(--accent)]">{tl.year}</p>
                <p className="mt-1 text-zinc-700 dark:text-zinc-300">{tl.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{about.ctaTitle}</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">{about.ctaSub}</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-zinc-900 px-7 py-3 text-sm font-medium text-white transition-transform hover:scale-105 dark:bg-white dark:text-zinc-900"
          >
            {about.ctaButton}
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
