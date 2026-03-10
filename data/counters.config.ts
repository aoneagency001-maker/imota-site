export const liveCounters = [
  {
    id: "active-club-sessions",
    label: "Активных клубных сессий сейчас",
    initial: 184,
    minValue: 160,
    maxValue: 260,
    minStep: 1,
    maxStep: 4,
    interval: 2600,
    format: "number" as const,
    description:
      "Imota помогает поддерживать активность столов даже в часы низкого онлайна."
  },
  {
    id: "actions-24h",
    label: "Обработано игровых действий за 24 часа",
    initial: 482300,
    minValue: 410000,
    maxValue: 590000,
    minStep: 120,
    maxStep: 850,
    interval: 1800,
    format: "number" as const,
    description:
      "AI-движок поддерживает динамику игровых сценариев и управляемость активности."
  },
  {
    id: "monthly-activity",
    label: "Суммарный объём активности за месяц",
    initial: 12400000,
    minValue: 11000000,
    maxValue: 14900000,
    minStep: 1800,
    maxStep: 9500,
    interval: 2200,
    format: "compact" as const,
    description:
      "Рост игровых действий создаёт базу для роста клубной эффективности."
  },
  {
    id: "connected-clubs",
    label: "Подключено клубов и партнёров",
    initial: 37,
    minValue: 28,
    maxValue: 62,
    minStep: 0,
    maxStep: 1,
    interval: 7000,
    format: "number" as const,
    description:
      "Imota подходит как отдельным клубам, так и сетям и партнёрским структурам."
  }
];
