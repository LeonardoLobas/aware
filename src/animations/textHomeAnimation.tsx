// src/animations/textHomeAnimation.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface IProps {
    text: string;
    interval: number;
    className?: string;
    onComplete?: () => void;
}

const TypingAnimation = ({
    text,
    interval,
    className = "",
    onComplete,
}: IProps) => {
    const letters = Array.from(text);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    const container = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: interval / 1000,
                when: "beforeChildren",
            },
        },
    };

    const child = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.01,
            },
        },
    };

    return (
        show && (
            <motion.div
                className={`blinking-underline inline-block ${className}`}
                variants={container}
                initial="hidden"
                animate="visible"
                onAnimationComplete={() => {
                    onComplete?.();
                }}
            >
                {letters.map((char, index) => (
                    <motion.span key={index} variants={child}>
                        {char}
                    </motion.span>
                ))}
            </motion.div>
        )
    );
};

export default TypingAnimation;
