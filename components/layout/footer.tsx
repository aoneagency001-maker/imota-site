import Link from "next/link";
import { navigation } from "@/data/navigation.data";
import { siteConfig } from "@/data/site.config";

export function Footer() {
  return (
    <footer className="border-t border-divider py-10">
      <div className="container-page grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 font-bold">
            <span className="inline-block h-3 w-3 rounded-full bg-accent-green" />
            <span>{siteConfig.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-text-secondary">
            Imota — AI-решение для покерных клубов и партнёров, которое помогает
            поддерживать игровые столы 24/7, снижать операционную нагрузку и
            улучшать управляемость клуба.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Навигация</h3>
          <div className="mt-4 grid gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-secondary transition hover:text-text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Контакты</h3>
          <div className="mt-4 grid gap-2 text-text-secondary">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-text-primary">
              {siteConfig.email}
            </a>
            <a href={siteConfig.telegram} target="_blank" rel="noreferrer" className="hover:text-text-primary">
              Telegram
            </a>
            <a href={siteConfig.discord} target="_blank" rel="noreferrer" className="hover:text-text-primary">
              Discord
            </a>
            <Link href="/privacy" className="hover:text-text-primary">Privacy</Link>
            <Link href="/terms" className="hover:text-text-primary">Terms</Link>
          </div>
        </div>
      </div>

      <div className="container-page mt-10 border-t border-divider pt-6 text-sm text-text-hint">
        © {new Date().getFullYear()} {siteConfig.name}. Все права защищены.
      </div>
    </footer>
  );
}
