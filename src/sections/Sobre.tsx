import { useEffect, useRef } from "react";
import { animateImageTarget } from "../animations/animateImageTarget";
import { animateImageScroll } from "../animations/animateImageScroll";
import imgSobre from "../assets/sobre.jpg";

const Sobre = () => {
    const imgRef = useRef<HTMLImageElement>(null);
    const animationDone = useRef(false); // flag de controle

    useEffect(() => {
        const imgEl = imgRef.current;
        if (!imgEl) {
            console.error("Imagem não encontrada no DOM");
            return;
        }

        // Se for navegação via hash
        const hash = window.location.hash;
        if (hash === "#sobre" && !animationDone.current) {
            console.log("Executando animateImageTarget via hash");
            animateImageTarget(imgEl);
            animationDone.current = true;
        }

        // Se o hash mudar para #sobre
        const handleHashChange = () => {
            const newHash = window.location.hash;
            if (
                newHash === "#sobre" &&
                !animationDone.current &&
                imgRef.current
            ) {
                console.log("Executando animateImageTarget via hashchange");
                animateImageTarget(imgRef.current);
                animationDone.current = true;
            }
        };

        window.addEventListener("hashchange", handleHashChange);

        // Ativa scroll apenas se ainda não tiver sido animado via hash
        if (!animationDone.current) {
            animateImageScroll(imgEl, () => {
                animationDone.current = true;
            });
        }

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
                    ref={imgRef}
                    src={imgSobre}
                    alt="Imagem sobre"
                    className="absolute top-0 left-0 w-screen h-screen object-cover object-center"
                    onError={() => console.error("Erro ao carregar imagem")}
                    onLoad={() => console.log("Imagem carregada com sucesso")}
                />
            </div>
        </section>
    );
};

export default Sobre;
