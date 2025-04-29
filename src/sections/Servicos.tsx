import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import testeImg from "../assets/teste.jpg";
import testeImg1 from "../assets/teste1.jpg";
import testeImg3 from "../assets/teste3.jpg";

// Aumentar o número de slides para suavizar o loop
const slides = [
    testeImg,
    testeImg1,
    testeImg3,
    testeImg, // Duplicado
    testeImg1, // Duplicado
    testeImg3, // Duplicado
    testeImg, // Duplicado novamente
    testeImg1, // Duplicado novamente
    testeImg3, // Duplicado novamente
];

const Servicos = () => {
    return (
        <section
            id="servicos"
            className="min-h-screen w-full flex items-center justify-center bg-gradient-to-bl from-[#262626] to-[#989797] text-white overflow-hidden"
        >
            <div className="w-[90%]  justify-center items-center ">
                <Swiper
                    slidesPerView={3} // Exibe 3 slides ao mesmo tempo
                    spaceBetween={10} // Espaçamento de 16px (equivalente a space-x-4)
                    loop={true} // Modo loop contínuo
                    centeredSlides={true} // Centraliza o slide ativo
                    speed={1500} // Velocidade da transição (600ms)
                    autoplay={{
                        delay: 1000, // Intervalo de 2 segundos entre transições
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{ clickable: true }} // Ativa bolinhas de paginação
                    modules={[Autoplay, Navigation, Pagination]}
                    className="w-full h-full flex items-center justify-center"
                >
                    {slides.map((img, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex items-center justify-center bg-transparent"
                        >
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-[250px] md:h-[400px] lg:h-[500px]   object-cover  shadow-md shadow-black/20"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Servicos;
