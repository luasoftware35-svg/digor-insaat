import { company } from "@/data/content";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: company.name,
    legalName: company.legal,
    url: company.website,
    email: company.email,
    telephone: company.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Yenişehir Mah. 75 Sok. No:5/A",
      postalCode: "20040",
      addressLocality: "Merkezefendi",
      addressRegion: "Denizli",
      addressCountry: "TR",
    },
    areaServed: "TR",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
