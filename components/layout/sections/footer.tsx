import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#benefits", label: "Informações" },
  { href: "#features", label: "Atrações" },
  { href: "#sponsors", label: "Apoiadores" },
  { href: "#contact", label: "Inscrição" },
];

export const FooterSection = () => {
  return (
    <footer id="footer" className="w-full border-t bg-muted/30">
      <div className="container">
        {/* Linha superior: colunas */}
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-4 md:gap-12 md:py-16">
          <div className="flex flex-col gap-2">
            <Link href="#" className="font-display text-2xl">
              08HRS de Rolimã
            </Link>
            <p className="text-sm text-muted-foreground">
              Evento beneficente de carrinho de rolimã em Esteio/RS
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wide">
              Navegação
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wide">
              Redes
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href="https://instagram.com/08hrsderolimaesteio"
                target="_blank"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Instagram
              </Link>

              <Link
                href="https://wa.me/5551989449818?text=Ol%C3%A1!%20Tenho%20interesse%20em%20me%20inscrever%20no%201%C2%BA%2008HRS%20de%20Rolim%C3%A3."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                WhatsApp
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-1 flex-col items-start justify-center gap-1.5">
              <span className="text-xs text-muted-foreground">
                Desenvolvido por
              </span>
              <Link
                href="https://www.divisiondev.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/logos/logo-division-mark.png"
                  alt="Division Development"
                  width={3901}
                  height={2176}
                  className="h-12 w-auto object-contain opacity-70 transition-opacity hover:opacity-100 md:h-14"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-border" />

        {/* Linha inferior */}
        <div className="py-6">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 1º 08HRS de Rolimã — Esteio/RS
          </p>
        </div>
      </div>
    </footer>
  );
};
