"use client";

import { motion, Variants } from "framer-motion";

type Variant = "lift" | "altSlide";

const items = [
    {
        title: "On-Grid (Conectado a red)",
        bullets: ["Reduce tu factura eléctrica", "Ideal para consumos diurnos", "Sin baterías (opcional)"],
    },
    {
        title: "Off-Grid (Aislado)",
        bullets: ["Independencia total", "Banco de baterías", "Para zonas sin red"],
    },
    {
        title: "Híbrido",
        bullets: ["Red + baterías", "Respaldo ante cortes", "Escalable"],
    },
];

const titleReveal: Variants = {
    hidden: { y: 18, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

// Contenedor con stagger para las cards
const container: Variants = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

// Card “lift”: sube levemente y hace scale
const cardLift: Variants = {
    hidden: { y: 22, opacity: 0, scale: 0.98 },
    show: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// Card “altSlide”: entra alternando lados + pequeño skew
const cardAlt = (fromLeft: boolean): Variants => ({
    hidden: { x: fromLeft ? -30 : 30, opacity: 0, skewY: fromLeft ? 2 : -2 },
    show: {
        x: 0,
        opacity: 1,
        skewY: 0,
        transition: { duration: 0.55, ease: "easeOut" },
    },
});

// Bullets
const bullet: Variants = {
    hidden: { y: 10, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Solutions({ variant = "lift" }: { variant?: Variant }) {
    return (
        <section id="soluciones" className="bg-white scroll-mt-24">
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
                <motion.h2
                    variants={titleReveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-3xl md:text-4xl font-bold text-slate-900"
                >
                    Soluciones
                </motion.h2>

                <motion.p
                    variants={titleReveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.08 }}
                    className="mt-2 text-slate-700 leading-relaxed max-w-3xl"
                >
                    Diseñamos e instalamos sistemas fotovoltaicos a medida: paneles, inversores, protecciones y, si corresponde,
                    bancos de baterías y medidor bidireccional.
                </motion.p>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-8 grid gap-6 md:grid-cols-3"
                >
                    {items.map((card, i) => {
                        const cardVariants = variant === "lift" ? cardLift : cardAlt(i % 2 === 0);
                        return (
                            <motion.article
                                key={card.title}
                                variants={cardVariants}
                                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.10)" }}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition"
                            >
                                <h3 className="font-semibold text-lg text-slate-900">{card.title}</h3>

                                <motion.ul
                                    variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
                                    className="mt-3 list-disc pl-5 text-slate-700 space-y-1"
                                >
                                    {card.bullets.map((b) => (
                                        <motion.li key={b} variants={bullet}>
                                            {b}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}


