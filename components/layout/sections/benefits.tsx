import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { MotionSection } from "@/components/layout/motion-section";

interface BenefitsProps {
  icon: string;
  title: string;
  description: ReactNode;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Calendar",
    title: "Data",
    description: "18/10/2026",
  },
  {
    icon: "Clock",
    title: "Horário",
    description: "10h às 18h",
  },
  {
    icon: "MapPin",
    title: "Local",
    description:
      "Av. Porto Alegre, 186, próximo ao Parque Galvani Guedes, Esteio/RS",
  },
  {
    icon: "Package",
    title: "Doação",
    description: (
      <>
        1kg de alimento não perecível (opcional), destinado à{" "}
        <Link
          href="https://www.instagram.com/apaeesteiors/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:opacity-80"
        >
          APAE Esteio
        </Link>
      </>
    ),
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-16 sm:py-20">
      <div className="text-center mb-12">
        <h2 className="text-lg text-secondary mb-2 tracking-wider">
          Informações
        </h2>

        <h2 className="font-display font-bold text-3xl leading-tight tracking-tight mb-4 md:text-4xl">
          O que você precisa saber
        </h2>
        <p className="text-xl text-muted-foreground">
          Tudo o que você precisa saber antes do grande dia.
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2 md:gap-6">
        {/* Coluna esquerda: imagem */}
        <MotionSection className="relative h-full min-h-[320px] overflow-hidden rounded-2xl lg:min-h-0">
          <Image
            src="/excelente-passeio.jpg"
            alt="Participantes se divertindo durante o 08HRS de Rolimã"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-8">
            <h3 className="font-display font-bold text-2xl text-white md:text-3xl">
              Um dia inteiro de aventura solidária
            </h3>
            <p className="mt-2 text-sm text-white/80 md:text-base">
              Descida de carrinho, brincadeiras e solidariedade em Esteio, do
              início ao fim do evento.
            </p>
          </div>
        </MotionSection>

        {/* Coluna direita: pilha de cards */}
        <div className="flex h-full flex-col gap-4">
          {benefitList.map(({ icon, title, description }, index) => {
            const isFeatured = index === 0;

            return (
              <MotionSection
                key={title}
                delay={Math.min(index * 0.1, 0.4)}
                className={`flex flex-1 items-center justify-between gap-4 rounded-2xl p-6 ${
                  isFeatured
                    ? "bg-secondary text-white"
                    : "bg-muted text-foreground"
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span
                    className={`text-sm uppercase tracking-wide ${
                      isFeatured ? "text-white/70" : "text-muted-foreground"
                    }`}
                  >
                    {title}
                  </span>
                  <span className="font-bold text-xl">{description}</span>
                </div>

                <span
                  className={`flex size-12 shrink-0 items-center justify-center rounded-full ${
                    isFeatured ? "bg-white/10" : "bg-background"
                  }`}
                >
                  <Icon
                    name={icon as keyof typeof icons}
                    size={20}
                    color={isFeatured ? "white" : "hsl(var(--secondary))"}
                  />
                </span>
              </MotionSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
