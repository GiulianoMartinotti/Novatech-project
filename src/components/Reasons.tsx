"use client";

import { motion, Variants } from "framer-motion";
import {
    ClipboardDocumentCheckIcon,
    LightBulbIcon,
    BoltIcon,
    BuildingOffice2Icon,
    ShieldCheckIcon,
    WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Waves from "./Waves";

const fadeUp: Variants = {
    hidden: { y: 16, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger: Variants = { show: { transition: { staggerChildren: 0.08 } } };



const FEATURES = [
    {
        title: "Pre-factibilidad del sitio",
        desc: "Relevamiento inicial, recursos solares y condiciones del terreno.",
        Icon: ClipboardDocumentCheckIcon,
    },
    {
        title: "Ingeniería y diseño",
        desc: "Conceptual y de detalle: layout, estructuras, inversores y cableado.",
        Icon: LightBulbIcon,
    },
    {
        title: "Impacto en la red",
        desc: "Cálculo de potencia, estudios de cortocircuito y conexión segura.",
        Icon: BoltIcon,
    },
    {
        title: "Dirección y obra",
        desc: "Supervisión de obra civil y eléctrica con equipos especializados.",
        Icon: BuildingOffice2Icon,
    },
    {
        title: "Protecciones y puesta en marcha",
        desc: "Ajustes, pruebas funcionales y entrega del sistema operativo.",
        Icon: ShieldCheckIcon,
    },
    {
        title: "O&M y monitoreo 24/7",
        desc: "Operación, mantenimiento preventivo y monitoreo en tiempo real.",
        Icon: WrenchScrewdriverIcon,
    },
];

export default function Reasons() {
    return (


        
        <section
            id="razones"
            className="relative bg-slate-900 pt-28 pb-24 text-slate-100"
            aria-label="¿Por qué elegir NOVATECH?"
        >

                        <div className="pointer-events-none absolute left-0 right-0 -top-[88px] h-[128px] z-[30] overflow-visible">
                            <Waves
                                color="#0f172b"
                                height={96}
                                featherPx={0}
                                durationMs={14000}
                                bobMs={6200}
                                bobPx={6}
                                className="absolute inset-0 z-[2] translate-y-[8px]"
                            />
                            <Waves
                                color="#0f172b"
                                height={104}
                                featherPx={0}
                                durationMs={16000}
                                bobMs={7000}
                                bobPx={7}
                                className="absolute inset-0 z-[3]"
                            />
                        </div>

            <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    className="mb-12"
                >
                    <p className="font-semibold tracking-wide text-emerald-400">
                        ¿Por qué elegir <span className="text-emerald-300">NOVATECH</span>?
                    </p>
                    <h2 className="mt-2 text-4xl font-extrabold md:text-5xl">
                        Ingeniería en energía solar, de punta a punta.
                    </h2>
                </motion.div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {FEATURES.map(({ title, desc, Icon }) => (
                        <motion.div
                            key={title}
                            variants={fadeUp}
                            whileHover={{ y: -4 }}
                            className="group rounded-3xl border border-slate-800 bg-slate-800/50 p-6 shadow-lg ring-1 ring-white/5"
                        >
                            <div className="mb-4 inline-flex rounded-2xl bg-emerald-400/10 p-3 text-emerald-400 ring-1 ring-emerald-400/20 group-hover:bg-emerald-400/15">
                                <Icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">{title}</h3>
                            <p className="mt-1 text-slate-300">{desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

