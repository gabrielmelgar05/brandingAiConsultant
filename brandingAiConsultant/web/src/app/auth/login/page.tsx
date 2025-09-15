"use client";
import { useState } from "react";
import Link from "next/link";
import { api } from "@/app/lib/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault(); setErr(null); setLoading(true);
    try {
      await api("/auth/login", { method:"POST", json:{ email, password }});
      window.location.href = "/dashboard";
    } catch (e: unknown) {
      if (e instanceof Error) {
        setErr(e.message || "Falha no login");
      } else {
        setErr("Falha no login");
      }
    } finally { setLoading(false); }
  }

  return (
    <main className="container-md grid min-h-dvh place-items-center">
      <form onSubmit={onSubmit} className="card w-full max-w-md">
        <h1 className="mb-6 text-2xl font-bold">Entrar</h1>
        {err && <div className="mb-4 rounded-xl border border-black/20 bg-black/5 p-3 text-sm dark:border-white/20 dark:bg-white/5">{err}</div>}
        <label className="label">E-mail</label>
        <input className="input mb-4" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <label className="label">Senha</label>
        <input className="input mb-6" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button className="btn btn-primary w-full" disabled={loading}>{loading ? "Entrando..." : "Entrar"}</button>
        <p className="mt-4 text-sm" style={{ color:"var(--muted)" }}>
          Não tem conta? <Link className="link" href="/auth/register">Crie agora</Link>
        </p>
      </form>
    </main>
  );
}
