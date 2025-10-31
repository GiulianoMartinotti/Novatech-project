"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();
    const wpp = process.env.NEXT_PUBLIC_WPP_NUMBER ?? "543515600638"; // +54 9 351 560 0638
    const wppHref = `https://wa.me/${wpp}`;

    return (
        <footer className="relative bg-[#0B1222] text-slate-300">
            {/* línea/halo superior sutil */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

            {/* contenido */}
            <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
                <div className="grid gap-10 md:grid-cols-3">
                    {/* Marca + contacto */}
                    <div>
                        <p className="mt-4 text-sm text-slate-400">
                            Ingeniería y montaje de sistemas fotovoltaicos en Argentina.
                        </p>

                        <ul className="mt-4 space-y-1 text-sm">
                            <li>
                                <span className="text-slate-400">Email:</span>{" "}
                                <a
                                    href="mailto:novatech.renovables@gmail.com"
                                    className="underline decoration-emerald-500/40 hover:text-white"
                                >
                                    novatech.renovables@gmail.com
                                </a>
                            </li>
                            <li>
                                <span className="text-slate-400">WhatsApp:</span>{" "}
                                <a
                                    href={wppHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline decoration-emerald-500/40 hover:text-white"
                                >
                                    +54 9 351 560 0638
                                </a>
                            </li>
                            <li className="text-slate-400">Argentina</li>
                        </ul>
                    </div>

                    {/* Enlaces rápidos */}
                    <div className="md:pl-8">
                        <h4 className="font-semibold text-white">Secciones</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>
                                <a href="#hero" className="hover:text-white">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="#nosotros" className="hover:text-white">
                                    Nosotros
                                </a>
                            </li>
                            <li>
                                <a href="#soluciones" className="hover:text-white">
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a href="#faq" className="hover:text-white">
                                    Preguntas frecuentes
                                </a>
                            </li>
                        </ul>
                    </div>





                    {/* Bloque de atención / mini-CTA */}
                    <div className="md:pl-8">
                        <h4 className="font-semibold text-white">Atención</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>Lun a Vie · 9:00–18:00</li>
                            <li>Residencial · Comercial · Agro</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* línea inferior / legal */}
            <div className="border-t border-white/5">
                <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p>© {year} NOVATECH ENERGY · Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    );
}

