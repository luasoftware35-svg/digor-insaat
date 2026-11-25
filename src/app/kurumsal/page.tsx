import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { timeline, values } from "@/data/content";

export const metadata: Metadata = { title: "Kurumsal" };

export default function KurumsalPage() {
  return (
    <>
      <PageHero
        kicker="Kurumsal"
        title="Çizgi durur, yapı konuşur."
        text="Digor Group; hastane, okul, villa, kamu, ofis ve enerji işlerinde tadilat, taahhüt ve temel bina güçlendirme yürütür. Ölçek değişir, standart değişmez."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="relative aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80"
              alt="Digor Group"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Hikâye</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">Ölçek büyür. Çizgi durur.</h2>
          <p className="mt-6 text-base leading-8 text-muted">
            Digor’un çekirdeği şantiye kültürüdür. İş programı, malzeme, iş güvenliği
            ve komşu ilişkileri aynı masada tutulur. Kampüsten hastaneye, kat
            karşılığından otele her iş aynı raporlama diliyle yürür.
          </p>
          <p className="mt-4 text-base leading-8 text-muted">
            Amacımız daha fazla metrekare değil; teslim gününde tartışılmayan bir
            yapı bırakmaktır.
          </p>
        </Reveal>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Zaman çizgisi</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Büyüme izi</h2>
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08}>
                <p className="font-serif text-4xl text-gold">{t.year}</p>
                <h3 className="mt-4 font-serif text-2xl">{t.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          {values.map((v) => (
            <Reveal key={v.title}>
              <article className="border border-[var(--line)] bg-paper p-10">
                <h3 className="font-serif text-3xl">{v.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{v.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
