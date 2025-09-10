"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewProjectPage() {
  const r = useRouter();
  const [name, setName] = useState("");
  const [plan, setPlan] = useState<"starter"|"pro"|"champions">("starter");

  return (
    <div className="max-w-xl">
      <h1 className="mb-4 text-2xl font-bold">Novo projeto</h1>
      <div className="card space-y-4">
        <div>
          <label className="label">Nome da marca</label>
          <input className="input" value={name} onChange={e=>setName(e.target.value)} />
        </div>
        <div>
          <label className="label">Plano</label>
          <select className="input" value={plan} onChange={e=>setPlan(e.target.value as "starter" | "pro" | "champions")}>
            <option value="starter">Starter</option>
            <option value="pro">Pro</option>
            <option value="champions">Champions</option>
          </select>
        </div>
        <button className="btn btn-primary" onClick={() => r.push(`/projects/1`)}>
          Criar (stub)
        </button>
      </div>
    </div>
  );
}
