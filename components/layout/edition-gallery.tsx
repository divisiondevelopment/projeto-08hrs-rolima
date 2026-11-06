"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageWithCredit } from "@/components/ui/image-with-credit";
import type { EditionPhoto } from "@/lib/editions";

interface EditionGalleryProps {
  photos: EditionPhoto[];
}

export function EditionGallery({ photos }: EditionGalleryProps) {
  const [selected, setSelected] = useState<EditionPhoto | null>(null);

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {photos.map((photo) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setSelected(photo)}
            className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ImageWithCredit
              src={photo.src}
              alt={photo.alt}
              credit={photo.credit}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 768px) 33vw, 50vw"
              className="h-auto w-full rounded-lg border bg-muted object-contain p-2"
            />
          </button>
        ))}
      </div>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.alt}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-black/80 p-4"
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
            sizes="90vw"
            className="max-h-[75vh] max-w-[90vw] rounded-md object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          <p className="text-sm italic text-white/80">{selected.credit}</p>
        </div>
      )}
    </>
  );
}
