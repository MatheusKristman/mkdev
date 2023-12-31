"use client";

import Image from "next/image";
import { Monitor } from "lucide-react";
import { motion } from "framer-motion";

import {
    infoContainerAnimation,
    iconAnimation,
    textContainerAnimation,
    textAnimation,
    imageAnimation,
} from "@/constants/framer/about-animation";

export const About = () => {
    return (
        <section className="w-full px-6 mb-12 flex flex-col md:px-16 md:mb-24 md:gap-y-12 lg:mb-36 lg:container lg:mx-auto lg:flex-row lg:justify-between lg:items-center">
            <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={infoContainerAnimation}
                className="w-full flex gap-x-5 md:max-w-lg lg:max-w-2xl"
            >
                <motion.span
                    variants={iconAnimation}
                    className="bg-[#1161DA] rounded-full p-3 flex items-center justify-center h-fit w-fit shadow-[0px_6px_13px_#126CB1]"
                >
                    <Monitor color="white" size={25} />
                </motion.span>

                <motion.div variants={textContainerAnimation} className="flex flex-col gap-y-6">
                    <motion.h2
                        variants={textAnimation}
                        className="text-2xl text-white font-bold md:text-4xl"
                    >
                        Conectando{" "}
                        <strong className="bg-gradient-to-r from-[#3093EE] to-[#23F6DD] text-transparent bg-clip-text">
                            Marcas
                        </strong>{" "}
                        ao{" "}
                        <strong className="bg-gradient-to-r from-[#1161DA] to-[#19D0F0] text-transparent bg-clip-text">
                            Mundo Digital.
                        </strong>
                    </motion.h2>

                    <motion.p
                        variants={textAnimation}
                        className="text-base text-white/90 leading-[27px]"
                    >
                        Somos impulsionados pela paixão em cada projeto que abraçamos. Nosso
                        compromisso vai além de simplesmente alcançar objetivos; é moldar uma
                        narrativa digital única que captura a essência exclusiva de cada marca.
                        Aqui, reconhecemos que cada cliente é único, e é por isso que oferecemos um
                        atendimento personalizado, dedicado a compreender suas necessidades
                        específicas. Descubra como nossa paixão pela excelência digital pode levar
                        sua presença online a novos horizontes.
                    </motion.p>
                </motion.div>
            </motion.div>

            <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={imageAnimation}
                className="relative hidden md:block md:mx-auto aspect-square w-1/2 lg:w-1/3"
            >
                <Image
                    src="/images/about-illustration.png"
                    alt="Uma agência criativa criada para construir marcas modernas."
                    fill
                    className="object-contain"
                />
            </motion.div>
        </section>
    );
};
