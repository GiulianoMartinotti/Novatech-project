"use client";

import { motion, useReducedMotion } from "framer-motion";

/* Eje X: 6:00 a 20:00, 15 puntos */
const hours = [
    "6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12",
    "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm",
];

/* === Gráfico 1 (líneas) ===
   Rojo (fija) y Azul (2 ejes), con perfil parecido a tu imagen  */
const lineFixedRed = [0, 5, 14, 28, 48, 68, 86, 100, 92, 70, 48, 28, 12, 4, 0];
const lineTrackerBlue = [0, 4, 12, 26, 44, 62, 78, 92, 96, 88, 66, 40, 16, 4, 0];

/* === Gráfico 2 (áreas) ===
   Verde “sombrero” (2 ejes) y Gris “campana” (fija) */
const hatGreen = [0, 20, 55, 80, 92, 96, 98, 98, 98, 96, 90, 70, 45, 20, 0];
const bellGray = [0, 8, 22, 40, 60, 75, 88, 92, 88, 72, 52, 30, 12, 4, 0];

/** ====== Helpers SVG ====== **/
const W = 820;  // más ancho para parecerse a tu primer gráfico
const H = 360;
const M = { t: 24, r: 28, b: 44, l: 54 };

const innerW = W - M.l - M.r;
const innerH = H - M.t - M.b;

const x = (i: number) => M.l + (innerW * i) / (hours.length - 1);
const y = (v: number) => M.t + innerH - (innerH * v) / 100;

/** Path para línea */
function pathFrom(data: number[]) {
    return data.map((v, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(v)}`).join(" ");
}
/** Path para área */
function areaFrom(data: number[]) {
    const top = pathFrom(data);
    const lastX = x(data.length - 1);
    const firstX = x(0);
    const baseY = y(0);
    return `${top} L ${lastX} ${baseY} L ${firstX} ${baseY} Z`;
}

export default function PotentialCharts() {
    const reduce = useReducedMotion();
    const lineDur = reduce ? 0 : 2.0;
    const areaDur = reduce ? 0 : 1.1;

    return (
        <section id="potencial" className="snap-child">
            <div className="mx-auto max-w-6xl px-4 py-16">
                <p className="mt-2 text-slate-600">
                    Ejemplos de curvas y comparación entre instalación fija y seguidor de 2 ejes
                    (valores ilustrativos).
                </p>

                {/* === Gráfico 1: líneas roja/azul === */}
                <div className="mt-8 rounded-3xl border bg-white p-4 shadow-sm">
                    <h3 className="px-2 text-lg font-semibold text-slate-800">
                        Ejemplos de curvas de producción
                    </h3>

                    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto mt-2">
                        {/* grid horizontal 0/50/100 */}
                        <g stroke="#e5e7eb">
                            {[0, 50, 100].map((p) => (
                                <line key={p} x1={M.l} y1={y(p)} x2={W - M.r} y2={y(p)} />
                            ))}
                        </g>

                        {/* ejes */}
                        <g stroke="#0f172a" strokeWidth={1}>
                            <line x1={M.l} y1={H - M.b} x2={W - M.r} y2={H - M.b} />
                            <line x1={M.l} y1={M.t} x2={M.l} y2={H - M.b} />
                        </g>

                        {/* ticks X */}
                        <g fontSize="10" fill="#475569">
                            {hours.map((h, i) => (
                                <text key={h} x={x(i)} y={H - M.b + 14} textAnchor="middle">
                                    {h}
                                </text>
                            ))}
                        </g>
                        {/* ticks Y */}
                        <g fontSize="10" fill="#475569">
                            {[0, 50, 100].map((p) => (
                                <text key={p} x={M.l - 10} y={y(p) + 3} textAnchor="end">
                                    {p}%
                                </text>
                            ))}
                        </g>

                        {/* línea fija (roja) */}
                        <motion.path
                            d={pathFrom(lineFixedRed)}
                            fill="none"
                            stroke="#E11D48"        // rojo
                            strokeWidth={3.2}
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: lineDur, ease: "easeInOut" }}
                        />
                        {/* línea 2 ejes (azul) */}
                        <motion.path
                            d={pathFrom(lineTrackerBlue)}
                            fill="none"
                            stroke="#2563EB"        // azul
                            strokeWidth={3.2}
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: lineDur, delay: 0.12, ease: "easeInOut" }}
                        />

                        {/* Leyenda */}
                        <g fontSize="12">
                            <rect x={W - 240} y={M.t + 8} width="12" height="12" fill="#E11D48" rx="2" />
                            <text x={W - 220} y={M.t + 18} fill="#334155">Instalación fija</text>

                            <rect x={W - 240} y={M.t + 28} width="12" height="12" fill="#2563EB" rx="2" />
                            <text x={W - 220} y={M.t + 38} fill="#334155">Seguidor de 2 ejes</text>
                        </g>
                    </svg>
                </div>

                {/* === Gráfico 2: verde “sombrero” + gris “campana” === */}
                <div className="mt-8 rounded-3xl border bg-white p-4 shadow-sm">
                    <h3 className="px-2 text-lg font-semibold text-slate-800">
                        Producción relativa: fija vs 2 ejes
                    </h3>

                    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto mt-2">
                        {/* ejes base */}
                        <g stroke="#0f172a" strokeWidth={1}>
                            <line x1={M.l} y1={H - M.b} x2={W - M.r} y2={H - M.b} />
                            <line x1={M.l} y1={M.t} x2={M.l} y2={H - M.b} />
                        </g>

                        {/* área verde (2 ejes) debajo */}
                        <motion.path
                            d={areaFrom(hatGreen)}
                            fill="#10B981"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.8 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: areaDur }}
                        />
                        {/* área gris (fija) encima */}
                        <motion.path
                            d={areaFrom(bellGray)}
                            fill="#9CA3AF"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.9 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: areaDur, delay: 0.1 }}
                        />

                        {/* contornos para reforzar */}
                        <motion.path
                            d={pathFrom(hatGreen)}
                            fill="none"
                            stroke="#059669"
                            strokeWidth={2.2}
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: lineDur, ease: "easeInOut" }}
                        />
                        <motion.path
                            d={pathFrom(bellGray)}
                            fill="none"
                            stroke="#6B7280"
                            strokeWidth={2}
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: lineDur, delay: 0.1, ease: "easeInOut" }}
                        />

                        {/* ticks X */}
                        <g fontSize="10" fill="#475569">
                            {hours.map((h, i) => (
                                <text key={h} x={x(i)} y={H - M.b + 14} textAnchor="middle">
                                    {h}
                                </text>
                            ))}
                        </g>
                        {/* ticks Y 0/50/100 */}
                        <g fontSize="10" fill="#475569">
                            {[0, 50, 100].map((p) => (
                                <text key={p} x={M.l - 10} y={y(p) + 3} textAnchor="end">
                                    {p}%
                                </text>
                            ))}
                        </g>

                        {/* Leyenda */}
                        <g fontSize="12">
                            <rect x={W - 240} y={M.t + 8} width="12" height="12" fill="#9CA3AF" rx="2" />
                            <text x={W - 220} y={M.t + 18} fill="#334155">Instalación fija</text>

                            <rect x={W - 240} y={M.t + 28} width="12" height="12" fill="#10B981" rx="2" />
                            <text x={W - 220} y={M.t + 38} fill="#334155">Seguidor de 2 ejes</text>
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    );
}

