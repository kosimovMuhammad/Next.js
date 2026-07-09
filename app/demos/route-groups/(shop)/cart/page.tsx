import Link from "next/link";

export default function CartPage() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">/demos/route-groups/cart</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Served from app/demos/route-groups/(shop)/cart/page.tsx — the (shop)
        segment is invisible in the URL.
      </p>
      <Link href="/demos/route-groups" className="text-sm underline">
        ← Back
      </Link>
    </div>
  );
}
