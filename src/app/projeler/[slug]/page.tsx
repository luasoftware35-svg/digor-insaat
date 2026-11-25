import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, PageHero } from "@/components/PageHero";
import { projects } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project?.title ?? "Proje" };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <PageHero
        kicker={`${project.sector} · ${project.location}`}
        title={project.title}
        text={project.summary}
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-10">
        <div className="relative aspect-[16/10] overflow-hidden md:aspect-[16/8]">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>
        <dl className="mt-10 grid gap-6 border-y border-[var(--line)] py-8 sm:grid-cols-4">
          {[
            ["Konum", project.location],
            ["Kapsam", project.area],
            ["Sektör", project.sector],
            ["Durum", project.status],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-[11px] uppercase tracking-[0.22em] text-muted">{k}</dt>
              <dd className="mt-2 font-serif text-2xl">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {project.gallery.map((src, i) => (
            <div key={`${project.slug}-${i}`} className="relative aspect-[4/3]">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-20">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Diğer işler</p>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {others.map((p) => (
              <Link key={p.slug} href={`/projeler/${p.slug}`} className="group">
                <div className="img-zoom relative aspect-[16/10]">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                </div>
                <h3 className="mt-4 font-serif text-2xl">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
