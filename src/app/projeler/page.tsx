import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/content";

export const metadata: Metadata = { title: "Projeler" };

export default function ProjelerPage() {
  return (
    <>
      <PageHero
        kicker="Projeler"
        title="Sahada kanıtlanan işler."
        text="Hastane, okul, belediye, villa, yurt, ofis ve enerji — sahada teslim edilmiş işler."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08}>
              <Link href={`/projeler/${p.slug}`} className="group block">
                <div className="img-zoom relative aspect-[16/11]">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                  <span className="absolute left-5 top-5 bg-paper/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
                    {p.status}
                  </span>
                </div>
                <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-gold">
                  {p.sector} · {p.location} · {p.area}
                </p>
                <h2 className="mt-2 font-serif text-3xl md:text-4xl">{p.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{p.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
