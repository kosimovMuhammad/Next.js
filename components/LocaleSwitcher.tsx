"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as (typeof routing.locales)[number];
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- params keeps dynamic segments (e.g. [id]) intact
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <label className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
      <span className="sr-only">{t("label")}</span>
      <select
        value={locale}
        onChange={onChange}
        disabled={isPending}
        aria-label={t("label")}
        className="rounded-md border border-zinc-300 bg-white px-2 py-1 text-sm text-zinc-950 disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
      >
        {routing.locales.map((cur) => (
          <option key={cur} value={cur}>
            {t(`locale.${cur}`)}
          </option>
        ))}
      </select>
    </label>
  );
}
