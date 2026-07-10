import { ClipboardList } from "lucide-react";
import type { Todo } from "@/lib/api";
import TodoItem from "./TodoItem";

// Empty state — handled explicitly instead of rendering a bare empty <ul>.
export default function TodoList({ todos }: { todos: Todo[] }) {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-zinc-200 px-3 py-10 text-center dark:border-zinc-800">
        <ClipboardList className="h-6 w-6 text-zinc-300 dark:text-zinc-700" />
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          No todos yet — add one above to get started.
        </p>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
