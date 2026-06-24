export default function Footer() {
  return (
    <footer
      className="mt-20"
      style={{
        borderTop: "1px solid var(--divider)",
      }}
    >
      <div className="mx-auto flex flex-col items-center max-w-[980px] px-6 py-10">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[12px]" style={{ color: "var(--fg-secondary)" }}>
            © {new Date().getFullYear()} Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}
