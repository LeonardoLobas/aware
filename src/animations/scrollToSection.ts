import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const scrollToSection = (targetId: string) => {
    const id = targetId.replace("#", "");
    const target = document.getElementById(id);
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
