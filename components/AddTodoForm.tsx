"use client";

import { useState, useTransition, useEffect, useRef } from "react";
import { Plus, X } from "lucide-react";
import { addTodoAction } from "@/lib/actions";

export default function AddTodoForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      await addTodoAction(formData);
      setIsOpen(false);
    });
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-500 active:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 w-fit"
      >
        <Plus className="h-4 w-4" strokeWidth={2.5} />
        Add Todo
      </button>

      <dialog
        ref={dialogRef}
        onCancel={() => setIsOpen(false)}
        className="backdrop:bg-zinc-950/50 backdrop:backdrop-blur-sm bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800 p-0 m-auto w-full max-w-md open:animate-in open:fade-in open:zoom-in-95"
      >
        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 px-4 py-3">
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Add Todo</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">
          <form action={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              maxLength={100}
              className="rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-indigo-400 dark:focus:bg-zinc-950 dark:focus:ring-indigo-400/20"
            />
            <textarea
              name="description"
              placeholder="Description"
              required
              maxLength={1000}
              rows={3}
              className="resize-none rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-indigo-400 dark:focus:bg-zinc-950 dark:focus:ring-indigo-400/20"
            />
            <input
              type="file"
              name="images"
              accept="image/*"
              multiple
              required
              className="rounded-lg border border-dashed border-zinc-300 bg-zinc-50 px-3 py-2 text-xs text-zinc-500 outline-none file:mr-3 file:rounded-md file:border-0 file:bg-zinc-200 file:px-2.5 file:py-1 file:text-xs file:font-medium file:text-zinc-700 hover:file:bg-zinc-300 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-400 dark:file:bg-zinc-800 dark:file:text-zinc-300 dark:hover:file:bg-zinc-700"
            />
            <div className="flex justify-end gap-2 mt-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
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
                {isPending ? "Adding..." : "Add"}
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
