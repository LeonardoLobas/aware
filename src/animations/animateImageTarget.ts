import gsap from "gsap";

export const animateImageTarget = (element: HTMLElement) => {
    gsap.fromTo(
        element,
        { y: "70%" },
        {
            y: "0%",
            duration: 0.8,
            ease: "sine.out",
        }
    );
};
