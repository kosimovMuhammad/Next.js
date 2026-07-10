"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditTodoForm } from "@/components/todos/EditTodoForm";
import { Skeleton } from "@/components/ui/skeleton";
import { getTodoImageUrl } from "@/lib/api/todosApi";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { deleteTodo, fetchTodoById, markCompleted } from "@/store/todosSlice";

interface TodoDetailPageProps {
  id: number;
  onClose?: () => void;
}

export function TodoDetailPage({ id, onClose }: TodoDetailPageProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { current, currentStatus } = useAppSelector((state) => state.todos);
  const [isEditOpen, setIsEditOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchTodoById(id));
  }, [dispatch, id]);

  async function handleMarkCompleted() {
    try {
      await dispatch(markCompleted(id)).unwrap();
      toast.success("Todo marked as completed.");
      dispatch(fetchTodoById(id));
    } catch {
      // error is already shown via axios interceptor
    }
  }

  async function handleDelete() {
    try {
      await dispatch(deleteTodo(id)).unwrap();
      toast.success("Todo deleted.");
      if (onClose) {
        onClose();
      } else {
        router.push("/");
      }
    } catch {
      // error is already shown via axios interceptor
    }
  }

  const content = (
    <div className="flex flex-col gap-6">
      {currentStatus === "loading" && (
        <div className="flex flex-col gap-4">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-20 w-full" />
        </div>
      )}

      {currentStatus === "succeeded" && !current && (
        <p className="py-16 text-center text-muted-foreground">
          Todo not found.
        </p>
      )}

      {current && (
        <div className="flex flex-col gap-6">
          {current.images.length > 0 && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {current.images.map((image) => (
                <div
                  key={image.id}
                  className="relative aspect-square w-full overflow-hidden rounded-lg border"
                >
                  <Image
                    src={getTodoImageUrl(image.imageName)}
                    alt={current.name}
                    fill
                    sizes="(min-width: 640px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="flex items-start justify-between gap-2">
            <h1 className="text-2xl font-semibold">{current.name}</h1>
            {current.isCompleted && <Badge>Completed</Badge>}
          </div>

          <p className="text-muted-foreground">{current.description}</p>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="secondary"
              disabled={current.isCompleted}
              onClick={handleMarkCompleted}
            >
              {current.isCompleted ? "Completed" : "Mark as completed"}
            </Button>

            <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
              <DialogTrigger render={<Button variant="outline">Edit</Button>} />
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit todo</DialogTitle>
                </DialogHeader>
                <EditTodoForm
                  todoId={current.id}
                  defaultValues={{
                    name: current.name,
                    description: current.description,
                  }}
                  onSuccess={() => {
                    setIsEditOpen(false);
                    dispatch(fetchTodoById(id));
                  }}
                />
              </DialogContent>
            </Dialog>

            <AlertDialog>
              <AlertDialogTrigger render={<Button variant="destructive">Delete</Button>} />
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Todo?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete}>
                   delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      )}
    </div>
  );

  if (onClose) {
    return content;
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-10 sm:px-8">
      <Link
        href="/"
        className="flex w-fit items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>
      {content}
    </div>
  );
}
