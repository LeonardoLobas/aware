import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const scrollToSection = (targetId: string) => {
    const target = document.querySelector(targetId);
    if (!target) return;

    const hashChangeListener = (event: HashChangeEvent) => {
        event.preventDefault();
    };
    window.addEventListener("hashchange", hashChangeListener);

    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: target,
            offsetY: 0,
        },
        ease: "sine.out",
        onComplete: () => {
            history.replaceState(null, "", targetId);

            window.removeEventListener("hashchange", hashChangeListener);

            window.dispatchEvent(new HashChangeEvent("hashchange"));
        },
    });
};
