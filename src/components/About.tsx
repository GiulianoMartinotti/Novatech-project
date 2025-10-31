"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Leaf, Target, Crosshair, ChevronDown } from "lucide-react";
import Waves from "./Waves";

type TabKey = "adn" | "objetivo" | "enfoque";

const TABS: { key: TabKey; label: string; icon: React.ElementType; text: string }[] = [
    { key: "adn", label: "Nosotros", icon: Leaf, text: "Somos una empresa Argentina y Chilena con amplia experiencia en el rubro energético. Desde 2015 priorizamos seguridad eléctrica, materiales de primera línea y una experiencia sin fricción para el cliente." },
    { key: "objetivo", label: "Objetivo", icon: Target, text: "Brindar y diseñar las mejores soluciones solares a medida para aprovechar eficientemente la radiación y cubrir la energía necesaria en industria, agro, comercio y hogares, con retorno claro de inversión." },
    { key: "enfoque", label: "Enfoque", icon: Crosshair, text: "Acompañamiento de punta a punta: análisis de consumo, ingeniería, instalación certificada y monitoreo, cumpliendo normativas de Generación Distribuida vigentes." },
];

function Pill({ active, onClick, children, Icon, label }: {
    active: boolean; onClick: () => void; children: React.ReactNode; Icon: React.ElementType; label: string;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={active}
            className={[
                "group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition",
                "ring-1 shadow-sm",
                active ? "bg-white text-emerald-700 ring-emerald-700/15 shadow-emerald-900/10"
                    : "bg-emerald-50 text-emerald-800/70 ring-emerald-900/10 hover:bg-emerald-100 hover:text-emerald-800",
            ].join(" ")}
        >
            <Icon className={["h-4 w-4", active ? "text-emerald-600" : "text-emerald-500"].join(" ")} aria-hidden />
            <span>{label}</span>
            {children}
        </button>
    );
}

function AccordionItem({ title, children, defaultOpen = false }: {
    title: string; children: React.ReactNode; defaultOpen?: boolean;
}) {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <div className="rounded-2xl bg-white/80 ring-1 ring-emerald-900/10 shadow-sm">
            <button type="button" onClick={() => setOpen(v => !v)} aria-expanded={open} className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left">
                <span className="inline-flex items-center gap-2 text-emerald-950/90">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden />
                    <span className="font-medium">{title}</span>
                </span>
                <ChevronDown className={["h-5 w-5 shrink-0 transition-transform", open ? "rotate-180 text-emerald-700" : "text-emerald-500"].join(" ")} aria-hidden />
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-4"
                    >
                        <div className="pb-4 pt-1 text-sm text-emerald-950/75">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function Nosotros() {
    const [tab, setTab] = useState<TabKey>("adn");
    const active = TABS.find(t => t.key === tab)!;

    return (
        <section id="nosotros" className="relative">

                                    <div className="pointer-events-none absolute left-0 right-0 -top-[88px] h-[128px] z-[30] overflow-visible">
                                        <Waves
                                            color="white"
                                            height={96}
                                            featherPx={0}
                                            durationMs={14000}
                                            bobMs={6200}
                                            bobPx={6}
                                            className="absolute inset-0 z-[2] translate-y-[8px]"
                                        />
                                        <Waves
                                            color="white"
                                            height={104}
                                            featherPx={0}
                                            durationMs={16000}
                                            bobMs={7000}
                                            bobPx={7}
                                            className="absolute inset-0 z-[3]"
                                        />
                                    </div>




            <div className="relative bg-gradient-to-b from-white to-[#F7FCFA]">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
                    <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.35 }}
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-800 ring-1 ring-emerald-700/10 shadow-sm mb-6">
                        <span className="text-xs md:text-sm font-bold uppercase tracking-wide">NOVATECH ENERGY</span>
                    </motion.div>

                    <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-900">
                        CONECTA CON LA NATURALEZA JUNTO A NOSOTROS
                    </motion.h2>

                    <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.05 }}
                        className="mt-4 text-lg md:text-xl text-emerald-950/70">
                        Comprometidos con el cuidado del medio ambiente.
                    </motion.p>

                    <div className="mt-8 flex items-center justify-center gap-4">
                        {TABS.map(t => (
                            <Pill key={t.key} active={tab === t.key} onClick={() => setTab(t.key)} Icon={t.icon} label={t.label}>
                                {tab === t.key && <span className="absolute inset-0 -z-10 rounded-full blur-md opacity-20 bg-emerald-500/50" />}
                            </Pill>
                        ))}
                    </div>

                    <div className="relative mx-auto mt-8 max-w-3xl">
                        <AnimatePresence mode="wait">
                            <motion.p key={tab} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }}
                                className="text-base md:text-lg text-emerald-950/75">
                                {active.text}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <div className="mt-10 grid gap-3 text-left">
                        <AccordionItem title="Ingeniería e instalación on-grid, off-grid e híbridos.">
                            Diseñamos y dimensionamos tu sistema según consumo real y proyección. Instalación certificada con documentación completa y puesta en marcha prolija.
                        </AccordionItem>
                        <AccordionItem title="Asesoramiento integral en ahorro y eficiencia energética.">
                            Analizamos hábitos de consumo, medimos oportunidades y proponemos mejoras para reducir la factura desde el primer mes, sin perder confort ni productividad.
                        </AccordionItem>
                        <AccordionItem title="Capacitación, difusión y acompañamiento técnico.">
                            Te enseñamos a interpretar el rendimiento, conectamos monitoreo y brindamos soporte post–venta para mantener la instalación al 100%.
                        </AccordionItem>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 }}
                        className="mt-8 flex flex-wrap items-center justify-center gap-2">
                        {["Argentina + Chile", "Ingeniería & instalación", "Generación Distribuida"].map(chip => (
                            <span key={chip} className="rounded-full bg-white px-3 py-1 text-sm text-emerald-900 ring-1 ring-emerald-900/10 shadow-sm">{chip}</span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}




