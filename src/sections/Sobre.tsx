import React, { useEffect, useRef } from "react";

import { animateImagem } from "../animations/animteImage";
import imgSobre from "../assets/sobre.jpg";

const Sobre = () => {
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (imgRef.current) {
            animateImagem(imgRef.current);
        }
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
