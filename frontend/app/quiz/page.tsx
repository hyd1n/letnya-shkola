"use client";

import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "Что такое VLAN?",
    options: [
      "Виртуальная локальная сеть — логическое разделение сети на сегменты",
      "Тип маршрутизатора от Cisco",
      "Протокол для передачи файлов",
      "Антивирусная программа",
    ],
    correct: 0,
  },
  {
    id: 2,
    question: "Какой протокол используется для автоматического получения IP-адреса?",
    options: [
      "DNS",
      "HTTP",
      "DHCP",
      "FTP",
    ],
    correct: 2,
  },
  {
    id: 3,
    question: "Что делает маршрутизатор (router)?",
    options: [
      "Раздаёт Wi-Fi в кафе",
      "Перенаправляет пакеты данных между разными сетями",
      "Устанавливает операционную систему на компьютер",
      "Защищает от вирусов",
    ],
    correct: 1,
  },
  {
    id: 4,
    question: "Какой сертификат считается «входным билетом» в профессию сетевого инженера?",
    options: [
      "LPIC",
      "CCNA",
      "AWS Cloud Practitioner",
      "CompTIA A+",
    ],
    correct: 1,
  },
  {
    id: 5,
    question: "Что такое VPN?",
    options: [
      "Виртуальная частная сеть — зашифрованный канал между устройствами",
      "Тип кабеля для подключения к интернету",
      "Программа для работы с электронной почтой",
      "Сервер для хранения файлов",
    ],
    correct: 0,
  },
  {
    id: 6,
    question: "Какая модель разделяет сетевое взаимодействие на 7 уровней?",
    options: [
      "TCP/IP",
      "OSI",
      "HTTP",
      "SMTP",
    ],
    correct: 1,
  },
  {
    id: 7,
    question: "Какой инструмент используется для мониторинга состояния сети?",
    options: [
      "Photoshop",
      "Zabbix",
      "Excel",
      "Visual Studio Code",
    ],
    correct: 1,
  },
  {
    id: 8,
    question: "Что такое DDoS-атака?",
    options: [
      "Кража паролей через фишинг",
      "Заваливание сервера огромным количеством запросов для вывода из строя",
      "Установка вируса на компьютер",
      "Перехват Wi-Fi сигнала",
    ],
    correct: 1,
  },
  {
    id: 9,
    question: "Какое оборудование НЕ относится к сетевому?",
    options: [
      "Коммутатор (switch)",
      "Маршрутизатор (router)",
      "Принтер",
      "Точка доступа Wi-Fi",
    ],
    correct: 2,
  },
  {
    id: 10,
    question: "Какой протокол обеспечивает безопасную передачу данных в веб-браузере?",
    options: [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP",
    ],
    correct: 2,
  },
];

const results = [
  { min: 0, max: 3, title: "Начинающий", description: "Эта профессия пока не для тебя — но это не повод сдаваться! Начни с изучения основ сетей и попробуй снова." },
  { min: 4, max: 6, title: "Есть потенциал", description: "Ты на правильном пути! Изучи базовые протоколы, поиграй в Cisco Packet Tracer — и у тебя всё получится." },
  { min: 7, max: 8, title: "Хороший результат", description: "Ты хорошо разбираешься в сетях! Это профессия точно для тебя — осталось подтянуть практику." },
  { min: 9, max: 10, title: "Превосходно!", description: "Ты настоящий сетевой инженер! У тебя отличные знания — можешь смело начинать карьеру." },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    const newAnswers = [...answers, index];
    setAnswers(newAnswers);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setAnswers([]);
    setShowResult(false);
  };

  const correctCount = answers.filter((a, i) => a === questions[i].correct).length;
  const result = results.find((r) => correctCount >= r.min && correctCount <= r.max);

  if (showResult && result) {
    return (
      <div className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-[680px] text-center">
          <h1
            className="mb-5 text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight"
            style={{ letterSpacing: "-0.03em", lineHeight: "1.05" }}
          >
            Результаты теста
          </h1>

          <div
            className="mb-10 overflow-hidden rounded-[var(--radius-xl)] p-8 sm:p-12"
            style={{
              background: "linear-gradient(135deg, rgba(52,199,89,0.08), rgba(48,209,88,0.04))",
              border: "1px solid rgba(52,199,89,0.12)",
            }}
          >
            <p className="mb-2 text-[48px] font-bold text-accent" style={{ letterSpacing: "-0.03em" }}>
              {correctCount} / {questions.length}
            </p>
            <p
              className="mb-4 text-[22px] font-semibold"
              style={{ letterSpacing: "-0.02em" }}
            >
              {result.title}
            </p>
            <p
              className="text-[15px] leading-relaxed"
              style={{ color: "var(--fg-secondary)" }}
            >
              {result.description}
            </p>
          </div>

          {/* Detailed answers */}
          <div className="mb-10 text-left">
            <h2
              className="mb-6 text-[20px] font-semibold tracking-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Разбор ответов
            </h2>
            <div className="space-y-4">
              {questions.map((q, i) => (
                <div
                  key={q.id}
                  className="rounded-[var(--radius-lg)] p-5"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                    boxShadow: "var(--card-shadow)",
                  }}
                >
                  <p className="mb-2 text-[14px] font-semibold">
                    {i + 1}. {q.question}
                  </p>
                  <p
                    className="text-[13px]"
                    style={{
                      color: answers[i] === q.correct ? "var(--accent)" : "#ff3b30",
                    }}
                  >
                    {answers[i] === q.correct ? "✓ Верно" : "✗ Неверно"} — {q.options[q.correct]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={restart}
            className="inline-flex items-center rounded-full px-7 py-3 text-[15px] font-medium text-white transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
              boxShadow: "0 2px 12px rgba(52, 199, 89, 0.3)",
            }}
          >
            Пройти заново
          </button>
        </div>
      </div>
    );
  }

  const q = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-[680px]">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1
            className="mb-5 text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight"
            style={{ letterSpacing: "-0.03em", lineHeight: "1.05" }}
          >
            Тест на профпригодность
          </h1>
          <p
            className="text-[15px]"
            style={{ color: "var(--fg-secondary)" }}
          >
            Проверь, подходит ли тебе профессия инженера-проектировщика сетей
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[13px] font-medium" style={{ color: "var(--fg-secondary)" }}>
              Вопрос {current + 1} из {questions.length}
            </span>
            <span className="text-[13px] font-medium text-accent">
              {Math.round(progress)}%
            </span>
          </div>
          <div
            className="h-2 w-full overflow-hidden rounded-full"
            style={{ backgroundColor: "var(--divider)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, var(--gradient-start), var(--gradient-end))",
              }}
            />
          </div>
        </div>

        {/* Question card */}
        <div
          className="rounded-[var(--radius-xl)] p-8 sm:p-10"
          style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            boxShadow: "var(--card-shadow)",
          }}
        >
          <h2
            className="mb-8 text-[20px] font-semibold tracking-tight sm:text-[22px]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {q.question}
          </h2>
          <div className="space-y-3">
            {q.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="w-full rounded-[var(--radius-md)] p-4 text-left text-[15px] transition-all duration-200"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  boxShadow: "var(--card-shadow)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.boxShadow = "var(--card-shadow-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--card-border)";
                  e.currentTarget.style.boxShadow = "var(--card-shadow)";
                }}
              >
                <span className="mr-3 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[13px] font-medium text-accent" style={{ backgroundColor: "var(--divider)" }}>
                  {String.fromCharCode(65 + i)}
                </span>
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
