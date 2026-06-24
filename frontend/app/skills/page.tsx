"use client";

const hardSkills = [
  { name: "Сетевые технологии", level: 90, detail: "TCP/IP, MPLS, VLAN, BGP" },
  { name: "Радиочастоты", level: 85, detail: "Частотное планирование, спектральный анализ" },
  { name: "Программирование", level: 70, detail: "Python, C/C++, Bash" },
  { name: "Оптоволокно", level: 75, detail: "OTDR, спlicing, проектирование линий" },
  { name: "Оборудование", level: 80, detail: "Cisco, Juniper, Huawei, MikroTik" },
  { name: "Безопасность", level: 65, detail: "Шифрование, firewall, VPN" },
];

const softSkills = [
  { icon: "🧩", name: "Аналитическое мышление", description: "Умение разбираться в сложных системах и находить решения" },
  { icon: "🤝", name: "Коммуникация", description: "Объяснять технические вещи простым языком коллегам и заказчикам" },
  { icon: "⏰", name: "Управление временем", description: "Приоритизация задач, работа в условиях дедлайнов" },
  { icon: "📖", name: "Самообучение", description: "Технологии меняются быстро — нужно постоянно учиться" },
  { icon: "🎯", name: "Внимание к деталям", description: "Одна ошибка в настройке может уронить всю сеть" },
  { icon: "💪", name: "Стрессоустойчивость", description: "Ночные дежурства, аварии, срочные ремонты" },
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
            Инженер связи сочетает техническую экспертизу с мягкими навыками.
            Вот что нужно для успешной карьеры.
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
            Профессиональные сертификаты подтверждают компетенции и повышают
            конкурентоспособность на рынке:
          </p>
          <div className="flex flex-wrap gap-2">
            {["CCNA", "CCNP", "JNCIA", "HCIA", "RF Engineer", "LPIC"].map(
              (cert) => (
                <span
                  key={cert}
                  className="rounded-full px-4 py-1.5 text-[13px] font-medium"
                  style={{
                    background: "linear-gradient(135deg, rgba(52,199,89,0.12), rgba(48,209,88,0.06))",
                    color: "var(--accent)",
                    border: "1px solid rgba(52,199,89,0.15)",
                  }}
                >
                  {cert}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
