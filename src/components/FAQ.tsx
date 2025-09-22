"use client";
import { useState } from "react";

const faqs = [
    { q: "¿Qué mantenimiento requiere?", a: "Mínimo: limpieza de paneles y chequeos anuales. Monitoreo remoto incluido." },
    { q: "¿Necesito baterías?", a: "No en on-grid. Recomendadas para respaldo o en ubicaciones sin red (off-grid)." },
    { q: "¿Se puede ampliar?", a: "Sí, diseñamos escalable por etapas (paneles, inversor, bancos de baterías)." },
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
                    {faqs.map((f, i) => (
                        <details
                            key={i}
                            open={open === i}
                            onClick={(e) => {
                                e.preventDefault();
                                setOpen(open === i ? null : i);
                            }}
                            className="group p-5"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                                <span className="font-semibold text-slate-900">{f.q}</span>
                                <span className="rounded-full border px-2 text-slate-500 group-open:rotate-45 transition">+</span>
                            </summary>
                            <p className="mt-3 text-slate-600">{f.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
