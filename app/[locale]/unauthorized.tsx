import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Unauthorized() {
  const t = await getTranslations("Unauthorized");

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-start justify-center gap-3 px-6">
      <h1 className="text-2xl font-semibold">{t("title")}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {t("description")}
      </p>
      <Link href="/demos/auth-demo" className="text-sm underline">
        {t("backLink")}
      </Link>
    </div>
  );
}
