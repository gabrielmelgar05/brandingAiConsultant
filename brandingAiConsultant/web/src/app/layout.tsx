import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Branding AI", description: "Crie sua marca com IA local" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="pt-BR"><body>{children}</body></html>);
}
