import { useEffect, useRef } from "react";
import { textTypingAnimation } from "../animations/textTypingAnimation";

const Home = () => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (textRef.current) {
            textTypingAnimation(textRef.current);
        }
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen w-full  bg-gradient-to-bl from-[#262626] to-[#989797] px-14 flex items-center justify-center"
        >
            <div
                ref={textRef}
                className="text-[#fafaff] text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium max-w-[90vw] w-full text-center break-words leading-tight"
            >
                {"Mais leads, mais vendas.".split("").map((char, index) => (
                    <span key={`line1-${index}`} className="inline">
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
                <br />
                {"Um novo nível com".split("").map((char, index) => (
                    <span key={`line2-${index}`} className="inline">
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Home;
