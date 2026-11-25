import Image from "next/image";
import Link from "next/link";
import { ArchitectureBand } from "@/components/ArchitectureBand";
import { CountUp } from "@/components/CountUp";
import { FilmStrip } from "@/components/FilmStrip";
import { CtaBand } from "@/components/PageHero";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { process, projects, services, stats, values } from "@/data/content";
import { photos } from "@/data/photos";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FilmStrip />

      <ArchitectureBand />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-28 lg:px-10">
        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Hakkımızda</p>
            <h2 className="mt-4 font-serif text-[2.15rem] leading-[1.08] md:text-6xl">
              Şantiye disiplininden teslim kalitesine.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-9 text-muted">
              Digor Group hastane, okul, villa, yurt, ofis ve enerji işlerinde
              tadilat, taahhüt ve temel bina güçlendirme yürütür. Ofis planı
              yazar; saha o planı görünür kılar.
            </p>
            <Link
              href="/hakkimizda"
              className="mt-8 inline-flex text-[12px] uppercase tracking-[0.22em] text-gold"
            >
              Hikâyeyi oku
            </Link>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="grid grid-cols-2 gap-8 border-t border-[var(--line)] pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-4xl text-ink md:text-5xl">
                    <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                  </p>
                  <p className="mt-2 text-[12px] uppercase tracking-[0.18em] text-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-16 text-paper md:py-28">
        <Image
          src={photos.steel}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Manifesto</p>
            <blockquote className="mt-8 font-serif text-[1.65rem] leading-snug md:text-5xl">
              “Bir yapı bittiğinde unutulmaz. Yaşandığında hatırlanır.”
            </blockquote>
            <p className="mt-8 text-sm tracking-[0.2em] uppercase text-paper/60">Digor Group</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Uzmanlık alanları</p>
                <h2 className="mt-3 font-serif text-[2.15rem] leading-[1.08] md:text-6xl">Nerede yükseliriz</h2>
              </div>
              <Link href="/hizmetler" className="text-[12px] uppercase tracking-[0.22em] text-gold">
                Tüm hizmetler
              </Link>
            </div>
          </Reveal>
          <div className="mt-6">
            {services.map((s) => (
              <Reveal key={s.slug}>
                <Link
                  href={`/hizmetler/${s.slug}`}
                  className="group grid items-center gap-8 border-b border-[var(--line)] py-10 md:grid-cols-[7rem_1fr_16rem] md:py-12"
                >
                  <span className="font-serif text-3xl text-gold/80 md:text-4xl">{s.kicker}</span>
                  <div>
                    <h3 className="font-serif text-[1.65rem] transition group-hover:text-gold md:text-4xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{s.summary}</p>
                  </div>
                  <div className="img-zoom relative hidden h-36 overflow-hidden md:block">
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      sizes="16rem"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Portföy</p>
            <h2 className="mt-3 font-serif text-[2.15rem] leading-[1.08] md:text-6xl">Sahada kanıtlanan çizgi</h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {projects.slice(0, 4).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link href={`/projeler/${p.slug}`} className="group block">
                  <div className="img-zoom relative aspect-[16/11]">
                    <Image src={p.image} alt={p.title} fill sizes="50vw" className="object-cover" />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
                        {p.sector} · {p.location}
                      </p>
                      <h3 className="mt-2 font-serif text-[1.65rem] md:text-3xl">{p.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{p.summary}</p>
                    </div>
                    <span className="text-sm text-muted">{p.year}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/35 py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Yöntem</p>
            <h2 className="mt-3 font-serif text-[2.15rem] leading-[1.08] md:text-6xl">Dört nefeste teslim</h2>
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.1}>
                <p className="font-serif text-4xl text-gold">{item.step}</p>
                <h3 className="mt-4 font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-28 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold">İlkeler</p>
            <h2 className="mt-3 font-serif text-[2.15rem] leading-[1.08] md:text-6xl">Şantiye kültürü</h2>
            <div className="img-zoom relative mt-10 aspect-[4/5]">
              <Image
                src={photos.crew}
                alt="Şantiye"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="flex flex-col justify-center gap-10">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="border-b border-[var(--line)] pb-8">
                  <h3 className="font-serif text-3xl">{v.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-paper py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-10">
          {[
            ["TLS / SSL", "İletişim ve site trafiği şifreli bağlantı ile korunur."],
            ["KVKK", "Kişisel veriler aydınlatma metni ve açık rıza ile işlenir."],
            ["Kalite", "Saha iş güvenliği ISO 45001 yaklaşımıyla yönetilir."],
          ].map(([title, text]) => (
            <div key={title}>
              <p className="text-[11px] uppercase tracking-[0.28em] text-gold">{title}</p>
              <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
