import { ImageWithCredit } from "@/components/ui/image-with-credit";

export default function ImageWithCreditFixturePage() {
  return (
    <main className="container py-16">
      <ImageWithCredit
        src="/edicoes/edicao-01/placeholder-1.jpeg"
        alt="Fixture"
        credit="Crédito de teste Playwright"
        width={400}
        height={400}
        className="h-auto w-full max-w-sm rounded-lg"
      />
    </main>
  );
}
