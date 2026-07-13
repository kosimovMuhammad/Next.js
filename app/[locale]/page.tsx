import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { DemoCard } from "./demos/_components/DemoCard";

type ItemKey =
  | "layout"
  | "template"
  | "loading"
  | "error"
  | "notFound"
  | "dynamic"
  | "routeGroups"
  | "parallel"
  | "feed"
  | "routeHandler"
  | "proxy"
  | "instrumentation"
  | "segmentConfig"
  | "auth";

const groups: {
  groupKey: "rendering" | "routing" | "serverSide" | "authInterrupts";
  items: { href: string; itemKey: ItemKey }[];
}[] = [
  {
    groupKey: "rendering",
    items: [
      { href: "/demos/layout-demo", itemKey: "layout" },
      { href: "/demos/template-demo", itemKey: "template" },
      { href: "/demos/loading-demo", itemKey: "loading" },
      { href: "/demos/error-demo", itemKey: "error" },
      { href: "/demos/not-found-demo", itemKey: "notFound" },
    ],
  },
  {
    groupKey: "routing",
    items: [
      { href: "/demos/dynamic", itemKey: "dynamic" },
      { href: "/demos/route-groups", itemKey: "routeGroups" },
      { href: "/demos/parallel", itemKey: "parallel" },
      { href: "/demos/feed", itemKey: "feed" },
    ],
  },
  {
    groupKey: "serverSide",
    items: [
      { href: "/demos/route-handler-demo", itemKey: "routeHandler" },
      { href: "/demos/proxy", itemKey: "proxy" },
      { href: "/demos/instrumentation-demo", itemKey: "instrumentation" },
      { href: "/demos/segment-config-demo", itemKey: "segmentConfig" },
    ],
  },
  {
    groupKey: "authInterrupts",
    items: [{ href: "/demos/auth-demo", itemKey: "auth" }],
  },
];

const totalDemoCount = groups.reduce((sum, group) => sum + group.items.length, 0);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Server Component translations — no client bundle cost.
  const t = await getTranslations("HomePage");
  const tIndex = await getTranslations("DemosIndex");
  const format = await getFormatter();
  const lastUpdated = format.dateTime(new Date(), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
          {t("title")}
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {t("description")}
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-500">
          {t("lastUpdated", { date: lastUpdated })} ·{" "}
          {t("demoCount", { count: totalDemoCount })}
        </p>
      </div>
      {groups.map((group) => (
        <div key={group.groupKey} className="flex flex-col gap-3">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
            {tIndex(`groups.${group.groupKey}`)}
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {group.items.map((item) => (
              <DemoCard
                key={item.href}
                href={item.href}
                title={tIndex(`items.${item.itemKey}.title`)}
              >
                {tIndex(`items.${item.itemKey}.blurb`)}
              </DemoCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
