import { getTranslations } from "next-intl/server";

export default async function AnalyticsDefault() {
  const t = await getTranslations("ParallelDemo");

  return (
    <p className="text-sm text-zinc-500">{t("analyticsDefaultFallback")}</p>
  );
}
