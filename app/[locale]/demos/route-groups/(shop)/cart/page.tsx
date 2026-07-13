import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function CartPage() {
  const t = await getTranslations("RouteGroupsDemo");
  const tCommon = await getTranslations("Common");

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">{t("cartPageTitle")}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {t("cartPageDescription")}
      </p>
      <Link href="/demos/route-groups" className="text-sm underline">
        {tCommon("back")}
      </Link>
    </div>
  );
}
