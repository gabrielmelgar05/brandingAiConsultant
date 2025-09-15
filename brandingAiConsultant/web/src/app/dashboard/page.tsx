export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="card">
        <h2 className="mb-2 text-xl font-semibold">Bem-vindo!</h2>
        <p style={{ color:"var(--muted)" }}>
          Crie um projeto e siga o passo a passo para sua marca.
        </p>
      </div>
      <div className="card">
        <h2 className="mb-2 text-xl font-semibold">Atalhos</h2>
        <ul className="list-disc pl-6" style={{ color:"var(--muted)" }}>
          <li>Brief</li>
          <li>Diretrizes</li>
          <li>Logo & Assets</li>
          <li>Plano de 90 dias</li>
        </ul>
      </div>
    </div>
  );
}
