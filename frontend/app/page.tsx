import Link from "next/link";

const sections = [
  {
    href: "/about",
    icon: "📡",
    title: "О профессии",
    description: "Кто такой инженер связи и чем он занимается",
  },
  {
    href: "/skills",
    icon: "🛠",
    title: "Навыки",
    description: "Какие компетенции нужны для работы",
  },
  {
    href: "/career",
    icon: "📈",
    title: "Карьера",
    description: "Карьерный путь и возможности роста",
  },
  {
    href: "/education",
    icon: "🎓",
    title: "Образование",
    description: "Где учиться и какие экзамены сдавать",
  },
];

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center px-4 py-20 text-center">
        <span className="mb-4 inline-block rounded-full bg-accent-light px-4 py-1 text-sm font-medium text-accent">
          Профессия будущего
        </span>
        <h1 className="mb-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Инженер связи
        </h1>
        <p className="mb-8 max-w-xl text-lg text-muted">
          Специалист, который проектирует, создаёт и обслуживает сети связи —
          от мобильных вышек до спутниковых систем. Без него не работает ни
          один звонок, ни один интернет‑запрос.
        </p>
        <div className="flex gap-3">
          <Link
            href="/about"
            className="rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Узнать больше
          </Link>
          <Link
            href="/education"
            className="rounded-lg border border-border px-6 py-3 font-medium transition-colors hover:bg-accent-light"
          >
            Как стать
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20">
        <h2 className="mb-8 text-center text-2xl font-semibold">
          Что нужно знать
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-md"
            >
              <span className="mb-3 block text-3xl">{s.icon}</span>
              <h3 className="mb-1 font-semibold transition-colors group-hover:text-accent">
                {s.title}
              </h3>
              <p className="text-sm text-muted">{s.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-accent-light/30 px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-semibold">Цифры и факты</h2>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { value: "5G/6G", label: "Новые стандарты" },
              { value: "100K+", label: "Вакансий в России" },
              { value: "от 80K₽", label: "Средняя зарплата" },
              { value: "∞", label: "Спрос на рынке" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-accent">{stat.value}</p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
