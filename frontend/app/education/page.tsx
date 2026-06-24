import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Образование | Инженер связи",
  description: "Где учиться и какие экзамены сдавать",
};

const exams = [
  { subject: "Математика", code: "02", importance: "Обязательный" },
  { subject: "Русский язык", code: "01", importance: "Обязательный" },
  { subject: "Физика", code: "03", importance: "Профильный" },
  { subject: "Информатика", code: "04", importance: "Профильный" },
];

const universities = [
  {
    name: "МТУСИ",
    city: "Москва",
    description: "Московский технический университет связи и информатики",
  },
  {
    name: "СПбГУТ",
    city: "Санкт-Петербург",
    description: "Санкт-Петербургский университет телекоммуникаций",
  },
  {
    name: "МАСИ",
    city: "Москва",
    description: "Московский авиационный институт",
  },
  {
    name: "НГТУ",
    city: "Новосибирск",
    description: "Новосибирский государственный технический университет",
  },
  {
    name: "КФУ",
    city: "Казань",
    description: "Казанский федеральный университет",
  },
  {
    name: "ДВФУ",
    city: "Владивосток",
    description: "Дальневосточный федеральный университет",
  },
];

const steps = [
  {
    number: "01",
    title: "Школа",
    description: "Углублённое изучение физики и информатики, участие в олимпиадах и кружках радиоэлектроники.",
  },
  {
    number: "02",
    title: "ЕГЭ",
    description: "Сдайте профильную физику и информатику. Высокие баллы открывают двери в лучшие вузы.",
  },
  {
    number: "03",
    title: "Университет",
    description: "4–6 лет обучения на факультете связи, телекоммуникаций или радиоэлектроники.",
  },
  {
    number: "04",
    title: "Практика",
    description: "Стажировки в телеком-компаниях, работа с реальным оборудованием, защита диплома.",
  },
  {
    number: "05",
    title: "Карьера",
    description: "Трудоустройство в оператора связи,.vendor-компанию или интегратора. Дальнейший рост.",
  },
];

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Образование</h1>
        <p className="mx-auto max-w-2xl text-muted">
          Как стать инженером связи: от школьного предмета до диплома
          университета.
        </p>
      </div>

      <h2 className="mb-8 text-center text-2xl font-semibold">Путь к профессии</h2>
      <div className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-xl border border-border bg-card p-5 text-center"
          >
            <span className="mb-2 block text-3xl font-bold text-accent">
              {step.number}
            </span>
            <h3 className="mb-2 font-semibold">{step.title}</h3>
            <p className="text-sm text-muted">{step.description}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-8 text-center text-2xl font-semibold">Необходимые экзамены</h2>
      <div className="mb-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {exams.map((e) => (
          <div
            key={e.code}
            className="rounded-xl border border-border bg-card p-5 text-center"
          >
            <span className="mb-1 block text-xs text-muted">
              Код: {e.code}
            </span>
            <h3 className="font-semibold">{e.subject}</h3>
            <span className="mt-2 inline-block rounded-full bg-accent-light px-2 py-0.5 text-xs text-accent">
              {e.importance}
            </span>
          </div>
        ))}
      </div>

      <h2 className="mb-8 text-center text-2xl font-semibold">Вузы</h2>
      <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {universities.map((u) => (
          <div
            key={u.name}
            className="rounded-xl border border-border bg-card p-5 transition-all hover:border-accent hover:shadow-md"
          >
            <h3 className="mb-1 font-semibold text-accent">{u.name}</h3>
            <p className="mb-1 text-sm font-medium">{u.city}</p>
            <p className="text-sm text-muted">{u.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-accent bg-accent-light/20 p-6 text-center sm:p-8">
        <h2 className="mb-3 text-xl font-semibold">Готовы начать?</h2>
        <p className="mb-4 text-muted">
          Профессия инженера связи — это стабильность, рост и возможность
          менять мир технологий.
        </p>
        <Link
          href="/about"
          className="inline-block rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Узнать больше о профессии
        </Link>
      </div>
    </div>
  );
}
