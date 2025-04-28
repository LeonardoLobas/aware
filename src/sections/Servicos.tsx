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
            className="min-h-screen w-full flex items-center justify-center bg-[#262626] text-white overflow-hidden"
        >
            <div className="w-full max-w-6xl px-4">
                <Swiper
                    slidesPerView={3} // Exibe 3 slides ao mesmo tempo
                    spaceBetween={16} // Espaçamento de 16px (equivalente a space-x-4)
                    loop={true} // Modo loop contínuo
                    centeredSlides={true} // Centraliza o slide ativo
                    speed={600} // Velocidade da transição (600ms)
                    autoplay={{
                        delay: 2000, // Intervalo de 2 segundos entre transições
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    navigation={true} // Ativa setas de navegação
                    pagination={{ clickable: true }} // Ativa bolinhas de paginação
                    modules={[Autoplay, Navigation, Pagination]}
                    className="w-full h-[400px] flex items-center justify-center"
                >
                    {slides.map((img, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex items-center justify-center w-[400px] max-w-[90%] bg-transparent"
                        >
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-64 object-cover rounded-2xl shadow-lg"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Servicos;
