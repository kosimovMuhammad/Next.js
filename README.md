# Todo — Next.js App Router Data-Fetching Reference

A small Todo app whose only real purpose is to demonstrate every major
data-fetching pattern in the Next.js App Router (v16, no `cacheComponents`)
in one place. Read the code — every file below has a comment block at the
top explaining the concept it's demonstrating.

Data is persisted by a real, external REST API —
[to-dos-api.softclub.tj](https://to-dos-api.softclub.tj) (Swagger at
`/swagger/v1/swagger.json`) — rather than a local database, so this also
doubles as an example of consuming a third-party API from Server
Components/Actions and proxying it for client-side use.

## Running it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No local setup beyond
`npm install` — todos, descriptions, and images all live on the shared
demo API above (it's a public practice backend, so don't be surprised to
see other people's test todos in the list).

## Folder structure

```
app/
  page.tsx                 Home page — async Server Component
  loading.tsx               Route-level loading UI (whole-page Suspense)
  error.tsx                 Route-level error boundary
  layout.tsx                Root layout, fonts, metadata
  api/
    todos/route.ts          Route Handler — GET/POST, also proxies the external API
lib/
  api.ts                    All fetch() calls to the external API, server-only import
  todo-types.ts              Shared Todo/TodoImage types + imageUrl() (client-safe)
  actions.ts                 Server Actions — add / edit / toggle / delete / images
components/
  AddTodoForm.tsx           Server Action form (create, with image upload)
  TodoItem.tsx               Card: toggle / edit / delete
  TodoImages.tsx              Per-todo image strip: upload / delete
  TodoList.tsx               Renders the list + empty state
  StatsWidget.tsx             Client Component + SWR, hits /api/todos
  SlowStats.tsx                Artificially slow Server Component (Suspense demo)
  CachingDemo.tsx               Three fetch() cache strategies side by side
```

## Concept → file map

| Concept | File | Notes |
| --- | --- | --- |
| Server Component fetching data | `app/page.tsx` | `async function Home()` calls `getTodos()` from `lib/api.ts` directly, server-to-server — no client round-trip. |
| Server-only external API client | `lib/api.ts` | `import "server-only"` — this module (and the CORS-restricted external API it wraps) can never end up in a client bundle. |
| Route Handler + proxy | `app/api/todos/route.ts` | `GET`/`POST` handlers returning JSON. Also works around the external API's CORS policy (it only allows requests from its own origin) by fetching server-side and re-serving from our own origin. |
| Client Component + SWR | `components/StatsWidget.tsx` | `"use client"`, fetches `/api/todos` (our proxy, not the external API directly — CORS) with `useSWR`, polls every 5s. |
| Server Actions (mutations) | `lib/actions.ts` | `"use server"` functions bound to `<form action={...}>` in `AddTodoForm.tsx` / `TodoItem.tsx` / `TodoImages.tsx`. Each calls `revalidatePath("/")` after mutating via the external API. |
| Cache revalidation | `lib/actions.ts` | See the comment above the exports — explains why `revalidatePath("/")` is needed even though `getTodos()` itself uses `cache: "no-store"`. |
| `fetch` caching strategies | `components/CachingDemo.tsx` | Three calls to a public "current time" API using `cache: 'force-cache'` (static), `cache: 'no-store'` (always fresh), and `next: { revalidate: 30 }` (ISR) — independent of the todo data itself. |
| Streaming with Suspense | `components/SlowStats.tsx` + `app/page.tsx` | `SlowStats` has an artificial 2s delay; `app/page.tsx` wraps it in `<Suspense>` so the rest of the page streams in immediately. |
| Route-level loading state | `app/loading.tsx` | Next.js auto-wraps the whole route in `<Suspense>` using this as the fallback during navigation. |
| Error handling | `app/error.tsx` | Client Component error boundary with a retry button. |
| Empty state | `components/TodoList.tsx` | Explicit "no todos yet" UI instead of a bare empty list. |
| File uploads via Server Actions | `components/AddTodoForm.tsx`, `components/TodoImages.tsx` | Plain `<input type="file">` inside a form bound to a Server Action — no client JS needed for the initial create; `TodoImages.tsx` additionally shows calling a Server Action from a Client Component to auto-submit on file selection. |

## The external API

Every todo has `id`, `name`, `description`, `isCompleted`, and `images:
{id, imageName}[]`. Key endpoints (see `lib/api.ts`):

- `GET /api/to-dos?PageNumber=&PageSize=` — list (no total-count field, so
  this app just requests a generously large page)
- `POST /api/to-dos` — create, `multipart/form-data` with `Name`,
  `Description`, and one or more `Images` files (all three required)
- `PUT /api/to-dos` — update `name`/`description` (JSON body, `id` required)
- `DELETE /api/to-dos?id=` — delete
- `PUT /completed?id=` — **toggles** `isCompleted` (verified empirically —
  it flips the value, it doesn't set it to `true`)
- `POST /api/to-dos/{id}/images` / `DELETE /api/to-dos/images/{imageId}` —
  add/remove images after creation
- Images are served as static files at
  `https://to-dos-api.softclub.tj/images/{imageName}`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new).
