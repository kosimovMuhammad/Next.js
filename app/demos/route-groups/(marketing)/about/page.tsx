import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">/demos/route-groups/about</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Served from app/demos/route-groups/(marketing)/about/page.tsx — the
        (marketing) segment is invisible in the URL.
      </p>
      <Link href="/demos/route-groups" className="text-sm underline">
        ← Back
      </Link>
    </div>
  );
}
