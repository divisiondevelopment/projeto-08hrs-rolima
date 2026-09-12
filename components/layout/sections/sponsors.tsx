"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { MotionSection } from "@/components/layout/motion-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const SPONSOR_WHATSAPP_URL = `https://wa.me/5551989449818?text=${encodeURIComponent(
  "Olá! Tenho interesse em ser um apoiador do 1º 08HRS de Rolimã."
)}`;

interface SponsorLogo {
  src: string;
  alt: string;
  href?: string;
  width: number;
  height: number;
  /** Logo has low contrast against the section's white background and needs its luminosity inverted. */
  lowContrast?: boolean;
}

const sponsorLogos: SponsorLogo[] = [
  {
    src: "/prefeitura-esteio.png",
    alt: "Prefeitura de Esteio",
    width: 2000,
    height: 2000,
  },
  {
    src: "/logos/dominus.png",
    alt: "Dominus",
    width: 2000,
    height: 2000,
  },
  {
    src: "/logos/embrauto-pecas.png",
    alt: "Embrauto Peças",
    width: 2000,
    height: 2000,
  },
  {
    src: "/logos/madeireira-ferragem-construsilva.png",
    alt: "Madeireira Ferragem Construsilva",
    width: 2000,
    height: 2000,
  },
  {
    src: "/logos/prada-solucoes.png",
    alt: "Prada Soluções",
    width: 2000,
    height: 2000,
    lowContrast: true,
  },
  {
    src: "/logos/rvl-instalacoes.png",
    alt: "RVL Instalações",
    width: 2000,
    height: 2000,
    lowContrast: true,
  },
  {
    src: "/logos/sorte-motores.png",
    alt: "Sorte Motores",
    width: 2000,
    height: 2000,
  },
  {
    src: "/logos/souza-tec.png",
    alt: "Souza Tec",
    width: 2000,
    height: 2000,
    lowContrast: true,
  },
  {
    src: "/logos/vigiar-seguranca-inteligente.png",
    alt: "Vigiar Segurança Inteligente",
    width: 2000,
    height: 2000,
  },
  {
    src: "/logos/logo-division-mark.png",
    alt: "Division Development",
    href: "https://www.divisiondev.com.br/",
    width: 3901,
    height: 2176,
  },
  {
    src: "/logos/lm-serralheria.png",
    alt: "Logo LM Serralheria",
    width: 2000,
    height: 2000,
  },
  {
    src: "/logos/delsol-engenharia.png",
    alt: "Logo Delsol Engenharia",
    width: 2000,
    height: 2000,
  },
  {
    src: "/logos/dky-protecao-contra-incendio.png",
    alt: "DKY Proteção Contra Incêndio",
    width: 2000,
    height: 2000,
  },
  {
    src: "/logos/ve-engenharia-ltda.png",
    alt: "VE Engenharia",
    width: 2000,
    height: 2000,
    lowContrast: true,
  },
];

export const SponsorsSection = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-16 sm:pb-20">
      <h2 className="mb-8 text-center font-display font-bold text-2xl md:mb-10 md:text-3xl">
        Apoiadores do Evento
      </h2>

      <MotionSection className="mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          plugins={[autoplay.current]}
          className="cursor-grab active:cursor-grabbing"
        >
          <CarouselContent className="-ml-4 items-center md:-ml-6">
            {sponsorLogos.map(({ src, alt, href, width, height, lowContrast }) => {
              const logo = (
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  draggable={false}
                  className={cn(
                    "h-28 w-full object-contain transition-transform duration-300 hover:scale-105 md:h-40 md:w-80",
                    lowContrast && "invert hue-rotate-180 dark:filter-none"
                  )}
                />
              );

              return (
                <CarouselItem
                  key={src}
                  className="flex basis-[45%] items-center justify-center pl-4 md:basis-auto md:pl-6"
                >
                  {href ? (
                    <Link href={href} target="_blank" rel="noopener noreferrer">
                      {logo}
                    </Link>
                  ) : (
                    logo
                  )}
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </MotionSection>

      <p className="mt-6 text-center text-sm text-muted-foreground sm:mt-8">
        Quer apoiar esse evento beneficente?{" "}
        <Link
          href={SPONSOR_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
        >
          Seja um apoiador
        </Link>
      </p>
    </section>
  );
};
