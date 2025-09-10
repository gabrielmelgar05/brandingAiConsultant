export default function DeliverablesPage() {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">Entregáveis</h2>
      <div className="card">
        <p className="text-[var(--muted)]">
          Após gerar seus assets, eles aparecerão em <code>/static</code> da API.
          Ex.: SVG da logo e teaser MP4.
        </p>
      </div>
    </div>
  );
}
