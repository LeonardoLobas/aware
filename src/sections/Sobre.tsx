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
            ref={imgRef}
            id="sobre"
            className="min-h-screen w-full flex flex-col items-center justify-center text-white bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imgSobre})` }}
        >
            {/* Conteúdo interno opcional aqui */}
        </section>
    );
};

export default Sobre;
