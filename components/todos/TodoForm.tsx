"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { ImageUploader } from "@/components/todos/ImageUploader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createTodoSchema, type CreateTodoFormValues } from "@/lib/validation/todoSchema";
import { useAppDispatch } from "@/store/hooks";
import { createTodo } from "@/store/todosSlice";

export function TodoForm({ onSuccess }: { onSuccess: () => void }) {
  const dispatch = useAppDispatch();
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateTodoFormValues>({
    resolver: zodResolver(createTodoSchema),
    defaultValues: { name: "", description: "", images: [] },
  });

  async function onSubmit(values: CreateTodoFormValues) {
    try {
      await dispatch(createTodo(values)).unwrap();
      toast.success("Todo created.");
      reset();
      onSuccess();
    } catch {
      // error is already shown via axios interceptor
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register("name")} />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" {...register("description")} />
        {errors.description && (
          <p className="text-sm text-destructive">{errors.description.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label>Images</Label>
        <Controller
          control={control}
          name="images"
          render={({ field }) => (
            <ImageUploader value={field.value} onChange={field.onChange} />
          )}
        />
        {errors.images && (
          <p className="text-sm text-destructive">{errors.images.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creating..." : "Create"}
      </Button>
    </form>
  );
}
