// ---------------------------------------------------------------------------
// CONCEPT MAP — which file demonstrates which Next.js data-fetching pattern.
// See README.md for the full write-up.
//
//   app/[lang]/page.tsx           Server Component fetching data on the server
//                                 (calls the real ToDo REST API server-side
//                                 via lib/api.ts, no client round-trip)
//   lib/api.ts                   All fetch() calls to https://to-dos-api.softclub.tj,
//                                 server-only (the API's CORS policy blocks
//                                 direct browser access anyway)
//   app/api/todos/route.ts       Route Handler (GET/POST) — also a same-origin
//                                 PROXY in front of the external API
//   lib/actions.ts               Server Actions for mutations (add / edit /
//                                 toggle / delete / image upload+delete),
//                                 each calling revalidatePath("/", "layout")
//   components/TodoList.tsx      Empty-state handling
// ---------------------------------------------------------------------------

import { notFound } from "next/navigation";
import { ListChecks } from "lucide-react";
import { getTodos } from "@/lib/api";
import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getDictionary, hasLocale, locales } from "./dictionaries";

// SERVER COMPONENT FETCHING DATA ON THE SERVER
// `Home` is an async Server Component. It calls into lib/api.ts directly —
// no `fetch("/api/...")` from the browser, no client round-trip. The HTML
// sent to the browser already contains the todo list, fetched server-to-
// server from https://to-dos-api.softclub.tj.
export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const [dict, todos] = await Promise.all([getDictionary(lang), getTodos()]);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-16">
      <header className="mb-10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500 text-white shadow-sm shadow-indigo-500/30">
            <ListChecks className="h-5 w-5" strokeWidth={2.25} />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-zinc-50">
              {dict.header.title}
            </h1>
            <p className="text-sm text-zinc-400">{dict.header.subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher lang={lang} locales={locales} />
          <AddTodoForm dict={dict.addItem} />
        </div>
      </header>

      <TodoList todos={todos} dict={{ empty: dict.empty, item: dict.item }} />
    </div>
  );
}
