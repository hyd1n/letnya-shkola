export default function Footer() {
  return (
    <footer
      className="mt-20"
      style={{
        borderTop: "1px solid var(--divider)",
      }}
    >
      <div className="mx-auto max-w-[980px] px-6 py-10">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p
              className="text-[13px] font-semibold"
              style={{ letterSpacing: "-0.01em" }}
            >
              <span className="text-accent">⚡</span> Инженер связи
            </p>
            <p className="mt-0.5 text-[12px]" style={{ color: "var(--fg-secondary)" }}>
              Учебный проект
            </p>
          </div>
          <p className="text-[12px]" style={{ color: "var(--fg-secondary)" }}>
            © {new Date().getFullYear()} Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}
