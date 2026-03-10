"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/navigation.data";
import { siteConfig } from "@/data/site.config";
import { Menu, X } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-divider bg-bg-dark/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 font-bold">
          <span className="inline-block h-3 w-3 rounded-full bg-accent-green shadow-glowGreen" />
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-text-secondary transition hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contacts" className="btn-primary">
            Подключить клуб
          </Link>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-divider lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Открыть меню"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-divider bg-bg-dark lg:hidden">
          <div className="container-page flex flex-col gap-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-secondary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contacts" className="btn-primary" onClick={() => setOpen(false)}>
              Подключить клуб
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
