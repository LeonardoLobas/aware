import gsap from "gsap";

export function textTypingAnimation(
    target: HTMLElement,
    options?: { duration?: number; stagger?: number }
) {
    const letters = target.querySelectorAll("span");
    gsap.fromTo(
        letters,
        { opacity: 0 },
        {
            opacity: 1,
            y: 0,
            duration: options?.duration || 1000,
            ease: "power4.out",
            stagger: options?.stagger || 0.05,
        }
    );
}
