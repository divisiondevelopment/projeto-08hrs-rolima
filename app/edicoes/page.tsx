import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { editions } from "@/lib/editions";

export const metadata: Metadata = {
  title: "Edições passadas — 08HRS de Rolimã",
  description:
    "Reviva as edições anteriores do 08HRS de Rolimã em Esteio/RS.",
  openGraph: {
    title: "Edições passadas — 08HRS de Rolimã",
    description:
      "Reviva as edições anteriores do 08HRS de Rolimã em Esteio/RS.",
    type: "website",
  },
};

export default function EdicoesPage() {
  return (
    <main className="container py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          Edições passadas
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Fotos, memórias e histórias das edições do evento beneficente.
        </p>
      </div>

      <ul className="mx-auto mt-12 grid max-w-4xl gap-6">
        {editions.map((edition) => (
          <li key={edition.slug}>
            <Link
              href={`/edicoes/${edition.slug}`}
              className="flex flex-col gap-4 rounded-2xl border bg-card p-6 transition-colors hover:bg-muted/40 md:flex-row md:items-center"
            >
              {edition.cover && (
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl md:w-64 md:shrink-0">
                  <Image
                    src={edition.cover.src}
                    alt={edition.cover.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 256px, 100vw"
                  />
                </div>
              )}
              <div className="text-left">
                <h2 className="font-display text-xl font-bold">{edition.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {edition.eventDateLabel}
                </p>
                <p className="mt-3 text-muted-foreground">{edition.summary}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
