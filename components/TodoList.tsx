import { ClipboardList } from "lucide-react";
import type { Todo } from "@/lib/api";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import TodoItem from "./TodoItem";

// Empty state — handled explicitly instead of rendering a bare empty <ul>.
export default function TodoList({
  todos,
  dict,
}: {
  todos: Todo[];
  dict: { empty: Dictionary["empty"]; item: Dictionary["item"] };
}) {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-zinc-800 px-3 py-16 text-center">
        <ClipboardList className="h-6 w-6 text-zinc-700" />
        <p className="text-sm text-zinc-400">{dict.empty.message}</p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dict={dict.item} />
      ))}
    </ul>
  );
}
