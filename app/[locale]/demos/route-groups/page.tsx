import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function RouteGroupsPage() {
  const t = await getTranslations("RouteGroupsDemo");

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">{t("title")}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {t("description")}
      </p>
      <div className="flex gap-3 text-sm">
        <Link className="underline" href="/demos/route-groups/about">
          /demos/route-groups/about
        </Link>
        <Link className="underline" href="/demos/route-groups/cart">
          /demos/route-groups/cart
        </Link>
      </div>
      <p className="text-xs text-zinc-500">{t("onDiskNote")}</p>
    </div>
  );
}
