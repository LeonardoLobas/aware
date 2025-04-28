import Home from "./sections/Home";
import Sobre from "./sections/Sobre";
import Navbar from "./components/navbar";
import Servicos from "./sections/Servicos";
import Contato from "./sections/Contato";

function App() {
    return (
        <main className="w-full min-h-screen flex flex-col">
            <Navbar />
            <Home />
            <Sobre />
            <Servicos />
            <Contato />
        </main>
    );
}

export default App;
