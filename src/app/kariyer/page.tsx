import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { jobs } from "@/data/content";

export const metadata: Metadata = { title: "Kariyer" };

export default function KariyerPage() {
  return (
    <>
      <PageHero
        kicker="Kariyer"
        title="Çizgiyi sahada sevenlerle büyürüz."
        text="Mimar, mühendis ve saha aynı dili konuşur. Açık pozisyonlar ve staj için yazın."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-10">
        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {jobs.map((job) => (
            <Reveal key={job.title}>
              <article className="grid gap-6 py-10 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
                    {job.location} · {job.type}
                  </p>
                  <h2 className="mt-2 font-serif text-3xl">{job.title}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{job.text}</p>
                </div>
                <a
                  href="mailto:kariyer@digorgroup.com"
                  className="btn-gold inline-flex min-h-11 h-fit items-center justify-center rounded-full bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-paper"
                >
                  Başvur
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
