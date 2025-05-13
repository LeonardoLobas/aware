import { useEffect, useRef } from "react";
import { animateImage } from "../animations/animateImage";
import imgSobre from "../assets/sobre.jpg";

const Sobre = () => {
    const imgRef = useRef<HTMLImageElement>(null);
    const cleanupRef = useRef<(() => void) | null>(null);

    useEffect(() => {
        // Se tiver uma função de limpeza anterior, execute-a primeiro
        if (cleanupRef.current) {
            cleanupRef.current();
            cleanupRef.current = null;
        }

        if (imgRef.current) {
            // Certificar-se que a imagem tem um ID para rastreamento
            if (!imgRef.current.id) {
                imgRef.current.id = "sobre-img";
            }

            // Invocar a animação e guardar a função de limpeza
            const cleanup = animateImage(imgRef.current);
            cleanupRef.current = cleanup || null;
        }

        // Limpeza ao desmontar o componente
        return () => {
            if (cleanupRef.current) {
                cleanupRef.current();
                cleanupRef.current = null;
            }
        };
    }, []);

    return (
        <section
            id="sobre"
            className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white overflow-hidden"
        >
            <div className="relative w-screen h-screen overflow-hidden">
                <img
                    will-chage
                    loading="lazy"
                    ref={imgRef}
                    id="sobre-img"
                    src={imgSobre}
                    alt="Imagem sobre"
                    srcSet={`${imgSobre} 1200w, ${imgSobre} 800w, ${imgSobre} 600w`}
                    sizes="(max-width: 600px) 600px, (max-width: 1200px) 800px, 1200px"
                    className="sobre-img absolute top-0 left-0 w-screen h-screen object-cover object-center"
                />
            </div>
        </section>
    );
};

export default Sobre;
