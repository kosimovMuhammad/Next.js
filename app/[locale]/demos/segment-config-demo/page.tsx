import { getTranslations } from "next-intl/server";

export const revalidate = 10; // seconds

async function getTimestamp() {
  return new Date().toISOString();
}

export default async function SegmentConfigDemoPage() {
  const generatedAt = await getTimestamp();
  const t = await getTranslations("SegmentConfigDemo");
  const tCommon = await getTranslations("Common");
  const code = (chunks: React.ReactNode) => (
    <code className="font-mono">{chunks}</code>
  );

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">{t("title")}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {t.rich("description", { code })}
      </p>
      <p className="rounded-lg bg-zinc-100 p-3 font-mono text-sm dark:bg-zinc-900">
        {t("generatedAt", { time: generatedAt })}
      </p>
      <a href="/demos/segment-config-demo" className="w-fit text-sm underline">
        {tCommon("reload")}
      </a>
    </div>
  );
}
