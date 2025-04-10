// animations/fadeInOnScroll.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeInOnScroll = (element: HTMLElement | null) => {
    if (!element) return;

    gsap.fromTo(
        element,
        { opacity: 0, y: 0 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        }
    );
};
