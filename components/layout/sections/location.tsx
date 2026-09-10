import { MotionSection } from "@/components/layout/motion-section";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.238382104025!2d-51.140598824380994!3d-29.857398322628065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95196fab5049fd43%3A0xd27b5d8723b664e6!2sAv.%20P%C3%B4rto%20Alegre%20-%20Jardim%20Planalto%2C%20Esteio%20-%20RS%2C%2093295-000!5e0!3m2!1spt-BR!2sbr!4v1789004309015!5m2!1spt-BR!2sbr";

export const LocationSection = () => {
  return (
    <section id="location" className="container py-16 sm:py-20">
      <h2 className="text-lg text-secondary text-center mb-2 tracking-wider">
        Localização
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Av. Porto Alegre, próximo ao Parque Galvani Guedes, Esteio/RS
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
