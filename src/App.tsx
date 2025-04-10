import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Home from "./sections/Home";
import Sobre from "./sections/Sobre";
import Navbar from "./components/navbar";

gsap.registerPlugin(ScrollToPlugin);

function App() {
    useEffect(() => {
        gsap.to(window, {
            duration: 0,
            scrollTo: { y: "#home" },
        });
    }, []);

    return (
        <main className="w-full min-h-screen flex flex-col">
            <Navbar />
            <Home />
            <Sobre />
        </main>
    );
}

export default App;
