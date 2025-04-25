// animations/animateImageScroll.ts
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateImageScroll = (element: HTMLElement) => {
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
            },
        }
    );
};
