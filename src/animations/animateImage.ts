import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const activeScrollTriggers = new Map();

/**
 * Anima uma imagem com movimento vertical suave
 * @param element - O elemento HTML para animar
 */
export const animateImage = (element: HTMLElement) => {
    if (!element) return;

    const elementId = element.id || `img-${Math.floor(Math.random() * 10000)}`;
    if (!element.id) element.id = elementId;

    if (activeScrollTriggers.has(elementId)) {
        const oldTrigger = activeScrollTriggers.get(elementId);
        if (oldTrigger) {
            oldTrigger.kill();
        }
        activeScrollTriggers.delete(elementId);
    }

    gsap.killTweensOf(element);

    gsap.set(element, {
        y: window.location.hash === "#sobre" ? "10%" : "100%",
        opacity: 0,
    });

    const animateToFinalPosition = (durationTime = 0.8) => {
        gsap.killTweensOf(element);

        return gsap.to(element, {
            y: "0%",
            opacity: 1,
            duration: durationTime,
            ease: "power2.out",
            onComplete: () => {},
        });
    };

    const handleHashChange = () => {
        if (window.location.hash === "#sobre") {
            gsap.set(element, {
                y: "10%",
                opacity: 0,
            });

            setTimeout(() => {
                animateToFinalPosition(0.8);
            }, 100);
        }
    };

    window.removeEventListener("hashchange", handleHashChange);
    window.addEventListener("hashchange", handleHashChange);

    setTimeout(() => {
        if (window.location.hash === "#sobre") {
            animateToFinalPosition(0.8);
        } else {
            const trigger = ScrollTrigger.create({
                trigger: "#sobre",
                start: "top 80%",
                once: true,
                markers: false,
                onEnter: () => {
                    animateToFinalPosition(0.8);
                },
            });

            activeScrollTriggers.set(elementId, trigger);
        }
    }, 150);

    return () => {
        window.removeEventListener("hashchange", handleHashChange);

        if (activeScrollTriggers.has(elementId)) {
            const trigger = activeScrollTriggers.get(elementId);
            if (trigger) {
                trigger.kill();
            }
            activeScrollTriggers.delete(elementId);
        }

        gsap.killTweensOf(element);
    };
};
