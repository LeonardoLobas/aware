import gsap from "gsap";

export const animateImageTarget = (element: HTMLElement) => {
    gsap.fromTo(
        element,
        { y: "70%" },
        {
            y: "0%",
            duration: 1,
            ease: "sine.out",
        }
    );
};
