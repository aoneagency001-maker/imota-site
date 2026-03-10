"use client";

import { useState } from "react";

type Props = {
  showClubSize?: boolean;
  showTelegram?: boolean;
};

export function ContactForm({ showClubSize = false, showTelegram = true }: Props) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="surface p-6 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-green/10">
          <span className="text-2xl text-accent-green">✓</span>
        </div>
        <p className="font-semibold text-text-primary">Заявка отправлена</p>
        <p className="mt-2 text-sm text-text-secondary">
          Подключите реальную отправку через server action или webhook.
        </p>
      </div>
    );
  }

  return (
    <form
      className="surface space-y-4 p-6"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {/* honeypot */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-4 md:grid-cols-2">
        <input className="input" placeholder="Имя" required />
        <input className="input" type="email" placeholder="Email" required />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {showTelegram && <input className="input" placeholder="Telegram" />}
        <select className="input" defaultValue="Подключение клуба">
          <option>Подключение клуба</option>
          <option>Партнёрство</option>
          <option>Вопрос по тарифам</option>
          <option>Консультация</option>
          <option>Другое</option>
        </select>
      </div>

      <input className="input" placeholder="Название клуба / проекта" />
      {showClubSize && (
        <input className="input" placeholder="Размер клуба / аудитории" />
      )}
      <textarea className="textarea min-h-32" placeholder="Сообщение" />

      <button className="btn-primary w-full" type="submit">
        Отправить заявку
      </button>
    </form>
  );
}
