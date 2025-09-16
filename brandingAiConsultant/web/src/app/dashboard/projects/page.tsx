import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Projetos</h1>
        <Link href="/projects/new" className="btn btn-primary">Novo projeto</Link>
      </div>
      <div className="glass p-6">
        <p className="opacity-80">Você ainda não tem projetos.</p>
      </div>
    </div>
  );
}
