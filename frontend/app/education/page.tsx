"use client";

import Link from "next/link";

const exams = [
  { subject: "Математика", code: "02", importance: "Обязательный" },
  { subject: "Русский язык", code: "01", importance: "Обязательный" },
  { subject: "Физика", code: "03", importance: "Профильный" },
  { subject: "Информатика", code: "04", importance: "Профильный" },
];

const universities = [
  { name: "МТУСИ", city: "Москва", description: "Московский технический университет связи и информатики" },
  { name: "СПбГУТ", city: "Санкт-Петербург", description: "Санкт-Петербургский университет телекоммуникаций" },
  { name: "МАСИ", city: "Москва", description: "Московский авиационный институт" },
  { name: "НГТУ", city: "Новосибирск", description: "Новосибирский государственный технический университет" },
  { name: "КФУ", city: "Казань", description: "Казанский федеральный университет" },
  { name: "ДВФУ", city: "Владивосток", description: "Дальневосточный федеральный университет" },
];

const steps = [
  { number: "01", title: "Школа", description: "Углублённое изучение физики и информатики, участие в олимпиадах и кружках радиоэлектроники." },
  { number: "02", title: "ЕГЭ", description: "Сдайте профильную физику и информатику. Высокие баллы открывают двери в лучшие вузы." },
  { number: "03", title: "Университет", description: "4–6 лет обучения на факультете связи, телекоммуникаций или радиоэлектроники." },
  { number: "04", title: "Практика", description: "Стажировки в телеком-компаниях, работа с реальным оборудованием, защита диплома." },
  { number: "05", title: "Карьера", description: "Трудоустройство в оператора связи, vendor-компанию или интегратора." },
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
            Образование
          </h1>
          <p
            className="mx-auto max-w-lg text-[17px] sm:text-lg"
            style={{ color: "var(--fg-secondary)", lineHeight: "1.6" }}
          >
            Как стать инженером связи: от школьного предмета до диплома
            университета.
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

        {/* Exams */}
        <h2
          className="mb-10 text-[22px] font-semibold tracking-tight sm:text-[24px]"
          style={{ letterSpacing: "-0.03em" }}
        >
          Необходимые экзамены
        </h2>
        <div className="mb-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {exams.map((e) => (
            <div
              key={e.code}
              className="rounded-[var(--radius-lg)] p-6 text-center transition-all duration-300"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <span
                className="mb-1 block text-[11px] font-medium"
                style={{ color: "var(--fg-secondary)" }}
              >
                Код: {e.code}
              </span>
              <h3
                className="mb-2 text-[17px] font-semibold"
                style={{ letterSpacing: "-0.01em" }}
              >
                {e.subject}
              </h3>
              <span
                className="inline-block rounded-full px-3 py-1 text-[12px] font-medium"
                style={{
                  background: "linear-gradient(135deg, rgba(52,199,89,0.12), rgba(48,209,88,0.06))",
                  color: "var(--accent)",
                }}
              >
                {e.importance}
              </span>
            </div>
          ))}
        </div>

        {/* Universities */}
        <h2
          className="mb-10 text-[22px] font-semibold tracking-tight sm:text-[24px]"
          style={{ letterSpacing: "-0.03em" }}
        >
          Вузы
        </h2>
        <div className="mb-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {universities.map((u) => (
            <div
              key={u.name}
              className="rounded-[var(--radius-lg)] p-6 transition-all duration-300"
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
                className="mb-1 text-[17px] font-semibold text-accent"
                style={{ letterSpacing: "-0.02em" }}
              >
                {u.name}
              </h3>
              <p
                className="mb-1 text-[13px] font-medium"
                style={{ color: "var(--fg-secondary)" }}
              >
                {u.city}
              </p>
              <p
                className="text-[13px] leading-relaxed"
                style={{ color: "var(--fg-secondary)" }}
              >
                {u.description}
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
            Готовы начать?
          </h2>
          <p
            className="mb-6 text-[15px]"
            style={{ color: "var(--fg-secondary)" }}
          >
            Профессия инженера связи — это стабильность, рост и возможность
            менять мир технологий.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center rounded-full px-7 py-3 text-[15px] font-medium text-white transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
              boxShadow: "0 2px 12px rgba(52, 199, 89, 0.3)",
            }}
          >
            Узнать больше о профессии
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
