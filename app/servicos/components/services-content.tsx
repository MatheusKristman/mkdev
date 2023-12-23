"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

import { servicesData } from "@/constants/services";
import {
    titleAnimation,
    wrapperAnimation,
    boxAnimation,
} from "@/constants/framer/services/services-page-animation";

import "swiper/css";
import "swiper/css/pagination";

export const ServicesContent = () => {
    return (
        <section className="w-full flex flex-col gap-y-12 pb-40 px-6 md:px-16 lg:container lg:mx-auto">
            <motion.h2
                initial="initial"
                animate="animate"
                variants={titleAnimation}
                className="text-white text-4xl text-center font-bold md:text-5xl"
            >
                Conheça os nossos{" "}
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[#7236DE] to-[#D285DE]">
                    serviços
                </strong>
            </motion.h2>

            <motion.div
                initial="initial"
                animate="animate"
                variants={wrapperAnimation}
                className="lg:hidden"
            >
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    pagination={{ clickable: true }}
                    className="w-full h-full"
                >
                    {servicesData.map((service) => (
                        <SwiperSlide className="w-full !h-auto bg-slate-900 border border-slate-600 items-center p-9 rounded-lg">
                            <div className="relative w-16 h-16 mx-auto mb-7">
                                <Image
                                    src={service.url}
                                    alt={service.title}
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>

                            <div className="w-full flex flex-col items-center gap-y-4">
                                <h3 className="text-xl text-white text-center font-medium">
                                    {service.title}
                                </h3>

                                <p className="text-base text-white/70 text-center">
                                    {service.desc}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={wrapperAnimation}
                className="hidden lg:grid w-full grid-cols-3 grid-rows-3 gap-5"
            >
                {servicesData.map((service) => (
                    <motion.div
                        variants={boxAnimation}
                        className="w-full flex flex-col items-center justify-center bg-slate-900 border border-slate-600 p-9 rounded-lg hover:bg-slate-800 transition-colors"
                    >
                        <div className="relative w-16 h-16 mx-auto mb-7">
                            <Image
                                src={service.url}
                                alt={service.title}
                                fill
                                className="object-contain object-center"
                            />
                        </div>

                        <div className="w-full flex flex-col items-center gap-y-4">
                            <h3 className="text-xl text-white text-center font-medium">
                                {service.title}
                            </h3>

                            <p className="text-base text-white/70 text-center">{service.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
