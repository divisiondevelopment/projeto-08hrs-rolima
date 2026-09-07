import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";
import { MotionSection } from "@/components/layout/motion-section";

const WHATSAPP_URL =
  "https://wa.me/5551989449818?text=Ol%C3%A1!%20Quero%20garantir%20minha%20vaga%20no%201%C2%BA%2008HRS%20de%20Rolim%C3%A3.";
const INSTAGRAM_URL = "https://instagram.com/08hrsderolimaesteio";

export const ContactSection = () => {
  return (
    <section id="contact" className="container py-16 sm:py-20">
      <MotionSection className="rounded-2xl bg-secondary px-6 py-16 text-center text-white md:px-12 md:py-20">
        <h2 className="text-lg text-white/60 mb-2 tracking-wider">
          Participe
        </h2>

        <h2 className="font-display font-bold text-3xl leading-tight tracking-tight mb-4 md:text-4xl">
          Vem com a gente
        </h2>

        <p className="max-w-screen-sm mx-auto text-xl text-white/90 mb-8">
          Garanta sua vaga na descida pelo WhatsApp e acompanhe bastidores,
          fotos e novidades no Instagram do evento.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="w-fit font-bold">
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-5 mr-2" />
              Inscrever-se via WhatsApp
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-fit border-white/40 bg-white/10 font-bold text-white hover:bg-white/20 hover:text-white"
          >
            <Link href={INSTAGRAM_URL} target="_blank">
              <Instagram className="size-5 mr-2" />
              Seguir no Instagram
            </Link>
          </Button>
        </div>
      </MotionSection>
    </section>
  );
};
