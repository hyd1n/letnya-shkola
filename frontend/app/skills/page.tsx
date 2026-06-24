"use client";

const hardSkills = [
  { name: "Сетевые протоколы", level: 95, detail: "TCP/IP, DNS, DHCP, VLAN" },
  { name: "Маршрутизация и коммутация", level: 90, detail: "Принципы маршрутизации и коммутации данных" },
  { name: "Сетевая безопасность", level: 80, detail: "VPN, Firewall, защита от DDoS" },
  { name: "Оборудование", level: 85, detail: "Cisco, Juniper, Huawei, MikroTik, Eltex" },
  { name: "Мониторинг", level: 75, detail: "Zabbix, Nagios, Prometheus" },
  { name: "Скрипты и автоматизация", level: 70, detail: "Python для автоматизации процессов" },
  { name: "Виртуализация", level: 65, detail: "VMware ESXi, Hyper-V" },
  { name: "ОС", level: 70, detail: "Linux / Windows Server" },
];

const softSkills = [
  { icon: "📚", name: "Быстрая обучаемость", description: "Технологии меняются быстро — нужно успевать осваивать новое" },
  { icon: "💪", name: "Стрессоустойчивость", description: "Нужно сохранять спокойствие, когда вся компания ждёт устранения сбоя" },
  { icon: "💬", name: "Умение объяснять простым языком", description: "Чётко излагать мысли и находить общий язык с коллективом" },
  { icon: "🎯", name: "Внимательность к деталям", description: "Ошибка в конфигурации может положить сеть всей компании" },
  { icon: "🔧", name: "Готовность работать руками", description: "Непосредственный доступ к технике, а не только удалённо" },
  { icon: "🤝", name: "Командная работа", description: "Взаимодействие со безопасниками, сисадминами, разработчиками" },
];

const certifications = [
  { name: "CCNA", desc: "Cisco Certified Network Associate — входной билет в профессию" },
  { name: "CCNP", desc: "Cisco Certified Network Professional — для опытных инженеров" },
];

function SkillBar({ name, level, detail }: { name: string; level: number; detail: string }) {
  return (
    <div
      className="rounded-[var(--radius-md)] p-5 transition-all duration-300"
      style={{
        backgroundColor: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        boxShadow: "var(--card-shadow)",
      }}
    >
      <div className="mb-1 flex items-center justify-between">
        <span className="text-[15px] font-semibold" style={{ letterSpacing: "-0.01em" }}>
          {name}
        </span>
        <span className="text-[13px] font-medium text-accent">{level}%</span>
      </div>
      <p className="mb-3 text-[12px]" style={{ color: "var(--fg-secondary)" }}>
        {detail}
      </p>
      <div
        className="h-1.5 w-full overflow-hidden rounded-full"
        style={{ backgroundColor: "var(--divider)" }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${level}%`,
            background: "linear-gradient(90deg, var(--gradient-start), var(--gradient-end))",
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-[980px]">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1
            className="mb-5 text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight"
            style={{ letterSpacing: "-0.03em", lineHeight: "1.05" }}
          >
            Навыки
          </h1>
          <p
            className="mx-auto max-w-lg text-[17px] sm:text-lg"
            style={{ color: "var(--fg-secondary)", lineHeight: "1.6" }}
          >
            Инженер-проектировщик сетей сочетает техническую экспертизу с мягкими
            навыками. Вот что нужно для успешной карьеры.
          </p>
        </div>

        {/* Hard skills */}
        <h2
          className="mb-8 text-[22px] font-semibold tracking-tight sm:text-[24px]"
          style={{ letterSpacing: "-0.03em" }}
        >
          Hard skills
        </h2>
        <div className="mb-20 grid gap-4 sm:grid-cols-2">
          {hardSkills.map((s) => (
            <SkillBar key={s.name} {...s} />
          ))}
        </div>

        {/* Soft skills */}
        <h2
          className="mb-8 text-[22px] font-semibold tracking-tight sm:text-[24px]"
          style={{ letterSpacing: "-0.03em" }}
        >
          Soft skills
        </h2>
        <div className="mb-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {softSkills.map((s) => (
            <div
              key={s.name}
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
                {s.icon}
              </div>
              <h3
                className="mb-2 text-[17px] font-semibold"
                style={{ letterSpacing: "-0.02em" }}
              >
                {s.name}
              </h3>
              <p
                className="text-[13px] leading-relaxed"
                style={{ color: "var(--fg-secondary)" }}
              >
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div
          className="overflow-hidden rounded-[var(--radius-xl)] p-8 sm:p-10"
          style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            boxShadow: "var(--card-shadow)",
          }}
        >
          <h2
            className="mb-4 text-[20px] font-semibold tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Сертификации
          </h2>
          <p
            className="mb-5 text-[15px]"
            style={{ color: "var(--fg-secondary)" }}
          >
            Сертификации — знак квалификации в индустрии. Отрасль ориентируется
            на стандарты Cisco:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="rounded-[var(--radius-md)] p-5"
                style={{
                  background: "linear-gradient(135deg, rgba(52,199,89,0.12), rgba(48,209,88,0.06))",
                  border: "1px solid rgba(52,199,89,0.15)",
                }}
              >
                <span className="mb-1 block text-[17px] font-bold text-accent">
                  {c.name}
                </span>
                <span
                  className="text-[13px] leading-relaxed"
                  style={{ color: "var(--fg-secondary)" }}
                >
                  {c.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
