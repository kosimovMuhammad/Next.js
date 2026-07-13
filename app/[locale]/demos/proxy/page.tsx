import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function ProxyIndexPage() {
  const t = await getTranslations("ProxyDemo");

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">{t("title")}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {t("description")}
      </p>
      <Link href="/demos/proxy/old" className="w-fit text-sm underline">
        {t("visitOld")}
      </Link>
    </div>
  );
}
