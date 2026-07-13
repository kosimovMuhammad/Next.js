import { getTranslations } from "next-intl/server";

export default async function FeedLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const t = await getTranslations("DemosIndex");

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">{t("items.feed.title")}</h1>
      {children}
      {modal}
    </div>
  );
}
