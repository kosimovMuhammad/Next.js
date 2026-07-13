"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function LayoutDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("LayoutDemo");
  const tCommon = useTranslations("Common");
  const [clicks, setClicks] = useState(0);
  const [mountedAt] = useState(() => new Date().toLocaleTimeString());

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">{t("title")}</h1>
      <div className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-800">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {t("mountedNote", { time: mountedAt })}
        </p>
        <button
          onClick={() => setClicks((c) => c + 1)}
          className="mt-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900"
        >
          {tCommon("clicks", { count: clicks })}
        </button>
      </div>
      <div className="flex gap-3 text-sm">
        <Link className="underline" href="/demos/layout-demo/a">
          a
        </Link>
        <Link className="underline" href="/demos/layout-demo/b">
          b
        </Link>
        <Link className="underline" href="/demos/layout-demo/c">
          c
        </Link>
      </div>
      {children}
      <p className="text-xs text-zinc-500">
        {t.rich("compareWith", {
          link: (chunks) => (
            <Link className="underline" href="/demos/template-demo">
              {chunks}
            </Link>
          ),
        })}
      </p>
    </div>
  );
}
