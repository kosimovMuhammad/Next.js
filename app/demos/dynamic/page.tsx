import Link from "next/link";

export default function DynamicIndexPage() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">Dynamic Segments</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        app/demos/dynamic/[slug]/page.tsx reads whatever you put in the URL.
        Try either link, or edit the URL by hand:
      </p>
      <div className="flex gap-3 text-sm">
        <Link className="underline" href="/demos/dynamic/hello">
          /demos/dynamic/hello
        </Link>
        <Link className="underline" href="/demos/dynamic/next-js-16">
          /demos/dynamic/next-js-16
        </Link>
      </div>
    </div>
  );
}
