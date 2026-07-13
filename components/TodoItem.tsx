"use client";

import { useState, useTransition, useEffect, useRef } from "react";
import Image from "next/image";
import { Check, ImageOff, Pencil, Trash2, X } from "lucide-react";
import type { Todo } from "@/lib/api";
import { imageUrl } from "@/lib/todo-types";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { deleteTodoAction, editTodoAction, toggleTodoAction } from "@/lib/actions";
import TodoImages from "./TodoImages";

export default function TodoItem({
  todo,
  dict,
}: {
  todo: Todo;
  dict: Dictionary["item"];
}) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [draftName, setDraftName] = useState(todo.name);
  const [draftDescription, setDraftDescription] = useState(todo.description);
  const [isPending, startTransition] = useTransition();
  const editDialogRef = useRef<HTMLDialogElement>(null);
  const deleteDialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isEditModalOpen) {
      editDialogRef.current?.showModal();
    } else {
      editDialogRef.current?.close();
    }
  }, [isEditModalOpen]);

  useEffect(() => {
    if (isDeleteModalOpen) {
      deleteDialogRef.current?.showModal();
    } else {
      deleteDialogRef.current?.close();
    }
  }, [isDeleteModalOpen]);

  function startEditing() {
    setDraftName(todo.name);
    setDraftDescription(todo.description);
    setIsEditModalOpen(true);
  }

  function saveEdit(formData: FormData) {
    startTransition(async () => {
      await editTodoAction(formData);
      setIsEditModalOpen(false);
    });
  }

  function confirmDelete(formData: FormData) {
    startTransition(async () => {
      await deleteTodoAction(formData);
      setIsDeleteModalOpen(false);
    });
  }

  const coverImage = todo.images[0];

  return (
    <li className="group flex flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-900">
        {coverImage ? (
          <Image
            src={imageUrl(coverImage.imageName)}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-zinc-700">
            <ImageOff className="h-8 w-8" />
          </div>
        )}

        <form action={toggleTodoAction} className="absolute left-2 top-2">
          <input type="hidden" name="id" value={todo.id} />
          <button
            type="submit"
            aria-label={todo.isCompleted ? dict.markActive : dict.markComplete}
            className={`flex h-6 w-6 items-center justify-center rounded-full border-2 backdrop-blur-sm transition-colors ${
              todo.isCompleted
                ? "border-indigo-500 bg-indigo-500 text-white"
                : "border-white/70 bg-black/30 hover:border-indigo-400"
            }`}
          >
            {todo.isCompleted && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
          </button>
        </form>
      </div>

      <div className="flex flex-col items-center gap-0.5 pt-3 text-center">
        <p
          className={`text-sm ${
            todo.isCompleted ? "text-zinc-600 line-through" : "text-slate-400"
          }`}
        >
          {todo.name}
        </p>
        <p
          className={`line-clamp-1 text-base font-bold ${
            todo.isCompleted ? "text-zinc-600 line-through" : "text-zinc-50"
          }`}
        >
          {todo.description}
        </p>
      </div>

      <div className="mt-2 grid w-full grid-cols-2 gap-2 opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
        <button
          type="button"
          onClick={startEditing}
          className="flex items-center justify-center gap-1.5 rounded-lg bg-amber-400/15 px-3 py-2 text-xs font-semibold text-amber-300 transition-colors hover:bg-amber-400/25"
        >
          <Pencil className="h-3.5 w-3.5" />
          {dict.edit}
        </button>

        <button
          type="button"
          onClick={() => setIsDeleteModalOpen(true)}
          className="flex items-center justify-center gap-1.5 rounded-lg bg-red-500/15 px-3 py-2 text-xs font-semibold text-red-400 transition-colors hover:bg-red-500/25"
        >
          <Trash2 className="h-3.5 w-3.5" />
          {dict.delete}
        </button>
      </div>

      {/* Edit Modal */}
      <dialog
        ref={editDialogRef}
        onCancel={() => setIsEditModalOpen(false)}
        className="backdrop:bg-zinc-950/50 backdrop:backdrop-blur-sm bg-zinc-900 rounded-xl shadow-lg border border-zinc-800 p-0 m-auto w-full max-w-md open:animate-in open:fade-in open:zoom-in-95"
      >
        <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
          <h3 className="font-semibold text-zinc-50">{dict.editModalTitle}</h3>
          <button
            type="button"
            onClick={() => setIsEditModalOpen(false)}
            className="text-zinc-400 hover:text-zinc-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">
          <form action={saveEdit} className="flex flex-col gap-4">
            <input type="hidden" name="id" value={todo.id} />
            <input
              type="text"
              name="name"
              value={draftName}
              onChange={(e) => setDraftName(e.target.value)}
              required
              maxLength={100}
              className="rounded-lg border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-sm text-zinc-50 placeholder:text-zinc-500 outline-none transition-colors focus:border-indigo-400 focus:bg-zinc-950 focus:ring-2 focus:ring-indigo-400/20"
            />
            <textarea
              name="description"
              value={draftDescription}
              onChange={(e) => setDraftDescription(e.target.value)}
              required
              maxLength={1000}
              rows={3}
              className="resize-none rounded-lg border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-sm text-zinc-50 placeholder:text-zinc-500 outline-none transition-colors focus:border-indigo-400 focus:bg-zinc-950 focus:ring-2 focus:ring-indigo-400/20"
            />

            <div>
              <p className="mb-2 text-xs font-medium text-zinc-400">{dict.imagesLabel}</p>
              <TodoImages todoId={todo.id} images={todo.images} />
            </div>

            <div className="flex justify-end gap-2 mt-2">
              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                disabled={isPending}
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-800"
              >
                {dict.cancel}
              </button>
              <button
                type="submit"
                disabled={isPending}
                className="flex items-center gap-1.5 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-400 disabled:opacity-50"
              >
                {isPending ? dict.saving : dict.save}
              </button>
            </div>
          </form>
        </div>
      </dialog>

      {/* Delete Modal */}
      <dialog
        ref={deleteDialogRef}
        onCancel={() => setIsDeleteModalOpen(false)}
        className="backdrop:bg-zinc-950/50 backdrop:backdrop-blur-sm bg-zinc-900 rounded-xl shadow-lg border border-zinc-800 p-0 m-auto w-full max-w-sm open:animate-in open:fade-in open:zoom-in-95"
      >
        <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
          <h3 className="font-semibold text-zinc-50">{dict.deleteModalTitle}</h3>
          <button
            type="button"
            onClick={() => setIsDeleteModalOpen(false)}
            className="text-zinc-400 hover:text-zinc-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">
          <p className="text-sm text-zinc-400 mb-6">{dict.deleteConfirm}</p>
          <form action={confirmDelete} className="flex justify-end gap-2">
            <input type="hidden" name="id" value={todo.id} />
            <button
              type="button"
              onClick={() => setIsDeleteModalOpen(false)}
              disabled={isPending}
              className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-800"
            >
              {dict.cancel}
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="flex items-center gap-1.5 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-500 disabled:opacity-50"
            >
              {isPending ? dict.deleting : dict.deleteSubmit}
            </button>
          </form>
        </div>
      </dialog>
    </li>
  );
}
