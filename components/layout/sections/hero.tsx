import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Countdown } from "@/components/layout/sections/countdown";
import { MotionSection } from "@/components/layout/motion-section";

const FORM_URL = "https://forms.gle/NwULwZ7gixSqnfqeA";

// Grupo de estatísticas (1ª Edição / 8h De evento / 1kg Doado por inscrição)
// removido da estrutura de 2 cards pequenos por falta de espaço — pode
// voltar em outra seção do site (ex: Benefits ou uma faixa própria).

export const HeroSection = () => {
  return (
    <section className="w-full bg-background pb-16 pt-2 sm:pb-20 sm:pt-3">
      <div className="container flex flex-col gap-4 md:gap-6">
        {/* Banner: linha própria, largura total, no topo */}
        <MotionSection className="relative overflow-hidden rounded-2xl aspect-[1600/533]">
          <Image
            src="/banner-08hrs-rolima.jpeg"
            alt="Banner oficial do 1º 08HRS de Rolimã"
            fill
            className="object-cover"
          />

          <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-bold text-foreground shadow-md">
            1ª edição
          </span>
        </MotionSection>

        {/* Abaixo do banner: card principal (mais largo) + countdown/data empilhados (mais estreito) */}
        <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[2fr_1fr] md:gap-6">
          {/* Coluna esquerda: card grande de texto */}
          <MotionSection
            delay={0.1}
            className="flex h-full flex-col justify-center gap-6 rounded-2xl bg-secondary p-8 text-white md:p-12"
          >
            <Badge
              variant="outline"
              className="w-fit rounded-full border-white/40 px-4 py-1 text-xs font-medium text-white/80"
            >
              Evento Beneficente
            </Badge>

            <h1 className="font-display font-bold text-4xl uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              08HRS de Rolimã!
            </h1>

            <p className="max-w-md text-base text-white/90 sm:text-lg">
              Uma manhã e uma tarde inteiras de adrenalina, comunidade e
              solidariedade descendo a ladeira em Esteio. Traga 1kg de
              alimento e faça parte da primeira edição.
            </p>

            <Button
              asChild
              size="lg"
              className="w-fit bg-primary font-bold text-primary-foreground hover:bg-primary/90 group/arrow"
            >
              <Link href={FORM_URL} target="_blank" rel="noopener noreferrer">
                Fazer inscrição
                <ArrowRight className="size-5 ml-2 transition-transform group-hover/arrow:translate-x-1" />
              </Link>
            </Button>
          </MotionSection>

          {/* Coluna direita: countdown + data/local, empilhados verticalmente */}
          <MotionSection
            delay={0.2}
            className="flex h-full flex-col gap-4 md:gap-6"
          >
            <div className="flex flex-1 items-center justify-center rounded-2xl bg-muted p-6 md:p-8">
              <Countdown />
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-2xl bg-muted p-6 text-center md:p-8">
              <span className="font-display font-bold text-2xl text-foreground sm:text-3xl">
                18 de outubro de 2026
              </span>
              <span className="text-base text-muted-foreground sm:text-lg">
                10h às 18h — Esteio/RS
              </span>
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
};
