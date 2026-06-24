"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О профессии" },
  { href: "/skills", label: "Навыки" },
  { href: "/career", label: "Карьера" },
  { href: "/education", label: "Образование" },
  { href: "/ert", label: "ЭР-Телеком" },
  { href: "/quiz", label: "Тест" },
];

export default function Header() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50">
      <div
        className="mx-auto px-6 py-3"
        style={{
          backdropFilter: "saturate(180%) blur(20px)",
          WebkitBackdropFilter: "saturate(180%) blur(20px)",
          backgroundColor: "var(--glass)",
          borderBottom: "1px solid var(--glass-border)",
          borderRadius: "0 0 var(--radius-md) var(--radius-md)",
          boxShadow: "var(--glass-shadow)",
        }}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-[17px] font-semibold tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="text-accent">⚡</span> Инженер-проектировщик сетей
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative rounded-full px-4 py-1.5 text-[13px] font-medium transition-all duration-200"
                style={{
                  color:
                    pathname === link.href
                      ? "white"
                      : "var(--fg-secondary)",
                  backgroundColor:
                    pathname === link.href
                      ? "var(--accent)"
                      : "transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200"
              style={{ backgroundColor: "var(--divider)" }}
              aria-label="Сменить тему"
            >
              {theme === "light" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--fg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--fg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors md:hidden"
              style={{ backgroundColor: "var(--divider)" }}
              aria-label="Меню"
              onClick={() => {
                const el = document.getElementById("mobile-nav");
                el?.classList.toggle("hidden");
              }}
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="var(--fg)"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M2 4.5h12M2 8h12M2 11.5h12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        id="mobile-nav"
        className="hidden mx-4 mt-2 overflow-hidden md:hidden"
        style={{
          backdropFilter: "saturate(180%) blur(20px)",
          WebkitBackdropFilter: "saturate(180%) blur(20px)",
          backgroundColor: "var(--glass)",
          border: "1px solid var(--glass-border)",
          borderRadius: "var(--radius-md)",
          boxShadow: "var(--glass-shadow)",
        }}
      >
        <div className="p-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => {
                document.getElementById("mobile-nav")?.classList.add("hidden");
              }}
              className="block rounded-full px-4 py-2.5 text-[13px] font-medium transition-all duration-200"
              style={{
                color:
                  pathname === link.href ? "white" : "var(--fg-secondary)",
                backgroundColor:
                  pathname === link.href ? "var(--accent)" : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
