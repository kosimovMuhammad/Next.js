import Link from "next/link";

const photos = ["1", "2", "3"];

export default function FeedPage() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Click a photo: client-side navigation opens it as a modal, masking
        the URL. Then hard-refresh the page (or open the URL in a new tab)
        and you get the standalone full page instead — no interception.
      </p>
      <div className="flex gap-3">
        {photos.map((id) => (
          <Link
            key={id}
            href={`/demos/feed/photo/${id}`}
            className="flex h-20 w-20 items-center justify-center rounded-lg bg-zinc-200 font-mono text-sm dark:bg-zinc-800"
          >
            #{id}
          </Link>
        ))}
      </div>
    </div>
  );
}
