"use client";
import { useState } from "react";
import Link from "next/link";
import { api } from "@/app/lib/api";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault(); setErr(null); setOk(null);
    try {
      await api("/auth/register", { method:"POST", json:{ name, email, password }});
      setOk("Conta criada! Você já pode entrar.");
    } catch (e: unknown) {
      if (e instanceof Error) {
        setErr(e.message || "Falha no cadastro");
      } else {
        setErr("Falha no cadastro");
      }
    }
  }

  return (
    <main className="container-md grid min-h-dvh place-items-center">
      <form onSubmit={onSubmit} className="card w-full max-w-md">
        <h1 className="mb-6 text-2xl font-bold">Criar conta</h1>
        {ok && <div className="mb-4 rounded-xl border border-black/20 bg-black/5 p-3 text-sm dark:border-white/20 dark:bg-white/5">{ok}</div>}
        {err && <div className="mb-4 rounded-xl border border-black/20 bg-black/5 p-3 text-sm dark:border-white/20 dark:bg-white/5">{err}</div>}
        <label className="label">Nome</label>
        <input className="input mb-4" value={name} onChange={e=>setName(e.target.value)} />
        <label className="label">E-mail</label>
        <input className="input mb-4" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <label className="label">Senha (mín. 6)</label>
        <input className="input mb-6" type="password" value={password} onChange={e=>setPassword(e.target.value)} required minLength={6} />
        <button className="btn btn-primary w-full">Criar</button>
        <p className="mt-4 text-sm" style={{ color:"var(--muted)" }}>
          Já tem conta? <Link className="link" href="/auth/login">Entrar</Link>
        </p>
      </form>
    </main>
  );
}
