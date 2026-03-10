import type { Metadata } from "next";
import Link from "next/link";
import { pricingData } from "@/data/pricing.data";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqList } from "@/components/faq-list";

export const metadata: Metadata = {
  title: "Тарифы",
  description:
    "Форматы подключения Imota для покерных клубов и партнёров: Start, Growth, Partner."
};

export default function PricingPage() {
  return (
    <div className="section">
      <div className="container-page">
        <SectionHeading
          title="Форматы подключения и сотрудничества"
          description="Сначала — решения для клубов, затем — модели для партнёров и сетей. Каждый формат адаптируется под масштаб и задачи."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingData.map((plan) => (
            <div
              key={plan.name}
              className={[
                "surface p-6",
                plan.featured ? "border-accent-green/50 shadow-glowGreen" : "",
                plan.premium ? "border-accent-gold/50 shadow-glowGold" : ""
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {plan.featured ? (
                <div className="mb-4 inline-flex rounded-full bg-accent-green px-3 py-1 text-sm font-semibold text-black">
                  Популярный формат
                </div>
              ) : null}
              {plan.premium ? (
                <div className="mb-4 inline-flex rounded-full border border-accent-gold/40 bg-accent-gold/10 px-3 py-1 text-sm font-semibold text-accent-gold">
                  Partner
                </div>
              ) : null}
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <p className="mt-2 text-text-secondary">{plan.subtitle}</p>
              <ul className="mt-6 space-y-3 text-text-secondary">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contacts" className="btn-primary mt-8 block w-full text-center">
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading title="Вопросы по тарифам" />
          <div className="mt-8">
            <FaqList />
          </div>
        </div>
      </div>
    </div>
  );
}
