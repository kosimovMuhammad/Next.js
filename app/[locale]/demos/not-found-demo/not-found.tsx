import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("NotFoundDemo");

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">{t("renderedTitle")}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {t("renderedDescription")}
      </p>
      <Link href="/demos/not-found-demo" className="text-sm underline">
        {t("goBack")}
      </Link>
    </div>
  );
}
