import { getTranslations } from "next-intl/server";

export default async function InstrumentationDemoPage() {
  const t = await getTranslations("InstrumentationDemo");
  const code = (chunks: React.ReactNode) => (
    <code className="font-mono">{chunks}</code>
  );

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">{t("title")}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {t("description")}
      </p>
      <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-400">
        <li>{t.rich("bulletServer", { code })}</li>
        <li>{t.rich("bulletClient", { code })}</li>
      </ul>
    </div>
  );
}
