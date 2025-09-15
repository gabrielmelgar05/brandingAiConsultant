export default function DeliverablesPage() {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">Entregáveis</h2>
      <div className="card">
        <p style={{ color:"var(--muted)" }}>
          Após gerar seus assets, eles aparecerão em <code>/static</code> na API (SVG/PNG da logo, teaser MP4).
        </p>
      </div>
    </div>
  );
}
