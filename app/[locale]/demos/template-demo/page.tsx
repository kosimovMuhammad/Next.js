import { getTranslations } from "next-intl/server";

export default async function TemplateDemoIndexPage() {
  const t = await getTranslations("TemplateDemo");
  return (
    <p className="text-sm text-zinc-600 dark:text-zinc-400">
      {t("pickNote")}
    </p>
  );
}
