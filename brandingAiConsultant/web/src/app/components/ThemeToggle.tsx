"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      className="btn btn-outline"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label="Alternar tema"
    >
      {dark ? <Sun size={18}/> : <Moon size={18}/>}
      {dark ? "Claro" : "Escuro"}
    </button>
  );
}
