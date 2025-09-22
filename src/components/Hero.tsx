"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

/** Variants (igual que los tuyos) */
const fadeUp: Variants = {
    hidden: { y: 24, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};
const fadeUpDelay = (d = 0.1): Variants => ({
    hidden: { y: 24, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay: d } },
});
const cardsContainer: Variants = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const cardItem: Variants = {
    hidden: { y: 16, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Hero() {
    // Respeta reduce motion, pero no bloqueemos el render para probar
    const [reduced, setReduced] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduced(mq.matches);
        const h = (e: MediaQueryListEvent) => setReduced(e.matches);
        mq.addEventListener?.("change", h);
        return () => mq.removeEventListener?.("change", h);
    }, []);

    return (
        <section
            id="hero"
            // IMPORTANTE: nada de bg que tape por encima; usamos capas con z-*
            className="relative min-h-[calc(100svh-var(--nav-offset))] flex items-center snap-child"
            aria-label="Sección principal"
        >
            {/* Capa de medios (fondo) */}
            <div className="absolute inset-0 z-0">
                {/* Imagen base (fallback / LCP) */}
                <Image
                    src="/media/hero.jpg"      // si aún no la tenés, podés quitar esta <Image>
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover blur-[1.5px] scale-[1.03] brightness-[.9]"
                />
                {/* Video (no usar z negativo) */}
                {/* Para descartar reduce-motion mientras probás, dejalo sin condición */}
                <video
                    className="absolute inset-0 h-full w-full object-cover blur-[1.5px] scale-[1.03] brightness-[.9]"
                    src="/media/hero.mp4"
                    // poster="/media/hero.jpg"  // actívalo cuando tengas el jpg
                    muted
                    playsInline
                    loop
                    autoPlay
                    preload="metadata"
                />
            </div>

            {/* Overlays por encima del video */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-black/20" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-black/20 to-transparent" />

            {/* Contenido por encima de todo */}
            <div className="relative z-20 mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center w-full">
                <div>
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-sm"
                    >
                        Energía solar hecha <span className="whitespace-nowrap">simple</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUpDelay(0.1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-4 text-lg text-white/90 drop-shadow"
                    >
                        Ahorro, independencia y respaldo para tu hogar o empresa con sistemas on-grid, off-grid e híbridos.
                    </motion.p>

                    <motion.div
                        variants={fadeUpDelay(0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-6 flex flex-wrap gap-3"
                    >
                        <motion.a
                            href="#contacto"
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="rounded-xl bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700 shadow-lg shadow-emerald-600/20"
                        >
                            Solicitar cotización
                        </motion.a>
                        <motion.a
                            href="#soluciones"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="rounded-xl border border-white/50 bg-white/10 backdrop-blur px-5 py-3 font-medium text-white hover:bg-white/15"
                        >
                            Ver soluciones
                        </motion.a>
                    </motion.div>
                </div>

                <motion.div
                    variants={cardsContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="rounded-3xl border border-white/30 bg-white/10 backdrop-blur-md p-5 shadow-lg"
                >
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        {[
                            ["On-Grid", "Ahorro conectado a red."],
                            ["Off-Grid", "Autonomía con baterías."],
                            ["Híbrido", "Lo mejor de ambos."],
                            ["Bombeo / Térmico", "Opcional según proyecto."],
                        ].map(([t, d]) => (
                            <motion.div
                                key={t}
                                variants={cardItem}
                                whileHover={{ y: -3 }}
                                className="p-4 rounded-2xl bg-white/80 text-slate-900 border border-white/60 shadow-sm"
                            >
                                <p className="font-semibold">{t}</p>
                                <p className="text-slate-700">{d}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}



