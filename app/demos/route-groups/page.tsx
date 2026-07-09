import Link from "next/link";

export default function RouteGroupsPage() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">Route Groups</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        (marketing) and (shop) exist as folders on disk but don&apos;t appear
        in the URL.
      </p>
      <div className="flex gap-3 text-sm">
        <Link className="underline" href="/demos/route-groups/about">
          /demos/route-groups/about
        </Link>
        <Link className="underline" href="/demos/route-groups/cart">
          /demos/route-groups/cart
        </Link>
      </div>
      <p className="text-xs text-zinc-500">
        On disk: app/demos/route-groups/(marketing)/about/page.tsx and
        app/demos/route-groups/(shop)/cart/page.tsx
      </p>
    </div>
  );
}
