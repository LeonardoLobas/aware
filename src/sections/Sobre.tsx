import { useEffect, useRef } from "react";
import { animateImage } from "../animations/animateImage";
import imgSobre from "../assets/sobre.jpg";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Sobre = () => {
    const imgRef = useRef<HTMLImageElement>(null);
    const cleanupRef = useRef<(() => void) | null>(null);

    useEffect(() => {
        // Se tiver uma função de limpeza anterior, execute-a primeiro
        if (cleanupRef.current) {
            cleanupRef.current();
            cleanupRef.current = null;
        }

        if (imgRef.current) {
            // Certificar-se que a imagem tem um ID para rastreamento
            if (!imgRef.current.id) {
                imgRef.current.id = "sobre-img";
            }

            // Invocar a animação e guardar a função de limpeza
            const cleanup = animateImage(imgRef.current);
            cleanupRef.current = cleanup || null;
        }

        // Limpeza ao desmontar o componente
        return () => {
            if (cleanupRef.current) {
                cleanupRef.current();
                cleanupRef.current = null;
            }
        };
    }, []);

    return (
        <section
            ref={imgRef}
            id="sobre"
            className="w-full h-screen bg-cover bg-[position:30%_center] md:bg-center bg-no-repeat flex items-center justify-center text-white relative"
            style={{ backgroundImage: `url(${imgSobre})` }}
        >
            <div className="absolute inset-0 bg-white/50 z-0" />{" "}
            {/* camada escura */}
            <div className=" z-10 w-full  mt-66 px-4">
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    slidesPerView={1}
                    navigation
                    autoplay={{
                        delay: 3000,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: true,
                    }}
                    className="w-full h-full"
                >
                    <SwiperSlide>
                        <div className="flex flex-col w-full items-center justify-center h-screen text-center">
                            <p className="text-xl text-[#262626] sm:text-4xl font-semibold uppercase">
                                Desde 2021, a Aware Soluções vem redefinindo o
                                padrão da publicidade com estratégia,
                                criatividade e coragem. Somos uma agência de
                                Porto União - SC que acredita em resultados
                                concretos, relações transparentes e ideias que
                                provocam impacto.
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center h-screen text-center">
                            <p className="text-xl text-[#262626] sm:text-4xl font-semibold uppercase">
                                Atendimento próximo, execução impecável e
                                presença digital poderosa. Na Aware, cada
                                projeto é tratado como único e cada cliente,
                                como prioridade.
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center h-screen text-center">
                            <p className="text-xl text-[#262626] sm:text-4xl font-semibold uppercase">
                                +100 empresas atendidas
                                <br />
                                +3 anos de empresa
                                <br />
                                +150 projetos
                                <br />
                                +700 clientes satisfeitos
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Sobre;
