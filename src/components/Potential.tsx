"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

/** pequeñas variantes de entrada */
const fadeUp: Variants = {
    hidden: { y: 16, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger: Variants = { show: { transition: { staggerChildren: 0.08 } } };

export default function Potential() {
    // slider 0..100 para revelar el segundo mapa
    const [pct, setPct] = useState(55);

    return (
        <section
            id="potencial"
            aria-label="Potencial solar en Argentina"
            className="relative bg-white py-20 md:py-28"
        >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                {/* encabezado */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    className="text-center mb-10 md:mb-14"
                >
                    <p className="text-emerald-600 font-semibold tracking-wide">
                        El potencial
                    </p>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
                        Irradiación solar en Argentina
                    </h2>
                    <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
                        Argentina posee zonas con irradiación líder en la región
                        (especialmente NOA y Cuyo), con densidades promedio de{" "}
                        <strong>3 a 5,5 kWh/m²/día</strong>. Esto se traduce en
                        mayor producción FV y mejores períodos de repago.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Mapa con “cortina” deslizable */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="relative"
                    >
                        {/* Contenedor con ratio fijo (739x1080) */}
                        <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-sm aspect-[739/1080] bg-white">
                            {/* Imagen base (debajo) */}
                            <Image
                                src="/media/arg_solar_1.jpg"
                                alt="Mapa de irradiación — escala A"
                                fill
                                sizes="(min-width: 1024px) 560px, 100vw"
                                className="select-none object-contain"
                                priority
                            />

                            {/* Imagen superior con clip dinámico */}
                            <div
                                className="pointer-events-none absolute inset-0 will-change-[clip-path]"
                                style={{
                                    clipPath: `inset(0 ${100 - pct}% 0 0)`,
                                    WebkitClipPath: `inset(0 ${100 - pct}% 0 0)`,
                                }}
                            >
                                <Image
                                    src="/media/arg_solar_2.jpg"
                                    alt="Mapa de irradiación — escala B"
                                    fill
                                    sizes="(min-width: 1024px) 560px, 100vw"
                                    className="select-none object-contain"
                                    priority
                                />
                            </div>

                            {/* guía y manija */}
                            <div
                                className="absolute inset-y-0"
                                style={{ left: `${pct}%` }}
                                aria-hidden
                            >
                                <div className="h-full w-px bg-white/70 shadow-[0_0_0_1px_rgba(0,0,0,0.05)]" />
                                <div className="absolute top-1/2 -left-4 -translate-y-1/2">
                                    <div className="rounded-full bg-white shadow-md ring-1 ring-slate-300 p-1">
                                        <svg width="26" height="26" viewBox="0 0 24 24" className="text-slate-700">
                                            <path
                                                d="M9.5 6l-5 6 5 6m5-12l5 6-5 6"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* range control */}
                        <div className="mt-4 px-3">
                            <input
                                type="range"
                                min={0}
                                max={100}
                                value={pct}
                                onChange={(e) => setPct(Number(e.target.value))}
                                className="w-full accent-emerald-600"
                                aria-label="Comparar mapas de irradiación"
                            />
                            <div className="mt-1 text-xs text-slate-500">
                                Deslizá para comparar escalas/escenarios
                            </div>
                        </div>
                    </motion.div>



                    {/* Lado derecho: datos + bullets */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="space-y-6"
                    >
                        {/* tarjetas de métricas */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Metric
                                title="Densidad eléctrica FV"
                                value="3–5,5"
                                unit="kWh/m²/día"
                                foot="Promedio nacional"
                            />
                            <Metric
                                title="Pico NOA / Cuyo"
                                value="6.5–7.5"
                                unit="kWh/m²/día"
                                foot="Zonas top de irradiación"
                            />
                            <Metric
                                title="Mejoramiento"
                                value=">35%"
                                unit="offset"
                                foot="vs. consumos típicos"
                            />
                            <Metric
                                title="Repago típico"
                                value="4–6"
                                unit="años"
                                foot="según caso/consumo"
                            />
                        </div>

                        {/* bullets explicativos */}
                        <motion.ul variants={fadeUp} className="space-y-3">
                            {[
                                "Altas horas de sol y cielos despejados en gran parte del territorio.",
                                "Irradiación excepcional en NOA (Jujuy, Salta, Catamarca) y Cuyo (San Juan, Mendoza).",
                                "Normativa de Generación Distribuida permite inyección a red y beneficios.",
                                "La curva de precios de la energía favorece el ahorro y repago acelerado.",
                            ].map((text) => (
                                <li
                                    key={text}
                                    className="flex items-start gap-2 text-slate-700"
                                >
                                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500/90" />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </motion.ul>

                        {/* chips */}
                        <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-2">
                            {["NOA", "Cuyo", "On-grid", "Microrred", "Monitoreo", "Autonomía 24/7"].map(
                                (label) => (
                                    <span
                                        key={label}
                                        className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700 text-sm"
                                    >
                                        {label}
                                    </span>
                                )
                            )}
                        </motion.div>

                        {/* CTA */}
                        <motion.div variants={fadeUp} className="pt-2">
                            <a
                                href="#contacto"
                                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-2.5 font-medium text-white shadow-sm hover:bg-emerald-700"
                            >
                                Quiero evaluar mi potencial
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}

function Metric({
    title,
    value,
    unit,
    foot,
}: {
    title: string;
    value: string;
    unit?: string;
    foot?: string;
}) {
    return (
        <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
        >
            <p className="text-sm text-slate-600">{title}</p>
            <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-extrabold text-slate-900">{value}</span>
                {unit && <span className="text-slate-500">{unit}</span>}
            </div>
            {foot && <p className="mt-1 text-xs text-slate-500">{foot}</p>}
        </motion.div>
    );
}
