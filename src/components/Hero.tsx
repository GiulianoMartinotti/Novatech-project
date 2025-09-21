export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-slate-50 to-white">
            <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
                        Energía solar hecha simple
                    </h1>
                    <p className="mt-4 text-lg text-slate-700">
                        Ahorro, independencia y respaldo para tu hogar o empresa con sistemas
                        on-grid, off-grid e híbridos.
                    </p>

                    <div className="mt-6 flex gap-3">
                        <a
                            href="#contacto"
                            className="rounded-xl bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700"
                        >
                            Solicitar cotización
                        </a>
                        <a
                            href="#soluciones"
                            className="rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-800 hover:bg-slate-50"
                        >
                            Ver soluciones
                        </a>
                    </div>
                </div>

                <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                    <ul className="grid grid-cols-2 gap-4 text-sm">
                        <li className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                            <p className="font-semibold text-slate-900">On-Grid</p>
                            <p className="text-slate-700">Ahorro conectado a red.</p>
                        </li>
                        <li className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                            <p className="font-semibold text-slate-900">Off-Grid</p>
                            <p className="text-slate-700">Autonomía con baterías.</p>
                        </li>
                        <li className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                            <p className="font-semibold text-slate-900">Híbrido</p>
                            <p className="text-slate-700">Lo mejor de ambos.</p>
                        </li>
                        <li className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                            <p className="font-semibold text-slate-900">Bombeo / Térmico</p>
                            <p className="text-slate-700">Opcional según proyecto.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

