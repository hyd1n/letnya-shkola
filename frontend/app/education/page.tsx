"use client";

import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Базовая теория",
    description:
      "Изучить модели OSI и TCP/IP, основы коммутации и маршрутизации, VLAN — без этого фундамента дальше двигаться сложно.",
  },
  {
    number: "02",
    title: "Практика в симуляторах",
    description:
      "Cisco Packet Tracer или GNS3/EVE-NG — тренировка на виртуальных сетях без покупки реального оборудования.",
  },
  {
    number: "03",
    title: "Сертификация",
    description:
      "Получить CCNA — входной билет в профессию, который ценится у работодателей даже без диплома профильного вуза.",
  },
  {
    number: "04",
    title: "Первая позиция",
    description:
      "Стартовать с junior Network Engineer или специалиста техподдержки L2/L3. Мониторинг, базовая настройка, инциденты под руководством старших.",
  },
  {
    number: "05",
    title: "Карьерный рост",
    description:
      "Junior → Network Engineer → Senior → Сетевой архитектор. Можно уйти в узкую специализацию — Security или облака.",
  },
];

const salary = [
  { level: "Junior", range: "60 000 – 100 000 ₽/мес" },
  { level: "Middle (1–3 года)", range: "120 000 – 200 000 ₽/мес" },
  { level: "Senior (от 6 лет)", range: "от 200 000 ₽/мес" },
];

export default function EducationPage() {
  return (
    <div className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-[980px]">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1
            className="mb-5 text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight"
            style={{ letterSpacing: "-0.03em", lineHeight: "1.05" }}
          >
            Как начать карьеру
          </h1>
          <p
            className="mx-auto max-w-lg text-[17px] sm:text-lg"
            style={{ color: "var(--fg-secondary)", lineHeight: "1.6" }}
          >
            Пошаговый план, как стать инженером-проектировщиком сетей — от
            студента до профессионала.
          </p>
        </div>

        {/* Path steps */}
        <h2
          className="mb-10 text-[22px] font-semibold tracking-tight sm:text-[24px]"
          style={{ letterSpacing: "-0.03em" }}
        >
          Путь к профессии
        </h2>
        <div className="mb-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[var(--radius-lg)] p-6 text-center transition-all duration-300"
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
                className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full text-[15px] font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                  boxShadow: "0 2px 8px rgba(52, 199, 89, 0.25)",
                }}
              >
                {step.number}
              </div>
              <h3
                className="mb-2 text-[16px] font-semibold"
                style={{ letterSpacing: "-0.02em" }}
              >
                {step.title}
              </h3>
              <p
                className="text-[12px] leading-relaxed"
                style={{ color: "var(--fg-secondary)" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Salary */}
        <h2
          className="mb-10 text-[22px] font-semibold tracking-tight sm:text-[24px]"
          style={{ letterSpacing: "-0.03em" }}
        >
          Зарплатные ориентиры (Россия, 2025–2026)
        </h2>
        <div className="mb-24 grid gap-5 sm:grid-cols-3">
          {salary.map((s) => (
            <div
              key={s.level}
              className="rounded-[var(--radius-lg)] p-6 text-center transition-all duration-300"
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
              <h3
                className="mb-2 text-[17px] font-semibold text-accent"
                style={{ letterSpacing: "-0.01em" }}
              >
                {s.level}
              </h3>
              <p
                className="text-[22px] font-bold"
                style={{ letterSpacing: "-0.02em" }}
              >
                {s.range}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="overflow-hidden rounded-[var(--radius-xl)] p-8 text-center sm:p-12"
          style={{
            background: "linear-gradient(135deg, rgba(52,199,89,0.08), rgba(48,209,88,0.04))",
            border: "1px solid rgba(52,199,89,0.12)",
          }}
        >
          <h2
            className="mb-3 text-[22px] font-semibold tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Готовы проверить себя?
          </h2>
          <p
            className="mb-6 text-[15px]"
            style={{ color: "var(--fg-secondary)" }}
          >
            Пройдите тест и узнайте, подходит ли вам профессия
            инженера-проектировщика сетей.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center rounded-full px-7 py-3 text-[15px] font-medium text-white transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
              boxShadow: "0 2px 12px rgba(52, 199, 89, 0.3)",
            }}
          >
            Пройти тест
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
        </div>
      </div>
    </div>
  );
}
