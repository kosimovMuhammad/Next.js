"use client";

import { useCallback, useEffect, useState } from "react";

import { Pagination } from "@/components/todos/Pagination";
import { SearchBar } from "@/components/todos/SearchBar";
import { TodoDetailPage } from "@/components/todos/TodoDetailPage";
import { TodoForm } from "@/components/todos/TodoForm";
import { TodoList } from "@/components/todos/TodoList";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchTodos, setPageNumber, setQuery } from "@/store/todosSlice";

const PAGE_SIZE = 9;

export function TodosPage() {
  const dispatch = useAppDispatch();
  const { items, status, query, pageNumber } = useAppSelector(
    (state) => state.todos
  );
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState<number | null>(null);

  const refetch = useCallback(() => {
    dispatch(fetchTodos({ query, PageNumber: pageNumber, PageSize: PAGE_SIZE }));
  }, [dispatch, query, pageNumber]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleQueryChange = useCallback(
    (value: string) => {
      dispatch(setQuery(value));
    },
    [dispatch]
  );

  const handlePageChange = useCallback(
    (page: number) => {
      dispatch(setPageNumber(page));
    },
    [dispatch]
  );

  const hasNextPage = items.length === PAGE_SIZE;

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 py-10 sm:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Todos</h1>
          <SearchBar value={query} onChange={handleQueryChange} />
        </div>

        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger render={<Button>Add</Button>} />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>New Todo</DialogTitle>
            </DialogHeader>
            <TodoForm
              onSuccess={() => {
                setIsCreateOpen(false);
                refetch();
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      {status === "loading" ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: PAGE_SIZE }).map((_, index) => (
            <Skeleton key={index} className="h-56 w-full" />
          ))}
        </div>
      ) : (
        <TodoList todos={items} onSelect={setSelectedTodoId} />
      )}

      <Pagination
        pageNumber={pageNumber}
        hasNextPage={hasNextPage}
        onPageChange={handlePageChange}
      />

      <Dialog
        open={selectedTodoId !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedTodoId(null);
            refetch();
          }
        }}
      >
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="sr-only">Todo details</DialogTitle>
          </DialogHeader>
          {selectedTodoId !== null && (
            <TodoDetailPage
              id={selectedTodoId}
              onClose={() => {
                setSelectedTodoId(null);
                refetch();
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
