import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ChairmanPortrait } from "@/components/ChairmanPortrait";
import { CountUp } from "@/components/CountUp";
import { chairman } from "@/data/chairman";
import { stats, timeline, values, visionMission } from "@/data/content";
import { photos } from "@/data/photos";

export const metadata: Metadata = { title: "Hakkımızda" };

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        kicker="Hakkımızda"
        title="Digor Group, şantiyeyi bir disiplin olarak kurar."
        text="Hastane, okul, belediye, villa, yurt, ofis ve enerji işlerinde bakım, tadilat, taahhüt ve temel bina güçlendirme yürütüyoruz. Teslim standardı işin ölçeğine göre değişmez."
      />

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <Reveal>
          <div className="img-zoom relative aspect-[4/5]">
            <Image src={photos.crew} alt="Digor Group saha" fill className="object-cover" sizes="50vw" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Kimiz</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">Saha ile ofis aynı dili konuşur.</h2>
          <p className="mt-6 text-base leading-8 text-muted">
            Digor Group bir vitrin şirketi değil, şantiye şirketidir. İş programı,
            malzeme onayı, iş güvenliği ve komşu hakları aynı masada tutulur.
            Hastaneden villaya, yurt tadilatından HES projesine her iş aynı
            raporlama diliyle yürür.
          </p>
          <p className="mt-4 text-base leading-8 text-muted">
            Amacımız daha fazla metrekare üretmek değil; teslim gününde tartışılmayan
            bir yapı bırakmaktır. Mimari hayal ile betonarme gerçek arasında köprüyü
            biz kurarız.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-[var(--line)] pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-4xl text-ink">
                  <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Yönümüz</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Misyonumuz ve vizyonumuz</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
              Neyi neden yaptığımız ve nereye bakarak büyüdüğümüz. İkisi de aynı ölçüye bağlıdır:
              hoşumuza gitmeyen hiçbir şeyi yapmamak.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {visionMission.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <article className="h-full border border-[var(--line)] bg-ivory p-6 md:p-12">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-gold">{item.kicker}</p>
                  <h3 className="mt-4 font-serif text-4xl">{item.title}</h3>
                  <p className="mt-6 font-serif text-2xl leading-snug text-ink">{item.lead}</p>
                  <p className="mt-6 text-base leading-8 text-muted">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <Reveal>
            <div className="relative min-h-[280px] overflow-hidden bg-sand/40 md:min-h-full">
              <ChairmanPortrait />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Yönetim Kurulu Başkanı</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">{chairman.name}</h2>
            <p className="mt-2 text-sm tracking-[0.14em] text-muted">{chairman.title}</p>
            <blockquote className="mt-8 border-l border-gold pl-6 font-serif text-2xl leading-snug text-ink md:text-3xl">
              {chairman.quote}
            </blockquote>
            <div className="mt-10">
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-gold">Kimdir</h3>
              <p className="mt-4 text-base leading-8 text-muted">{chairman.who}</p>
            </div>
            <div className="mt-8">
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-gold">Hayat hikâyesi</h3>
              {chairman.story.map((p) => (
                <p key={p.slice(0, 24)} className="mt-4 text-base leading-8 text-muted">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Zaman çizgisi</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Nasıl büyüdük</h2>
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
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">İlkeler</p>
          <h2 className="mt-3 mb-12 font-serif text-4xl md:text-5xl">Neyi vazgeçilmez sayarız</h2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          {values.map((v) => (
            <Reveal key={v.title}>
              <article className="border border-[var(--line)] bg-paper p-6 md:p-10">
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
