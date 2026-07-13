import { getTranslations } from "next-intl/server";

export default async function Loading() {
  const t = await getTranslations("LoadingDemo");

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">{t("title")}</h1>
      <div className="h-24 w-full animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
      <p className="text-sm text-zinc-500">{t("streamingFallback")}</p>
    </div>
  );
}
