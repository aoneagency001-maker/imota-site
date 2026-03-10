"use client";

import { useState } from "react";
import { faqData } from "@/data/faq.data";
import { ChevronDown } from "lucide-react";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="grid gap-4">
      {faqData.map((item, index) => {
        const active = open === index;
        return (
          <div key={item.question} className="surface overflow-hidden">
            <button
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
              onClick={() => setOpen(active ? null : index)}
            >
              <span className="font-medium">{item.question}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 transition ${active ? "rotate-180" : ""}`}
              />
            </button>
            {active ? (
              <div className="border-t border-divider px-5 pb-5 pt-4 text-text-secondary">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
