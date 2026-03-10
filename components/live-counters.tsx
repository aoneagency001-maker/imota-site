"use client";

import { useEffect, useMemo, useState } from "react";
import { liveCounters } from "@/data/counters.config";
import { Card } from "@/components/ui/card";

type CounterState = Record<string, number>;

function formatValue(value: number, format: "number" | "compact") {
  if (format === "compact") {
    return new Intl.NumberFormat("ru-RU", {
      notation: "compact",
      maximumFractionDigits: 1
    }).format(value);
  }
  return new Intl.NumberFormat("ru-RU").format(value);
}

export function LiveCounters() {
  const initialState = useMemo<CounterState>(() => {
    return Object.fromEntries(liveCounters.map((item) => [item.id, item.initial]));
  }, []);

  const [values, setValues] = useState<CounterState>(initialState);

  useEffect(() => {
    const timers = liveCounters.map((counter) => {
      return window.setInterval(() => {
        setValues((prev) => {
          const current = prev[counter.id];
          const direction = Math.random() > 0.2 ? 1 : -1;
          const step =
            Math.floor(Math.random() * (counter.maxStep - counter.minStep + 1)) +
            counter.minStep;

          let next = current + step * direction;
          if (next > counter.maxValue) next = counter.maxValue - step;
          if (next < counter.minValue) next = counter.minValue + step;

          return { ...prev, [counter.id]: next };
        });
      }, counter.interval);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {liveCounters.map((counter) => (
        <Card key={counter.id} className="relative overflow-hidden">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-text-secondary">{counter.label}</span>
            <span className="badge-live">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent-green" />
              Live
            </span>
          </div>
          <div className="number-tabular text-3xl font-bold text-accent-green md:text-4xl">
            {formatValue(values[counter.id], counter.format)}
          </div>
          <p className="mt-4 text-sm text-text-hint">{counter.description}</p>
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-accent-green/70 to-transparent" />
        </Card>
      ))}
    </div>
  );
}
