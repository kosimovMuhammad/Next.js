import Link from "next/link";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">Photo #{id} (full page)</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        You landed here directly (hard navigation or refresh), so the
        interception was skipped and this standalone page rendered instead.
      </p>
      <Link href="/demos/feed" className="text-sm underline">
        ← Back to feed
      </Link>
    </div>
  );
}
