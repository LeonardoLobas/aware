import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateImageScroll = (element: HTMLElement) => {
    gsap.fromTo(
        element,
        { y: "100%" },
        {
            y: "0%",
            duration: 2,
            ease: "expo.out",
            scrollTrigger: {
                trigger: element,
                start: "top bottom", // quando o topo do elemento encostar no final da viewport
                toggleActions: "play none none none", // só executa uma vez
            },
        }
    );
};
