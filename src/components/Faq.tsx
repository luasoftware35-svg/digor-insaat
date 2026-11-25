"use client";

import { useState } from "react";
import { faqs } from "@/data/content";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
      {faqs.map((item, i) => (
        <button
          key={item.q}
          type="button"
          onClick={() => setOpen(open === i ? -1 : i)}
          className="w-full py-6 text-left"
        >
          <div className="flex items-baseline justify-between gap-6">
            <h3 className="font-serif text-2xl md:text-3xl">{item.q}</h3>
            <span className="text-gold">{open === i ? "—" : "+"}</span>
          </div>
          <div
            className={`grid transition-[grid-template-rows] duration-300 ${
              open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <p className="overflow-hidden text-sm leading-7 text-muted">
              <span className="mt-4 block">{item.a}</span>
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
