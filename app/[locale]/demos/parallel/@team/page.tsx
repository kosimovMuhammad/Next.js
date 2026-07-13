import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function TeamSlotPage() {
  const t = await getTranslations("ParallelDemo");

  return (
    <div className="flex flex-col gap-2 text-sm">
      <p>{t("teamOverview")}</p>
      <Link className="underline" href="/demos/parallel/settings">
        {t("goToSettings")}
      </Link>
    </div>
  );
}
