export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col items-center gap-4 text-sm text-muted sm:flex-row sm:justify-between">
          <p>
            <span className="font-semibold text-foreground">⚡ Инженер связи</span>{" "}
            — учебный проект
          </p>
          <p>© {new Date().getFullYear()} Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}
