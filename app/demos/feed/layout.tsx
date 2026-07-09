export default function FeedLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Intercepting Routes</h1>
      {children}
      {modal}
    </div>
  );
}
