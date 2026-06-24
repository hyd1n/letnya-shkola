"use client";

const responsibilities = [
  {
    icon: "🏗",
    title: "Проектирование сети",
    description:
      "Продумывание схемы сети под задачи и масштаб компании — новый офис, филиал, рост сотрудников.",
  },
  {
    icon: "⚙️",
    title: "Настройка оборудования",
    description:
      "Конфигурирование маршрутизаторов, коммутаторов, точек доступа и другого сетевого оборудования.",
  },
  {
    icon: "🔍",
    title: "Мониторинг и устранение сбоев",
    description:
      "Отслеживание состояния сети, профилактика и оперативное устранение аварийных ситуаций.",
  },
  {
    icon: "🛡",
    title: "Обеспечение безопасности",
    description:
      "Настройка VPN, файрволов, защита от DDoS-атак и несанкционированного доступа.",
  },
  {
    icon: "🚀",
    title: "Внедрение новых технологий",
    description:
      "Обновление инфраструктуры с минимальными потерями для бизнеса, миграция на новое оборудование.",
  },
  {
    icon: "🤝",
    title: "Взаимодействие с провайдерами",
    description:
      "Работа с телеком-операторами по вопросам внешних каналов связи и SLA.",
  },
  {
    icon: "📋",
    title: "Техническая документация",
    description:
      "Схемы сети, IP-адресация, описание настроек — чтобы любой коллега разобрался в системе.",
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
            Инженер-проектировщик сетей — это специалист, который проектирует,
            внедряет и поддерживает компьютерные сети любой сложности.
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
            Кто это простыми словами?
          </h2>
          <p
            className="text-[15px] leading-relaxed"
            style={{ color: "var(--fg-secondary)" }}
          >
            Инженер-проектировщик сетей — это специалист, который проектирует,
            внедряет и поддерживает компьютерные сети любой сложности — от
            локальных до глобальных. Если совсем просто: это человек, который
            решает, как у компании будет работать интернет, Wi-Fi, телефония и
            связь между офисами — так, чтобы всё это было быстро, надёжно и
            защищено от взлома.
          </p>
          <p
            className="mt-4 text-[15px] leading-relaxed"
            style={{ color: "var(--fg-secondary)" }}
          >
            Представь: один отдел компании в Москве, другой — в Новосибирске, а
            сервер арендован в Германии. Инженер знает, как связать всё это в
            целостную систему. А когда в офисе внезапно пропадает интернет и
            сотрудники замирают в ожидании, именно он находит причину сбоя за
            считанные минуты.
          </p>
        </div>

        {/* Responsibilities */}
        <h2
          className="mb-10 text-center text-[24px] font-semibold tracking-tight sm:text-[28px]"
          style={{ letterSpacing: "-0.03em" }}
        >
          Основные задачи
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

        {/* Why important */}
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
            Почему роль важна для компании
          </h2>
          <p
            className="text-[15px] leading-relaxed"
            style={{ color: "var(--fg-secondary)" }}
          >
            Без сетевого инженера у компании не будет ни интернета, ни удалённой
            работы, ни связи между офисами — именно он создаёт и оптимизирует
            сложные сети, обеспечивает безопасную передачу данных между офисами,
            облачными серверами и сотрудниками.
          </p>
          <p
            className="mt-4 text-[15px] leading-relaxed"
            style={{ color: "var(--fg-secondary)" }}
          >
            Если эта роль отсутствует или выполняется плохо — бизнес
            останавливается буквально физически: нет доступа к почте, к CRM, к
            1С, к складским системам. Каждая минута простоя сети — это
            потерянные деньги и заблокированные сотрудники.
          </p>
        </div>
      </div>
    </div>
  );
}
