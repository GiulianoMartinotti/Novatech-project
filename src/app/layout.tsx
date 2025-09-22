import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NOVATECH | Energía Solar",
  description: "Soluciones solares on-grid, off-grid e híbridas. Ahorro, independencia y respaldo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="bg-white">
      {/* h-9 = 36px → espacio para la superbarra fija */}
      <body className="min-h-screen bg-white text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}



