"use client";
import { useEffect, useState } from "react";

const SUPERBAR_H = 36; // coincide con pt-9 del body

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* SUPERBARRA — fija arriba, no baja */}
            <div
                className="fixed inset-x-0 top-0 z-[70] bg-white/95 backdrop-blur border-b border-slate-200/70"
                style={{ height: SUPERBAR_H }}
            >
                <div className="mx-auto max-w-6xl h-full px-4 flex items-center justify-end gap-4 text-xs text-slate-600">
                    <span className="hidden md:inline">Seguinos en nuestras redes</span>
                    <div className="flex items-center gap-3">
                        <IconLink href="#" label="Facebook"><FbIcon /></IconLink>
                        <IconLink href="#" label="LinkedIn"><InIcon /></IconLink>
                        <IconLink href="#" label="Instagram"><IgIcon /></IconLink>
                        <IconLink href="#" label="WhatsApp"><WaIcon /></IconLink>
                    </div>
                </div>
            </div>

            {/* NAV cápsula — solo esto es sticky/flota */}
            <header className="sticky top-12 md:top-14 z-[60] bg-transparent pointer-events-none">
                <div className="mx-auto max-w-6xl px-4">
                    <div
                        className={[
                            "pointer-events-auto mt-2 md:mt-3",
                            "rounded-3xl border bg-white/95 backdrop-blur px-4 md:px-6",
                            "transition-all duration-300",
                            scrolled ? "border-slate-300" : "border-slate-200",
                        ].join(" ")}
                        style={{
                            boxShadow: scrolled
                                ? "0 28px 70px rgba(0,0,0,0.18)" // ← más intensa al scrollear
                                : "0 10px 28px rgba(0,0,0,0.08)",
                        }}
                    >
                        <div className="h-20 flex items-center justify-between">
                            <a href="#" className="font-extrabold tracking-tight text-xl md:text-2xl">
                                <span className="text-slate-900">NOVA</span>
                                <span className="text-emerald-600">TECH</span>
                            </a>

                            <nav className="hidden md:flex items-center gap-8 text-[15px] text-slate-700">
                                <a href="#" className="hover:text-emerald-700">Inicio</a>
                                <a href="#nosotros" className="hover:text-emerald-700">Nosotros</a>
                                <a href="#soluciones" className="hover:text-emerald-700">Servicios</a>
                                <a href="#proyectos" className="hover:text-emerald-700">Proyectos</a>
                                <a href="#contacto" className="hover:text-emerald-700">Cotizar</a>
                            </nav>

                            <div className="hidden md:flex items-center gap-3">
                                <a href="#agro" className="rounded-2xl bg-lime-500 px-5 py-2.5 text-white font-semibold hover:bg-lime-600">
                                    Línea Agro
                                </a>
                                <a href="#contacto" className="rounded-2xl bg-emerald-600 px-5 py-2.5 text-white font-semibold hover:bg-emerald-700">
                                    Solicitar cotización
                                </a>
                            </div>

                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </header>
        </>
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
                            <a href="#agro" className="w-full text-center rounded-xl bg-lime-500 px-4 py-2 text-white font-semibold hover:bg-lime-600" onClick={() => setOpen(false)}>
                                Línea Agro
                            </a>
                            <a href="#contacto" className="w-full text-center rounded-xl bg-emerald-600 px-4 py-2 text-white font-semibold hover:bg-emerald-700" onClick={() => setOpen(false)}>
                                Cotización
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}

/* Helpers */
function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-slate-300 text-slate-600 hover:text-emerald-700 hover:border-emerald-300"
        >
            {children}
        </a>
    );
}
function FbIcon() { return (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.3-1.8 1.9-1.8H17V2.2C16.4 2.1 15.2 2 13.9 2 11 2 9 3.7 9 6.8V10H6v4h3v8h4z" /></svg>) }
function InIcon() { return (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 9H3v12h3V9zm.5-6C5.1 3 4 4.1 4 5.5S5.1 8 6.5 8 9 6.9 9 5.5 7.9 3 6.5 3zM21 21h-3v-6.5c0-1.6-.6-2.5-1.9-2.5-1 0-1.6.7-1.9 1.3-.1.2-.1.6-.1.9V21h-3V9h3v1.7C14.5 9.9 15.5 9 17.4 9c2.4 0 3.6 1.6 3.6 4.5V21z" /></svg>) }
function IgIcon() { return (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.25-3a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" /></svg>) }
function WaIcon() { return (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4.5A9.9 9.9 0 0 0 12.1 2 10 10 0 0 0 2 12a9.9 9.9 0 0 0 1.4 5.2L2 22l4.9-1.3A10.2 10.2 0 0 0 12 22a10 10 0 0 0 10-10 9.9 9.9 0 0 0-2-7.5zM12 20a8.4 8.4 0 0 1-4.3-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.4 8.4 0 1 1 12 20zm4.8-6.1c-.3-.2-1.7-.9-2-.9s-.5.1-.7.4-.8.9-1 1.1-.4.2-.7.1a6.8 6.8 0 0 1-2-1.2 7.2 7.2 0 0 1-1.3-1.6c-.1-.3 0-.5.1-.6l.3-.3a2 2 0 0 0 .2-.3.6.6 0 0 0-.1-.6c-.1-.2-.7-1.7-1-2.3s-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5A5.9 5.9 0 0 0 7 12a13.6 13.6 0 0 0 5 4 4.7 4.7 0 0 0 3 .6 2.6 2.6 0 0 0 1.7-1.1 2.1 2.1 0 0 0 .2-1.3c-.1-.2-.2-.2-.4-.3z" /></svg>) }



