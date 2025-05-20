import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import texturaContato from "../assets/texturaImg.png";

const Contato = () => {
    return (
        <section
            id="contato"
            className="min-h-screen w-full flex  items-center justify-center  text-white overflow-hidden px-4"
            style={{ backgroundImage: `url(${texturaContato})` }}
        >
            <div className="flex flex-col items-center gap-y-8 w-full max-w-7xl">
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
                <footer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center w-full text-base sm:text-lg md:text-xl p-4 sm:p-8">
                    <div>
                        <h2 className="font-bold mb-2 text-base sm:text-2xl">
                            LOCALIZAÇÃO
                        </h2>
                        <a
                            href="https://www.google.com/maps?q=Av.+Getúlio+Vargas,+731,+Cidade+Nova,+Porto+União,+SC"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm sm:text-base text-white hover:underline"
                        >
                            Av. Getúlio Vargas, 731, Cidade Nova - Porto União -
                            SC
                        </a>
                    </div>

                    {/* Contato */}
                    <div>
                        <h2 className="font-bold mb-2 text-base sm:text-2xl">
                            CONTATO
                        </h2>
                        <a
                            href="mailto:awaresolucoes@gmail.com"
                            className="block text-sm sm:text-lg text-white hover:underline"
                        >
                            awaresolucoes@gmail.com
                        </a>
                        <p className="text-sm sm:text-lg">(42) 98442-7303</p>
                    </div>

                    {/* Redes Sociais */}
                    <div className="flex flex-col items-center">
                        <h2 className="font-bold mb-2 text-base sm:text-2xl">
                            REDES SOCIAIS
                        </h2>
                        <div className="flex gap-4 text-2xl sm:text-3xl justify-center">
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
