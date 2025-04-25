import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const scrollToSection = (targetId: string) => {
    const target = document.querySelector(targetId);
    if (!target) return;

    gsap.to(window, {
        duration: 1.2,
        scrollTo: {
            y: target,
            offsetY: 0,
            autoKill: true,
        },
        ease: "power2.inOut",
    });
};
