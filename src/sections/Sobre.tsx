import { useEffect, useRef } from "react";
import { animateImageTarget } from "../animations/animateImageTarget";
import { animateImageScroll } from "../animations/animateImageScroll";
import imgSobre from "../assets/sobre.jpg";

const Sobre = () => {
    const imgRef = useRef<HTMLImageElement>(null);

    let alreadyAnimated = false;

    useEffect(() => {
        const handleHashChange = () => {
            if (alreadyAnimated) return;
            const hash = window.location.hash;
            if (hash === "#sobre") {
                animateImageTarget(imgRef.current!);
                console.log("executou target");
            } else {
                animateImageScroll(imgRef.current!);
                console.log("executou scroll");
            }
            alreadyAnimated = true;
        };

        window.addEventListener("hashchange", handleHashChange);
        handleHashChange();

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    return (
        <section
            id="sobre"
            className="min-h-screen w-full flex items-center justify-center bg-black text-white overflow-hidden"
        >
            <div className="relative w-screen h-screen overflow-hidden">
                <img
                    loading="lazy"
                    ref={imgRef}
                    src={imgSobre}
                    alt="Imagem sobre"
                    className="sobre-img absolute top-0 left-0 w-screen h-screen object-cover object-center"
                />
            </div>
        </section>
    );
};

export default Sobre;
