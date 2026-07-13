"use client";

import { useState, useTransition, useEffect, useRef } from "react";
import { Check, Pencil, Trash2, X } from "lucide-react";
import type { Todo } from "@/lib/api";
import { deleteTodoAction, editTodoAction, toggleTodoAction } from "@/lib/actions";
import TodoImages from "./TodoImages";

export default function TodoItem({ todo }: { todo: Todo }) {
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

  return (
    <li className="group rounded-xl border border-zinc-200 bg-white p-3 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
      <div className="flex items-start gap-3">
        <form action={toggleTodoAction} className="pt-0.5">
          <input type="hidden" name="id" value={todo.id} />
          <button
            type="submit"
            aria-label={todo.isCompleted ? "Mark as active" : "Mark as complete"}
            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
              todo.isCompleted
                ? "border-indigo-600 bg-indigo-600 text-white dark:border-indigo-500 dark:bg-indigo-500"
                : "border-zinc-300 hover:border-indigo-400 dark:border-zinc-600 dark:hover:border-indigo-400"
            }`}
          >
            {todo.isCompleted && <Check className="h-3 w-3" strokeWidth={3} />}
          </button>
        </form>

        <div className="min-w-0 flex-1">
          <p
            className={`text-sm font-medium ${
              todo.isCompleted
                ? "text-zinc-400 line-through dark:text-zinc-600"
                : "text-zinc-900 dark:text-zinc-50"
            }`}
          >
            {todo.name}
          </p>
          <p className="mt-0.5 line-clamp-2 text-sm text-zinc-500 dark:text-zinc-400">
            {todo.description}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-0.5 opacity-60 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
          <IconButton
            type="button"
            onClick={startEditing}
            label="Edit todo"
            className="text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
          >
            <Pencil className="h-3.5 w-3.5" />
          </IconButton>

          <IconButton
            type="button"
            onClick={() => setIsDeleteModalOpen(true)}
            label="Delete todo"
            className="text-zinc-400 hover:bg-red-50 hover:text-red-600 dark:text-zinc-500 dark:hover:bg-red-950/50 dark:hover:text-red-400"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </IconButton>
        </div>
      </div>

      <TodoImages todoId={todo.id} images={todo.images} />

      {/* Edit Modal */}
      <dialog
        ref={editDialogRef}
        onCancel={() => setIsEditModalOpen(false)}
        className="backdrop:bg-zinc-950/50 backdrop:backdrop-blur-sm bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800 p-0 m-auto w-full max-w-md open:animate-in open:fade-in open:zoom-in-95"
      >
        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 px-4 py-3">
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Edit Todo</h3>
          <button
            type="button"
            onClick={() => setIsEditModalOpen(false)}
            className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
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
              placeholder="Name"
              className="rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-indigo-400 dark:focus:bg-zinc-950 dark:focus:ring-indigo-400/20"
            />
            <textarea
              name="description"
              value={draftDescription}
              onChange={(e) => setDraftDescription(e.target.value)}
              required
              maxLength={1000}
              rows={3}
              placeholder="Description"
              className="resize-none rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-indigo-400 dark:focus:bg-zinc-950 dark:focus:ring-indigo-400/20"
            />
            <div className="flex justify-end gap-2 mt-2">
              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                disabled={isPending}
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isPending}
                className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-500 disabled:opacity-50 dark:bg-indigo-500 dark:hover:bg-indigo-400"
              >
                {isPending ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </dialog>

      {/* Delete Modal */}
      <dialog
        ref={deleteDialogRef}
        onCancel={() => setIsDeleteModalOpen(false)}
        className="backdrop:bg-zinc-950/50 backdrop:backdrop-blur-sm bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800 p-0 m-auto w-full max-w-sm open:animate-in open:fade-in open:zoom-in-95"
      >
        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 px-4 py-3">
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Delete Todo</h3>
          <button
            type="button"
            onClick={() => setIsDeleteModalOpen(false)}
            className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
            Are you sure you want to delete this todo? This action cannot be undone.
          </p>
          <form action={confirmDelete} className="flex justify-end gap-2">
            <input type="hidden" name="id" value={todo.id} />
            <button
              type="button"
              onClick={() => setIsDeleteModalOpen(false)}
              disabled={isPending}
              className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="flex items-center gap-1.5 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-500 disabled:opacity-50 dark:bg-red-600 dark:hover:bg-red-500"
            >
              {isPending ? "Deleting..." : "Delete"}
            </button>
          </form>
        </div>
      </dialog>
    </li>
  );
}

function IconButton({
  children,
  label,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { label: string }) {
  return (
    <button
      aria-label={label}
      className={`flex h-7 w-7 items-center justify-center rounded-md transition-colors disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
