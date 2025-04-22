import gsap from "gsap";

export const animateImageTarget = (element: HTMLElement) => {
    console.log("Iniciando animateImageTarget", element); // Depuração
    gsap.fromTo(
        element,
        { y: "100%" },
        {
            y: "0%",
            duration: 1,
            ease: "sine.out",
        }
    );
};
