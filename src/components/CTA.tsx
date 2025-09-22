export default function CTA() {
    return (
        <section id="contacto" className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 md:p-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 justify-between">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-emerald-900">
                                ¿Listo para empezar?
                            </h2>
                            <p className="mt-2 text-emerald-800/90">
                                Pedí una cotización sin cargo. Si podés, adjuntá tu última factura.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href="mailto:ventas@novatech.com"
                                className="rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold hover:bg-emerald-700"
                            >
                                Solicitar cotización
                            </a>
                            <a
                                href="https://wa.me/5490000000000"
                                className="rounded-xl border border-emerald-300 bg-white px-5 py-3 text-emerald-700 font-semibold hover:bg-emerald-50"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
