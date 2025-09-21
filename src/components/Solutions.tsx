const items = [
    { title: "On-Grid (Conectado a red)", bullets: ["Reduce tu factura eléctrica", "Ideal para consumos diurnos", "Sin baterías (opcional)"] },
    { title: "Off-Grid (Aislado)", bullets: ["Independencia total", "Banco de baterías", "Para zonas sin red"] },
    { title: "Híbrido", bullets: ["Red + baterías", "Respaldo ante cortes", "Escalable"] },
];

export default function Solutions() {
    return (
        <section id="soluciones" className="bg-white border-t">
            <div className="mx-auto max-w-6xl px-4 py-16">
                <h2 className="text-3xl font-bold text-slate-900">Soluciones</h2>
                <p className="mt-2 text-slate-700 leading-relaxed">
                    Diseñamos e instalamos sistemas fotovoltaicos a medida: paneles, inversores,
                    protecciones y, si corresponde, bancos de baterías y medidor bidireccional.
                </p>

                <div className="mt-8 grid md:grid-cols-3 gap-6">
                    {items.map((card) => (
                        <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h3 className="font-semibold text-lg text-slate-900">{card.title}</h3>
                            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                                {card.bullets.map((b) => <li key={b}>{b}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

