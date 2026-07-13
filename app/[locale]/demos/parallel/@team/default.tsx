import { getTranslations } from "next-intl/server";

export default async function TeamDefault() {
  const t = await getTranslations("ParallelDemo");
  return <p className="text-sm text-zinc-500">{t("teamDefaultFallback")}</p>;
}
