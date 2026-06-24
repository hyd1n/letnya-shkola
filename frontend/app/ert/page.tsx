"use client";

const mainTasks = [
  {
    icon: "🌐",
    title: "Проектирование сети и инфраструктуры",
    description:
      "Разработка сетей связи (доступа, агрегации), центров обработки данных (ЦОД). Создание схем, расчёт параметров и выбор оборудования, чтобы интернет и ТВ работали стабильно у миллионов абонентов. Это работа на стыке IT и «железа».",
  },
  {
    icon: "🏗",
    title: "Архитектура сложных ИТ-систем",
    description:
      "Компания развивает собственные ПО и облачные платформы. Архитектор проектирует структуру систем (например, биллинга для расчётов с абонентами), чтобы они были масштабируемыми и надёжными.",
  },
  {
    icon: "🚀",
    title: "Разработка новых цифровых продуктов",
    description:
      "«ЭР-Телеком» активно создаёт собственные продукты: российский телефонный узел, систему DPI для анализа трафика, IoT-решения. Проектировщик переводит бизнес-идеи в технические требования и документацию.",
  },
  {
    icon: "🏛",
    title: "Корпоративная архитектура",
    description:
      "Роль для стратегов. Автоматизация процессов всего холдинга и формирование единой стратегии развития всех ИТ-систем на годы вперёд.",
  },
];

const differences = [
  "Думает на уровне всей сети или экосистемы продуктов",
  "Связывает бизнес-цели компании с техническими решениями",
  "Обеспечивает рост и развитие, проектируя систему так, чтобы она выдерживала кратный рост нагрузки и легко масштабировалась",
];

const group1 = {
  icon: "📝",
  title: "Проектирование и документация",
  subtitle: "От идеи к чертежу",
  items: [
    {
      label: "Разрабатываете проекты",
      text: "Создаёте рабочую и исполнительную документацию на объекты связи — ВОЛС, СКС, сети доступа FTTx/GPON.",
    },
    {
      label: "Готовите техзадания",
      text: "Пишете техническое задание (ТЗ), собираете исходные данные, согласовываете технические условия (ТУ) с разными службами.",
    },
    {
      label: "Работаете в AutoCAD",
      text: "Это ваш главный инструмент — в нём создаются все схемы и чертежи.",
    },
  ],
};

const group2 = {
  icon: "🏗",
  title: "Контроль и надзор за строительством",
  subtitle: "От чертежа к объекту",
  items: [
    {
      label: "Контролируете подрядчиков",
      text: "Проверяете документацию подрядных организаций, контролируете строительно-монтажные и пусконаладочные работы (СМР и ПНР).",
    },
    {
      label: "Принимаете работу",
      text: "Участвуете в приёмке готовых объектов и вводе их в эксплуатацию.",
    },
    {
      label: "Сопровождаете проект",
      text: "Решаете технические вопросы на всех этапах — от проектирования до сдачи объекта.",
    },
  ],
};

const group3 = {
  icon: "🔌",
  title: "Работа с клиентами и специфические задачи",
  subtitle: "За рамками типового строительства",
  items: [
    {
      label: "B2B-подключения",
      text: "Составляете документацию на подключение корпоративных клиентов.",
    },
    {
      label: "Безопасность и слаботочка",
      text: "Проектируете системы безопасности (ОПС, СКУД), видеонаблюдение, а в узкой специализации — системы защиты информации (межсетевые экраны, системы обнаружения вторжений).",
    },
    {
      label: "Обследование площадок",
      text: "Лично выезжаете на объекты (здания, трассы), чтобы всё осмотреть.",
    },
  ],
};

function TaskGroup({
  icon,
  title,
  subtitle,
  items,
}: {
  icon: string;
  title: string;
  subtitle: string;
  items: { label: string; text: string }[];
}) {
  return (
    <div
      className="rounded-[var(--radius-xl)] p-8 sm:p-10 transition-all duration-300"
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
      <div className="mb-4 flex items-center gap-3">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] text-2xl"
          style={{ backgroundColor: "var(--divider)" }}
        >
          {icon}
        </div>
        <div>
          <h3
            className="text-[18px] font-semibold"
            style={{ letterSpacing: "-0.02em" }}
          >
            {title}
          </h3>
          <p
            className="text-[13px] font-medium"
            style={{ color: "var(--accent)" }}
          >
            {subtitle}
          </p>
        </div>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <p className="text-[14px] leading-relaxed" style={{ color: "var(--fg-secondary)" }}>
              <span className="font-medium" style={{ color: "var(--fg)" }}>{item.label}:</span>{" "}
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ErtPage() {
  return (
    <div className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-[980px]">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1
            className="mb-5 text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight"
            style={{ letterSpacing: "-0.03em", lineHeight: "1.05" }}
          >
            ЭР-Телеком Холдинг
          </h1>
          <p
            className="mx-auto max-w-2xl text-[17px] sm:text-lg"
            style={{ color: "var(--fg-secondary)", lineHeight: "1.6" }}
          >
            Почему роль инженера-проектировщика важна для компании федерального
            уровня
          </p>
        </div>

        {/* Intro */}
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
            Почему именно ЭР-Телеком?
          </h2>
          <p
            className="text-[15px] leading-relaxed"
            style={{ color: "var(--fg-secondary)" }}
          >
            В «ЭР-Телеком Холдинг» инженер-проектировщик — не просто технический
            специалист, а ключевой создатель цифровой инфраструктуры. Компания —
            оператор связи федерального уровня, и её бизнес напрямую зависит от
            того, насколько надёжно спроектированы сети, облачные платформы и
            внутренние ИТ-системы.
          </p>
        </div>

        {/* 4 main tasks */}
        <h2
          className="mb-10 text-center text-[24px] font-semibold tracking-tight sm:text-[28px]"
          style={{ letterSpacing: "-0.03em" }}
        >
          4 главные задачи
        </h2>
        <div className="mb-20 grid gap-5 sm:grid-cols-2">
          {mainTasks.map((t) => (
            <div
              key={t.title}
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
                {t.icon}
              </div>
              <h3
                className="mb-2 text-[17px] font-semibold"
                style={{ letterSpacing: "-0.02em" }}
              >
                {t.title}
              </h3>
              <p
                className="text-[13px] leading-relaxed"
                style={{ color: "var(--fg-secondary)" }}
              >
                {t.description}
              </p>
            </div>
          ))}
        </div>

        {/* Difference from other roles */}
        <div
          className="mb-20 overflow-hidden rounded-[var(--radius-xl)] p-8 sm:p-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(52,199,89,0.08), rgba(48,209,88,0.04))",
            border: "1px solid rgba(52,199,89,0.12)",
          }}
        >
          <h2
            className="mb-4 text-[22px] font-semibold tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Отличие от других ИТ-ролей
          </h2>
          <p
            className="mb-6 text-[15px] leading-relaxed"
            style={{ color: "var(--fg-secondary)" }}
          >
            В отличие от администратора, который обслуживает готовую систему, или
            разработчика, пишущего код, проектировщик — интегратор:
          </p>
          <ul className="space-y-3">
            {differences.map((d) => (
              <li
                key={d}
                className="flex items-start gap-3 text-[15px]"
                style={{ color: "var(--fg-secondary)" }}
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        {/* Wide scope intro */}
        <div className="mb-12 text-center">
          <h2
            className="mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Фронт работ
          </h2>
          <p
            className="mx-auto max-w-2xl text-[15px]"
            style={{ color: "var(--fg-secondary)", lineHeight: "1.6" }}
          >
            Фронт работ инженера-проектировщика очень широкий — он охватывает
            всю жизнь сети: от первых чертежей до контроля за тем, как их
            строят и подключают клиентов. Конкретные задачи зависят от
            направления, но в целом они делятся на три большие группы.
          </p>
        </div>

        {/* 3 work groups */}
        <div className="space-y-6">
          <TaskGroup {...group1} />
          <TaskGroup {...group2} />
          <TaskGroup {...group3} />
        </div>
      </div>
    </div>
  );
}
