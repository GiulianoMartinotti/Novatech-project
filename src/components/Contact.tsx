"use client";

import { useState } from "react";

export default function Contact() {
    const [sent, setSent] = useState(false);

    // clases reutilizables para inputs / textareas
    const inputClass =
        "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 " +
        "text-slate-900 placeholder-slate-500 outline-none " +
        "focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100";

    return (
        <section id="contacto" className="bg-slate-50 border-t">
            <div className="mx-auto max-w-6xl px-4 py-16">
                <h2 className="text-3xl font-bold text-slate-900">Solicitar cotización</h2>
                <p className="mt-2 text-slate-700">
                    Dejanos tus datos y, si podés, adjuntá una foto de tu última factura
                    para dimensionar el sistema ideal.
                </p>

                {!sent ? (
                    <form
                        className="mt-8 grid md:grid-cols-2 gap-6"
                        onSubmit={(e) => {
                            e.preventDefault();
                            setSent(true);
                        }}
                    >
                        <input className={inputClass} placeholder="Nombre y Apellido" required aria-label="Nombre y Apellido" />
                        <input className={inputClass} placeholder="Email" type="email" required aria-label="Email" />
                        <input className={inputClass} placeholder="Teléfono / WhatsApp" aria-label="Teléfono o WhatsApp" />
                        <input className={inputClass} placeholder="Localidad / Provincia" aria-label="Localidad o Provincia" />

                        <textarea
                            className={`${inputClass} md:col-span-2 resize-y min-h-[140px]`}
                            placeholder="Contanos tu caso (hogar/empresa, consumos, dudas)"
                            aria-label="Mensaje"
                        />

                        {/* File input estilizado */}
                        <div className="md:col-span-2">
                            <label className="block text-slate-800 font-medium mb-2">Adjuntar factura (opcional)</label>
                            <input
                                type="file"
                                className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 file:mr-4 file:rounded-lg file:border-0 file:bg-emerald-600 file:px-4 file:py-2 file:text-white hover:file:bg-emerald-700"
                                aria-label="Adjuntar archivo de factura"
                            />
                            <p className="mt-2 text-sm text-slate-600">
                                Formatos aceptados: JPG/PNG/PDF. Tamaño máx. 10&nbsp;MB.
                            </p>
                        </div>

                        <div className="md:col-span-2 flex justify-end">
                            <button
                                className="rounded-xl bg-emerald-600 px-6 py-3 text-white font-medium hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-100"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="mt-8 rounded-2xl border border-emerald-100 p-6 bg-white shadow-sm">
                        <p className="font-medium text-slate-900">¡Gracias! Te contactaremos a la brevedad.</p>
                        <p className="text-slate-700 text-sm mt-1">
                            (Luego conectamos este formulario a un servicio de envío.)
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

