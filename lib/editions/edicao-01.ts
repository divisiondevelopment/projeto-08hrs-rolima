import type { Edition } from "./types";

export const edicao01: Edition = {
  slug: "edicao-01",
  title: "1ª edição — 08HRS de Rolimã",
  eventDate: "2026-10-18",
  eventDateLabel: "18 de outubro de 2026",
  summary:
    "A primeira edição reuniu carrinhos, comunidade e solidariedade em Esteio, com doações para a APAE.",
  cover: {
    src: "/edicoes/edicao-01/cover.jpeg",
    alt: "Banner da 1ª edição do 08HRS de Rolimã",
    width: 1600,
    height: 533,
  },
  body:
    "Registro da estreia do evento beneficente de carrinho de rolimã em Esteio/RS.",
  photos: [
    {
      src: "/edicoes/edicao-01/placeholder-1.jpeg",
      alt: "Momento da 1ª edição do 08HRS de Rolimã",
      credit: "Fotógrafo A (placeholder)",
      width: 1055,
      height: 1491,
    },
    {
      src: "/edicoes/edicao-01/placeholder-2.jpeg",
      alt: "Participantes na 1ª edição",
      credit: "Fotógrafo B (placeholder)",
      width: 1024,
      height: 1024,
    },
  ],
};
