"use client";

import { motion } from "framer-motion";

type Step = {
    title: string;
    desc: string;
};

const STEPS: Step[] = [
    { title: "1. Evaluación", desc: "Analizamos tu consumo, espacio disponible y objetivos." },
    { title: "2. Diseño", desc: "Dimensionamos el sistema ideal (on-grid, off-grid o híbrido)." },
    { title: "3. Propuesta", desc: "Informe técnico y económico con retorno estimado." },
    { title: "4. Instalación", desc: "Montaje profesional, puesta en servicio y medición." },
    { title: "5. Monitoreo", desc: "App/portal para ver producción, alertas y ahorros." },
];

export default function HowWorks() {
    return (
        <section id="howWorks" className="relative bg-white" aria-label="Cómo funciona el proceso">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.45 }}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                        ¿Cómo funciona el proceso?
                    </h2>
                    <p className="mt-4 text-slate-600 text-lg">
                        Te acompañamos de punta a punta para que el paso a energía solar sea simple y seguro.
                    </p>
                </motion.div>

                <div className="relative mt-12 md:mt-16">
                    
                    <div className="grid gap-8 lg:gap-10 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {STEPS.map((s, i) => (
                            <StepCard
                                key={s.title}
                                index={i}
                                title={s.title}
                                desc={s.desc}
                                isLast={i === STEPS.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="h-10 md:h-14 bg-gradient-to-b from-emerald-50/40 to-transparent" />
        </section>
    );
}

function StepCard({
    index,
    title,
    desc,
    isLast,
}: {
    index: number;
    title: string;
    desc: string;
    isLast: boolean;
}) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            // group => permite animar la flecha desde el hover de la tarjeta
            className={[
                "group relative rounded-2xl bg-white/90 backdrop-blur",
                "ring-1 ring-slate-200 shadow-[0_6px_30px_rgba(2,6,23,0.06)]",
                "px-6 py-7 sm:px-7 sm:py-8",
                "min-h-[200px] md:min-h-[210px]",
                "flex flex-col justify-start",
                "hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-emerald-200/70",
                "transition-all duration-300 will-change-transform",
            ].join(" ")}
            whileHover={{ y: -4 }}
        >
            {/* insignia SOLO número */}
            <div className="flex items-center gap-2 text-emerald-700">
                <span className="inline-grid place-content-center h-8 w-8 rounded-full bg-emerald-100 font-bold">
                    {index + 1}
                </span>
            </div>

            <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>

            {/* Flecha centrada en el gap, solo desktop xl y si no es última */}
            {!isLast && (
                <div
                    className="
            pointer-events-none
            absolute right-[-34px] top-1/2 -translate-y-1/2
            hidden xl:flex items-center justify-center
        "
                    aria-hidden="true"
                >
                    {/* línea con dash + flecha, animada; reacciona al hover de la tarjeta (group-hover) */}
                    <svg
                        width="64"
                        height="16"
                        viewBox="0 0 64 16"
                        fill="none"
                        className="transition-transform duration-300 group-hover:scale-[1.06]"
                    >
                        <path
                            d="M2 8 H50"
                            stroke="rgba(16,185,129,0.70)"
                            strokeWidth="3"
                            strokeDasharray="6 6"
                            className="drop-shadow-[0_0_0_rgba(0,0,0,0)] group-hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.45)]"
                        >
                            {/* “corrida” suave del dash */}
                            <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1.6s" repeatCount="indefinite" />
                        </path>

                        {/* punta */}
                        <path
                            d="M60 8 L48 2 M60 8 L48 14"
                            stroke="rgba(16,185,129,0.70)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            className="transition-[stroke] duration-200 group-hover:stroke-[rgba(16,185,129,0.95)]"
                        />
                    </svg>
                </div>
            )}
        </motion.article>
    );
}


