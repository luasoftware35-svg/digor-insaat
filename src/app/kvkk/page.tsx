import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/data/content";

export const metadata: Metadata = { title: "KVKK Aydınlatma Metni" };

export default function KvkkPage() {
  return (
    <LegalPage
      kicker="Kurumsal"
      title="KVKK aydınlatma metni"
      intro="6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca veri sorumlusu sıfatıyla bilgilendirme."
      sections={[
        {
          heading: "Veri sorumlusu",
          body: [
            `${company.legal}, ${company.address}. İletişim: ${company.email} · ${company.phone}.`,
          ],
        },
        {
          heading: "İşlenen veriler",
          body: [
            "Kimlik (ad soyad), iletişim (telefon, e-posta, adres), müşteri işlem (teklif ve proje yazışması) ile işlem güvenliği verileri (IP, log) işlenebilir.",
          ],
        },
        {
          heading: "Hukuki sebep ve amaç",
          body: [
            "Veriler; sözleşme süreçlerinin yürütülmesi, teklif hazırlığı, yasal yükümlülükler, meşru menfaat kapsamında saha ve ofis iletişimi ile bilgi güvenliği için KVKK md. 5 ve 6 çerçevesinde işlenir.",
          ],
        },
        {
          heading: "Aktarım",
          body: [
            "Yasal zorunluluk halinde yetkili kamu kurumlarına; barındırma, e-posta ve bilişim hizmeti alınan tedarikçilere, gizlilik taahhüdü altında aktarım yapılabilir. Yurt dışı aktarım ancak kanuni şartlar sağlanırsa söz konusu olur.",
          ],
        },
        {
          heading: "Haklarınız",
          body: [
            `KVKK md. 11 kapsamındaki haklarınızı (öğrenme, düzeltme, silme, itiraz, zarar halinde tazmin) yazılı olarak veya kayıtlı elektronik posta / ${company.email} üzerinden kullanabilirsiniz. Başvurular yasal süre içinde yanıtlanır.`,
          ],
        },
      ]}
    />
  );
}
