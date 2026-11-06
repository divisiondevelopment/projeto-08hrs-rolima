import Image, { type ImageProps } from "next/image";

type ImageWithCreditProps = Omit<ImageProps, "alt"> & {
  alt: string;
  credit: string;
};

export function ImageWithCredit({
  credit,
  className,
  ...imageProps
}: ImageWithCreditProps) {
  return (
    <figure className="flex flex-col gap-2">
      <Image className={className} {...imageProps} />
      <figcaption className="text-sm italic text-muted-foreground">
        {credit}
      </figcaption>
    </figure>
  );
}
