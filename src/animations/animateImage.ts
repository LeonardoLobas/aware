import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const activeScrollTriggers = new Map();

export const animateImage = (element: HTMLElement) => {
    if (!element) return;

    const elementId = element.id || `img-${Math.floor(Math.random() * 10000)}`;
    if (!element.id) element.id = elementId;

    if (activeScrollTriggers.has(elementId)) {
        activeScrollTriggers.get(elementId)?.kill();
        activeScrollTriggers.delete(elementId);
    }

    gsap.killTweensOf(element);

    const fadeInOnly = () => {
        gsap.killTweensOf(element);
        gsap.to(element, {
            duration: 1.8,
            ease: "power3.out",
        });
    };

    const animateFromScroll = () => {
        gsap.killTweensOf(element);
        gsap.fromTo(
            element,
            { y: "40%", opacity: 1 },
            {
                y: "0%",
                opacity: 1,
                duration: 1.8,
                ease: "power3.out",
            }
        );
    };

    const handleHashChange = () => {
        if (window.location.hash === "#sobre") {
            fadeInOnly();
        }
    };

    window.removeEventListener("hashchange", handleHashChange);
    window.addEventListener("hashchange", handleHashChange);

    requestAnimationFrame(() => {
        if (window.location.hash === "#sobre") {
            fadeInOnly();
        } else {
            const trigger = ScrollTrigger.create({
                trigger: "#sobre",
                start: "top 95%",
                once: true,
                markers: false,
                onEnter: () => animateFromScroll(),
            });

            activeScrollTriggers.set(elementId, trigger);
        }
    });

    return () => {
        window.removeEventListener("hashchange", handleHashChange);
        activeScrollTriggers.get(elementId)?.kill();
        activeScrollTriggers.delete(elementId);
        gsap.killTweensOf(element);
    };
};
