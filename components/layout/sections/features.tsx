import Image from "next/image";
import { MotionSection } from "@/components/layout/motion-section";

interface FeaturesProps {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    image: "/criancas.jpg",
    alt: "Crianças brincando nos brinquedos infláveis do evento",
    title: "Brinquedos infláveis",
    description:
      "Pula-pula, escorregadores e outras brincadeiras para a criançada se divertir o dia inteiro.",
  },
  {
    image: "/lanches.jpg",
    alt: "Distribuição de lanches para os participantes do evento",
    title: "Distribuição de lanches",
    description:
      "Lanches gratuitos distribuídos ao longo do evento para todos os participantes.",
  },
  {
    image: "/guloseimas.jpg",
    alt: "Guloseimas e doces distribuídos para a criançada no evento",
    title: "Guloseimas para a criançada",
    description:
      "Doces e guloseimas espalhados pelo evento para alegrar a molecada.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-16 sm:py-20">
      <h2 className="text-lg text-secondary text-center mb-2 tracking-wider">
        Atrações
      </h2>

      <h2 className="font-display font-bold text-3xl text-center leading-tight tracking-tight mb-4 md:text-4xl">
        Diversão para toda a família
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Além da descida emocionante de carrinho de rolimã, o evento traz
        atrações pensadas para a criançada aproveitar o dia inteiro.
      </h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {featureList.map(({ image, alt, title, description }, index) => (
          <MotionSection
            key={title}
            delay={Math.min(index * 0.1, 0.4)}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image src={image} alt={alt} fill className="object-cover" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <h4 className="font-display font-bold text-lg text-white md:text-xl">
                {title}
              </h4>
              <p className="mt-1.5 text-sm text-white/80">{description}</p>
            </div>
          </MotionSection>
        ))}
      </div>
    </section>
  );
};
