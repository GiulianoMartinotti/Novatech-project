"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Waves from "./Waves";
import {
    PlugZap,   // Híbrido
    Bolt,      // On-Grid
    Battery,   // Off-Grid
    ArrowRight
} from "lucide-react";


type Item = {
    key: string;
    title: string;
    Icon: React.ElementType;
    bullets: { heading: string; items: string[] }[];
    cta?: { label: string; href: string; note?: string };
};

const ITEMS: Item[] = [
    {
        key: "hibrido",
        title: "Sistema Híbrido",
        Icon: PlugZap,
        bullets: [
            {
                heading: "Funcionamiento",
                items: [
                    "Inversor bidireccional con almacenamiento: combina ON-Grid y OFF-Grid.",
                    "De día, los paneles abastecen cargas y cargan el banco de baterías.",
                    "Si no alcanza la energía solar, el inversor toma la diferencia desde la red.",
                    "Ante un corte, sigue alimentando cargas críticas con la energía de las baterías."
                ]
            },
            {
                heading: "Componentes",
                items: [
                    "Paneles solares.",
                    "Banco de baterías.",
                    "Inversor Híbrido.",
                    "Medidor bidireccional (según normativa/localidad)."
                ]
            },
            {
                heading: "Aplicación principal",
                items: [
                    "Optimizar autoconsumo con respaldo ante cortes de energía.",
                    "Lugares con red inestable o tarifas altas.",
                    "Continuidad de cargas críticas (iluminación, TICs, bombas, etc.)."
                ]
            }
        ],
        cta: { label: "Cotizar esta solución", href: "/cotizar", note: "Tiempo de respuesta: 24 hs hábiles" }
    },
    {
        key: "ongrid",
        title: "Sistema On-Grid",
        Icon: Bolt,
        bullets: [
            {
                heading: "Funcionamiento",
                items: [
                    "Requiere red eléctrica; normalmente no usa baterías.",
                    "De día, la energía solar abastece las cargas; el excedente puede inyectarse a la red.",
                    "De noche o con baja radiación, el consumo se toma de la red.",
                    "Ante un corte de red, el inversor se desconecta por seguridad."
                ]
            },
            {
                heading: "Componentes",
                items: [
                    "Paneles solares.",
                    "Inversor On-Grid.",
                    "Medidor bidireccional / esquema de inyección según normativa."
                ]
            },
            {
                heading: "Aplicación principal",
                items: [
                    "Sitios con acceso a red que buscan reducir la factura eléctrica.",
                    "Posibilidad de vender/compensar excedentes si la normativa lo permite."
                ]
            }
        ],
        cta: { label: "Cotizar esta solución", href: "/cotizar" }
    },
    {
        key: "offgrid",
        title: "Sistema Off-Grid",
        Icon: Battery,
        bullets: [
            {
                heading: "Funcionamiento",
                items: [
                    "Independiente de la red eléctrica.",
                    "De día, los paneles abastecen consumos y cargan baterías.",
                    "El banco de baterías cubre la noche y periodos sin sol; puede sumarse generador auxiliar."
                ]
            },
            {
                heading: "Componentes",
                items: [
                    "Paneles solares.",
                    "Regulador de carga.",
                    "Banco de baterías.",
                    "Inversor Off-Grid."
                ]
            },
            {
                heading: "Aplicación principal",
                items: [
                    "Zonas sin red o con servicio muy inestable.",
                    "Autonomía energética con dimensionamiento adecuado del banco de baterías."
                ]
            }
        ],
        cta: { label: "Cotizar esta solución", href: "/cotizar" }
    }
];

function AccordionCard({
    item,
    open,
    onToggle,
}: {
    item: Item;
    open: boolean;
    onToggle: () => void;
}) {
    const { Icon } = item;

    return (
        <div
            className={[
                "group rounded-3xl ring-1 shadow-lg overflow-hidden transition",
                "bg-[#111a33] ring-[#1f2a4a] shadow-black/10",
                "hover:bg-emerald-500/5 hover:ring-emerald-400/40 hover:shadow-emerald-900/30 hover:shadow-xl",
                open ? "bg-emerald-500/5 ring-emerald-400/40 shadow-emerald-900/30 shadow-xl" : "",
            ].join(" ")}
        >
            {/* Header */}
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={open}
                className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1124] transition"
            >
                <span className="flex items-center gap-3">
                    <span
                        className={[
                            "inline-flex h-9 w-9 items-center justify-center rounded-xl border transition",
                            open
                                ? "border-emerald-400/50 bg-emerald-500/10 text-emerald-300"
                                : "border-white/15 text-white group-hover:border-emerald-400/50 group-hover:text-emerald-300",
                        ].join(" ")}
                        aria-hidden="true"
                    >
                        <Icon className="h-5 w-5" />
                    </span>

                    <span
                        className={[
                            "text-xl sm:text-2xl font-semibold transition",
                            open ? "text-emerald-300" : "text-white group-hover:text-emerald-300",
                        ].join(" ")}
                    >
                        {item.title}
                    </span>
                </span>

                <span
                    className={[
                        "inline-flex h-9 w-9 items-center justify-center rounded-full border transition",
                        open
                            ? "border-emerald-400/50 bg-emerald-500/10 text-emerald-300 rotate-180"
                            : "border-white/15 text-white group-hover:border-emerald-400/50 group-hover:text-emerald-300",
                    ].join(" ")}
                    aria-hidden="true"
                    title={open ? "Contraer" : "Expandir"}
                >
                    ▾
                </span>
            </button>

            {/* Content */}
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                            <div className="grid gap-6 sm:grid-cols-2">
                                {item.bullets.map((b, idx) => (
                                    <div key={idx} className="text-gray-300">
                                        <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                                            {b.heading}
                                        </h4>
                                        <ul className="space-y-2 text-sm leading-relaxed">
                                            {b.items.map((t, i) => (
                                                <li key={i} className="pl-4 relative">
                                                    <span className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                                    {t}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            {item.cta && (
                                <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl bg-emerald-500/5 ring-1 ring-emerald-400/30 p-4">
                                    <p className="text-sm text-emerald-200">
                                        {item.cta.note ?? "Contanos tu consumo y ubicación para armarte un presupuesto."}
                                    </p>
                                    <a
                                        href={item.cta.href}
                                        className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-[#0A1124] bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500/90 transition shadow-sm"
                                    >
                                        {item.cta.label}
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function Soluciones() {
    const [openKey, setOpenKey] = useState<string | null>(null);

    return (
        <section id="soluciones" className="relative bg-[#0A1124] overflow-visible">
            
            <div className="pointer-events-none absolute left-0 right-0 -top-[88px] h-[128px] z-[30] overflow-visible">
                <Waves
                    color="#0A1124"
                    height={96}
                    featherPx={0}
                    durationMs={14000}
                    bobMs={6200}
                    bobPx={6}
                    className="absolute inset-0 z-[2] translate-y-[8px]"
                />
                <Waves
                    color="#0A1124"
                    height={104}
                    featherPx={0}
                    durationMs={16000}
                    bobMs={7000}
                    bobPx={7}
                    className="absolute inset-0 z-[3]"
                />
            </div>

            {/* Contenido */}
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-36 md:pt-44 pb-20 md:pb-28 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">Soluciones</h2>
                <p className="mt-3 max-w-3xl mx-auto text-gray-300">
                    Diseñamos e instalamos sistemas fotovoltaicos a medida: paneles, inversores, protecciones y, si corresponde,
                    bancos de baterías y medidor bidireccional.
                </p>

                {/* Acordeones */}
                <div className="mt-12 grid gap-6">
                    {ITEMS.map((it) => (
                        <AccordionCard
                            key={it.key}
                            item={it}
                            open={openKey === it.key}
                            onToggle={() => setOpenKey(openKey === it.key ? null : it.key)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}




