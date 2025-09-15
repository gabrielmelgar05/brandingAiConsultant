import Link from "next/link";

export default function Home() {
  return (
    <main className="container-md py-16">
      <h1 className="mb-3 text-4xl font-extrabold tracking-tight">
        Crie sua marca com IA local
      </h1>
      <p className="mb-8 max-w-2xl" style={{ color: "var(--muted)" }}>
        Visual, posicionamento e plano de ação — com modelos rodando no seu PC.
      </p>
      <div className="flex gap-3">
        <Link href="/auth/register" className="btn btn-primary">Começar agora</Link>
        <Link href="/auth/login" className="btn btn-outline">Já tenho conta</Link>
      </div>

      <hr className="my-10 border-t hr" />

      <section className="grid gap-6 md:grid-cols-3">
        {[
          ["Brief", "Cole a ideia e objetivos; validamos o que é realista."],
          ["Diretrizes visuais", "Paleta P/B + #ffc700, tipografia e exemplos."],
          ["Entregáveis", "Logo (SVG/PNG), cartão, teaser curto, plano de 90 dias."],
        ].map(([t, d]) => (
          <div key={t} className="card">
            <h3 className="mb-1 text-lg font-semibold">{t}</h3>
            <p style={{ color: "var(--muted)" }}>{d}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
