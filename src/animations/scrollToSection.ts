// animations/scrollToSection.ts
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const scrollToSection = (targetId: string) => {
    const target = document.querySelector(targetId);
    if (!target) return;

    gsap.to(window, {
        duration: 2,
        scrollTo: {
            y: target,
            offsetY: 0, // caso tenha um navbar fixa, ajusta aqui
        },
        ease: "expo.out",
    });
};
