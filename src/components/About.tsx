"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircleIcon, GlobeAmericasIcon, BoltIcon } from "@heroicons/react/24/solid";

const fadeUp: Variants = {
    hidden: { y: 24, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: .6, ease: "easeOut" } },
};
const stagger = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

export default function About() {
    return (
        <section
            id="nosotros"
            className="relative min-h-[100svh] snap-child bg-slate-50/60 py-16 md:py-28"
            aria-label="Quiénes somos"
        >
            {/* fondo sutil */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-100/60 to-white" />

            <div className="mx-auto max-w-6xl px-4 md:px-6 grid md:grid-cols-5 gap-10 items-center">
                {/* Texto principal */}
                <div className="md:col-span-3">
                    <motion.span
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-600/10 text-emerald-700 px-3 py-1 text-[13px] font-semibold"
                    >
                        <BoltIcon className="h-4 w-4" />
                        Desde 2015
                    </motion.span>

                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900"
                    >
                        Quiénes somos
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-5 text-lg leading-relaxed text-slate-700"
                    >
                        Somos una empresa <strong>argentina y chilena</strong> con vasta trayectoria en el rubro
                        energético, medio ambiente y seguridad laboral. Desde 2015 nos dedicamos a la{" "}
                        <strong>ingeniería e instalación de energías renovables</strong> en Argentina y Chile.
                        Complementariamente, dentro de nuestros objetivos está la{" "}
                        <strong>difusión, educación y el asesoramiento en ahorro energético</strong>.
                    </motion.p>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-4 text-lg leading-relaxed text-slate-700"
                    >
                        Generamos conciencia ambiental, racionalizamos el consumo y ayudamos a{" "}
                        <strong>reducir gastos eléctricos</strong>. Acompañamos la modernización y adaptación de
                        negocios a los tiempos actuales, promoviendo el <strong>autabastecimiento</strong> y
                        aprovechando los beneficios de la normativa de{" "}
                        <strong>Generación Distribuida</strong> vigente.
                    </motion.p>

                    {/* lista de puntos */}
                    <motion.ul
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-6 space-y-3 text-slate-800"
                    >
                        {[
                            "Ingeniería e instalación de sistemas solares on-grid, off-grid e híbridos.",
                            "Asesoramiento integral en ahorro y eficiencia energética.",
                            "Capacitación, difusión y acompañamiento técnico.",
                        ].map((t) => (
                            <motion.li key={t} variants={fadeUp} className="flex items-start gap-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 text-emerald-600" />
                                <span>{t}</span>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* chips / identidad */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-8 flex flex-wrap gap-3"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700">
                            <GlobeAmericasIcon className="h-4 w-4 text-emerald-600" />
                            Argentina + Chile
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700">
                            Ingeniería &amp; instalación
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700">
                            Generación Distribuida
                        </span>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-8 flex flex-wrap gap-3"
                    >
                        <a
                            href="#proyectos"
                            className="rounded-xl bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700 shadow-lg shadow-emerald-600/20"
                        >
                            Ver proyectos
                        </a>
                        <a
                            href="#contacto"
                            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-800 font-medium hover:bg-slate-50"
                        >
                            Contactanos
                        </a>
                    </motion.div>
                </div>

                
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="md:col-span-2"
                >
                    <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-5 shadow-lg">
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                            
                            <img
                                src="/media/about.jpg"
                                alt="Equipo de trabajo Novatech"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="mt-4 text-sm text-slate-600 leading-relaxed">
                            Estamos cerca de nuestros clientes, con soluciones a medida y soporte de principio a fin.
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
