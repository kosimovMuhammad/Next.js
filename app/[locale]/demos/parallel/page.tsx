import { getTranslations } from "next-intl/server";

export default async function ParallelPage() {
  const t = await getTranslations("ParallelDemo");
  return (
    <p className="text-sm text-zinc-600 dark:text-zinc-400">
      {t("childrenSlotNote")}
    </p>
  );
}
