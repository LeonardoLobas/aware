import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Home from "./sections/Home";
import Sobre from "./sections/Sobre";
import Navbar from "./components/navbar";

gsap.registerPlugin(ScrollToPlugin);

function App() {
    return (
        <main className="w-full min-h-screen flex flex-col">
            <Navbar />
            <Home />
            <Sobre />
        </main>
    );
}

export default App;
