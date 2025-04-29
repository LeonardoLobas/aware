import { Swiper, SwiperSlide } from "swiper/react";
import {
    Autoplay,
    Navigation,
    Pagination,
    EffectCoverflow,
} from "swiper/modules";

import testeImg from "../assets/teste.jpg";
import testeImg1 from "../assets/teste1.jpg";
import testeImg3 from "../assets/teste3.jpg";

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
    {
        id: "1",
        img: testeImg,
        title: "Serviço ",
        desc: "Descrição do serviço 1",
    },
    {
        id: "2",
        img: testeImg1,
        title: "Serviço 1",
        desc: "Descrição do serviço 1",
    },
    {
        id: "3",
        img: testeImg3,
        title: "Serviço 3",
        desc: "Descrição do serviço 3",
    },
    // ...
];

import { useState } from "react";

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
            className="min-h-screen w-full flex items-center justify-center relative transition-all duration-500"
            style={{
                backgroundImage: selectedService
                    ? `url(${selectedService.img})`
                    : "linear-gradient(to bottom right, #989797, #EBEBEB)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="w-[90%] h-[250px] md:h-[400px] lg:h-[500px] flex flex-col items-center justify-between z-10 text-white backdrop-blur-sm p-6 ">
                {selectedService ? (
                    <>
                        <h2 className="text-3xl font-light">
                            {selectedService.title}
                        </h2>
                        <p className="text-lg">{selectedService.desc}</p>
                        <button
                            onClick={() => setSelectedService(null)}
                            className="px-6 py-2 cursor-pointer bg-white text-black rounded hover:bg-gray-200"
                        >
                            Voltar
                        </button>
                    </>
                ) : (
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        centeredSlides={true}
                        speed={1500}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        grabCursor={true}
                        pagination={{ clickable: true }}
                        modules={[
                            Autoplay,
                            Navigation,
                            Pagination,
                            EffectCoverflow,
                        ]}
                        className="w-full h-full"
                    >
                        {slides.map((item) => (
                            <SwiperSlide
                                key={item.id}
                                className="flex items-center justify-center bg-transparent"
                            >
                                <button
                                    onClick={() => setSelectedService(item)}
                                    className="w-full h-full cursor-pointer transition-transform duration-700 transform hover:scale-93 shadow-xl"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover shadow-md shadow-black/20"
                                    />
                                </button>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    );
};

export default Servicos;
