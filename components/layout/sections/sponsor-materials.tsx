"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MotionSection } from "@/components/layout/motion-section";

interface SponsorMaterial {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const sponsorMaterials: SponsorMaterial[] = [
  {
    src: "/folders/folder-web-7.jpeg",
    alt: "Prada Soluções",
    width: 1254,
    height: 1254,
  },
  {
    src: "/folders/folder-web-4.jpeg",
    alt: "Vigiar Segurança Inteligente",
    width: 900,
    height: 1600,
  },
  {
    src: "/folders/folder-web-6.jpeg",
    alt: "Souza Tec",
    width: 1280,
    height: 853,
  },
  {
    src: "/folders/folder-web-2.jpeg",
    alt: "RVL Instalações",
    width: 1024,
    height: 1024,
  },
  {
    src: "/folders/folder-web-3.jpeg",
    alt: "Sorte Motores",
    width: 1055,
    height: 1491,
  },
  {
    src: "/folders/folder-web-5.jpeg",
    alt: "Madeireira Ferragem Construsilva",
    width: 1054,
    height: 1492,
  },
  {
    src: "/folders/folder-web-1.jpeg",
    alt: "Embrauto Peças",
    width: 1055,
    height: 1491,
  },
];

export const SponsorMaterialsSection = () => {
  const [selected, setSelected] = useState<SponsorMaterial | null>(null);

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  return (
    <section id="materiais-apoiadores" className="max-w-[75%] mx-auto pb-16 sm:pb-20">
      <h2 className="mb-8 text-center font-display font-bold text-2xl md:mb-10 md:text-3xl">
        Materiais dos Apoiadores
      </h2>

      <MotionSection className="mx-auto">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {sponsorMaterials.map(({ src, alt, width, height }) => (
            <button
              key={src}
              type="button"
              onClick={() => setSelected({ src, alt, width, height })}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg border bg-muted transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-contain p-2"
              />
            </button>
          ))}
        </div>
      </MotionSection>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <Image
            src={selected.src}
            alt={selected.alt}
            width={selected.width}
            height={selected.height}
            className="max-h-[85vh] max-w-[90vw] rounded-md object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
