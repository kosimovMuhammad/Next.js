import Link from "next/link";

export default function AuthDemoPage() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">forbidden() / unauthorized()</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Experimental auth-interrupt functions, enabled via
        experimental.authInterrupts in next.config.ts. Calling them renders
        app/forbidden.tsx / app/unauthorized.tsx and sets the matching HTTP
        status code.
      </p>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="w-fit underline" href="/demos/auth-demo/admin">
          Trigger forbidden() → 403
        </Link>
        <Link className="w-fit underline" href="/demos/auth-demo/dashboard">
          Trigger unauthorized() → 401
        </Link>
      </div>
    </div>
  );
}
