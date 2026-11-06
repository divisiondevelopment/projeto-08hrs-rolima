import Link from "next/link";

export default function EditionNotFound() {
  return (
    <main className="container flex min-h-[50vh] flex-col items-center justify-center gap-4 py-16 text-center">
      <h1 className="font-display text-2xl font-bold">Edição não encontrada</h1>
      <Link href="/edicoes" className="text-primary underline-offset-4 hover:underline">
        Ver todas as edições
      </Link>
    </main>
  );
}
