import gsap from "gsap";

export function textTypingAnimation(target: HTMLElement) {
    const spans = target.querySelectorAll("span");

    if (!spans.length) return;

    const tl = gsap.timeline();
    tl.set(spans, { opacity: 0 }).to(spans, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power4.out",
        stagger: 0.05,
    });

    return tl;
}
