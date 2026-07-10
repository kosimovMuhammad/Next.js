"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { editTodoSchema, type EditTodoFormValues } from "@/lib/validation/todoSchema";
import { useAppDispatch } from "@/store/hooks";
import { updateTodo } from "@/store/todosSlice";

interface EditTodoFormProps {
  todoId: number;
  defaultValues: EditTodoFormValues;
  onSuccess: () => void;
}

export function EditTodoForm({ todoId, defaultValues, onSuccess }: EditTodoFormProps) {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EditTodoFormValues>({
    resolver: zodResolver(editTodoSchema),
    defaultValues,
  });

  async function onSubmit(values: EditTodoFormValues) {
    try {
      await dispatch(updateTodo({ id: todoId, ...values })).unwrap();
      toast.success("Changes saved.");
      onSuccess();
    } catch {
      // error is already shown via axios interceptor
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="edit-name">Name</Label>
        <Input id="edit-name" {...register("name")} />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="edit-description">Description</Label>
        <Textarea id="edit-description" {...register("description")} />
        {errors.description && (
          <p className="text-sm text-destructive">{errors.description.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Save"}
      </Button>
    </form>
  );
}
