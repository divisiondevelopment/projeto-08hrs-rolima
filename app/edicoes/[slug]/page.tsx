import Link from "next/link";
import { notFound } from "next/navigation";
import { EditionGallery } from "@/components/layout/edition-gallery";
import {
  getAllEditionSlugs,
  getEditionBySlug,
} from "@/lib/editions";

export function generateStaticParams() {
  return getAllEditionSlugs().map((slug) => ({ slug }));
}

export default function EditionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const edition = getEditionBySlug(params.slug);

  if (!edition) {
    notFound();
  }

  return (
    <main className="container py-16 sm:py-20">
      <Link
        href="/edicoes"
        className="text-sm text-muted-foreground underline-offset-4 hover:underline"
      >
        ← Voltar para edições
      </Link>

      <header className="mx-auto mt-8 max-w-3xl text-center">
        <p className="text-sm text-muted-foreground">{edition.eventDateLabel}</p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
          {edition.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{edition.summary}</p>
        {edition.body && (
          <p className="mt-4 text-muted-foreground">{edition.body}</p>
        )}
      </header>

      <div className="mx-auto mt-12 max-w-5xl">
        <EditionGallery photos={edition.photos} />
      </div>
    </main>
  );
}
