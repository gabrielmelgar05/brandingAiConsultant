import Link from "next/link";

export default function ProjectOverviewPage() {
  const id = "1"; // stub
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Projeto #{id}</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Link href={`/projects/${id}/brief`} className="card hover:shadow-lg">
          <h3 className="font-semibold">Brief</h3>
          <p className="text-sm text-[var(--muted)]">Alimente com sua ideia e objetivos.</p>
        </Link>
        <Link href={`/projects/${id}/logo`} className="card hover:shadow-lg">
          <h3 className="font-semibold">Logo</h3>
          <p className="text-sm text-[var(--muted)]">Gere SVG com base na paleta e estilo.</p>
        </Link>
        <Link href={`/projects/${id}/deliverables`} className="card hover:shadow-lg">
          <h3 className="font-semibold">Entregáveis</h3>
          <p className="text-sm text-[var(--muted)]">Baixe assets e teaser.</p>
        </Link>
      </div>
    </div>
  );
}
