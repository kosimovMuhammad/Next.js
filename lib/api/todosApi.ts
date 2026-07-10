import { axiosInstance } from "@/lib/api/axiosInstance";
import type {
  ApiResponse,
  CreateTodoPayload,
  GetTodosParams,
  Todo,
  UpdateTodoPayload,
} from "@/types/todo";

export function getTodoImageUrl(imageName: string): string {
  return `${process.env.NEXT_PUBLIC_API_URL}/images/${imageName}`;
}

export async function getTodos(
  params: GetTodosParams
): Promise<ApiResponse<Todo[]>> {
  const { data } = await axiosInstance.get<ApiResponse<Todo[]>>("/api/to-dos", {
    params,
  });
  return data;
}

export async function getTodoById(id: number): Promise<ApiResponse<Todo | null>> {
  const { data } = await axiosInstance.get<ApiResponse<Todo | null>>(
    `/api/to-dos/${id}`
  );
  return data;
}

export async function createTodo(
  payload: CreateTodoPayload
): Promise<ApiResponse<number>> {
  const formData = new FormData();
  formData.append("Name", payload.name);
  formData.append("Description", payload.description);
  payload.images.forEach((image) => formData.append("Images", image));

  const { data } = await axiosInstance.post<ApiResponse<number>>(
    "/api/to-dos",
    formData
  );
  return data;
}

export async function updateTodo(
  payload: UpdateTodoPayload
): Promise<ApiResponse<number>> {
  const { data } = await axiosInstance.put<ApiResponse<number>>(
    "/api/to-dos",
    payload
  );
  return data;
}

export async function deleteTodo(id: number): Promise<ApiResponse<boolean>> {
  const { data } = await axiosInstance.delete<ApiResponse<boolean>>(
    "/api/to-dos",
    { params: { id } }
  );
  return data;
}

export async function addImages(
  id: number,
  images: File[]
): Promise<ApiResponse<string>> {
  const formData = new FormData();
  images.forEach((image) => formData.append("Images", image));

  const { data } = await axiosInstance.post<ApiResponse<string>>(
    `/api/to-dos/${id}/images`,
    formData
  );
  return data;
}

export async function deleteImage(id: number): Promise<ApiResponse<string>> {
  const { data } = await axiosInstance.delete<ApiResponse<string>>(
    `/api/to-dos/images/${id}`
  );
  return data;
}

export async function markCompleted(id: number): Promise<ApiResponse<boolean>> {
  const { data } = await axiosInstance.put<ApiResponse<boolean>>(
    "/completed",
    null,
    { params: { id } }
  );
  return data;
}
