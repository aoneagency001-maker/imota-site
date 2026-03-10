import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section">
      <div className="container-page max-w-2xl text-center">
        <div className="text-7xl font-bold text-accent-green/30">404</div>
        <h1 className="mt-4 text-3xl font-bold">Страница не найдена</h1>
        <p className="mt-4 text-text-secondary">
          Возможно, ссылка устарела или страница была перемещена. Перейдите на главную
          или откройте нужный раздел через меню сайта.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            На главную
          </Link>
          <Link href="/contacts" className="btn-secondary">
            Открыть контакты
          </Link>
        </div>
      </div>
    </div>
  );
}
