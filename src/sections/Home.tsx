import { useEffect, useRef } from "react";
import { textTypingAnimation } from "../animations/textTypingAnimation";

const Home = () => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (textRef.current) {
            textTypingAnimation(textRef.current);
        }
    }, []);

    const renderTextLine = (text: string, lineKey: string) =>
        text.split("").map((char, index) => (
            <span key={`${lineKey}-${index}`} className="inline opacity-0">
                {char === " " ? "\u00A0" : char}
            </span>
        ));

    return (
        <section
            id="home"
            className="min-h-screen w-full bg-gradient-to-bl from-[#262626] to-[#989797]  flex flex-col items-center justify-center"
        >
            <div
                ref={textRef}
                className="text-[#fafaff] text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium max-w-[90vw] w-full text-center break-words leading-tight"
            >
                {renderTextLine("MAIS LEADS, MAIS VENDAS.", "line1")}
                <br />
                {renderTextLine("UM NOVO NÍVEL COM", "line2")}
                <br />
                <span
                    className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold leading-tight 
                    bg-gradient-to-bl from-[#ffffff] from-10% to-[#000000] to-65% bg-clip-text text-transparent"
                >
                    {renderTextLine("AWARE", "line3")}
                </span>
            </div>
        </section>
    );
};

export default Home;
