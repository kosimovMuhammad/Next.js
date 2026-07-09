import Link from "next/link";

export default function TeamSlotPage() {
  return (
    <div className="flex flex-col gap-2 text-sm">
      <p>Team overview (default view)</p>
      <Link className="underline" href="/demos/parallel/settings">
        Go to team settings →
      </Link>
    </div>
  );
}
