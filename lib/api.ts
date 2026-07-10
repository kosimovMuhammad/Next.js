import "server-only";

// ---------------------------------------------------------------------------
// DATA LAYER — the only place the real ToDo REST API is touched.
//
// Importing "server-only" makes this file throw a build error if it's ever
// pulled into a Client Component bundle, mirroring the original "DB access
// only in Server Components / Server Actions" rule — here that matters for a
// different reason: the API's CORS policy only allows requests from its own
// origin, so a browser calling it directly from our app would be blocked.
// Every request in this file runs server-to-server (Server Component render,
// Server Action, or our own Route Handler), where CORS doesn't apply at all.
//
// API: https://to-dos-api.softclub.tj (Swagger at /swagger/v1/swagger.json)
// ---------------------------------------------------------------------------

import type { Todo } from "./todo-types";

export type { Todo, TodoImage } from "./todo-types";
export { imageUrl } from "./todo-types";

const API_BASE = "https://to-dos-api.softclub.tj";

type ApiEnvelope<T> = {
  data: T;
  errors: string[];
  statusCode: number;
};

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    // The todo list changes via mutation, not time — always read the
    // current server state rather than caching it.
    cache: "no-store",
  });

  const body = (await res.json()) as ApiEnvelope<T>;
  if (!res.ok || body.errors?.length) {
    throw new Error(body.errors?.join(", ") || `Request to ${path} failed (${res.status})`);
  }
  return body.data;
}

// The API has no total-count field, only pages — fetch a generously large
// page so the list/stats sections behave like "all todos" for this demo.
const LIST_PAGE_SIZE = 50;

export async function getTodos(): Promise<Todo[]> {
  return apiFetch<Todo[]>(
    `/api/to-dos?PageNumber=1&PageSize=${LIST_PAGE_SIZE}`
  );
}

export async function getTodoById(id: number): Promise<Todo | null> {
  return apiFetch<Todo | null>(`/api/to-dos/${id}`);
}

export async function getTodoStats() {
  const todos = await getTodos();
  return {
    total: todos.length,
    completed: todos.filter((t) => t.isCompleted).length,
    active: todos.filter((t) => !t.isCompleted).length,
  };
}

export async function createTodo(
  name: string,
  description: string,
  images: File[]
): Promise<number> {
  const form = new FormData();
  form.set("Name", name);
  form.set("Description", description);
  for (const image of images) {
    form.append("Images", image);
  }
  return apiFetch<number>("/api/to-dos", { method: "POST", body: form });
}

export async function updateTodo(
  id: number,
  name: string,
  description: string
): Promise<number> {
  return apiFetch<number>("/api/to-dos", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, name, description }),
  });
}

export async function deleteTodo(id: number): Promise<boolean> {
  return apiFetch<boolean>(`/api/to-dos?id=${id}`, { method: "DELETE" });
}

// Toggles isCompleted server-side and returns the new value.
export async function toggleTodoCompleted(id: number): Promise<boolean> {
  return apiFetch<boolean>(`/completed?id=${id}`, { method: "PUT" });
}

export async function addTodoImages(
  todoId: number,
  images: File[]
): Promise<string> {
  const form = new FormData();
  for (const image of images) {
    form.append("Images", image);
  }
  return apiFetch<string>(`/api/to-dos/${todoId}/images`, {
    method: "POST",
    body: form,
  });
}

export async function deleteTodoImage(imageId: number): Promise<string | null> {
  return apiFetch<string | null>(`/api/to-dos/images/${imageId}`, {
    method: "DELETE",
  });
}
