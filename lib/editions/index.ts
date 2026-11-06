import { edicao01 } from "./edicao-01";
import type { Edition } from "./types";

const editionsUnsorted: Edition[] = [edicao01];

export const editions: Edition[] = [...editionsUnsorted].sort((a, b) =>
  b.eventDate.localeCompare(a.eventDate)
);

export function getEditionBySlug(slug: string): Edition | undefined {
  return editions.find((edition) => edition.slug === slug);
}

export function getAllEditionSlugs(): string[] {
  return editions.map((edition) => edition.slug);
}

export type { Edition, EditionCover, EditionPhoto } from "./types";
