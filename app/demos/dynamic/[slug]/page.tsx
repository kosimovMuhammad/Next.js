export default async function DynamicSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">Dynamic Segments</h1>
      <p className="rounded-lg bg-zinc-100 p-3 font-mono text-sm dark:bg-zinc-900">
        params.slug = &quot;{slug}&quot;
      </p>
    </div>
  );
}
