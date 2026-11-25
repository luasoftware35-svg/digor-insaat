import { PageHero } from "@/components/PageHero";

export function LegalPage({
  kicker,
  title,
  intro,
  sections,
}: {
  kicker: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <>
      <PageHero kicker={kicker} title={title} text={intro} />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20 lg:px-10">
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
          Son güncelleme: 17 Eylül 2026
        </p>
        {sections.map((s) => (
          <section key={s.heading} className="mt-12">
            <h2 className="font-serif text-3xl text-ink">{s.heading}</h2>
            {s.body.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 text-base leading-8 text-muted">
                {p}
              </p>
            ))}
          </section>
        ))}
      </article>
    </>
  );
}
