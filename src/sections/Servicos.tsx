import { Swiper, SwiperSlide } from "swiper/react";
import {
    Autoplay,
    Pagination,
    Navigation,
    EffectCoverflow,
} from "swiper/modules";

import testeImg from "../assets/teste.jpg";
import testeImg1 from "../assets/teste1.jpg";
import testeImg3 from "../assets/teste3.jpg";
import texturaServicos from "../assets/texturaServicos.png";

import { useState } from "react";

const slides = [
    {
        id: "1",
        img: testeImg,
        title: "Serviço 1",
        desc: "Descrição do serviço 1",
    },
    {
        id: "2",
        img: testeImg1,
        title: "Serviço 2",
        desc: "Descrição do serviço 2",
    },
    {
        id: "3",
        img: testeImg3,
        title: "Serviço 3",
        desc: "Descrição do serviço 3",
    },
    { id: "4", img: testeImg, title: "Serviço 4", desc: "Outro serviço" },
    { id: "5", img: testeImg1, title: "Serviço 5", desc: "Outro serviço" },
];

const Servicos = () => {
    const [selectedService, setSelectedService] = useState<{
        id: string;
        img: string;
        title: string;
        desc: string;
    } | null>(null);

    return (
        <section
            id="servicos"
            className="min-h-screen w-full flex items-center justify-center relative transition-all duration-500 overflow-x-hidden"
            style={{
                backgroundImage: selectedService
                    ? `url(${selectedService.img})`
                    : `url(${texturaServicos})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className="w-[90%] h-[350px] md:h-[400px] lg:h-[500px]  flex flex-col items-center transition-opacity   justify-between z-10 text-white backdrop-blur-sm p-6">
                {selectedService ? (
                    <>
                        <h2 className="text-3xl font-light">
                            {selectedService.title}
                        </h2>
                        <p className="text-lg">{selectedService.desc}</p>
                        <button
                            onClick={() => setSelectedService(null)}
                            className="px-6 py-2 bg-white cursor-pointer text-black rounded hover:bg-gray-200"
                        >
                            Voltar
                        </button>
                    </>
                ) : (
                    <div className="w-full h-full">
                        <Swiper
                            loop={true}
                            centeredSlides={true}
                            speed={1000}
                            grabCursor={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[
                                Autoplay,
                                Pagination,
                                Navigation,
                                EffectCoverflow,
                            ]}
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 10 },
                                768: { slidesPerView: 2, spaceBetween: 20 },
                                1024: { slidesPerView: 3, spaceBetween: 30 },
                            }}
                        >
                            {slides.map((item) => (
                                <SwiperSlide
                                    key={item.id}
                                    className="flex justify-center "
                                >
                                    <button
                                        onClick={() => setSelectedService(item)}
                                        className="w-full h-full transition-transform duration-700 transform hover:scale-97 "
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-[350px] md:h-[400px] lg:h-[500px] object-cover rounded-xl "
                                            loading="lazy"
                                        />
                                    </button>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="swiper-pagination  left-1/2 -translate-x-1/2 z-10" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Servicos;
