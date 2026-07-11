export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>Pitchside — football news, transfers &amp; analysis.</p>
        <p>&copy; {new Date().getFullYear()} Pitchside. All rights reserved.</p>
      </div>
    </footer>
  );
}
