import gsap from "gsap";

export function textTypingAnimation(target: HTMLElement) {
    const tl = gsap.timeline();
    tl.set(target.querySelectorAll("span"), { opacity: 0 }).to(
        target.querySelectorAll("span"),
        {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power4.out",
            stagger: 0.05,
        }
    );
    return tl;
}
