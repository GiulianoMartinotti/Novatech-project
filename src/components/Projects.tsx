type Card = { img: string; title: string; kpis: string[] };

const items: Card[] = [
    { img: "/placeholder/roof1.jpg", title: "Residencial 6 kW – Córdoba", kpis: ["On-grid", "Ahorro ~85%", "Payback 4.2 años"] },
    { img: "/placeholder/ind1.jpg", title: "Industrial 120 kW – Santa Fe", kpis: ["On-grid", "Pico 180 MWh/año", "Offset ~35%"] },
    { img: "/placeholder/off1.jpg", title: "Off-grid 12 kW + 20 kWh – Patagonia", kpis: ["Autonomía 24/7", "Microred", "Monitoreo"] },
];

export default function Projects() {
    return (
        <section id="proyectos" className="bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                            Proyectos destacados
                        </h2>
                        <p className="mt-3 text-slate-600 max-w-2xl">
                            Experiencia en residencias, comercios, agro e industria.
                        </p>
                    </div>
                    <a
                        href="#contacto"
                        className="hidden md:inline-flex rounded-xl bg-emerald-600 px-4 py-2 text-white font-semibold hover:bg-emerald-700"
                    >
                        Quiero cotizar
                    </a>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((c, i) => (
                        <article key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
                            <div className="aspect-[16/9] bg-slate-100">
                                {/* Reemplazar por <Image> si querés */}
                                <img src={c.img} alt={c.title} className="h-full w-full object-cover" />
                            </div>
                            <div className="p-5">
                                <h3 className="font-semibold text-slate-900">{c.title}</h3>
                                <ul className="mt-3 flex flex-wrap gap-2">
                                    {c.kpis.map((k, j) => (
                                        <li key={j} className="text-xs rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 px-2.5 py-1">
                                            {k}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
