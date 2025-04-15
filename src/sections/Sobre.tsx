import { useEffect, useRef } from "react";
import { animateImageScroll } from "../animations/animateImageScroll";
import { animateImageTarget } from "../animations/animateImageTarget";
import imgSobre from "../assets/sobre.jpg";

const Sobre = () => {
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const runAnimation = () => {
            if (!imgRef.current) return;

            const hash = window.location.hash;
            if (hash === "#sobre") {
                animateImageTarget(imgRef.current);
            } else {
                animateImageScroll(imgRef.current);
            }
        };

        runAnimation(); // Executa ao montar

        window.addEventListener("hashchange", runAnimation);
        return () => window.removeEventListener("hashchange", runAnimation);
    }, []);

    return (
        <section
            id="sobre"
            className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden"
        >
            <div className="absolute bottom-0 left-0 right-0">
                <img
                    ref={imgRef}
                    src={imgSobre}
                    alt="Imagem sobre"
                    className="w-full"
                />
            </div>
        </section>
    );
};

export default Sobre;
