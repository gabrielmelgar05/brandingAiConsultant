"use client";
import { ThemeToggle } from "./ThemeToggle";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { api } from "@/app/lib/api";

export function Navbar() {
  const r = useRouter();
  return (
    <header className="sticky top-0 z-10 border-b border-black/10 bg-[var(--bg)]/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl" style={{ background: "var(--accent)" }} />
          <Link href="/dashboard" className="font-bold tracking-tight">Branding AI</Link>
        </div>
        <nav className="hidden items-center gap-4 md:flex">
          <Link href="/projects" className="hover:underline">Projetos</Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="btn btn-outline"
            onClick={async () => {
              try { await api("/auth/logout", { method: "POST" }); } catch {}
              r.push("/auth/login");
            }}
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}
