import Link from "next/link";
import { homeData } from "@/data/home.data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { LiveCounters } from "@/components/live-counters";
import { FaqList } from "@/components/faq-list";
import { pricingData } from "@/data/pricing.data";
import { BarChart3, Bot, CircleGauge, Users } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="badge-live">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent-green" />
              B2B решение для клубов и партнёров
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              {homeData.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-text-secondary md:text-xl">
              {homeData.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={homeData.hero.primaryCta.href} className="btn-primary">
                {homeData.hero.primaryCta.label}
              </Link>
              <Link href={homeData.hero.secondaryCta.href} className="btn-secondary">
                {homeData.hero.secondaryCta.label}
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {homeData.hero.bullets.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-divider bg-bg-card px-4 py-3 text-sm text-text-secondary"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="hero-grid surface relative overflow-hidden p-6 lg:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-accent-green/30 shadow-glowGreen">
                <div className="text-sm text-text-secondary">Active Club Sessions</div>
                <div className="mt-3 text-3xl font-bold text-accent-green">184</div>
                <div className="mt-2 text-sm text-text-hint">AI Activity: Active</div>
              </Card>

              <Card>
                <div className="text-sm text-text-secondary">Hands Processed</div>
                <div className="mt-3 text-3xl font-bold text-accent-blue">482K</div>
                <div className="mt-2 text-sm text-text-hint">За последние 24 часа</div>
              </Card>

              <Card>
                <div className="text-sm text-text-secondary">Rake Efficiency</div>
                <div className="mt-3 text-3xl font-bold text-accent-gold">+18%</div>
                <div className="mt-2 text-sm text-text-hint">Демо-метрика эффективности</div>
              </Card>

              <Card>
                <div className="text-sm text-text-secondary">Traffic Stability</div>
                <div className="mt-4 h-20 rounded-xl bg-bg-surface p-3">
                  <div className="flex h-full items-end gap-2">
                    {[30, 40, 36, 52, 48, 60, 72, 68].map((h, i) => (
                      <div
                        key={i}
                        className="w-full rounded-t bg-accent-green/70"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-4 rounded-xl border border-divider bg-bg-surface p-4">
              <div className="text-sm text-text-secondary">Лимиты и форматы</div>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                {["NLH 1/2", "NLH 2/4", "PLO", "Short Deck", "Partner Mode"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-divider px-3 py-1 text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live counters */}
      <section className="section border-y border-divider bg-bg-card/40">
        <div className="container-page">
          <SectionHeading
            title="Живая статистика Imota для покерных клубов"
            description="Демо-метрики показывают, как может выглядеть активность клуба при использовании AI-решения: больше игровых действий, стабильнее загрузка столов, меньше простоев."
          />
          <p className="mt-3 text-sm text-text-hint">
            Демо-режим: значения обновляются динамически и не являются данными из реального API.
          </p>
          <div className="mt-10">
            <LiveCounters />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            title="Почему Imota выгодна именно клубу"
            description="Imota — инфраструктурное решение для владельцев клубов, менеджеров и партнёров, которым важно масштабировать трафик, снижать операционную нагрузку и развивать клуб на основе данных."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {homeData.benefits.map((item, index) => {
              const icons = [CircleGauge, Bot, Users, BarChart3];
              const Icon = icons[index];
              return (
                <Card key={item.title}>
                  <Icon className="text-accent-green" size={22} />
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-text-secondary">{item.text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section border-y border-divider bg-bg-card/40">
        <div className="container-page">
          <SectionHeading
            title="Как подключить Imota к вашему клубу"
            description="Подключение выстроено в B2B-формате: без лишнего погружения в технические детали, но с понятным контролем результата на уровне целей клуба, форматов и метрик."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {homeData.steps.map((item, index) => (
              <div key={item.title} className="surface p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-green font-bold text-black">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-text-secondary">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            title="Для кого создана Imota"
            description="Imota подходит как для отдельных клубов, так и для сетей, фондов и партнёрских структур, которым нужен управляемый инструмент роста и автоматизации."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {homeData.segments.map((item, index) => (
              <Card key={item.title} className={index === 4 ? "opacity-75" : undefined}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-text-secondary">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="section border-y border-divider bg-bg-card/40">
        <div className="container-page">
          <SectionHeading
            title="Что получают клубы после подключения Imota"
            description="Imota помогает улучшать загрузку столов, делать результаты клуба более предсказуемыми и упрощать управление игровой активностью."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
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
          <div className="mt-8">
            <Link href="/results" className="btn-secondary">
              Посмотреть все результаты
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            title="Форматы подключения для клубов и партнёров"
            description="Выберите формат сотрудничества под текущий масштаб клуба — от пилотного запуска до комплексной партнёрской модели."
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
                <h3 className="text-2xl font-bold">{plan.name}</h3>
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
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="section border-y border-divider bg-bg-card/40">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <SectionHeading title="Частые вопросы от клубов и партнёров" />
            <div className="mt-8">
              <FaqList />
            </div>
          </div>

          <div className="surface p-6 lg:p-8">
            <h3 className="text-2xl font-bold">
              Обсудим подключение Imota под ваш клуб
            </h3>
            <p className="mt-4 text-text-secondary">
              Расскажите о клубе, текущем объёме трафика и формате работы — мы
              предложим подходящую модель подключения и формат сопровождения.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contacts" className="btn-primary">
                Оставить заявку
              </Link>
              <Link href="/partners" className="btn-secondary">
                Партнёрство
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
