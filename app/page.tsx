// ---------------------------------------------------------------------------
// CONCEPT MAP — which file demonstrates which Next.js data-fetching pattern.
// See README.md for the full write-up.
//
//   app/page.tsx                 Server Component fetching data on the server
//                                 (calls the real ToDo REST API server-side
//                                 via lib/api.ts, no client round-trip)
//   lib/api.ts                   All fetch() calls to https://to-dos-api.softclub.tj,
//                                 server-only (the API's CORS policy blocks
//                                 direct browser access anyway)
//   app/api/todos/route.ts       Route Handler (GET/POST) — also a same-origin
//                                 PROXY in front of the external API
//   lib/actions.ts               Server Actions for mutations (add / edit /
//                                 toggle / delete / image upload+delete),
//                                 each calling revalidatePath("/")
//   components/TodoList.tsx      Empty-state handling
// ---------------------------------------------------------------------------

import { ListChecks } from "lucide-react";
import { getTodos } from "@/lib/api";
import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";

// SERVER COMPONENT FETCHING DATA ON THE SERVER
// `Home` is an async Server Component. It calls into lib/api.ts directly —
// no `fetch("/api/...")` from the browser, no client round-trip. The HTML
// sent to the browser already contains the todo list, fetched server-to-
// server from https://to-dos-api.softclub.tj.
export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:py-16">
      <header className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm shadow-indigo-600/30 dark:bg-indigo-500">
          <ListChecks className="h-5 w-5" strokeWidth={2.25} />
        </div>
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Todos
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            A Next.js App Router reference for data fetching &amp; caching
          </p>
        </div>
      </header>

      <main className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900">
        <section className="flex flex-col gap-4 p-5 sm:p-6">
          <AddTodoForm />
          <TodoList todos={todos} />
        </section>
      </main>
    </div>
  );
}

