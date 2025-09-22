export default function HowItWorks() {
    const steps = [
        { t: "1. Evaluación", d: "Analizamos tu consumo, espacio disponible y objetivos." },
        { t: "2. Diseño", d: "Dimensionamos el sistema ideal (on-grid, off-grid o híbrido)." },
        { t: "3. Propuesta", d: "Informe técnico y económica con retorno estimado." },
        { t: "4. Instalación", d: "Montaje profesional, puesta en servicio y medición." },
        { t: "5. Monitoreo", d: "App / portal para ver producción, alertas y ahorro." },
    ];

    return (
        <section id="como-funciona" className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                    ¿Cómo funciona el proceso?
                </h2>
                <p className="mt-3 text-slate-600 max-w-2xl">
                    Te acompañamos de punta a punta para que el paso a energía solar sea simple y seguro.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {steps.map((s, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
                        >
                            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 font-bold">
                                {i + 1}
                            </div>
                            <h3 className="font-semibold text-slate-900">{s.t}</h3>
                            <p className="mt-1 text-slate-600 text-sm">{s.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
