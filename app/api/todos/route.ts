// ---------------------------------------------------------------------------
// ROUTE HANDLER — a plain HTTP endpoint inside the App Router (app/api/todos
// -> GET/POST http://localhost:3000/api/todos).
//
// This doubles as a same-origin PROXY in front of the real ToDo API
// (https://to-dos-api.softclub.tj). That API's CORS policy only allows
// requests from its own origin, so components/StatsWidget.tsx (a Client
// Component using SWR, running in the browser) can't call it directly — the
// browser would block the response. Server-to-server requests aren't
// subject to CORS at all, so this Route Handler calls lib/api.ts on the
// server and re-serves the JSON from our own origin, which the browser is
// always allowed to fetch.
//
// Route Handlers are not cached by default; every request here re-fetches
// from the upstream API via lib/api.ts (which itself uses `cache: "no-store"`).
// ---------------------------------------------------------------------------

import { NextResponse } from "next/server";
import { createTodo, getTodos } from "@/lib/api";

export async function GET() {
  const todos = await getTodos();
  return NextResponse.json({
    todos,
    stats: {
      total: todos.length,
      completed: todos.filter((t) => t.isCompleted).length,
      active: todos.filter((t) => !t.isCompleted).length,
    },
  });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get("name") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const images = formData
    .getAll("images")
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);

  if (!name || !description || images.length === 0) {
    return NextResponse.json(
      { error: "name, description, and at least one image are required" },
      { status: 400 }
    );
  }

  const id = await createTodo(name, description, images);
  return NextResponse.json({ id }, { status: 201 });
}
