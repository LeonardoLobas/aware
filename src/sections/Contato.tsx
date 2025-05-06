import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contato = () => {
    return (
        <section
            id="contato"
            className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-bl from-[#262626] to-[#989797] text-white overflow-hidden px-4"
        >
            <div className="flex flex-col items-center gap-y-16 w-full max-w-7xl">
                <div className="text-center w-full text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal border-b-2 border-amber-50 pb-4">
                    VOCÊ ESTÁ A UM CLIQUE
                    <br />
                    DE TRANSFORMAR COMPLETAMENTE A IDENTIDADE VISUAL DA SUA
                    EMPRESA.
                    <br />
                    <span className="text-amber-400 font-bold">
                        ENTRE EM CONTATO CONOSCO
                    </span>
                </div>
                <footer className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full pt-1 text-lg sm:text-xl md:text-2xl">
                    {/* Localização */}
                    <div>
                        <h2 className="font-bold mb-2">LOCALIZAÇÃO</h2>
                        <a>
                            Av. Getúlio Vargas, 731, Cidade Nova - Porto União -
                            SC
                        </a>
                    </div>

                    {/* Contato */}
                    <div>
                        <h2 className="font-bold mb-2">CONTATO</h2>
                        <a>
                            {" "}
                            <link
                                rel="stylesheet"
                                href="awaresolucoes@gmail.com"
                            />
                        </a>
                        <p>(42) 98442-7303</p>
                    </div>

                    {/* Redes Sociais */}
                    <div className="flex flex-col items-center">
                        <h2 className="font-bold mb-2">REDES SOCIAIS</h2>
                        <div className="flex gap-6 text-3xl justify-center">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-purple-500 transition-colors"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://wa.me/seunumero"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#25D366] transition-colors"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contato;
