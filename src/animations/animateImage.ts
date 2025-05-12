import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateImage = (element: HTMLElement) => {
    if (window.location.hash === "#sobre") {
        gsap.fromTo(
            element,
            { y: "70%" },
            {
                y: "0%",
                duration: 1,
                ease: "sine.out",
            }
        );
    } else {
        gsap.fromTo(
            element,
            { y: "50%" },
            {
                y: "0%",
                duration: 1,
                ease: "sine.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                    once: true, // anima apenas uma vez
                },
            }
        );
    }
};
