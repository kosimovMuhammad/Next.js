import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function DynamicIndexPage() {
  const t = await getTranslations("DynamicDemo");

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">{t("title")}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {t("description")}
      </p>
      <div className="flex gap-3 text-sm">
        <Link className="underline" href="/demos/dynamic/hello">
          {t("linkHello")}
        </Link>
        <Link className="underline" href="/demos/dynamic/next-js-16">
          {t("linkNextJs16")}
        </Link>
      </div>
    </div>
  );
}
