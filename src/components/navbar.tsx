import React, { useEffect, useState } from "react";
import { scrollToSection } from "../animations/scrollToSection";

interface NavItemType {
    name: string;
    href: string;
}

const navItems: NavItemType[] = [
    { name: "HOME", href: "#home" },
    { name: "SOBRE", href: "#sobre" },
    { name: "SERVIÇOS", href: "#servicos" },
    { name: "CONTATO", href: "#contato" },
];

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const offset = 100;

            const index = navItems.findIndex(({ href }) => {
                const el = document.querySelector(href);
                if (!el) return false;
                const top = (el as HTMLElement).offsetTop;
                const height = (el as HTMLElement).offsetHeight;
                return (
                    scrollY >= top - offset && scrollY < top + height - offset
                );
            });

            if (index !== -1) {
                setActiveIndex(index);
                const currentHref = navItems[index].href;
                const currentHash = window.location.hash;

                if (currentHash !== currentHref) {
                    history.replaceState(null, "", currentHref);
                }
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed left-1/2 -translate-x-1/2 mt-8 w-full max-w-sm z-50 bg-white/5 backdrop-blur-xs shadow-md">
            <div className="px-4 py-3 flex justify-center items-center">
                <ul className="flex space-x-6 text-[#fafaff] font-md">
                    {navItems.map((item, index) => {
                        const isActive =
                            hoveredIndex === index || activeIndex === index;

                        return (
                            <li
                                key={item.name}
                                className="relative cursor-pointer"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                    // ❌ NÃO atualiza hash aqui!
                                }}
                            >
                                <a href={item.href}>{item.name}</a>
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
