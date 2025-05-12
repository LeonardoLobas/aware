import { useEffect, useRef } from "react";
import { animateImage } from "../animations/animateImage";
import imgSobre from "../assets/sobre.jpg"; // Imagem JPG original

const Sobre = () => {
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (imgRef.current) {
            animateImage(imgRef.current);
        }
    }, []);

    return (
        <section
            id="sobre"
            className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white overflow-hidden"
        >
            <div className="relative w-screen h-screen overflow-hidden">
                <img
                    loading="lazy"
                    ref={imgRef}
                    src={imgSobre}
                    alt="Imagem sobre"
                    srcSet={`${imgSobre} 1200w, ${imgSobre} 800w, ${imgSobre} 600w`} // Ajusta as resoluções
                    sizes="(max-width: 600px) 600px, (max-width: 1200px) 800px, 1200px"
                    className="sobre-img absolute top-0 left-0 w-screen h-screen object-cover object-center"
                />
            </div>
        </section>
    );
};

export default Sobre;
