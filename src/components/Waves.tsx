"use client";
import React from "react";
import clsx from "clsx";

type WavesProps = {
    invert?: boolean;
    height?: number;      // px
    durationMs?: number;  // ciclo horizontal
    bobMs?: number;       // ciclo vertical
    bobPx?: number;       // amplitud vertical
    opacity?: number;
    color?: string;       // HEX o rgba, sobreescribe currentColor
    className?: string;
    featherPx?: number;
};

export default function Waves({
    invert = false,
    height = 110,
    durationMs = 9000,
    bobMs = 4200,
    bobPx = 10,
    opacity = 1,
    color,
    className,
    featherPx = 16,
}: WavesProps) {
    return (
        <div
            className={clsx(
                "relative w-full overflow-hidden select-none pointer-events-none",
                invert && "rotate-180",
                className
            )}
            style={{ height, color }}
            aria-hidden="true"
        >
            {/* máscara suave controlada por featherPx */}
            <div
                className="absolute inset-0"
                style={{
                    maskImage: `linear-gradient(to bottom,
            transparent,
            black ${featherPx}px,
            black calc(100% - ${featherPx}px),
            transparent)`,
                    WebkitMaskImage: `linear-gradient(to bottom,
            transparent,
            black ${featherPx}px,
            black calc(100% - ${featherPx}px),
            transparent)`,
                }}
            >
                <WaveStrip
                    durationMs={durationMs}
                    bobMs={bobMs}
                    bobPx={bobPx}
                    opacity={opacity * 0.7}
                />
                <WaveStrip
                    durationMs={Math.round(durationMs * 0.82)}
                    bobMs={Math.round(bobMs * 1.15)}
                    bobPx={bobPx * 0.6}
                    opacity={opacity}
                    delayMs={-600}
                />
            </div>
        </div>
    );
}

function WaveStrip({
    durationMs,
    bobMs,
    bobPx,
    opacity,
    delayMs = 0,
}: {
    durationMs: number;
    bobMs: number;
    bobPx: number;
    opacity: number;
    delayMs?: number;
}) {
    // Tipamos el style para incluir la custom property CSS --bob sin usar `any`.
    type BobStyle = React.CSSProperties & { ["--bob"]?: string };
    const styleBob: BobStyle = {
        animationDuration: `${bobMs}ms`,
        animationDelay: `${delayMs}ms`,
        ["--bob"]: `${bobPx}px`,
    };

    return (
        // Wrapper: bobbing vertical
        <div className="absolute left-0 top-0 h-full w-full animate-wave-bob will-change-transform" style={styleBob}>
            {/* Hijo: scroll horizontal infinito */}
            <div
                className="h-full w-[300%] flex animate-wave-33 will-change-transform"
                style={{ animationDuration: `${durationMs}ms` }}
            >
                {[0, 1, 2].map((i) => (
                    <svg
                        key={i}
                        className="h-full w-1/3 shrink-0"
                        viewBox="0 0 1440 120"
                        preserveAspectRatio="none"
                        fill="currentColor"
                        style={{ opacity }}
                    >
                        <path d="M0,60 C120,20 240,0 360,0 C480,0 600,20 720,60 C840,100 960,120 1080,120 C1200,120 1320,100 1440,60 L1440,120 L0,120 Z" />
                    </svg>
                ))}
            </div>
        </div>
    );
}



