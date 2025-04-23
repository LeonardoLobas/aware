// animations/animateImageScroll.ts
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateImageScroll = (
    element: HTMLElement,
    onStart?: () => void
) => {
    gsap.fromTo(
        element,
        { y: "70%" },
        {
            y: "0%",
            duration: 0.6,
            ease: "sine.out",
            scrollTrigger: {
                trigger: element,
                start: "top bottom",
                onEnter: () => {
                    if (onStart) onStart();
                },
            },
        }
    );
};
