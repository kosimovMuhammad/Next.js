import { getTranslations } from "next-intl/server";

export default async function TeamSettingsPage() {
  const t = await getTranslations("ParallelDemo");
  return <p className="text-sm">{t("teamSettings")}</p>;
}
