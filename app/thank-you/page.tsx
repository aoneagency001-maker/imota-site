import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site.config";

export const metadata: Metadata = {
  title: "Спасибо",
  description: "Заявка отправлена.",
  robots: { index: false }
};

export default function ThankYouPage() {
  return (
    <div className="section">
      <div className="container-page max-w-2xl">
        <div className="surface p-8 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent-green/10">
            <span className="text-3xl text-accent-green">✓</span>
          </div>
          <h1 className="text-3xl font-bold">Спасибо, заявка отправлена</h1>
          <p className="mt-4 text-text-secondary">
            Мы получили ваше обращение и свяжемся с вами в ближайшее время.
            Если вопрос срочный — напишите нам напрямую в{" "}
            <a href={siteConfig.telegram} target="_blank" rel="noreferrer" className="text-accent-green hover:underline">
              Telegram
            </a>
            .
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary">
              Вернуться на главную
            </Link>
            <Link href="/contacts" className="btn-secondary">
              Открыть контакты
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
