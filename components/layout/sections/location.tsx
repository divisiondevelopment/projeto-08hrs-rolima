import { MotionSection } from "@/components/layout/motion-section";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Av.+Porto+Alegre,+186,+Esteio+-+RS&output=embed";

export const LocationSection = () => {
  return (
    <section id="location" className="container py-16 sm:py-20">
      <h2 className="text-lg text-secondary text-center mb-2 tracking-wider">
        Localização
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Av. Porto Alegre, 186, próximo ao Parque Galvani Guedes, Esteio/RS
      </h3>

      <MotionSection className="relative w-full overflow-hidden rounded-2xl shadow-lg aspect-video">
        <iframe
          src={MAP_EMBED_URL}
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Mapa de localização do evento 08HRS de Rolimã"
        />
      </MotionSection>
    </section>
  );
};
