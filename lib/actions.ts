"use server";

// ---------------------------------------------------------------------------
// SERVER ACTIONS — mutations that run on the server, callable directly from
// <form action={...}> in Server/Client Components (works even before JS
// hydrates). Every action ends with `revalidatePath("/")`.
//
// The list on "/" fetches from the external API with `cache: "no-store"`
// (lib/api.ts), so the *data* itself is never stale — but the page's own
// rendered output is still subject to Next.js's Full Route Cache.
// `revalidatePath("/")` purges that cached render so the very next request
// re-runs app/page.tsx, which re-fetches from the API and picks up the
// change immediately.
// ---------------------------------------------------------------------------

import { revalidatePath } from "next/cache";
import {
  addTodoImages,
  createTodo,
  deleteTodo,
  deleteTodoImage,
  toggleTodoCompleted,
  updateTodo,
} from "./api";

function filesFrom(formData: FormData, field: string): File[] {
  return formData
    .getAll(field)
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);
}

export async function addTodoAction(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const images = filesFrom(formData, "images");
  if (!name || !description || images.length === 0) return;

  await createTodo(name, description, images);
  revalidatePath("/");
}

export async function editTodoAction(formData: FormData) {
  const id = Number(formData.get("id"));
  const name = String(formData.get("name") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  if (!Number.isFinite(id) || !name || !description) return;

  await updateTodo(id, name, description);
  revalidatePath("/");
}

export async function toggleTodoAction(formData: FormData) {
  const id = Number(formData.get("id"));
  if (!Number.isFinite(id)) return;

  await toggleTodoCompleted(id);
  revalidatePath("/");
}

export async function deleteTodoAction(formData: FormData) {
  const id = Number(formData.get("id"));
  if (!Number.isFinite(id)) return;

  await deleteTodo(id);
  revalidatePath("/");
}

export async function addImageAction(formData: FormData) {
  const todoId = Number(formData.get("todoId"));
  const images = filesFrom(formData, "images");
  if (!Number.isFinite(todoId) || images.length === 0) return;

  await addTodoImages(todoId, images);
  revalidatePath("/");
}

export async function deleteImageAction(formData: FormData) {
  const imageId = Number(formData.get("imageId"));
  if (!Number.isFinite(imageId)) return;

  await deleteTodoImage(imageId);
  revalidatePath("/");
}
