import { getTranslations } from "next-intl/server";

export default async function LayoutDemoIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = await getTranslations("LayoutDemo");

  return (
    <p className="rounded-lg bg-zinc-100 p-3 font-mono text-sm dark:bg-zinc-900">
      {t("idResult", { id })}
    </p>
  );
}
