"use client";

// ---------------------------------------------------------------------------
// SERVER ACTIONS from a CLIENT COMPONENT, file-upload edition — the "+" tile
// is a hidden <input type="file"> that submits itself the moment a file is
// picked (no separate "Upload" button to click). Same underlying idea as
// TodoItem's edit form: call the imported Server Action from a client
// function, wrapped in useTransition so this component can show a pending
// state while the upload/delete round-trips to the real API.
// ---------------------------------------------------------------------------

import { useRef, useTransition } from "react";
import Image from "next/image";
import { ImagePlus, X } from "lucide-react";
import type { TodoImage } from "@/lib/todo-types";
import { imageUrl } from "@/lib/todo-types";
import { addImageAction, deleteImageAction } from "@/lib/actions";

export default function TodoImages({
  todoId,
  images,
}: {
  todoId: number;
  images: TodoImage[];
}) {
  const [isPending, startTransition] = useTransition();
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const formData = new FormData();
    formData.set("todoId", String(todoId));
    for (const file of files) formData.append("images", file);

    startTransition(async () => {
      await addImageAction(formData);
      if (fileInputRef.current) fileInputRef.current.value = "";
    });
  }

  function handleDelete(imageId: number) {
    const formData = new FormData();
    formData.set("imageId", String(imageId));
    startTransition(async () => {
      await deleteImageAction(formData);
    });
  }

  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {images.map((image) => (
        <div
          key={image.id}
          className="group/img relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-zinc-800"
        >
          <Image
            src={imageUrl(image.imageName)}
            alt=""
            fill
            sizes="56px"
            className="object-cover"
          />
          <button
            type="button"
            onClick={() => handleDelete(image.id)}
            disabled={isPending}
            aria-label="Remove image"
            className="absolute inset-0 flex items-center justify-center bg-black/60 text-white opacity-0 transition-opacity group-hover/img:opacity-100 disabled:opacity-100"
          >
            <X className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>
      ))}

      <label
        className={`flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-dashed border-zinc-700 text-zinc-600 transition-colors hover:border-indigo-500 hover:text-indigo-400 ${
          isPending ? "pointer-events-none opacity-50" : ""
        }`}
      >
        <ImagePlus className="h-5 w-5" />
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          disabled={isPending}
          className="hidden"
        />
      </label>
    </div>
  );
}
