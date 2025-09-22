"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        // solo la cápsula es sticky; el header no pinta fondo
        <header className="sticky top-4 md:top-6 z-50 bg-transparent pointer-events-none">
            <div className="mx-auto max-w-6xl px-4">
                <div
                    className={[
                        "pointer-events-auto rounded-3xl border ring-1 ring-slate-100",
                        "bg-white/95 backdrop-blur px-4 md:px-6",
                        "transition-all duration-300",
                        scrolled ? "border-slate-300" : "border-slate-200",
                    ].join(" ")}
                    style={{
                        boxShadow: scrolled
                            ? "0 34px 90px rgba(0,0,0,0.22)" // sombra más intensa al scrollear
                            : "0 10px 28px rgba(0,0,0,0.08)",
                    }}
                >
                    <div className="h-20 flex items-center justify-between">
                        {/* Wordmark */}
                        <a href="#" className="font-extrabold tracking-tight text-xl md:text-2xl">
                            <span className="text-slate-900">NOVA</span>
                            <span className="text-emerald-600">TECH</span>
                        </a>

                        {/* Menú desktop */}
                        <nav className="hidden md:flex items-center gap-8 text-[15px] text-slate-700">
                            <a href="#" className="hover:text-emerald-700">Inicio</a>
                            <a href="#nosotros" className="hover:text-emerald-700">Nosotros</a>
                            <a href="#soluciones" className="hover:text-emerald-700">Servicios</a>
                            <a href="#proyectos" className="hover:text-emerald-700">Proyectos</a>
                            <a href="#contacto" className="hover:text-emerald-700">Cotizar</a>
                        </nav>

                        {/* Acciones */}
                        <div className="hidden md:flex items-center gap-3">
                            <a
                                href="#agro"
                                className="rounded-2xl bg-lime-500 px-5 py-2.5 text-white font-semibold hover:bg-lime-600"
                            >
                                Línea Agro
                            </a>
                            <a
                                href="#contacto"
                                className="rounded-2xl bg-emerald-600 px-5 py-2.5 text-white font-semibold hover:bg-emerald-700"
                            >
                                Solicitar cotización
                            </a>
                        </div>

                        {/* Hamburguesa */}
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </header>
    );
}

function MobileMenu() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button
                aria-label="Abrir menú"
                className="md:hidden inline-flex items-center justify-center rounded-xl border px-3 py-2 text-slate-700"
                onClick={() => setOpen(v => !v)}
            >
                <svg width="22" height="22" viewBox="0 0 24 24">
                    {open ? (
                        <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    ) : (
                        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    )}
                </svg>
            </button>

            {open && (
                <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-slate-200 bg-white shadow-lg md:hidden">
                    <nav className="px-4 py-3 flex flex-col gap-2 text-slate-700">
                        <a href="#" className="py-2" onClick={() => setOpen(false)}>Inicio</a>
                        <a href="#nosotros" className="py-2" onClick={() => setOpen(false)}>Nosotros</a>
                        <a href="#soluciones" className="py-2" onClick={() => setOpen(false)}>Servicios</a>
                        <a href="#proyectos" className="py-2" onClick={() => setOpen(false)}>Proyectos</a>
                        <a href="#contacto" className="py-2" onClick={() => setOpen(false)}>Cotizar</a>
                        <div className="pt-2 flex gap-2">
                            <a
                                href="#agro"
                                className="w-full text-center rounded-xl bg-lime-500 px-4 py-2 text-white font-semibold hover:bg-lime-600"
                                onClick={() => setOpen(false)}
                            >
                                Línea Agro
                            </a>
                            <a
                                href="#contacto"
                                className="w-full text-center rounded-xl bg-emerald-600 px-4 py-2 text-white font-semibold hover:bg-emerald-700"
                                onClick={() => setOpen(false)}
                            >
                                Cotización
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}



