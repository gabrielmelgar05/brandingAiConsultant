"use client";
import { useState } from "react";
import { api } from "@/app/lib/api";

export default function LogoPage() {
  const [name, setName] = useState("NEXUS");
  const [palette, setPalette] = useState("#0b0b0b,#ffffff,#ffc700");
  const [style, setStyle] = useState("tech");
  const [withIcon, setWithIcon] = useState(true);
  const [layout, setLayout] = useState<"horizontal"|"stack"|"only-icon">("horizontal");
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  async function generate() {
    const pal = palette.split(",").map(s => s.trim());
    const res = await api<{ url: string }>("/generate/logo", {
      method: "POST",
      json: { name, palette: pal, style, with_icon: withIcon, layout },
    });
    setImgUrl(res.url);
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="card space-y-3">
        <h2 className="text-xl font-semibold">Gerar logo</h2>
        <label className="label">Nome</label>
        <input className="input" value={name} onChange={e=>setName(e.target.value)} />
        <label className="label">Paleta (hex separados por vírgula)</label>
        <input className="input" value={palette} onChange={e=>setPalette(e.target.value)} />
        <label className="label">Estilo</label>
        <input className="input" value={style} onChange={e=>setStyle(e.target.value)} />
        <div className="flex items-center gap-3">
          <input id="icon" type="checkbox" checked={withIcon} onChange={e=>setWithIcon(e.target.checked)} />
          <label htmlFor="icon" className="label">Com ícone</label>
        </div>
        <label className="label">Layout</label>
        <select className="input" value={layout} onChange={e=>setLayout(e.target.value as "horizontal" | "stack" | "only-icon")}>
          <option value="horizontal">Horizontal</option>
          <option value="stack">Empilhado</option>
          <option value="only-icon">Só ícone</option>
        </select>
        <button className="btn btn-primary" onClick={generate}>Gerar</button>
      </div>
      <div className="card">
        {imgUrl ? (
          <img src={imgUrl} alt="Logo gerada" className="w-full rounded-xl" />
        ) : (
          <p style={{ color:"var(--muted)" }}>Gere a logo para visualizar aqui…</p>
        )}
      </div>
    </div>
  );
}
