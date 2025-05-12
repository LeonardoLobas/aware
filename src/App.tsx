import React, { Suspense } from "react";
import Navbar from "./components/navbar";
import Home from "./sections/Home";

// Lazy load dos componentes que aparecem depois da dobra
const Sobre = React.lazy(() => import("./sections/Sobre"));
const Servicos = React.lazy(() => import("./sections/Servicos"));
const Contato = React.lazy(() => import("./sections/Contato"));

function App() {
    return (
        <main className="w-full min-h-screen flex flex-col">
            <Navbar />
            <Home />
            <Suspense
                fallback={
                    <div className="text-white text-center p-8">
                        Carregando...
                    </div>
                }
            >
                <Sobre />
                <Servicos />
                <Contato />
            </Suspense>
        </main>
    );
}

export default App;
