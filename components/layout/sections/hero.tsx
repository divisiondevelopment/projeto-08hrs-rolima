import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Countdown } from "@/components/layout/sections/countdown";
import { MotionSection } from "@/components/layout/motion-section";

const WHATSAPP_URL =
  "https://wa.me/5551989449818?text=Ol%C3%A1!%20Tenho%20interesse%20em%20me%20inscrever%20no%201%C2%BA%2008HRS%20de%20Rolim%C3%A3.";

// Grupo de estatísticas (1ª Edição / 8h De evento / 1kg Doado por inscrição)
// removido da estrutura de 2 cards pequenos por falta de espaço — pode
// voltar em outra seção do site (ex: Benefits ou uma faixa própria).

export const HeroSection = () => {
  return (
    <section className="w-full bg-background pb-16 pt-2 sm:pb-20 sm:pt-3">
      <div className="container">
        <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2 md:gap-6">
          {/* Coluna esquerda: card grande de texto + linha de 2 cards pequenos */}
          <MotionSection className="flex h-full flex-col gap-4 md:gap-6">
            {/* Card grande: texto, fundo vermelho sólido */}
            <div className="flex flex-1 flex-col justify-center gap-6 rounded-2xl bg-secondary p-8 text-white md:p-12">
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
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fazer inscrição
                  <ArrowRight className="size-5 ml-2 transition-transform group-hover/arrow:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Linha de 2 cards pequenos: countdown + estatísticas/apoio */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center rounded-2xl bg-muted p-4 md:p-6">
                <Countdown />
              </div>

              <div className="flex h-full flex-col items-center justify-center gap-1.5 rounded-2xl bg-muted p-4 text-center md:p-6">
                <span className="font-display font-bold text-lg text-foreground sm:text-xl">
                  18 de outubro de 2026
                </span>
                <span className="text-sm text-muted-foreground">
                  10h às 18h — Esteio/RS
                </span>
              </div>
            </div>
          </MotionSection>

          {/* Coluna direita: foto, ocupa a altura total da coluna esquerda */}
          <MotionSection
            delay={0.15}
            className="relative h-full min-h-[320px] overflow-hidden rounded-2xl lg:min-h-0"
          >
            <Image
              src="/carrinho-de-rolima.png"
              alt="Carrinho de rolimã na descida durante o 1º 08HRS de Rolimã"
              fill
              className="object-cover"
            />

            <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-bold text-foreground shadow-md">
              1ª edição
            </span>
          </MotionSection>
        </div>
      </div>
    </section>
  );
};
