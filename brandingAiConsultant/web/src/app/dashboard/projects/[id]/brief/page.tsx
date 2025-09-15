"use client";
import { useState } from "react";
import { api } from "@/app/lib/api";

export default function BriefPage() {
  const [idea, setIdea] = useState("");
  const [segment, setSegment] = useState("");
  const [audience, setAudience] = useState("");
  const [budget, setBudget] = useState("");
  const [goal, setGoal] = useState("");
  const [out, setOut] = useState("");

  async function analyze() {
    setOut("");
    const res = await api<{ analysis: string }>("/brief/analyze", {
      method: "POST",
      json: { idea, segment, audience, budget, goal },
    });
    setOut(res.analysis);
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="card space-y-3">
        <h2 className="text-xl font-semibold">Brief</h2>
        <input className="input" placeholder="Ideia" value={idea} onChange={e=>setIdea(e.target.value)} />
        <input className="input" placeholder="Segmento" value={segment} onChange={e=>setSegment(e.target.value)} />
        <input className="input" placeholder="Público" value={audience} onChange={e=>setAudience(e.target.value)} />
        <input className="input" placeholder="Orçamento" value={budget} onChange={e=>setBudget(e.target.value)} />
        <input className="input" placeholder="Meta" value={goal} onChange={e=>setGoal(e.target.value)} />
        <button className="btn btn-primary" onClick={analyze}>Analisar brief</button>
      </div>
      <div className="card whitespace-pre-wrap">
        {out || <span style={{ color:"var(--muted)" }}>O resultado aparecerá aqui…</span>}
      </div>
    </div>
  );
}
