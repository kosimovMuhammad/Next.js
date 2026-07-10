import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

import {
  createTodo as createTodoRequest,
  deleteTodo as deleteTodoRequest,
  getTodoById,
  getTodos,
  markCompleted as markCompletedRequest,
  updateTodo as updateTodoRequest,
} from "@/lib/api/todosApi";
import type {
  CreateTodoPayload,
  GetTodosParams,
  Todo,
  UpdateTodoPayload,
} from "@/types/todo";

interface TodosState {
  items: Todo[];
  status: "idle" | "loading" | "succeeded" | "failed";
  query: string;
  pageNumber: number;
  current: Todo | null;
  currentStatus: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: TodosState = {
  items: [],
  status: "idle",
  query: "",
  pageNumber: 1,
  current: null,
  currentStatus: "idle",
};

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (params: GetTodosParams) => {
    const response = await getTodos(params);
    return response.data;
  }
);

export const fetchTodoById = createAsyncThunk(
  "todos/fetchTodoById",
  async (id: number) => {
    const response = await getTodoById(id);
    return response.data;
  }
);

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (payload: CreateTodoPayload) => {
    const response = await createTodoRequest(payload);
    return response.data;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (payload: UpdateTodoPayload) => {
    const response = await updateTodoRequest(payload);
    return response.data;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: number) => {
    const response = await deleteTodoRequest(id);
    return response.data;
  }
);

export const markCompleted = createAsyncThunk(
  "todos/markCompleted",
  async (id: number) => {
    const response = await markCompletedRequest(id);
    return response.data;
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
      state.pageNumber = 1;
    },
    setPageNumber(state, action: PayloadAction<number>) {
      state.pageNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.status = "failed";
        state.items = [];
      })
      .addCase(fetchTodoById.pending, (state) => {
        state.currentStatus = "loading";
      })
      .addCase(fetchTodoById.fulfilled, (state, action) => {
        state.currentStatus = "succeeded";
        state.current = action.payload;
      })
      .addCase(fetchTodoById.rejected, (state) => {
        state.currentStatus = "failed";
        state.current = null;
      });
  },
});

export const { setQuery, setPageNumber } = todosSlice.actions;
export default todosSlice.reducer;
