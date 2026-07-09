import { DemoCard } from "./demos/_components/DemoCard";

const groups: {
  title: string;
  items: { href: string; title: string; blurb: string }[];
}[] = [
  {
    title: "Rendering special files",
    items: [
      {
        href: "/demos/layout-demo",
        title: "layout.js",
        blurb: "Persists across navigation — state never resets.",
      },
      {
        href: "/demos/template-demo",
        title: "template.js",
        blurb: "Resets component state on every navigation, unlike layout.js.",
      },
      {
        href: "/demos/loading-demo",
        title: "loading.js",
        blurb: "Instant Suspense fallback while a slow page streams in.",
      },
      {
        href: "/demos/error-demo",
        title: "error.js",
        blurb: "Error boundary with the new unstable_retry prop (v16.2).",
      },
      {
        href: "/demos/not-found-demo",
        title: "not-found.js",
        blurb: "Custom UI rendered when notFound() is called.",
      },
    ],
  },
  {
    title: "Routing conventions",
    items: [
      {
        href: "/demos/dynamic",
        title: "Dynamic Segments",
        blurb: "[slug] folders read URL params.",
      },
      {
        href: "/demos/route-groups",
        title: "Route Groups",
        blurb: "(folder) segments organize routes without affecting the URL.",
      },
      {
        href: "/demos/parallel",
        title: "Parallel Routes + default.js",
        blurb: "@team / @analytics slots rendered side by side.",
      },
      {
        href: "/demos/feed",
        title: "Intercepting Routes",
        blurb: "Open a photo as a modal, masking the URL, via (.)photo.",
      },
    ],
  },
  {
    title: "Server-side files",
    items: [
      {
        href: "/demos/route-handler-demo",
        title: "route.js",
        blurb: "A GET/POST API endpoint hit from the browser.",
      },
      {
        href: "/demos/proxy",
        title: "proxy.js",
        blurb: "Formerly \"middleware\" — renamed in Next.js 16.",
      },
      {
        href: "/demos/instrumentation-demo",
        title: "instrumentation.js / instrumentation-client.js",
        blurb: "Server + browser console logging on boot and navigation.",
      },
      {
        href: "/demos/segment-config-demo",
        title: "Route Segment Config",
        blurb: "export const revalidate controls re-fetch timing.",
      },
    ],
  },
  {
    title: "Auth interrupts (experimental)",
    items: [
      {
        href: "/demos/auth-demo",
        title: "forbidden.js / unauthorized.js",
        blurb: "forbidden() and unauthorized() render 403 / 401 UI.",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
          Next.js 16 file conventions playground
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Click into each one to see it actually run. Check the terminal and
          the browser console too — several demos log there.
        </p>
      </div>
      {groups.map((group) => (
        <div key={group.title} className="flex flex-col gap-3">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
            {group.title}
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {group.items.map((item) => (
              <DemoCard key={item.href} href={item.href} title={item.title}>
                {item.blurb}
              </DemoCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
