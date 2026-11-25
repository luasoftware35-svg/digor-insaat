import Image from "next/image";
import Link from "next/link";
import { company, legalNav, nav, services } from "@/data/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080808] text-paper">
      <div className="pointer-events-none absolute -right-10 top-8 hidden h-72 w-72 opacity-20 lg:block">
        <Image src="/logo-dark.png" alt="" fill className="object-contain" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:gap-12 lg:px-10 lg:py-20">
        <div className="lg:col-span-2">
          <Logo size="footer" tone="dark" />
          <p className="mt-7 max-w-md text-sm leading-8 text-paper/65">
            Hastane, okul, villa, yurt, ofis ve enerji. Digor Group her yapıya aynı
            çizgiyi taşır: net program, görünür kalite, teslim günü tartışılmayan sonuç.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "TLS / SSL şifreleme",
              "KVKK süreçleri",
              "ISO 45001 yaklaşımı",
            ].map((label) => (
              <span
                key={label}
                className="border border-paper/15 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-paper/70"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#c9b59a]">Navigasyon</p>
          <ul className="mt-5 space-y-3 text-sm text-paper/80">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#c9b59a]">Hizmetler</p>
          <ul className="mt-5 space-y-3 text-sm text-paper/80">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href={`/hizmetler/${s.slug}`} className="transition hover:text-paper">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="gold-rule" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-paper/45 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legal}. Tüm hakları saklıdır.
          </p>
          <p className="max-w-md break-words leading-6">
            {company.address} ·{" "}
            <a href={company.phoneHref} className="hover:text-paper">
              {company.phone}
            </a>{" "}
            · {company.email}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {legalNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-paper">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative flex justify-center px-4 pb-[max(2rem,env(safe-area-inset-bottom))] pt-2 sm:px-6 lg:px-10">
        <a
          href="https://www.genuadigital.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 items-center gap-3 rounded-xl px-2 transition hover:opacity-90"
          aria-label="Dijital Partner genuadigital"
        >
          <span
            aria-hidden
            className="flex size-8 items-center justify-center rounded-lg bg-[#efe8dc] font-sans text-[15px] font-semibold text-[#4a433c]"
          >
            G
          </span>
          <span className="flex flex-col items-start leading-none">
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-paper/45">
              Dijital Partner
            </span>
            <span className="mt-1.5 font-sans text-[14px] text-paper/80">
              <span className="font-semibold">genua</span>
              <span className="font-light">digital</span>
            </span>
          </span>
        </a>
      </div>
    </footer>
  );
}
