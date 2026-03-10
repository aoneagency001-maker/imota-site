import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Как работает",
  description:
    "Как Imota подключается к покерному клубу: этапы настройки, внедрения и сопровождения."
};

const steps = [
  "Подключение клуба и согласование модели работы",
  "Настройка форматов, лимитов и сценариев активности",
  "Запуск решения внутри клубной экосистемы",
  "Мониторинг, оптимизация и масштабирование"
];

const scenarios = [
  "Поддержка активности в ночные и офф-пик часы",
  "Запуск столов при низком онлайне",
  "Контроль загрузки по форматам и лимитам",
  "Мониторинг операционных метрик клуба",
  "Масштабирование на несколько столов или клубов"
];

export default function HowItWorksPage() {
  return (
    <div className="section">
      <div className="container-page">
        <SectionHeading
          title="Как работает Imota для покерных клубов"
          description="Подключение, настройка и запуск AI-решения под вашу модель клуба, форматы игры и операционные задачи."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold">Как устроен подход Imota</h2>
            <p className="mt-4 text-text-secondary">
              Это не продукт для единичного игрока, а слой автоматизации и управления,
              который помогает клубу поддерживать активность, контролировать сценарии
              и выстраивать более стабильную операционную модель.
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold">Технические требования</h2>
            <p className="mt-4 text-text-secondary">
              Подключение не требует тяжёлой новой платформы. Проект строится как
              маркетинговый и интеграционный слой поверх существующей инфраструктуры
              клуба без необходимости строить новый backend с нуля.
            </p>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold">Этапы подключения</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="surface p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-green font-bold text-black">
                  {index + 1}
                </div>
                <p className="text-text-secondary">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold">Поддерживаемые сценарии</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {scenarios.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-divider bg-bg-card p-4"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent-green" />
                <span className="text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/contacts" className="btn-primary">
            Обсудить подключение
          </Link>
          <Link href="/features" className="btn-secondary">
            Посмотреть возможности
          </Link>
        </div>
      </div>
    </div>
  );
}
