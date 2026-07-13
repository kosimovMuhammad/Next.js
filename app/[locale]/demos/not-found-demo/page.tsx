import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";

export default async function NotFoundDemoPage({
  searchParams,
}: {
  searchParams: Promise<{ missing?: string }>;
}) {
  const { missing } = await searchParams;

  if (missing) {
    notFound();
  }

  const t = await getTranslations("NotFoundDemo");

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">{t("title")}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {t("description")}
      </p>
      <Link
        href="/demos/not-found-demo?missing=1"
        className="w-fit rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900"
      >
        {t("triggerButton")}
      </Link>
    </div>
  );
}
