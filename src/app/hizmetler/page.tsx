import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/content";

export const metadata: Metadata = { title: "Hizmetler" };

export default function HizmetlerPage() {
  return (
    <>
      <PageHero
        kicker="Hizmetler"
        title="Taahhütten güçlendirmeye, hastaneden villaya."
        text="Her işin kendi ritmi vardır. Digor Group o ritmi kaçırmadan tadilat, taahhüt ve temel bina güçlendirme sunar."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-10">
        <div className="space-y-20">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="img-zoom relative aspect-[5/4]">
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-gold">{s.kicker}</p>
                  <h2 className="mt-3 font-serif text-4xl md:text-5xl">{s.title}</h2>
                  <p className="mt-5 text-base leading-8 text-muted">{s.body}</p>
                  <ul className="mt-6 space-y-2 text-sm text-charcoal">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 h-px w-6 bg-gold" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/hizmetler/${s.slug}`}
                    className="mt-8 inline-block text-[12px] uppercase tracking-[0.22em] text-gold"
                  >
                    Detay
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
