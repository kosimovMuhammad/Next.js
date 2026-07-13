import { getTranslations } from "next-intl/server";

export default async function ParallelLayout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  const t = await getTranslations("ParallelDemo");

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">{t("title")}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {t("description")}
      </p>
      {children}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-800">
          <p className="mb-2 text-xs font-semibold uppercase text-zinc-500">
            {t("teamSlotLabel")}
          </p>
          {team}
        </div>
        <div className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-800">
          <p className="mb-2 text-xs font-semibold uppercase text-zinc-500">
            {t("analyticsSlotLabel")}
          </p>
          {analytics}
        </div>
      </div>
    </div>
  );
}
