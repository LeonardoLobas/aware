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
        { y: "30%", opacity: 0 },
        {
            y: "0%",
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none",
                onEnter: () => {
                    if (onStart) onStart(); // marca a flag como true
                },
            },
        }
    );
};
