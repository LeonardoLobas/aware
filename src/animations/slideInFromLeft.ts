// animations/slideInFromLeft.ts
import gsap from "gsap";

export const slideInFromLeft = (element: HTMLElement, delay: number = 0) => {
    gsap.fromTo(
        element,
        {
            x: "-100vw", // Começa 200px à esquerda
            opacity: 0,
        },
        {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            delay: delay, // adiciona o delay
        }
    );
};
