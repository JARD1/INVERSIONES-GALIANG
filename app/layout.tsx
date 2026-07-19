// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadatos limpios, Next.js detectará automáticamente 'app/favicon.ico'
export const metadata: Metadata = {
  title: "Inversiones Galiang, C.A. | Soluciones IT & Ecosistema iSeries",
  description: "Inversiones Galiang provee soluciones integrales, ayudando a sus clientes a definir, diseñar y buscar resultados efectivos a sus necesidades de optimización de procesos e integración ETL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050811] text-slate-300">
        {children}
      </body>
    </html>
  );
}