export default function Footer() {
    return (
        <footer className="border-t">
            <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
                <p>© {new Date().getFullYear()} NOVATECH. Todos los derechos reservados.</p>
                <p>Catamarca, Argentina · contacto@novatech.com</p>
            </div>
        </footer>
    );
}
