"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useSettings } from "@/lib/settings-context";

const featureIcons = ["◆", "◇", "○", "□"];
const statValues = [
  { value: 120, suffix: "+" },
  { value: 48, suffix: "" },
  { value: 9, suffix: "" },
  { value: 97, suffix: "%" },
];

export default function Home() {
  const { t } = useSettings();
  const home = t.home;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[color-mix(in_srgb,var(--accent)_35%,transparent)] blur-3xl animate-blob" />
          <div className="absolute top-32 right-0 h-72 w-72 rounded-full bg-[color-mix(in_srgb,var(--accent-2)_35%,transparent)] blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[color-mix(in_srgb,var(--accent)_25%,var(--accent-2)_25%)] blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-28 text-center sm:pt-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)]/60 px-4 py-1.5 text-xs font-medium text-zinc-600 backdrop-blur dark:text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              {home.badge}
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              {home.h1Start}
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">
                {home.h1Highlight}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
              {home.sub}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-zinc-900 px-7 py-3 text-sm font-medium text-white transition-transform hover:scale-105 dark:bg-white dark:text-zinc-900"
              >
                {home.ctaPrimary}
              </Link>
              <Link
                href="/work"
                className="rounded-full border border-[var(--border)] px-7 py-3 text-sm font-medium text-zinc-800 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] dark:text-zinc-200"
              >
                {home.ctaSecondary}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-4">
          {home.statsLabels.map((label, i) => (
            <Reveal key={label} delay={i * 100} className="text-center">
              <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                <AnimatedCounter target={statValues[i].value} suffix={statValues[i].suffix} />
              </p>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {home.featuresTitle}
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">{home.featuresSub}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {home.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[color-mix(in_srgb,var(--accent)_15%,transparent)] dark:hover:shadow-none">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] text-lg text-[var(--accent)] transition-transform group-hover:scale-110">
                  {featureIcons[i]}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {home.processTitle}
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">{home.processSub}</p>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {home.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="relative pl-2">
                  <span className="text-4xl font-semibold text-[color-mix(in_srgb,var(--accent)_25%,transparent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {home.testimonialsTitle}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {home.testimonials.map((t2, i) => (
            <Reveal key={t2.name} delay={i * 100}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-[var(--border)] p-8">
                <blockquote className="text-zinc-700 dark:text-zinc-300">
                  &ldquo;{t2.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-sm font-semibold">{t2.name}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{t2.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-zinc-900 px-8 py-16 text-center dark:bg-zinc-100 sm:px-16">
            <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[color-mix(in_srgb,var(--accent)_45%,transparent)] blur-3xl" />
            <h2 className="text-3xl font-semibold tracking-tight text-white dark:text-zinc-900 sm:text-4xl">
              {home.ctaTitle}
            </h2>
            <p className="mt-4 text-zinc-300 dark:text-zinc-600">{home.ctaSub}</p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-sm font-medium text-zinc-900 transition-transform hover:scale-105 dark:bg-zinc-900 dark:text-white"
            >
              {home.ctaButton}
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
