// components/QuoteForm.tsx
"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Phone, MapPin, Building2, Paperclip } from "lucide-react";

type Props = {
    defaultTipo?: string; // "hibrido" | "ongrid" | "offgrid"
};

const TIPOS = [
    { value: "hibrido", label: "Sistema Híbrido" },
    { value: "ongrid", label: "Sistema On-Grid" },
    { value: "offgrid", label: "Sistema Off-Grid" },
];

export default function QuoteForm({ defaultTipo = "" }: Props) {
    const [tipo, setTipo] = useState(defaultTipo);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [provincia, setProvincia] = useState("");
    const [localidad, setLocalidad] = useState("");
    const [consumo, setConsumo] = useState(""); // kWh/mes aprox
    const [comentarios, setComentarios] = useState("");

    // NUEVOS CAMPOS
    const [conexion, setConexion] = useState<"" | "Monofásica" | "Trifásica">("");
    const [techo, setTecho] = useState<"" | "Inclinado" | "Recto (plano)">("");
    const [factura, setFactura] = useState<File | null>(null);

    const isValid = useMemo(() => {
        return tipo && nombre && (telefono || email) && provincia;
    }, [tipo, nombre, telefono, email, provincia]);

    const wppNumber = process.env.NEXT_PUBLIC_WPP_NUMBER || "";

    function formatNumberOnly(n: string) {
        return n.replace(/\D/g, "");
    }

    function buildMessage() {
        const t = TIPOS.find((t) => t.value === tipo)?.label || "Sin especificar";
        const parts = [
            `*Solicitud de cotización*`,
            `• Tipo de solución: ${t}`,
            `• Nombre: ${nombre}`,
            telefono ? `• Tel/WhatsApp: ${telefono}` : "",
            email ? `• Email: ${email}` : "",
            `• Provincia: ${provincia}`,
            localidad ? `• Localidad: ${localidad}` : "",
            conexion ? `• Tipo de conexión: ${conexion}` : "",
            techo ? `• Tipo de techo: ${techo}` : "",
            consumo ? `• Consumo (kWh/mes): ${consumo}` : "",
            factura ? `• Factura de luz: ${factura.name} (adjuntar en el chat)` : "",
            comentarios ? `• Comentarios: ${comentarios}` : "",
            "",
            "Enviado desde novatech.energy",
        ].filter(Boolean);

        return parts.join("\n");
    }

    function openWhatsApp() {
        const number = formatNumberOnly(wppNumber);
        const text = encodeURIComponent(buildMessage());
        const url = number
            ? `https://wa.me/${number}?text=${text}`
            : `https://api.whatsapp.com/send?text=${text}`; // fallback si no hay número
        window.open(url, "_blank");
    }

    async function copyToClipboard() {
        try {
            await navigator.clipboard.writeText(buildMessage());
            alert("Resumen copiado al portapapeles ✅");
        } catch {
            alert("No se pudo copiar. Probá el botón de WhatsApp.");
        }
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (isValid) openWhatsApp();
            }}
            className="rounded-3xl bg-[#111a33] ring-1 ring-[#1f2a4a] p-6 sm:p-8 shadow-xl"
        >
            {/* Selección */}
            <div className="grid gap-6 sm:grid-cols-2">
                <div className="text-left">
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        Tipo de solución
                    </label>
                    <select
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                        className="w-full rounded-xl bg-[#0d1733] text-white border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60"
                        required
                    >
                        <option value="" disabled>
                            Elegí una opción
                        </option>
                        {TIPOS.map((t) => (
                            <option key={t.value} value={t.value}>
                                {t.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="text-left">
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        Nombre y apellido
                    </label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="w-full rounded-xl bg-[#0d1733] text-white border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60"
                        placeholder="Tu nombre"
                        required
                    />
                </div>

                <div className="text-left">
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        WhatsApp
                    </label>
                    <div className="relative">
                        <Phone className="h-4 w-4 text-gray-400 absolute left-3 top-3.5" />
                        <input
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            className="w-full pl-9 rounded-xl bg-[#0d1733] text-white border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60"
                            placeholder="+54 9 ..."
                            inputMode="tel"
                        />
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                        Con código de país. Ej: +54 9 11 1234 5678
                    </p>
                </div>

                <div className="text-left">
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        Email <span className="text-gray-400">(opcional)</span>
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl bg-[#0d1733] text-white border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60"
                        placeholder="tucorreo@email.com"
                    />
                </div>

                <div className="text-left">
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        Provincia
                    </label>
                    <div className="relative">
                        <MapPin className="h-4 w-4 text-gray-400 absolute left-3 top-3.5" />
                        <input
                            value={provincia}
                            onChange={(e) => setProvincia(e.target.value)}
                            className="w-full pl-9 rounded-xl bg-[#0d1733] text-white border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60"
                            placeholder="Provincia"
                            required
                        />
                    </div>
                </div>

                <div className="text-left">
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        Localidad <span className="text-gray-400">(opcional)</span>
                    </label>
                    <div className="relative">
                        <Building2 className="h-4 w-4 text-gray-400 absolute left-3 top-3.5" />
                        <input
                            value={localidad}
                            onChange={(e) => setLocalidad(e.target.value)}
                            className="w-full pl-9 rounded-xl bg-[#0d1733] text-white border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60"
                            placeholder="Ciudad / Localidad"
                        />
                    </div>
                </div>

                {/* NUEVO: Tipo de conexión */}
                <div className="text-left">
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        Tipo de conexión <span className="text-gray-400">(opcional)</span>
                    </label>
                    <select
                        value={conexion}
                        onChange={(e) => setConexion(e.target.value as any)}
                        className="w-full rounded-xl bg-[#0d1733] text-white border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60"
                    >
                        <option value="">Elegí una opción</option>
                        <option>Monofásica</option>
                        <option>Trifásica</option>
                    </select>
                </div>

                {/* NUEVO: Tipo de techo */}
                <div className="text-left">
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        Tipo de techo <span className="text-gray-400">(opcional)</span>
                    </label>
                    <select
                        value={techo}
                        onChange={(e) => setTecho(e.target.value as any)}
                        className="w-full rounded-xl bg-[#0d1733] text-white border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60"
                    >
                        <option value="">Elegí una opción</option>
                        <option>Inclinado</option>
                        <option>Recto (plano)</option>
                    </select>
                </div>

                <div className="text-left">
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        Consumo mensual (kWh)
                    </label>
                    <input
                        value={consumo}
                        onChange={(e) => setConsumo(e.target.value)}
                        className="w-full rounded-xl bg-[#0d1733] text-white border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60"
                        placeholder="Ej: 450"
                        inputMode="numeric"
                    />
                </div>

                <div className="text-left sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        Comentarios
                    </label>
                    <textarea
                        value={comentarios}
                        onChange={(e) => setComentarios(e.target.value)}
                        rows={4}
                        className="w-full rounded-xl bg-[#0d1733] text-white border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60"
                        placeholder="Contanos si tenés fotos del tablero, consumo por factura, tipo de techo, etc."
                    />
                </div>

                {/* NUEVO: Adjuntar factura */}
                <div className="text-left sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        Factura de luz <span className="text-gray-400">(opcional)</span>
                    </label>
                    <div className="relative">
                        <Paperclip className="h-4 w-4 text-gray-400 absolute left-3 top-3.5" />
                        <input
                            type="file"
                            accept=".pdf,image/*"
                            onChange={(e) => setFactura(e.target.files?.[0] ?? null)}
                            className="block w-full pl-9 rounded-xl bg-[#0d1733] text-white border border-white/10 px-4 py-2.5 outline-none file:mr-4 file:rounded-lg file:border-0 file:bg-emerald-600 file:px-4 file:py-2 file:text-white hover:file:bg-emerald-700"
                        />
                    </div>
                    {factura && (
                        <p className="mt-2 text-xs text-gray-300">
                            Archivo seleccionado: <span className="font-medium">{factura.name}</span>. WhatsApp no permite adjuntarlo
                            automáticamente; adjuntalo cuando se abra el chat 🙌
                        </p>
                    )}
                </div>
            </div>

            {/* Acciones */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                    type="submit"
                    disabled={!isValid}
                    className={[
                        "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition",
                        isValid
                            ? "bg-emerald-400 text-[#0A1124] hover:bg-emerald-300 active:bg-emerald-500/90"
                            : "bg-emerald-400/40 text-emerald-200 cursor-not-allowed",
                    ].join(" ")}
                    title={isValid ? "Abrir WhatsApp" : "Completá los campos obligatorios"}
                >
                    Enviar por WhatsApp
                    <ArrowRight className="h-5 w-5" />
                </button>

                <button
                    type="button"
                    onClick={copyToClipboard}
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white ring-1 ring-white/15 hover:bg-white/5 transition"
                >
                    Copiar resumen
                </button>
            </div>

            {/* Ayuda */}
            <p className="mt-4 text-xs text-gray-400">
                Campos obligatorios: Tipo de solución, Nombre, Provincia, y un medio de contacto (WhatsApp o Email).
            </p>
        </form>
    );
}
