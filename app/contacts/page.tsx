import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/data/site.config";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Свяжитесь с командой Imota по вопросам подключения клуба, партнёрства или тарифов."
};

export default function ContactsPage() {
  return (
    <div className="section">
      <div className="container-page">
        <SectionHeading
          title="Контакты Imota"
          description="Свяжитесь с нами по вопросам подключения клуба, партнёрства, тарифов или индивидуального обсуждения модели работы."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-8">
            <div className="surface p-6">
              <h3 className="font-semibold">Контактные данные</h3>
              <div className="mt-4 space-y-3 text-text-secondary">
                <div>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-text-primary">
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <a href={siteConfig.telegram} target="_blank" rel="noreferrer" className="hover:text-text-primary">
                    Telegram
                  </a>
                </div>
                <div>
                  <a href={siteConfig.discord} target="_blank" rel="noreferrer" className="hover:text-text-primary">
                    Discord
                  </a>
                </div>
              </div>
            </div>

            <div className="surface p-6">
              <h3 className="font-semibold">После отправки заявки</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Рассматриваем обращение в течение рабочего дня",
                  "Отвечаем с уточняющими вопросами или предложением",
                  "Назначаем звонок или обсуждение в мессенджере",
                  "Предлагаем подходящий формат подключения"
                ].map((step) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-green" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ContactForm showTelegram />
        </div>
      </div>
    </div>
  );
}
