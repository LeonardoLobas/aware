import { useState } from "react";
import TypingAnimation from "../animations/textHomeAnimation";
import texturaHome from "../assets/texturaHome.png";

const Home = () => {
    const [step, setStep] = useState(0);

    return (
        <section
            id="home"
            className="min-h-screen w-full  flex flex-col items-center justify-center"
            style={{ backgroundImage: `url(${texturaHome})` }}
        >
            <div className="text-[#fafaff] text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium max-w-[90vw] w-full text-center break-words leading-tight space-y-4 h-[20rem] flex flex-col justify-center">
                {/* Linha 1 */}
                {step >= 0 ? (
                    <TypingAnimation
                        text="TRANSFORME SEGUIDORES EM FÃS."
                        interval={50}
                        onComplete={() => setStep(1)}
                    />
                ) : (
                    <div className="invisible">
                        TRANSFORME SEGUIDORES EM FÃS.
                    </div>
                )}

                {/* Linha 2 */}
                {step >= 1 ? (
                    <TypingAnimation
                        text="SOCIAL MEDIA QUE ENCANTA."
                        interval={50}
                        onComplete={() => setStep(2)}
                    />
                ) : (
                    <div className="invisible">SOCIAL MEDIA QUE ENCANTA.</div>
                )}

                {/* Linha 3 */}
                {/* {step >= 2 ? (
                    <TypingAnimation
                        text="AWARE"
                        interval={100}
                        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold leading-tight 
              bg-gradient-to-bl from-[#fafaff] from-10% to-[#000000] to-65% bg-clip-text text-transparent"
                    />
                ) : (
                    <div className="invisible text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold leading-tight">
                        AWARE
                    </div>
                )} */}
            </div>
        </section>
    );
};

export default Home;
