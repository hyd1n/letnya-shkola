"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О профессии" },
  { href: "/skills", label: "Навыки" },
  { href: "/career", label: "Карьера" },
  { href: "/education", label: "Образование" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold text-foreground">
          <span className="text-accent">⚡</span> Инженер связи
        </Link>
        <nav className="hidden gap-1 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                pathname === link.href
                  ? "bg-accent text-white"
                  : "text-muted hover:bg-accent-light hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          className="text-muted sm:hidden"
          aria-label="Меню"
          onClick={() => {
            const el = document.getElementById("mobile-nav");
            el?.classList.toggle("hidden");
          }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
      <nav id="mobile-nav" className="hidden border-t border-border bg-card px-4 pb-4 sm:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
              pathname === link.href
                ? "bg-accent text-white"
                : "text-muted hover:bg-accent-light hover:text-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
