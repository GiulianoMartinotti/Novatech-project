export default function Logo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {/* isotipo mínimo: sol + placa */}
            <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="7" cy="7" r="4" fill="currentColor" className="text-emerald-500" />
                <rect x="10.5" y="12" width="10" height="6" rx="1.2" className="fill-emerald-600" />
                <rect x="10.5" y="12" width="10" height="6" rx="1.2" className="stroke-white" fill="none" strokeWidth="0.7" />
                <path d="M10.5 15h10" className="stroke-white" strokeWidth="0.7" />
            </svg>
            <span className="font-extrabold tracking-tight">
                <span className="text-slate-900">NOVA</span>
                <span className="text-emerald-600">TECH</span>
            </span>
        </div>
    );
}
