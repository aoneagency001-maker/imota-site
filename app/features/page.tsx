import type { Metadata } from "next";
import Link from "next/link";
import { featuresData } from "@/data/features.data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Возможности",
  description:
    "Функции и возможности Imota для покерных клубов: автоматизация, аналитика, контроль и масштабирование."
};

export default function FeaturesPage() {
  return (
    <div className="section">
      <div className="container-page">
        <SectionHeading
          title="Возможности Imota для клубов, менеджеров и партнёров"
          description="Функции платформы сгруппированы вокруг клубных задач: автоматизация, контроль, аналитика и масштабирование."
        />

        <div className="mt-10 space-y-12">
          {featuresData.map((group) => (
            <section key={group.category}>
              <h2 className="text-2xl font-bold">{group.category}</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {group.items.map((item) => (
                  <Card key={item.title}>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-text-secondary">{item.description}</p>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/contacts" className="btn-primary">
            Подключить клуб
          </Link>
          <Link href="/pricing" className="btn-secondary">
            Форматы подключения
          </Link>
        </div>
      </div>
    </div>
  );
}
