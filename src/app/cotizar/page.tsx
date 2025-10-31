// app/cotizar/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoBg from "@/components/VideoBg";
import QuoteForm from "@/components/QuoteForm";

export default function CotizarPage() {
    return (
        <>
            <Navbar />

            {/* más aire arriba y ancho mayor */}
            <section className="relative isolate min-h-[calc(100vh-80px)] pt-[calc(var(--nav-gap)+8rem)] pb-24">
                <VideoBg src="/media/hero.mp4" poster="/media/hero.jpg" dimOpacity={0.30} />

                <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
                    <div
                        className={[
                            "rounded-3xl bg-white/70 backdrop-blur-md",
                            "ring-1 ring-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.25)]",
                            "p-3 sm:p-4 md:p-5",
                        ].join(" ")}
                    >
                        <QuoteForm />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}



