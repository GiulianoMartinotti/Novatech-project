"use client";

import { motion, type Variants } from "framer-motion";
import {
    Leaf,
    ShieldCheck,
    BatteryCharging,
    Droplets,
    LineChart,
    PlugZap,
    Sun,
    Clock,
} from "lucide-react";

type Ventaja = {
    icon: React.ElementType;
    title: string;
    desc: string;
};

const ventajas: Ventaja[] = [
    {
        icon: Leaf,
        title: "Independencia energética",
        desc:
            "Reducen la dependencia de los servicios públicos y otorgan autonomía en el consumo.",
    },
    {
        icon: ShieldCheck,
        title: "Sin cortes imprevistos",
        desc:
            "Con respaldo adecuado, evitás interrupciones durante picos o fallas en la red.",
    },
    {
        icon: Sun,
        title: "Energía limpia",
        desc:
            "Las renovables no generan emisiones de CO₂ durante la operación. Beneficio ambiental directo.",
    },
    {
        icon: PlugZap,
        title: "Impacto ambiental bajo",
        desc:
            "Menor huella de carbono y mayor eficiencia en el uso de los recursos.",
    },
    {
        icon: BatteryCharging,
        title: "Mínimo mantenimiento",
        desc:
            "Sistemas robustos que requieren verificación periódica y limpieza simple.",
    },
    {
        icon: LineChart,
        title: "Retorno de la inversión",
        desc:
            "Ahorro mensual sostenido que permite recuperar la inversión en el tiempo.",
    },
    {
        icon: Droplets,
        title: "Aplicaciones versátiles",
        desc:
            "Extracción de agua, climatización de piletas, bombeo, calor térmico y más.",
    },
    {
        icon: Clock,
        title: "Larga vida útil",
        desc:
            "Componentes de calidad que rinden muchos años con performance estable.",
    },
];

/* =========================
Animaciones tipadas (TS)
   ========================= */

const container: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.08,
            duration: 0.4,
            // bezier para evitar warnings de TS con strings tipo "easeOut"
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.45 },
    },
};

export default function Advantages() {
    return (
        <section id="ventajas" className="relative py-20 sm:py-24">
            {/* encabezado */}
            <div className="mx-auto max-w-4xl px-4 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                    Ventajas de la energía solar
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                    Más ahorro, más autonomía y un impacto ambiental positivo.
                </p>
            </div>

            {/* Grid con animaciones */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="mx-auto mt-12 grid gap-6 sm:gap-7 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                style={{ maxWidth: "1100px", paddingInline: "1rem" }}
            >
                {ventajas.map(({ icon: Icon, title, desc }) => (
                    <motion.article
                        key={title}
                        variants={item}
                        whileHover={{ y: -8 }}
                        className="group relative rounded-3xl bg-white ring-1 ring-emerald-900/10 shadow-sm p-6 md:p-7 transition-all
                hover:shadow-emerald-500/10 hover:ring-emerald-700/20"
                    >
                        {/* “glow” sutil al hacer hover */}
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 rounded-3xl bg-emerald-200/0 opacity-0 blur-2xl transition group-hover:bg-emerald-200/20 group-hover:opacity-100"
                        />

                        <div className="relative flex items-start gap-4">
                            <div
                                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-700/10"
                            >
                                <Icon className="h-6 w-6" />
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                                <p className="mt-1.5 text-slate-600">{desc}</p>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
}
