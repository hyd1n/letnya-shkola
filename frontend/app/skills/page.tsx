import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Навыки | Инженер связи",
  description: "Какие компетенции нужны инженеру связи",
};

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
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="mb-1 flex items-center justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-accent">{level}%</span>
      </div>
      <p className="mb-2 text-xs text-muted">{detail}</p>
      <div className="h-2 w-full overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full bg-accent transition-all"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Навыки</h1>
        <p className="mx-auto max-w-2xl text-muted">
          Инженер связи сочетает техническую экспертизу с мягкими навыками.
          Вот что нужно для успешной карьеры.
        </p>
      </div>

      <h2 className="mb-6 text-xl font-semibold">Технические навыки</h2>
      <div className="mb-16 grid gap-3 sm:grid-cols-2">
        {hardSkills.map((s) => (
          <SkillBar key={s.name} {...s} />
        ))}
      </div>

      <h2 className="mb-6 text-xl font-semibold">Мягкие навыки</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {softSkills.map((s) => (
          <div
            key={s.name}
            className="rounded-xl border border-border bg-card p-5 transition-all hover:border-accent hover:shadow-md"
          >
            <span className="mb-2 block text-2xl">{s.icon}</span>
            <h3 className="mb-1 font-semibold">{s.name}</h3>
            <p className="text-sm text-muted">{s.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold">Сертификации</h2>
        <p className="mb-4 text-muted">
          Профессиональные сертификаты подтверждают компетенции и повышают
          конкурентоспособность на рынке:
        </p>
        <div className="flex flex-wrap gap-2">
          {["CCNA", "CCNP", "JNCIA", "HCIA", "RF Engineer", "LPIC"].map(
            (cert) => (
              <span
                key={cert}
                className="rounded-full bg-accent-light px-3 py-1 text-sm font-medium text-accent"
              >
                {cert}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}
