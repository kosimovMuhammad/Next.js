"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ErrorDemoPage() {
  const t = useTranslations("ErrorDemo");
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error(t("boomMessage"));
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">{t("pageTitle")}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {t("description")}
      </p>
      <button
        onClick={() => setShouldThrow(true)}
        className="w-fit rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
      >
        {t("throwButton")}
      </button>
    </div>
  );
}
