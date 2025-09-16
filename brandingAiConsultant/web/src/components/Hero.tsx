import Link from "next/link";
import AvatarStack from "../components/AvatarStack";
import Glow from "../components/Glow";

export default function Hero() {
  return (
    <section className="relative hero-vignette pt-28 pb-20">
      <Glow />
      <div className="container-md">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Clube privado para criadores de <span className="opacity-90">marcas</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-base opacity-80">
            Reúna sua ideia, gere o visual e o plano de ação. Tudo com IA local — sem depender de chaves pagas.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/auth/register" className="btn btn-primary shine">Começar agora</Link>
            <Link href="/auth/login" className="btn btn-ghost">Já tenho conta</Link>
          </div>
          <div className="mt-8 flex items-center justify-center">
            <AvatarStack />
          </div>
        </div>
        <div className="mx-auto mt-14 w-full max-w-2xl">
          <div className="glass flex items-center gap-3 rounded-full px-4 py-3 shadow-soft">
            <div className="size-2 rounded-full" style={{ background: "var(--accent)" }} />
            <div className="flex-1 opacity-70">“Quero lançar a marca NEXUS no segmento tech…”</div>
            <div className="btn btn-outline">Gerar plano</div>
          </div>
        </div>
      </div>
    </section>
  );
}
