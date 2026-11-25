"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "digor-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (value: "all" | "necessary") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-[var(--line)] bg-ivory/97 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-8px_40px_rgba(28,25,21,0.08)] backdrop-blur-md sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm leading-6 text-charcoal">
          Sitemizde zorunlu çerezler kullanılır. İsterseniz tercih çerezlerine de izin
          verebilirsiniz. Ayrıntı:{" "}
          <Link href="/cerez-politikasi" className="text-gold underline-offset-2 hover:underline">
            Çerez Politikası
          </Link>{" "}
          ve{" "}
          <Link href="/kvkk" className="text-gold underline-offset-2 hover:underline">
            KVKK
          </Link>
          .
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={() => choose("necessary")}
            className="min-h-11 border border-[var(--line)] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-charcoal"
          >
            Yalnızca zorunlu
          </button>
          <button
            type="button"
            onClick={() => choose("all")}
            className="min-h-11 bg-ink px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-paper"
          >
            Tümünü kabul et
          </button>
        </div>
      </div>
    </div>
  );
}
