export interface EditionPhoto {
  src: string;
  alt: string;
  credit: string;
  width: number;
  height: number;
}

export interface EditionCover {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Edition {
  slug: string;
  title: string;
  eventDate: string;
  eventDateLabel: string;
  summary: string;
  cover?: EditionCover;
  body?: string;
  photos: EditionPhoto[];
}
