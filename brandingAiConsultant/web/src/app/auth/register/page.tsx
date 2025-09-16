"use client";
import { useState } from "react";
import Link from "next/link";
import { api } from "../../../lib/api";

export default function RegisterPage() {
  const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [password,setPassword]=useState("");
  const [err,setErr]=useState<string|null>(null); const [ok,setOk]=useState<string|null>(null);

  async function onSubmit(e:React.FormEvent){ e.preventDefault(); setErr(null); setOk(null);
    try{ await api("/auth/register",{ method:"POST", json:{name,email,password} }); setOk("Conta criada! Você já pode entrar."); }
    catch(e:any){ setErr(e.message||"Falha no cadastro"); }
  }

  return (
    <main className="container-md grid min-h-dvh place-items-center">
      <form onSubmit={onSubmit} className="glass w-full max-w-md p-6">
        <h1 className="mb-6 text-2xl font-bold">Criar conta</h1>
        {ok && <div className="mb-4 rounded-xl border border-white/15 bg-white/5 p-3 text-sm">{ok}</div>}
        {err && <div className="mb-4 rounded-xl border border-white/15 bg-white/5 p-3 text-sm">{err}</div>}
        <label className="mb-1 block text-sm opacity-80">Nome</label>
        <input className="input mb-4" value={name} onChange={e=>setName(e.target.value)} />
        <label className="mb-1 block text-sm opacity-80">E-mail</label>
        <input className="input mb-4" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <label className="mb-1 block text-sm opacity-80">Senha (mín. 6)</label>
        <input className="input mb-6" type="password" value={password} onChange={e=>setPassword(e.target.value)} required minLength={6} />
        <button className="btn btn-primary w-full">Criar</button>
        <p className="mt-4 text-sm opacity-80">Já tem conta? <Link className="underline" href="/auth/login">Entrar</Link></p>
      </form>
    </main>
  );
}
