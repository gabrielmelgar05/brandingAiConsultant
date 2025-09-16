"use client";
import { useState } from "react";
import Link from "next/link";
import { api } from "../../../lib/api";

export default function LoginPage() {
  const [email,setEmail]=useState(""); const [password,setPassword]=useState("");
  const [err,setErr]=useState<string|null>(null); const [loading,setLoading]=useState(false);

  async function onSubmit(e:React.FormEvent){ e.preventDefault(); setErr(null); setLoading(true);
    try{ await api("/auth/login",{ method:"POST", json:{email,password} }); window.location.href="/dashboard"; }
    catch(e:any){ setErr(e.message||"Falha no login"); } finally{ setLoading(false); }
  }

  return (
    <main className="container-md grid min-h-dvh place-items-center">
      <form onSubmit={onSubmit} className="glass w-full max-w-md p-6">
        <h1 className="mb-6 text-2xl font-bold">Entrar</h1>
        {err && <div className="mb-4 rounded-xl border border-white/15 bg-white/5 p-3 text-sm">{err}</div>}
        <label className="mb-1 block text-sm opacity-80">E-mail</label>
        <input className="input mb-4" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <label className="mb-1 block text-sm opacity-80">Senha</label>
        <input className="input mb-6" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button className="btn btn-primary w-full" disabled={loading}>{loading ? "Entrando..." : "Entrar"}</button>
        <p className="mt-4 text-sm opacity-80">Não tem conta? <Link className="underline" href="/auth/register">Criar</Link></p>
      </form>
    </main>
  );
}
