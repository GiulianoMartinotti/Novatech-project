"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

type LinkItem =
    | { id: "hero" | "nosotros" | "soluciones"; label: string; href: `/#${string}`; kind: "hash" }
    | { id: "contacto"; label: string; href: "/cotizar"; kind: "route" };

const LINKS: LinkItem[] = [
    { href: "/#hero", id: "hero", label: "Inicio", kind: "hash" },
    { href: "/#nosotros", id: "nosotros", label: "Nosotros", kind: "hash" },
    { href: "/#soluciones", id: "soluciones", label: "Servicios", kind: "hash" },
    { href: "/cotizar", id: "contacto", label: "Cotizar", kind: "route" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState<string>("hero");

    // Sombra/estilo al scrollear
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Scroll-spy SOLO en la home (donde existen las secciones)
    useEffect(() => {
        if (pathname !== "/") return;

        const ids = ["hero", "nosotros", "soluciones"];
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        if (!sections.length) return;

        const io = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible?.target?.id) setActive(visible.target.id);
            },
            {
                rootMargin: "-40% 0px -45% 0px",
                threshold: [0, 0.01, 0.2, 0.4, 0.6, 0.8, 1],
            }
        );

        sections.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [pathname]);

    // Si estoy en "/", hago scroll suave; si no, dejo que el <a href="/#id"> navegue normal
    const handleHashClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
            if (pathname !== "/") return; // fuera de la home → navegación normal a "/#id"
            e.preventDefault();
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                history.replaceState(null, "", `#${id}`);
            }
        },
        [pathname]
    );

    return (
        <header
            className="fixed inset-x-0 top-0 z-50 pointer-events-none"
            aria-label="Barra de navegación"
        >
            <div
                className={[
                    "mx-auto max-w-6xl rounded-3xl bg-white/90 backdrop-blur",
                    "mt-[var(--nav-gap)] px-4 md:px-6",
                    "pointer-events-auto",
                    scrolled ? "border border-slate-200 shadow-xl" : "border border-transparent shadow-lg",
                ].join(" ")}
                style={{
                    boxShadow: scrolled ? "0 34px 90px rgba(0,0,0,0.22)" : "0 10px 28px rgba(0,0,0,0.08)",
                }}
            >
                <div className="h-20 flex items-center">
                    {/* Logo */}
                    <a
                        href="/#hero"
                        onClick={(e) => handleHashClick(e, "hero")}
                        className="flex items-center"
                    >
                        <Image
                            src="/media/logo2.png"
                            alt="Novatech"
                            width={700}
                            height={700}
                            priority
                            className="h-40 w-auto"
                        />
                    </a>

                    {/* Menú centrado */}
                    <nav className="hidden md:flex flex-1 items-center justify-center">
                        <ul className="flex items-center gap-10 text-[17px] md:text-[18px] font-semibold text-slate-800">
                            {LINKS.map((l) => {
                                // mantenemos aria-current para accesibilidad (no afecta estilos)
                                const isActive =
                                    l.kind === "route"
                                        ? pathname === l.href
                                        : pathname === "/" && active === l.id;

                                return (
                                    <li key={l.id}>
                                        <a
                                            href={l.href}
                                            onClick={l.kind === "hash" ? (e) => handleHashClick(e, l.id) : undefined}
                                            // SOLO hover (sin estado activo visual)
                                            className="relative group py-2 transition-colors hover:text-emerald-700"
                                            aria-current={isActive ? "page" : undefined}
                                        >
                                            {l.label}
                                            <span
                                                className="pointer-events-none absolute left-0 right-0 -bottom-0.5 h-[3px] rounded-full bg-emerald-600 origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
                                            />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    
                    <div className="hidden md:block w-[180px]" />

                    {/* Hamburguesa / menú móvil */}
                    <MobileMenu pathname={pathname} handleHashClick={handleHashClick} />
                </div>
            </div>
        </header>
    );
}

function MobileMenu({
    pathname,
    handleHashClick,
}: {
    pathname: string;
    handleHashClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="ml-auto md:hidden">
            <button
                aria-label="Abrir menú"
                className="inline-flex items-center justify-center rounded-xl border px-3 py-2 text-slate-700"
                onClick={() => setOpen((v) => !v)}
            >
                <svg width="22" height="22" viewBox="0 0 24 24">
                    {open ? (
                        <path
                            d="M6 6l12 12M6 18L18 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    ) : (
                        <path
                            d="M4 7h16M4 12h16M4 17h16"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    )}
                </svg>
            </button>

            {open && (
                <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-slate-200 bg-white shadow-lg">
                    <nav className="px-4 py-3 flex flex-col gap-1 text-slate-800">
                        {LINKS.map((l) => (
                            <a
                                key={l.id}
                                href={l.href}
                                onClick={(e) => {
                                    if (l.kind === "hash") handleHashClick(e, l.id);
                                    setOpen(false);
                                }}
                                className="py-2 rounded-md hover:bg-slate-50"
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
}






