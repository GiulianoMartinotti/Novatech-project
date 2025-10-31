"use client";

export default function CTA() {
    // Si quieres cambiar el número, ajusta la env var en .env.local o el fallback:
    const wpp = process.env.NEXT_PUBLIC_WPP_NUMBER ?? "543515600638";
    const wppUrl = `https://wa.me/${wpp}`;

    return (
        <section
            id="contacto"
            // Fondo ancho completo, estilo Ecovatio (oscuro con leve gradiente)
            className="relative overflow-hidden bg-gradient-to-b from-[#0B1222] to-[#0E172C]"
        >
            <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-400">
                        ¿Listo para empezar?
                    </h2>

                    <p className="mt-4 text-base md:text-lg text-white/70">
                        Pedí una cotización sin cargo.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                        {/* BOTÓN: Cotizar (ruta interna) */}
                        <a
                            href="/cotizar"
                            className={[
                                "inline-flex items-center justify-center rounded-xl",
                                "bg-emerald-500 px-6 py-3 font-semibold text-[#0A1124]",
                                "shadow-lg shadow-emerald-500/20",
                                "transition hover:bg-emerald-400 hover:shadow-emerald-400/30",
                                "focus:outline-none focus:ring-2 focus:ring-emerald-300"
                            ].join(" ")}
                        >
                            Solicitar cotización
                        </a>

                        {/* BOTÓN: WhatsApp */}
                        <a
                            href={wppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={[
                                "inline-flex items-center justify-center rounded-xl",
                                "border border-emerald-400/40 bg-transparent",
                                "px-6 py-3 font-semibold text-emerald-300",
                                "transition hover:bg-emerald-400/10 hover:text-emerald-200 hover:border-emerald-300/60",
                                "focus:outline-none focus:ring-2 focus:ring-emerald-300"
                            ].join(" ")}
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

