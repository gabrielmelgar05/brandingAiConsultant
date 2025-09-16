"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-4 z-40">
      <div className="container-md">
        <div className="glass flex items-center justify-between rounded-xl2 px-4 py-2 shadow-soft">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-xl" style={{ background: "var(--accent)" }} />
            <Link href="/" className="font-semibold tracking-tight">Branding AI</Link>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <Link href="#como-funciona" className="opacity-80 hover:opacity-100">Como funciona</Link>
            <Link href="#planos" className="opacity-80 hover:opacity-100">Planos</Link>
            <Link href="/auth/login" className="btn btn-outline">Entrar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
