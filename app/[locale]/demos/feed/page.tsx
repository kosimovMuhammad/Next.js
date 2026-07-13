import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const photos = ["1", "2", "3"];

export default async function FeedPage() {
  const t = await getTranslations("FeedDemo");

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {t("description")}
      </p>
      <div className="flex gap-3">
        {photos.map((id) => (
          <Link
            key={id}
            href={`/demos/feed/photo/${id}`}
            className="flex h-20 w-20 items-center justify-center rounded-lg bg-zinc-200 font-mono text-sm dark:bg-zinc-800"
          >
            #{id}
          </Link>
        ))}
      </div>
    </div>
  );
}
