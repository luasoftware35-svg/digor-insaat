import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/data/content";

export const metadata: Metadata = { title: "Gizlilik Politikası" };

export default function GizlilikPage() {
  return (
    <LegalPage
      kicker="Kurumsal"
      title="Gizlilik politikası"
      intro={`${company.legal} olarak web sitemizi ziyaret edenlerin gizliliğini kurumsal bir yükümlülük kabul ederiz.`}
      sections={[
        {
          heading: "Kapsam",
          body: [
            "Bu politika; digorgroup.com alan adı ve bağlı sayfalar üzerinden toplanan bilgilerin nasıl işlendiğini açıklar. İletişim formu, teklif talebi ve çerezler bu kapsamın parçasıdır.",
          ],
        },
        {
          heading: "Toplanan bilgiler",
          body: [
            "Ad soyad, e-posta, telefon, firma unvanı ve mesaj içeriği; sizin ilettiğiniz ölçüde kaydedilir. Sunucu günlüklerinde IP adresi, tarayıcı türü ve ziyaret zamanı teknik güvenlik amacıyla tutulabilir.",
          ],
        },
        {
          heading: "Kullanım amacı",
          body: [
            "Bilgiler yalnızca teklif, keşif ve kurumsal iletişim için kullanılır. Pazarlama listelerine izinsiz ekleme yapılmaz. Üçüncü kişilere ticari amaçla satılmaz.",
          ],
        },
        {
          heading: "Saklama ve güvenlik",
          body: [
            "Veriler, işin gerektirdiği süre boyunca ve yasal saklama yükümlülükleri çerçevesinde tutulur. İletişim TLS/SSL ile şifrelenir. Yetkisiz erişime karşı teknik ve idari tedbirler uygulanır.",
          ],
        },
        {
          heading: "Haklarınız",
          body: [
            `Kişisel verilerinize ilişkin taleplerinizi ${company.email} adresine iletebilirsiniz. Ayrıntılı metin KVKK aydınlatma sayfasındadır.`,
          ],
        },
      ]}
    />
  );
}
