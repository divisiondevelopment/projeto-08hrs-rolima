"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Image from "next/image";
import Link from "next/link";
import { MotionSection } from "@/components/layout/motion-section";

interface SponsorLogo {
  src: string;
  alt: string;
  href?: string;
  width: number;
  height: number;
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
  },
  {
    src: "/logos/rvl-instalacoes.png",
    alt: "RVL Instalações",
    width: 2000,
    height: 2000,
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
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-16 sm:pb-20">
      <h2 className="mb-8 text-center font-display font-bold text-2xl md:mb-10 md:text-3xl">
        Apoiadores do Evento
      </h2>

      <MotionSection className="mx-auto">
        <Marquee className="gap-[3rem]" fade innerClassName="gap-[3rem]" pauseOnHover>
          {sponsorLogos.map(({ src, alt, href, width, height }) => {
            const logo = (
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="h-24 w-52 object-contain grayscale brightness-50 contrast-150 transition-all duration-300 hover:grayscale-0 hover:brightness-100 hover:contrast-100 md:h-28 md:w-60"
              />
            );

            return (
              <div key={src} className="flex items-center justify-center">
                {href ? (
                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    {logo}
                  </Link>
                ) : (
                  logo
                )}
              </div>
            );
          })}
        </Marquee>
      </MotionSection>
    </section>
  );
};
