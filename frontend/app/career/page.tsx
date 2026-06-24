import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Карьера | Инженер связи",
  description: "Карьерный путь и возможности роста инженера связи",
};

const levels = [
  {
    stage: "Начальный",
    title: "Техник / Младший инженер",
    salary: "40–60K ₽",
    experience: "0–2 года",
    tasks: [
      "Монтаж и обслуживание оборудования",
      "Прокладка кабельных линий",
      "Документация и журналы",
      "Помощь старшим инженерам",
    ],
  },
  {
    stage: "Средний",
    title: "Инженер связи",
    salary: "70–120K ₽",
    experience: "2–5 лет",
    tasks: [
      "Проектирование сетевых решений",
      "Настройка оборудования",
      "Мониторинг и оптимизация",
      "Обучение новичков",
    ],
  },
  {
    stage: "Продвинутый",
    title: "Старший инженер / Архитектор",
    salary: "120–200K ₽",
    experience: "5–10 лет",
    tasks: [
      "Архитектура крупных сетей",
      "Внедрение новых технологий",
      "Управление проектами",
      "Техническая экспертиза",
    ],
  },
  {
    stage: "Руководящий",
    title: "Технический директор",
    salary: "200K+ ₽",
    experience: "10+ лет",
    tasks: [
      "Стратегическое планирование",
      "Управление командой",
      "Бюджет и ресурсы",
      "Взаимодействие с заказчиками",
    ],
  },
];

const directions = [
  { icon: "📱", title: "Мобильные сети", description: "5G, LTE, проектирование покрытия" },
  { icon: "🌐", title: "Кабельные сети", description: "Оптоволокно, Ethernet, дата-центры" },
  { icon: "🛰", title: "Спутниковая связь", description: "VSAT, геостационарные орбиты" },
  { icon: "📻", title: "Радиосвязь", description: "Частоты, антенны, радиолинии" },
  { icon: "🔒", title: "Телеком-безопасность", description: "Шифрование, защита каналов" },
  { icon: "☁️", title: "Облачные телекомы", description: "VoIP, SIP, облачные АТС" },
];

export default function CareerPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Карьера</h1>
        <p className="mx-auto max-w-2xl text-muted">
          Карьерный путь инженера связи — это последовательный рост от
          техника до технического директора с возможностью специализации.
        </p>
      </div>

      <h2 className="mb-8 text-center text-2xl font-semibold">
        Карьерная лестница
      </h2>
      <div className="relative mb-20">
        <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-border sm:block sm:left-1/2" />
        <div className="space-y-8">
          {levels.map((level, i) => (
            <div
              key={level.stage}
              className={`relative flex flex-col sm:flex-row ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } items-start gap-4`}
            >
              <div
                className={`hidden sm:block sm:w-1/2 ${
                  i % 2 === 0 ? "sm:text-right sm:pr-8" : "sm:text-left sm:pl-8"
                }`}
              >
                <div className="inline-block rounded-xl border border-border bg-card p-5 text-left sm:text-inherit">
                  <span className="mb-1 inline-block rounded-full bg-accent-light px-2 py-0.5 text-xs font-medium text-accent">
                    {level.stage}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold">{level.title}</h3>
                  <p className="mb-2 text-sm text-muted">
                    ЗП: {level.salary} · Опыт: {level.experience}
                  </p>
                  <ul className="space-y-1 text-sm text-muted">
                    {level.tasks.map((t) => (
                      <li key={t}>• {t}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute left-4 hidden h-4 w-4 rounded-full border-2 border-accent bg-card sm:block sm:left-1/2 sm:-translate-x-1/2" style={{ top: "1.5rem" }} />
              <div className="sm:hidden">
                <div className="rounded-xl border border-border bg-card p-5">
                  <span className="mb-1 inline-block rounded-full bg-accent-light px-2 py-0.5 text-xs font-medium text-accent">
                    {level.stage}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold">{level.title}</h3>
                  <p className="mb-2 text-sm text-muted">
                    ЗП: {level.salary} · Опыт: {level.experience}
                  </p>
                  <ul className="space-y-1 text-sm text-muted">
                    {level.tasks.map((t) => (
                      <li key={t}>• {t}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hidden sm:block sm:w-1/2" />
            </div>
          ))}
        </div>
      </div>

      <h2 className="mb-8 text-center text-2xl font-semibold">
        Области специализации
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {directions.map((d) => (
          <div
            key={d.title}
            className="rounded-xl border border-border bg-card p-5 transition-all hover:border-accent hover:shadow-md"
          >
            <span className="mb-2 block text-2xl">{d.icon}</span>
            <h3 className="mb-1 font-semibold">{d.title}</h3>
            <p className="text-sm text-muted">{d.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
