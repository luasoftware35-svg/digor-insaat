import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/data/content";

export const metadata: Metadata = { title: "Yasal Uyarı" };

export default function YasalUyariPage() {
  return (
    <LegalPage
      kicker="Kurumsal"
      title="Yasal uyarı"
      intro="Web sitesindeki içerik genel bilgilendirme amaçlıdır; bağlayıcı teklif veya taahhüt niteliği taşımaz."
      sections={[
        {
          heading: "İçerik",
          body: [
            `Metin, görsel ve proje özetleri ${company.legal} tarafından yayımlanır. Ölçü, süre ve bedel ancak yazılı teklif ve sözleşme ile kesinleşir.`,
          ],
        },
        {
          heading: "Fikri haklar",
          body: [
            "Logo, metin ve fotoğraflar izinsiz kopyalanamaz, ticari amaçla kullanılamaz. Üçüncü kişi görselleri ilgili hak sahiplerine aittir.",
          ],
        },
        {
          heading: "Sorumluluk",
          body: [
            "Sitenin kesintisiz veya hatasız olacağı taahhüt edilmez. Bağlantı verilen dış sitelerin içeriğinden Digor Group sorumlu değildir.",
          ],
        },
        {
          heading: "Uygulanacak hukuk",
          body: [
            "Uyuşmazlıklarda Türkiye Cumhuriyeti hukuku ve İstanbul mahkemeleri / icra daireleri yetkilidir; aksi sözleşmede kararlaştırılmadıkça bu kural geçerlidir.",
          ],
        },
      ]}
    />
  );
}
