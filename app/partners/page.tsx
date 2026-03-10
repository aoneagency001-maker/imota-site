import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Партнёрам",
  description:
    "Партнёрство с покерными клубами и сетями через Imota: форматы сотрудничества, преимущества и форма заявки."
};

const blocks = [
  {
    title: "Оффер для клуба",
    text: "Imota помогает клубам выстраивать более эффективную модель игровой активности и снижать операционную нагрузку без тяжёлой инфраструктуры."
  },
  {
    title: "Оффер для партнёра",
    text: "Партнёры и операторы могут использовать Imota как готовое B2B-решение для работы с клубами, не строя собственный продукт."
  },
  {
    title: "Сценарии взаимодействия",
    text: "Подключение одного клуба, запуск сети, пилотный формат, индивидуальная модель для команды, фонда или оператора."
  }
];

const advantages = [
  "Готовый B2B-продукт без необходимости строить собственную инфраструктуру",
  "Гибкий формат подключения для сетей, команд и операторов",
  "Модель, которую можно обсуждать индивидуально под задачи проекта",
  "Поддержка на всех этапах: от пилота до масштабирования",
  "Возможность предлагать решение своим клубам как B2B-продукт"
];

export default function PartnersPage() {
  return (
    <div className="section">
      <div className="container-page">
        <SectionHeading
          title="Партнёрство с клубами и сетями через Imota"
          description="Imota помогает клубам и партнёрам выстраивать более эффективную модель игровой активности, автоматизации и масштабирования без тяжёлой собственной инфраструктуры."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {blocks.map((item) => (
            <Card key={item.title}>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-text-secondary">{item.text}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_.9fr]">
          <div className="surface p-6 lg:p-8">
            <h2 className="text-2xl font-bold">Почему партнёры выбирают Imota</h2>
            <ul className="mt-6 space-y-3">
              {advantages.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold">Оставить заявку на партнёрство</h2>
            <ContactForm showClubSize showTelegram />
          </div>
        </div>
      </div>
    </div>
  );
}
