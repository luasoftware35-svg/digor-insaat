import Link from "next/link";

export function PageHero({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative overflow-hidden bg-sand/40 pt-[calc(7.5rem+env(safe-area-inset-top))] pb-14 md:pb-20 md:pt-40">
      <div className="absolute inset-x-0 bottom-0 h-px bg-[var(--line)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <p className="text-[10px] uppercase tracking-[0.22em] text-gold sm:text-[11px] sm:tracking-[0.4em]">{kicker}</p>
        <h1 className="mt-4 max-w-4xl font-serif text-[2.35rem] leading-[1.08] text-ink md:mt-5 md:text-7xl md:leading-[0.95]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:mt-6 md:leading-8">{text}</p>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-ink py-16 text-paper md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 md:flex-row md:items-end md:gap-10 sm:px-6 lg:px-10">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Birlikte inşa edelim</p>
          <h2 className="mt-4 max-w-2xl font-serif text-[2.15rem] leading-[1.08] md:text-6xl">
            Hayaliniz çizgiye, çizginiz yapıya dönüşsün.
          </h2>
        </div>
        <Link
          href="/iletisim"
          className="btn-gold inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gold px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-paper md:w-auto"
        >
          İletişime geç
        </Link>
      </div>
    </section>
  );
}
