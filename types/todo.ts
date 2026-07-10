export interface TodoImage {
  id: number;
  imageName: string;
}

export interface Todo {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
  images: TodoImage[];
}

export interface ApiResponse<T> {
  data: T;
  errors: string[];
  statusCode: number;
}

export interface GetTodosParams {
  query?: string;
  PageNumber?: number;
  PageSize?: number;
}

export interface CreateTodoPayload {
  name: string;
  description: string;
  images: File[];
}

export interface UpdateTodoPayload {
  id: number;
  name: string;
  description: string;
}
