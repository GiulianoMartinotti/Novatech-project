import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NOVATECH | Energía Solar",
  description: "Soluciones solares on-grid, off-grid e híbridas. Ahorro, independencia y respaldo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="bg-white">
      {/* pt-9 = 36px → altura de la superbarra; ajusta si cambiamos su alto */}
      <body className="min-h-screen bg-white text-slate-800 antialiased pt-9">
        {children}
      </body>
    </html>
  );
}

