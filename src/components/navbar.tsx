import React from "react";

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
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
    return (
        <nav className="absolute left-1/2  -translate-x-1/2  mt-8 w-full max-w-sm z-50  bg-white/5 backdrop-blur-xs shadow-md   ">
            <div className="px-4 py-3 flex justify-center items-center">
                <ul className="flex space-x-6 text-[#fafaff] font-md">
                    {navItems.map((item, index) => {
                        return (
                            <li
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                            >
                                <a href={item.href}>{item.name}</a>
                                <span
                                    className={`absolute left-0 -bottom-1 h-0.5 bg-[#fafaff] transition-all duration-300 ${
                                        activeIndex === index ? "w-full" : "w-0"
                                    }`}
                                >
                                    {" "}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
