import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/data/site.config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Imota — AI-решение для покерных клубов",
    template: `%s | ${siteConfig.name}`
  },
  description:
    "Imota помогает покерным клубам запускать столы в часы низкой активности, снижать ручную нагрузку и улучшать управляемость клуба.",
  openGraph: {
    title: "Imota — AI-решение для покерных клубов",
    description:
      "AI-решение для роста и автоматизации покерных клубов, партнёров и клубных сетей.",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: "ru_RU",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
