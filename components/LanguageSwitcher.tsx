"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/app/[lang]/dictionaries";

const LABELS: Record<Locale, string> = { en: "EN", ru: "RU", tg: "TG" };

export default function LanguageSwitcher({
  lang,
  locales,
}: {
  lang: Locale;
  locales: Locale[];
}) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <div className="flex shrink-0 items-center gap-1 rounded-full bg-zinc-900 p-1 ring-1 ring-zinc-800">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${rest ? `/${rest}` : ""}`}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
            locale === lang
              ? "bg-indigo-500 text-white"
              : "text-zinc-400 hover:text-zinc-100"
          }`}
        >
          {LABELS[locale]}
        </Link>
      ))}
    </div>
  );
}
