export default async function TemplateDemoIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <p className="rounded-lg bg-zinc-100 p-3 font-mono text-sm dark:bg-zinc-900">
      Now showing: {id}.
    </p>
  );
}
