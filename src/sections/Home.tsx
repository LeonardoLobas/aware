import { useEffect, useRef } from "react";
import { textTypingAnimation } from "../animations/textTypingAnimation";

const text = "Mais leads, mais vendas. Um novo nível com";

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
            className="min-h-screen bg-gradient-to-bl from-[#262626] to-[#989797] px-14 flex items-center justify-center"
        >
            <div
                ref={textRef}
                className="text-[#fafaff]  text-8xl font-medium flex flex-wrap"
            >
                {text.split("").map((char, index) => (
                    <span key={index} className="inline-block">
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Home;
