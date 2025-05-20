export const scrollToSection = (targetId: string) => {
    const id = targetId.replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({
        behavior: "smooth",
    });
};
