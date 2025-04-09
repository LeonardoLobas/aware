import React from "react";
import Navbar from "../components/navbar";

const Home = () => (
    <>
        <Navbar />
        <section
            id="home"
            className="min-h-screen bg-[#262626] flex items-center bg- justify-center"
        >
            <h1>Bem-vindo à Home</h1>
        </section>
    </>
);

export default Home;
