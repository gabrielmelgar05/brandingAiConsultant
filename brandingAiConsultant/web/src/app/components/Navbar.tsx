"use client";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { api } from "@/app/lib/api";
import { useRouter } from "next/navigation";

export function Navbar() {
  const r = useRouter();

  return (
    <header className="sticky top-0 z-10 border-b bg-[var(--bg)]/75 backdrop-blur">
      <div className="container-md flex h-14 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl" style={{ background: "var(--accent)" }} />
          <Link href="/dashboard" className="font-bold tracking-tight">Branding AI</Link>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/projects" className="hover:underline">Projetos</Link>
          <a className="hover:underline" href="https://example.com/docs" target="_blank">Docs</a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="btn btn-outline"
            onClick={async () => { try { await api("/auth/logout", { method:"POST" }); } catch {} r.push("/auth/login"); }}
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}
