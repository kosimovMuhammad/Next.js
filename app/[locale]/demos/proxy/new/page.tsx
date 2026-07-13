import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NewPage() {
  const t = await getTranslations("ProxyDemo");
  const tCommon = await getTranslations("Common");

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">{t("redirectedTitle")}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {t("redirectedDescription")}
      </p>
      <Link href="/demos/proxy" className="text-sm underline">
        {tCommon("back")}
      </Link>
    </div>
  );
}
