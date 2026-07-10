import { z } from "zod";

export const createTodoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  images: z.array(z.instanceof(File)).min(1, "At least one image is required"),
});

export const editTodoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
});

export type CreateTodoFormValues = z.infer<typeof createTodoSchema>;
export type EditTodoFormValues = z.infer<typeof editTodoSchema>;
