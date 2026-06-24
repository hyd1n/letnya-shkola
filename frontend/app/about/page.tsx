import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О профессии | Инженер связи",
  description: "Кто такой инженер связи и чем он занимается",
};

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
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
          О профессии
        </h1>
        <p className="mx-auto max-w-2xl text-muted">
          Инженер связи — это специалист, который обеспечивает бесперебойную
          работу систем передачи данных, голоса и видео. Он работает на
          стыке электроники, программирования и телекоммуникаций.
        </p>
      </div>

      <div className="mb-16 rounded-xl border border-border bg-card p-6 sm:p-8">
        <h2 className="mb-4 text-xl font-semibold">Что такое связь?</h2>
        <p className="leading-relaxed text-muted">
          Связь — это передача информации на расстояние с помощью
          электромагнитных сигналов. Инженер связи работает с радиочастотами,
          оптоволокном, спутниковыми каналами и мобильными сетями. Его цель —
          чтобы информация доходила быстро, без потерь и в любую точку мира.
        </p>
      </div>

      <h2 className="mb-8 text-center text-2xl font-semibold">
        Основные обязанности
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {responsibilities.map((r) => (
          <div
            key={r.title}
            className="rounded-xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-md"
          >
            <span className="mb-3 block text-3xl">{r.icon}</span>
            <h3 className="mb-2 font-semibold">{r.title}</h3>
            <p className="text-sm text-muted">{r.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-xl border border-accent bg-accent-light/20 p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold">Интересный факт</h2>
        <p className="text-muted">
          Первая радиосвязь была установлена Александром Поповым в 1895 году.
          С тех пор инженеры связи прошли путь от телеграфных аппаратов до
          сетей 5G и спутникового интернета Starlink. Профессия остаётся одной
          из самых востребованных в мире.
        </p>
      </div>
    </div>
  );
}
