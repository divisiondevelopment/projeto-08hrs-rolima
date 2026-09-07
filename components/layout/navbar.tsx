"use client";

import Link from "next/link";
import { Instagram, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#benefits", label: "Informações" },
  { href: "#features", label: "Atrações" },
  { href: "#sponsors", label: "Apoiadores" },
  { href: "#contact", label: "Inscrição" },
];

const INSTAGRAM_URL = "https://instagram.com/08hrsderolimaesteio";

export const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-2 z-50">
      <div className="container">
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-4 py-3 md:px-6">
          {/* Esquerda: wordmark do evento */}
          <Link
            href="#"
            className="font-display font-bold text-lg text-foreground sm:text-xl"
          >
            08HRS de Rolimã
          </Link>

          {/* Centro: navegação (desktop) */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Direita: Instagram + menu mobile */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full text-foreground hover:bg-muted hover:text-foreground"
            >
              <Link href={INSTAGRAM_URL} target="_blank" aria-label="Instagram do evento">
                <Instagram className="size-4" />
              </Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full md:hidden"
                >
                  <Menu className="size-4" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right">
                <SheetTitle>Menu</SheetTitle>

                <nav className="mt-6 flex flex-col gap-4">
                  {navLinks.map(({ href, label }) => (
                    <SheetClose asChild key={href}>
                      <Link
                        href={href}
                        className="text-base font-medium text-foreground"
                      >
                        {label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
