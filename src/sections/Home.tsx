import { useEffect, useRef } from "react";
import { textTypingAnimation } from "../animations/textTypingAnimation";

const Home = () => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (textRef.current) {
            textTypingAnimation(textRef.current, {
                duration: 0.05,
                stagger: 0.05,
            });
        }
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen w-full  bg-gradient-to-bl from-[#262626] to-[#989797] px-14 flex flex-col items-center justify-center"
        >
            <div
                ref={textRef}
                className="text-[#fafaff] text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium max-w-[90vw] w-full text-center break-words leading-tight"
            >
                {"MAIS LEADS, MAIS VENDAS.".split("").map((char, index) => (
                    <span key={`line1-${index}`} className="inline">
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
                <br />
                {"UM NOVO NÍVEL COM".split("").map((char, index) => (
                    <span key={`line2-${index}`} className="inline">
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
                <br />
                <span
                    className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold leading-tight 
               bg-gradient-to-bl from-[#ffffff] from-10%  to-[#000000] to-65%  bg-clip-text text-transparent"
                >
                    {"AWARE".split("").map((char, index) => (
                        <span key={`line3-${index}`} className="inline">
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </span>
            </div>
        </section>
    );
};

export default Home;
