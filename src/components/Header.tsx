"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { company, nav } from "@/data/content";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-500 ${
        scrolled || open
          ? "bg-ivory/92 shadow-[0_1px_0_var(--line)] backdrop-blur-md"
          : "bg-ivory/40 backdrop-blur-[2px]"
      }`}
    >
      <div className="hidden border-b border-[var(--line)] bg-[#111] text-[10px] uppercase tracking-[0.16em] text-paper/70 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-10">
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Güvenli bağlantı · TLS / SSL
          </p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${company.email}`} className="hover:text-paper">
              {company.email}
            </a>
            <a href={company.phoneHref} className="hover:text-paper">
              {company.phone}
            </a>
            <Link href="/kvkk" className="hover:text-paper">
              KVKK
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link text-[12px] uppercase tracking-[0.22em] text-charcoal ${
                pathname === item.href ? "active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={company.phoneHref}
            className="text-[12px] tracking-[0.08em] text-muted"
          >
            {company.phone}
          </a>
          <Link
            href="/iletisim"
            className="btn-gold rounded-full bg-ink px-5 py-2 text-[11px] uppercase tracking-[0.22em] text-paper"
          >
            Teklif Al
          </Link>
        </div>
        <button
          type="button"
          className="flex size-11 shrink-0 touch-manipulation items-center justify-center text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menüyü kapat" : "Menü"}
          aria-expanded={open}
        >
          <span className="flex w-7 flex-col items-end gap-1.5">
            <span className={`block h-px bg-current transition ${open ? "w-7 translate-y-1 rotate-45" : "w-7"}`} />
            <span className={`block h-px bg-current transition ${open ? "w-7 -translate-y-1 -rotate-45" : "w-5"}`} />
          </span>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-ivory lg:hidden"
          >
            <div className="flex max-h-[calc(100dvh-5.5rem-env(safe-area-inset-top))] flex-col gap-4 overflow-y-auto px-4 py-6 sm:px-6">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-serif text-[2rem] leading-tight text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={company.phoneHref}
                className="mt-4 text-sm tracking-[0.08em] text-muted"
              >
                {company.phone}
              </a>
              <Link
                href="/iletisim"
                className="btn-gold inline-flex min-h-11 w-fit items-center rounded-full bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-paper"
              >
                Teklif Al
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
