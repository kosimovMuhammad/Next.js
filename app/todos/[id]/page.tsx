import { TodoDetailPage } from "@/components/todos/TodoDetailPage";

export default async function Page({ params }: PageProps<"/todos/[id]">) {
  const { id } = await params;
  return <TodoDetailPage id={Number(id)} />;
}
