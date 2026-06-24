"use client";

import Link from "next/link";

const sections = [
  {
    href: "/about",
    icon: "📡",
    title: "О профессии",
    description: "Кто такой инженер-проектировщик сетей и чем он занимается",
  },
  {
    href: "/skills",
    icon: "🛠",
    title: "Навыки",
    description: "Какие компетенции нужны для работы",
  },
  {
    href: "/career",
    icon: "📈",
    title: "Карьера",
    description: "Карьерный путь и зарплатные ориентиры",
  },
  {
    href: "/education",
    icon: "🎓",
    title: "Как начать",
    description: "Пошаговый план входа в профессию",
  },
  {
    href: "/quiz",
    icon: "🧪",
    title: "Тест",
    description: "Проверь себя — подходит ли тебе эта профессия",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="mx-auto max-w-[980px] text-center">
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-medium"
            style={{
              background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
              color: "white",
              boxShadow: "0 2px 12px rgba(52, 199, 89, 0.3)",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white opacity-80" />
            Профессия будущего
          </div>
          <h1
            className="mb-6 text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-tight"
            style={{ letterSpacing: "-0.03em", lineHeight: "1.05" }}
          >
            Инженер-
            <br />
            <span className="text-accent">проектировщик сетей</span>
          </h1>
          <p
            className="mx-auto mb-10 max-w-lg text-lg sm:text-xl"
            style={{
              color: "var(--fg-secondary)",
              letterSpacing: "-0.01em",
              lineHeight: "1.5",
            }}
          >
            Человек, который придумывает, как соединить компьютеры, серверы и
            офисы в единую, быструю и безопасную сеть — и следит, чтобы она не
            падала.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center rounded-full px-7 py-3 text-[15px] font-medium text-white transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                boxShadow: "0 2px 12px rgba(52, 199, 89, 0.3)",
              }}
            >
              Узнать больше
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center rounded-full px-7 py-3 text-[15px] font-medium transition-all duration-200"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              Пройти тест
            </Link>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-[980px]">
          <h2
            className="mb-10 text-center text-[28px] font-semibold tracking-tight sm:text-[32px]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Что нужно знать
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group relative overflow-hidden rounded-[var(--radius-lg)] p-6 transition-all duration-300"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  boxShadow: "var(--card-shadow)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "var(--card-shadow-hover)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "var(--card-shadow)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] text-2xl"
                  style={{ backgroundColor: "var(--divider)" }}
                >
                  {s.icon}
                </div>
                <h3
                  className="mb-1 text-[17px] font-semibold"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: "var(--fg-secondary)" }}
                >
                  {s.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[980px]">
          <div
            className="overflow-hidden rounded-[var(--radius-xl)] p-8 sm:p-12"
            style={{
              background: "linear-gradient(135deg, rgba(52,199,89,0.08), rgba(48,209,88,0.04))",
              border: "1px solid rgba(52,199,89,0.12)",
            }}
          >
            <h2
              className="mb-10 text-center text-[24px] font-semibold tracking-tight sm:text-[28px]"
              style={{ letterSpacing: "-0.03em" }}
            >
              Цифры и факты
            </h2>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                { value: "CCNA", label: "Входной сертификат" },
                { value: "120K+", label: "Средняя зарплата ₽" },
                { value: "3–5", label: "Лет до Senior" },
                { value: "∞", label: "Спрос на рынке" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="mb-1 text-[28px] font-bold text-accent sm:text-[36px]"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-[13px]"
                    style={{ color: "var(--fg-secondary)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
