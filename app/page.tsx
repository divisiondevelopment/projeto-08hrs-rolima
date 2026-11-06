import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { LocationSection } from "@/components/layout/sections/location";
import { SponsorMaterialsSection } from "@/components/layout/sections/sponsor-materials";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { EVENT_SEO_DESCRIPTION } from "@/lib/event";

export const metadata = {
  title: "2º 08HRS de Rolimã",
  description: EVENT_SEO_DESCRIPTION,
  openGraph: {
    type: "website",
    title: "2º 08HRS de Rolimã",
    description: EVENT_SEO_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "2º 08HRS de Rolimã",
    description: EVENT_SEO_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <SponsorMaterialsSection />
      <BenefitsSection />
      <FeaturesSection />
      <LocationSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
