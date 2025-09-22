export default function Benefits() {
    const data = [
        { t: "Ahorro y previsibilidad", d: "Reducí tu factura y protegé tu tarifa a futuro." },
        { t: "Independencia", d: "Opciones con baterías para respaldo y off-grid." },
        { t: "Sustentabilidad", d: "Menor huella de carbono y mejor imagen de marca." },
    ];
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                    ¿Por qué elegir NOVATECH?
                </h2>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {data.map((b, i) => (
                        <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h3 className="font-semibold text-slate-900">{b.t}</h3>
                            <p className="mt-2 text-slate-600">{b.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
