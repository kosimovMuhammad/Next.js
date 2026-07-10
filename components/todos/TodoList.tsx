import { TodoCard } from "@/components/todos/TodoCard";
import type { Todo } from "@/types/todo";

interface TodoListProps {
  todos: Todo[];
  onSelect: (id: number) => void;
}

export function TodoList({ todos, onSelect }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <p className="py-16 text-center text-muted-foreground">
        Ягон todo ёфт нашуд.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} onSelect={onSelect} />
      ))}
    </div>
  );
}
