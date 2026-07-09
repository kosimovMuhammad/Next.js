import Link from "next/link";

export default function DemosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-6 py-10">
      <Link
        href="/"
        className="text-sm text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        ← Back to all demos
      </Link>
      {children}
    </div>
  );
}
