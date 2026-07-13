import { getTranslations } from "next-intl/server";

export const dynamic = "force-dynamic";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return { loadedAt: new Date().toLocaleTimeString() };
}

export default async function LoadingDemoPage() {
  const data = await getData();
  const t = await getTranslations("LoadingDemo");
  const tCommon = await getTranslations("Common");

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">{t("title")}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {t("awaitNote")}
      </p>
      <p className="rounded-lg bg-zinc-100 p-3 font-mono text-sm dark:bg-zinc-900">
        {t("loadedAt", { time: data.loadedAt })}
      </p>
      <a href="/demos/loading-demo" className="w-fit text-sm underline">
        {tCommon("reload")}
      </a>
    </div>
  );
}
