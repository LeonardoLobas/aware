import React, { useEffect, useRef } from "react";
import { fadeInOnScroll } from "../animations/fadeInOnScroll";

const Sobre = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fadeInOnScroll(ref.current);
    }, []);

    return (
        <section
            id="sobre"
            ref={ref}
            className="min-h-screen flex items-center justify-center bg-[#262626] text-black"
        >
            <h2 className="text-4xl">Seção Sobre</h2>
        </section>
    );
};

export default Sobre;
