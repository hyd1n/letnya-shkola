"use client";

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
    <div className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-[980px]">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1
            className="mb-5 text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight"
            style={{ letterSpacing: "-0.03em", lineHeight: "1.05" }}
          >
            Карьера
          </h1>
          <p
            className="mx-auto max-w-lg text-[17px] sm:text-lg"
            style={{ color: "var(--fg-secondary)", lineHeight: "1.6" }}
          >
            Карьерный путь инженера связи — это последовательный рост от
            техника до технического директора.
          </p>
        </div>

        {/* Career ladder */}
        <h2
          className="mb-10 text-[22px] font-semibold tracking-tight sm:text-[24px]"
          style={{ letterSpacing: "-0.03em" }}
        >
          Карьерная лестница
        </h2>
        <div className="mb-24 space-y-6">
          {levels.map((level, i) => (
            <div
              key={level.stage}
              className="rounded-[var(--radius-xl)] p-6 sm:p-8 transition-all duration-300"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                boxShadow: "var(--card-shadow)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--card-shadow-hover)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--card-shadow)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="flex items-center gap-4 sm:min-w-[200px]">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius-md)] text-[15px] font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, var(--gradient-start), var(--gradient-end))`,
                      boxShadow: "0 2px 8px rgba(52, 199, 89, 0.25)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <span
                      className="mb-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium"
                      style={{
                        background: "linear-gradient(135deg, rgba(52,199,89,0.12), rgba(48,209,88,0.06))",
                        color: "var(--accent)",
                      }}
                    >
                      {level.stage}
                    </span>
                    <h3
                      className="text-[18px] font-semibold"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {level.title}
                    </h3>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap gap-3">
                    <span
                      className="rounded-full px-3 py-1 text-[12px] font-medium"
                      style={{
                        backgroundColor: "var(--divider)",
                        color: "var(--fg-secondary)",
                      }}
                    >
                      ЗП: {level.salary}
                    </span>
                    <span
                      className="rounded-full px-3 py-1 text-[12px] font-medium"
                      style={{
                        backgroundColor: "var(--divider)",
                        color: "var(--fg-secondary)",
                      }}
                    >
                      Опыт: {level.experience}
                    </span>
                  </div>
                  <ul className="grid gap-1.5 sm:grid-cols-2">
                    {level.tasks.map((t) => (
                      <li
                        key={t}
                        className="flex items-center gap-2 text-[14px]"
                        style={{ color: "var(--fg-secondary)" }}
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <h2
          className="mb-10 text-[22px] font-semibold tracking-tight sm:text-[24px]"
          style={{ letterSpacing: "-0.03em" }}
        >
          Области специализации
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {directions.map((d) => (
            <div
              key={d.title}
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
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] text-2xl"
                style={{ backgroundColor: "var(--divider)" }}
              >
                {d.icon}
              </div>
              <h3
                className="mb-1 text-[17px] font-semibold"
                style={{ letterSpacing: "-0.02em" }}
              >
                {d.title}
              </h3>
              <p
                className="text-[13px] leading-relaxed"
                style={{ color: "var(--fg-secondary)" }}
              >
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
