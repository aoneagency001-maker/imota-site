import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { LiveCounters } from "@/components/live-counters";
import { Card } from "@/components/ui/card";
import { homeData } from "@/data/home.data";

export const metadata: Metadata = {
  title: "Результаты",
  description:
    "Что получают покерные клубы после подключения Imota: рост активности, снижение нагрузки, управляемость."
};

const results = [
  "Стабильнее запуск столов",
  "Ниже доля пустых лобби",
  "Выше предсказуемость операционной модели",
  "Больше игровых действий в офф-пик",
  "Ниже ручная нагрузка на менеджеров",
  "Понятнее распределение трафика по форматам"
];

export default function ResultsPage() {
  return (
    <div className="section">
      <div className="container-page">
        <SectionHeading
          title="Результаты, которых клубы добиваются с Imota"
          description="Imota помогает улучшать загрузку столов, повышать управляемость клуба и снижать ручную нагрузку на операционную команду."
        />

        <div className="mt-10">
          <LiveCounters />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {results.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-divider bg-bg-card p-5"
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent-green" />
              <h3 className="font-semibold">{item}</h3>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold">Кейсы клубов</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {homeData.cases.map((item) => (
              <Card key={item.title}>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <div className="mt-5 space-y-3 text-text-secondary">
                  <p>
                    <span className="text-text-primary">Задача: </span>
                    {item.problem}
                  </p>
                  <p>
                    <span className="text-text-primary">Решение: </span>
                    {item.solution}
                  </p>
                  <p>
                    <span className="text-text-primary">Результат: </span>
                    {item.result}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contacts" className="btn-primary">
            Подключить клуб
          </Link>
          <Link href="/how-it-works" className="btn-secondary">
            Как это работает
          </Link>
        </div>
      </div>
    </div>
  );
}
