import gsap from "gsap";

export function textTypingAnimation(target: HTMLElement) {
    const letters = target.querySelectorAll("span");
    gsap.fromTo(
        letters,
        { opacity: 0, y: 20 },
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.05,
        }
    );
}
