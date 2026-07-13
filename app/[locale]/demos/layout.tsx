import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function DemosLayout({ children }: { children: React.ReactNode }) {
  const t = await getTranslations("Navigation");

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-6 py-10">
      <Link
        href="/"
        className="text-sm text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        {t("backToAllDemos")}
      </Link>
      {children}
    </div>
  );
}
