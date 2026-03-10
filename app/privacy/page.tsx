import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Политика конфиденциальности Imota."
};

export default function PrivacyPage() {
  return (
    <div className="section">
      <div className="container-page max-w-3xl">
        <SectionHeading title="Политика конфиденциальности" />
        <div className="prose-dark mt-10">
          <p>Последнее обновление: март 2026.</p>
          <p className="mt-4">
            Мы собираем только те данные, которые вы добровольно предоставляете через
            формы на сайте (имя, email, Telegram, название клуба, сообщение). Эти данные
            используются исключительно для обработки вашего обращения и не передаются
            третьим лицам в маркетинговых целях.
          </p>
          <p className="mt-4">
            По вопросам обработки данных обращайтесь на email, указанный в разделе Контакты.
          </p>
        </div>
      </div>
    </div>
  );
}
