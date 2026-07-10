import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTodoImageUrl } from "@/lib/api/todosApi";
import type { Todo } from "@/types/todo";

export function TodoCard({ todo, onSelect }: { todo: Todo; onSelect: (id: number) => void }) {
  const firstImage = todo.images[0];

  return (
    <button
      type="button"
      onClick={() => onSelect(todo.id)}
      className="text-left"
    >
      <Card className="h-full overflow-hidden py-0 transition-colors hover:border-primary">
        {firstImage && (
          <div className="relative aspect-video w-full">
            <Image
              src={getTodoImageUrl(firstImage.imageName)}
              alt={todo.name}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
        <CardHeader className="pt-6">
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="line-clamp-1">{todo.name}</CardTitle>
            {todo.isCompleted && <Badge>Completed</Badge>}
          </div>
        </CardHeader>
        <CardContent className="pb-6">
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {todo.description}
          </p>
        </CardContent>
      </Card>
    </button>
  );
}
