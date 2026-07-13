import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = await getTranslations("FeedDemo");

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">{t("photoPageTitle", { id })}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {t("photoPageDescription")}
      </p>
      <Link href="/demos/feed" className="text-sm underline">
        {t("backToFeed")}
      </Link>
    </div>
  );
}
