import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "@/app/components/TheProvider";

export const metadata: Metadata = {
  title: "Branding AI",
  description: "IA local para criação de marcas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
