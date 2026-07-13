import { getTranslations } from "next-intl/server";

export default async function OldPage() {
  const t = await getTranslations("ProxyDemo");
  return (
    <p className="text-sm text-zinc-600 dark:text-zinc-400">
      {t("neverSeeThis")}
    </p>
  );
}
