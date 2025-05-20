import { useEffect, useState, useCallback } from "react";
import { scrollToSection } from "../animations/scrollToSection";

const navItems = [
    { name: "HOME", href: "#home" },
    { name: "SOBRE", href: "#sobre" },
    { name: "SERVIÇOS", href: "#servicos" },
    { name: "CONTATO", href: "#contato" },
];

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        const offset = 100;

        const index = navItems.findIndex(({ href }) => {
            const el = document.getElementById(href.replace("#", ""));
            if (!el) return false;

            const { offsetTop, offsetHeight } = el;
            return (
                scrollY >= offsetTop - offset &&
                scrollY < offsetTop + offsetHeight - offset
            );
        });

        if (index !== -1) {
            setActiveIndex(index);

            const currentHref = navItems[index].href;
            if (window.location.hash !== currentHref) {
                history.replaceState(null, "", currentHref);
            }
        }
    }, []);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <nav className="fixed left-1/2 -translate-x-1/2 mt-8 w-full max-w-xs z-50 shadow-md bg-[#262626]/50 backdrop-blur-xs">
            <div className="px-4 py-3 flex justify-center items-center">
                <ul className="flex space-x-3 text-[#fafaff] font-md">
                    {navItems.map((item, index) => {
                        const isActive =
                            hoveredIndex === index || activeIndex === index;

                        return (
                            <li
                                key={item.name}
                                className="relative cursor-pointer"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <a
                                    role="button"
                                    className="cursor-pointer"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }}
                                >
                                    {item.name}
                                </a>

                                <span
                                    className={`absolute left-0 -bottom-1 h-0.5 bg-[#fafaff] transition-all duration-300 ${
                                        isActive ? "w-full" : "w-0"
                                    }`}
                                ></span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
