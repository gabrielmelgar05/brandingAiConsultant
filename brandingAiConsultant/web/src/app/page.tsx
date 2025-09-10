import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="mb-3 text-4xl font-extrabold tracking-tight">
        Crie sua marca com IA local
      </h1>
      <p className="mb-8 max-w-2xl text-[var(--muted)]">
        Visual, posicionamento e plano de ação — com modelos rodando no seu PC.
      </p>
      <div className="flex gap-3">
        <Link href="/auth/register" className="btn btn-primary">Começar agora</Link>
        <Link href="/auth/login" className="btn btn-outline">Já tenho conta</Link>
      </div>
    </main>
  );
}
