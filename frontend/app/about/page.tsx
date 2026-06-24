"use client";

const responsibilities = [
  {
    icon: "📡",
    title: "Проектирование сетей",
    description:
      "Разработка архитектуры связи: от локальных сетей до глобальных операторских инфраструктур.",
  },
  {
    icon: "🔧",
    title: "Монтаж и наладка",
    description:
      "Установка оборудования, настройка базовых станций, антенн и маршрутизаторов.",
  },
  {
    icon: "🔍",
    title: "Мониторинг и диагностика",
    description:
      "Контроль качества сигнала, поиск и устранение неисправностей в реальном времени.",
  },
  {
    icon: "📊",
    title: "Оптимизация",
    description:
      "Анализ нагрузки сети, расширение пропускной способности, внедрение новых протоколов.",
  },
  {
    icon: "🛡",
    title: "Безопасность",
    description:
      "Обеспечение защиты каналов связи, шифрование данных, соответствие стандартам.",
  },
  {
    icon: "📋",
    title: "Документация",
    description:
      "Составление технических схем, паспортов объектов, журналов обслуживания.",
  },
];

export default function AboutPage() {
  return (
    <div className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-[980px]">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1
            className="mb-5 text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight"
            style={{ letterSpacing: "-0.03em", lineHeight: "1.05" }}
          >
            О профессии
          </h1>
          <p
            className="mx-auto max-w-lg text-[17px] sm:text-lg"
            style={{ color: "var(--fg-secondary)", lineHeight: "1.6" }}
          >
            Инженер связи — это специалист, который обеспечивает бесперебойную
            работу систем передачи данных, голоса и видео.
          </p>
        </div>

        {/* Intro card */}
        <div
          className="mb-20 overflow-hidden rounded-[var(--radius-xl)] p-8 sm:p-10"
          style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            boxShadow: "var(--card-shadow)",
          }}
        >
          <h2
            className="mb-4 text-[22px] font-semibold tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Что такое связь?
          </h2>
          <p
            className="text-[15px] leading-relaxed"
            style={{ color: "var(--fg-secondary)" }}
          >
            Связь — это передача информации на расстояние с помощью
            электромагнитных сигналов. Инженер связи работает с радиочастотами,
            оптоволокном, спутниковыми каналами и мобильными сетями. Его цель —
            чтобы информация доходила быстро, без потерь и в любую точку мира.
          </p>
        </div>

        {/* Responsibilities */}
        <h2
          className="mb-10 text-center text-[24px] font-semibold tracking-tight sm:text-[28px]"
          style={{ letterSpacing: "-0.03em" }}
        >
          Основные обязанности
        </h2>
        <div className="mb-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {responsibilities.map((r) => (
            <div
              key={r.title}
              className="group rounded-[var(--radius-lg)] p-6 transition-all duration-300"
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
                {r.icon}
              </div>
              <h3
                className="mb-2 text-[17px] font-semibold"
                style={{ letterSpacing: "-0.02em" }}
              >
                {r.title}
              </h3>
              <p
                className="text-[13px] leading-relaxed"
                style={{ color: "var(--fg-secondary)" }}
              >
                {r.description}
              </p>
            </div>
          ))}
        </div>

        {/* Fact */}
        <div
          className="overflow-hidden rounded-[var(--radius-xl)] p-8 sm:p-10"
          style={{
            background: "linear-gradient(135deg, rgba(52,199,89,0.08), rgba(48,209,88,0.04))",
            border: "1px solid rgba(52,199,89,0.12)",
          }}
        >
          <h2
            className="mb-3 text-[20px] font-semibold tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Интересный факт
          </h2>
          <p
            className="text-[15px] leading-relaxed"
            style={{ color: "var(--fg-secondary)" }}
          >
            Первая радиосвязь была установлена Александром Поповым в 1895 году.
            С тех пор инженеры связи прошли путь от телеграфных аппаратов до
            сетей 5G и спутникового интернета Starlink. Профессия остаётся одной
            из самых востребованных в мире.
          </p>
        </div>
      </div>
    </div>
  );
}
