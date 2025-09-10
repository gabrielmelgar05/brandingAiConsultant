"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      className="btn btn-outline"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Alternar tema"
      title="Alternar tema"
    >
      {isDark ? <Sun size={18}/> : <Moon size={18}/>}
      {isDark ? "Claro" : "Escuro"}
    </button>
  );
}
