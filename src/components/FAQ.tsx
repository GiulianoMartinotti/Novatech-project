"use client";
import { useState, ReactNode } from "react";

type FAQItem = { q: string; a: ReactNode };

const faqs: FAQItem[] = [
    { q: "¿Qué mantenimiento requiere?", a: "Mínimo: limpieza de paneles y chequeos anuales. Monitoreo remoto incluido." },
    { q: "¿Necesito baterías?", a: "No en on-grid. Recomendadas para respaldo o en ubicaciones sin red (off-grid)." },
    { q: "¿Se puede ampliar?", a: "Sí, diseñamos escalable por etapas (paneles, inversor, bancos de baterías)." },

    {
        q: "¿Qué condiciones debe cumplir mi techo/espacio?",
        a: (
            <ul className="list-disc pl-5 space-y-1">
                <li>Orientación N/NE/NO e inclinación 10–35° (ideal: sin sombras).</li>
                <li>De referencia, 3–5 kWp requieren 15–25 m².</li>
                <li>Instalamos en chapa, losa o estructuras a medida.</li>
            </ul>
        ),
    },
    {
        q: "¿Qué pasa cuando se corta la luz?",
        a: (
            <div className="space-y-1">
                <div>
                    <b>On-Grid:</b> por seguridad se apaga (anti-isla).
                </div>
                <div>
                    <b>Híbrido:</b> mantiene cargas críticas con baterías y/o red cuando vuelve.
                </div>
                <div>
                    <b>Off-Grid:</b> opera siempre con banco de baterías, sin depender de la red.
                </div>
            </div>
        ),
    },
    {
        q: "¿Cómo rinden en días nublados y en invierno?",
        a: (
            <ul className="list-disc pl-5 space-y-1">
                <li>
                    <b>Días nublados:</b> la producción baja (aprox. <b>10–40%</b> respecto a un día despejado),
                    pero sigue habiendo generación por la luz difusa.
                </li>
                <li>
                    <b>Lluvia:</b> además de generar menos, ayuda a <b>limpiar</b> los paneles.
                </li>
                <li>
                    <b>Invierno:</b> hay menos horas de sol; se compensa con <b>buena orientación/inclinación</b> y
                    dimensionamiento adecuado.
                </li>
            </ul>
        ),
    },

    
    {
        q: "¿Resisten granizo y clima severo?",
        a: (
            <div className="space-y-1">
                <p>
                    Sí. Los paneles certificados superan ensayos de impacto (granizo de diámetro estándar a velocidad normativa) y viento.
                </p>
                <p>
                    Aun así, recomendamos un <b>seguro de hogar/comercial</b> que cubra fenómenos climáticos extremos.
                </p>
            </div>
        ),
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section id="faq" className="bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                    Preguntas frecuentes
                </h2>

                <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
                    {faqs.map((f, i) => {
                        const isOpen = open === i;
                        const Answer =
                            typeof f.a === "string" ? (
                                <p className="mt-3 text-slate-600">{f.a}</p>
                            ) : (
                                <div className="mt-3 text-slate-600">{f.a}</div>
                            );

                        return (
                            <details
                                key={i}
                                open={isOpen}
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    setOpen(isOpen ? null : i);
                                }}
                                className="group p-5"
                            >
                                <summary
                                    className="flex cursor-pointer list-none items-center justify-between gap-4"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-semibold text-slate-900">{f.q}</span>
                                    <span className="rounded-full border px-2 text-slate-500 group-open:rotate-45 transition">
                                        +
                                    </span>
                                </summary>
                                {Answer}
                            </details>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

