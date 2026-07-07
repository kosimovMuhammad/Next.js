"use client";

import Link from "next/link";
import { useSettings } from "@/lib/settings-context";

export default function Footer() {
  const { t } = useSettings();

  const columns = [
    {
      title: t.footer.siteCol,
      links: [
        { href: "/", label: t.nav.home },
        { href: "/about", label: t.nav.about },
        { href: "/work", label: t.nav.work },
        { href: "/contact", label: t.nav.contact },
      ],
    },
    {
      title: t.footer.followCol,
      links: [
        { href: "https://x.com", label: "X / Twitter" },
        { href: "https://github.com", label: "GitHub" },
        { href: "https://linkedin.com", label: "LinkedIn" },
      ],
    },
  ];

  return (
    <footer className="bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="text-lg font-semibold tracking-tight">
              Lumen<span className="text-[var(--accent)]">.</span>
            </span>
            <p className="mt-3 max-w-xs text-sm text-zinc-500 dark:text-zinc-400">
              {t.footer.tagline}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 transition-colors hover:text-[var(--accent)] dark:text-zinc-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
