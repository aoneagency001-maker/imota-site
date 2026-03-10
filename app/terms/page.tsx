import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Условия использования",
  description: "Условия использования сайта Imota."
};

export default function TermsPage() {
  return (
    <div className="section">
      <div className="container-page max-w-3xl">
        <SectionHeading title="Условия использования" />
        <div className="prose-dark mt-10">
          <p>Последнее обновление: март 2026.</p>
          <p className="mt-4">
            Используя этот сайт, вы соглашаетесь с тем, что он является маркетинговым
            ресурсом и не предоставляет доступ к игровым платформам, не принимает
            платежи и не является публичной офертой.
          </p>
          <p className="mt-4">
            Все метрики и счётчики на сайте являются иллюстративными и не отражают
            реальных данных из API.
          </p>
          <p className="mt-4">
            По вопросам обращайтесь через форму в разделе Контакты.
          </p>
        </div>
      </div>
    </div>
  );
}
