import React from "react";
import Navbar from "../components/navbar";

const Home = () => (
    <>
        <Navbar />
        <section
            id="home"
            className="min-h-screen  bg-linear-to-bl/longer from-[#262626]  to-[#989797] to-100% flex items-center justify-center"
        >
            <h1>Bem-vindo à Home</h1>
        </section>
    </>
);

export default Home;
