// components/VideoBg.tsx
"use client";

type Props = {
    src?: string;
    poster?: string;
    dimOpacity?: number;
};

export default function VideoBg({
    src = "/media/hero.mp4",
    poster = "/media/hero.jpg",
    dimOpacity = 0.30,
}: Props) {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <video
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster={poster}
            >
                <source src={src} type="video/mp4" />
            </video>

            {/* Dim + fades para legibilidad */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.45) 100%)",
                    boxShadow: `inset 0 0 0 9999px rgba(0,0,0,${dimOpacity})`,
                }}
            />
        </div>
    );
}

