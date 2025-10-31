"use client";

import Waves from "./Waves";

type Props = {
    position: "top" | "bottom";
    color: string;
    offset?: number;
    shift?: number;         
    shadowOpacity?: number;  // opacidad de la 2da ola (0..1)
};



export default function SectionDivider({
    position,
    color = "#0A1124",
    offset = 28,
    shift = 60,
    shadowOpacity = 0.12,
}: Props) {
    const isTop = position === "top";
    const invertWave = position === "bottom";

    return (
        <div
            className="pointer-events-none absolute inset-x-0"
            style={{
                top: isTop ? -offset : undefined,
                bottom: !isTop ? -offset : undefined,
                transform: `translateY(${shift}px)`, 
            }}
            aria-hidden
        >

            <Waves
                color={color}
                height={64}
                invert={invertWave}
                featherPx={0}
                durationMs={12000}
                bobMs={6200}
                bobPx={5}
            />


            <div className="relative -mt-3" style={{ opacity: shadowOpacity }}>
                <Waves
                    color={color}
                    height={64}
                    invert={invertWave}
                    featherPx={0}
                    durationMs={14000}
                    bobMs={6200}
                    bobPx={6}
                />
            </div>
        </div>
    );
}

