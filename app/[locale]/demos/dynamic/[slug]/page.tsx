import { getTranslations } from "next-intl/server";

export default async function DynamicSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = await getTranslations("DynamicDemo");

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">{t("title")}</h1>
      <p className="rounded-lg bg-zinc-100 p-3 font-mono text-sm dark:bg-zinc-900">
        {t("slugResult", { slug })}
      </p>
    </div>
  );
}
