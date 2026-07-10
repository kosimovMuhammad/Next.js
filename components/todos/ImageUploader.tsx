"use client";

import { useEffect, useMemo } from "react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ImageUploaderProps {
  value: File[];
  onChange: (files: File[]) => void;
}

export function ImageUploader({ value, onChange }: ImageUploaderProps) {
  const previews = useMemo(
    () => value.map((file) => URL.createObjectURL(file)),
    [value]
  );

  useEffect(() => {
    return () => previews.forEach((url) => URL.revokeObjectURL(url));
  }, [previews]);

  function handleSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    onChange([...value, ...files]);
    event.target.value = "";
  }

  function handleRemove(index: number) {
    onChange(value.filter((_, i) => i !== index));
  }

  return (
    <div className="flex flex-col gap-3">
      <label className="flex w-fit cursor-pointer items-center gap-2 rounded-md border border-dashed px-4 py-2 text-sm text-muted-foreground hover:border-primary hover:text-foreground">
        Расм илова кун
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleSelect}
        />
      </label>

      {previews.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {previews.map((url, index) => (
            <div key={url} className="relative h-20 w-20 overflow-hidden rounded-md border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt="" className="h-full w-full object-cover" />
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute right-1 top-1 h-5 w-5"
                onClick={() => handleRemove(index)}
              >
                <X className="size-3" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
