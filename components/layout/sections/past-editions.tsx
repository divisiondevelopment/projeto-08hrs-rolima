import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/layout/motion-section";

export const PastEditionsSection = () => {
  return (
    <section id="edicoes-passadas" className="container py-16 sm:py-20">
      <MotionSection className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-2xl border bg-muted/40 px-8 py-12 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          Edições passadas
        </h2>
        <p className="text-lg text-muted-foreground">
          Reviva fotos e momentos das edições anteriores do 08HRS de Rolimã em
          Esteio.
        </p>
        <Button asChild size="lg" className="font-bold">
          <Link href="/edicoes">Ver edições</Link>
        </Button>
      </MotionSection>
    </section>
  );
};
