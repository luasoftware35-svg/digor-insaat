import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaBand, PageHero } from "@/components/PageHero";
import { services } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return { title: service?.title ?? "Hizmet" };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero kicker={service.kicker} title={service.title} text={service.summary} />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-12 lg:px-10">
        <div className="relative aspect-[4/3]">
          <Image src={service.image} alt={service.title} fill className="object-cover" />
        </div>
        <div>
          <p className="text-base leading-8 text-muted">{service.body}</p>
          <ul className="mt-8 space-y-3 text-sm">
            {service.points.map((p) => (
              <li key={p} className="border-b border-[var(--line)] py-3">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
