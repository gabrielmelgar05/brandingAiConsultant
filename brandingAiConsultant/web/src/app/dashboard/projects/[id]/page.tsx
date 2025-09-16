import Link from "next/link";

export default function ProjectOverviewPage() {
  const id = "1"; // stub
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Projeto #{id}</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Link href={`/projects/${id}/brief`} className="glass p-6 hover:shadow-soft">
          <h3 className="font-semibold">Brief</h3>
          <p className="text-sm opacity-80">Valide a ideia e metas.</p>
        </Link>
        <Link href={`/projects/${id}/logo`} className="glass p-6 hover:shadow-soft">
          <h3 className="font-semibold">Logo</h3>
          <p className="text-sm opacity-80">Gere uma logo em SVG/PNG.</p>
        </Link>
        <Link href={`/projects/${id}/deliverables`} className="glass p-6 hover:shadow-soft">
          <h3 className="font-semibold">Entregáveis</h3>
          <p className="text-sm opacity-80">Baixe assets e teaser.</p>
        </Link>
      </div>
    </div>
  );
}
