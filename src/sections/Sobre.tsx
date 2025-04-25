import { useEffect, useRef, useState } from "react";
import { animateImageTarget } from "../animations/animateImageTarget";
import { animateImageScroll } from "../animations/animateImageScroll";
import imgSobre from "../assets/sobre.jpg";

const Sobre = () => {
    const imgRef = useRef<HTMLImageElement>(null);
    const [animationTriggered, setAnimationTriggered] = useState(false);

    useEffect(() => {
        const imgEl = imgRef.current;
        if (!imgEl) {
            return;
        }

        const runTarget = () => {
            animateImageTarget(imgEl);
            setAnimationTriggered(true);
        };

        const runScroll = () => {
            animateImageScroll(imgEl, () => {
                setAnimationTriggered(true);
            });
        };

        if (window.location.hash === "#sobre" && !animationTriggered) {
            runTarget();
        } else if (window.location.hash !== "#sobre" && !animationTriggered) {
            runScroll();
        }
    }, [animationTriggered]);

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
