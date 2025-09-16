import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section id="como-funciona" className="pb-24">
        <div className="container-md grid gap-6 md:grid-cols-3">
          {[
            ["Brief inteligente", "Valida metas e pede o que falta para tornar realista."],
            ["Diretrizes visuais", "Logo, tipografia e uso de cores (PB + #ffc700)."],
            ["Plano de 90 dias", "Ações semanais, canais e metas de custo/retorno."],
          ].map(([t, s]) => (
            <div key={t} className="glass p-6">
              <h3 className="mb-2 text-lg font-semibold">{t}</h3>
              <p className="opacity-80">{s}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
