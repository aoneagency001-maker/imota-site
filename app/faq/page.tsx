import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqList } from "@/components/faq-list";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Часто задаваемые вопросы о подключении Imota для покерных клубов и партнёров."
};

export default function FaqPage() {
  return (
    <div className="section">
      <div className="container-page">
        <SectionHeading
          title="FAQ для клубов и партнёров"
          description="Ответы на основные вопросы по подключению, форматам сотрудничества и модели работы."
        />
        <div className="mt-10 max-w-3xl">
          <FaqList />
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/contacts" className="btn-primary">
            Задать вопрос напрямую
          </Link>
          <Link href="/how-it-works" className="btn-secondary">
            Как работает
          </Link>
        </div>
      </div>
    </div>
  );
}
