import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { LocationSection } from "@/components/layout/sections/location";
import { SponsorsSection } from "@/components/layout/sections/sponsors";

export const metadata = {
  title: "1º 08HRS de Rolimã",
  description:
    "Corrida de carrinho de rolimã beneficente em Esteio/RS, no dia 18/10/2026, das 10h às 18h. Inscreva-se e participe!",
  openGraph: {
    type: "website",
    title: "1º 08HRS de Rolimã",
    description:
      "Corrida de carrinho de rolimã beneficente em Esteio/RS, no dia 18/10/2026, das 10h às 18h. Inscreva-se e participe!",
  },
  twitter: {
    card: "summary_large_image",
    title: "1º 08HRS de Rolimã",
    description:
      "Corrida de carrinho de rolimã beneficente em Esteio/RS, no dia 18/10/2026, das 10h às 18h. Inscreva-se e participe!",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <LocationSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
