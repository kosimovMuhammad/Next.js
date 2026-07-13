import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function AuthDemoPage() {
  const t = await getTranslations("AuthDemo");

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">{t("title")}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {t("description")}
      </p>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="w-fit underline" href="/demos/auth-demo/admin">
          {t("triggerForbidden")}
        </Link>
        <Link className="w-fit underline" href="/demos/auth-demo/dashboard">
          {t("triggerUnauthorized")}
        </Link>
      </div>
    </div>
  );
}
