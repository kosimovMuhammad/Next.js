import { getTranslations } from "next-intl/server";

export default async function AnalyticsSlotPage() {
  const t = await getTranslations("ParallelDemo");
  return <p className="text-sm">{t("analyticsOverview")}</p>;
}
