"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Layers3 } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    titleContainerAnimation,
    titleAnimation,
    cardsAnimation,
    imageAnimation,
} from "@/constants/framer/services-animation";
import { cn } from "@/lib/utils";

import "swiper/css";
import "swiper/css/navigation";

export const Services = () => {
    const [accordionValue, setAccordionValue] = useState<string>("item-1");

    useEffect(() => {
        console.log(accordionValue);
    }, [accordionValue]);

    return (
        <section className="w-full px-6 mb-12 md:px-16 md:mb-24 lg:container lg:mx-auto lg:mb-36">
            <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={titleContainerAnimation}
                className="w-full flex flex-row gap-x-5 justify-start mb-6 md:mb-12 lg:flex-row-reverse"
            >
                <motion.span
                    variants={titleAnimation}
                    className="bg-[#7236DE] rounded-full p-3 flex items-center justify-center h-fit w-fit shadow-[0px_6px_13px_#7236DE]"
                >
                    <Layers3 color="white" size={25} />
                </motion.span>

                <motion.h2
                    variants={titleAnimation}
                    className="text-white text-2xl font-bold text-left md:max-w-lg md:text-4xl lg:text-right"
                >
                    O seu{" "}
                    <strong className="bg-gradient-to-r from-[#D285DE] to-[#7236DE] text-transparent bg-clip-text">
                        Site
                    </strong>
                    , a Nossa{" "}
                    <strong className="bg-gradient-to-r from-[#D285DE] to-[#7236DE] text-transparent bg-clip-text">
                        Paixão:{" "}
                    </strong>
                    Conheça{" "}
                    <strong className="bg-gradient-to-r from-[#D285DE] to-[#7236DE] text-transparent bg-clip-text">
                        Nossos Serviços.
                    </strong>
                </motion.h2>
            </motion.div>

            <div className="flex flex-col-reverse gap-y-12 lg:flex-row lg:gap-x-12 lg:justify-between">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={cardsAnimation}
                    className="w-full lg:max-w-md"
                >
                    <Accordion
                        type="single"
                        collapsible
                        value={accordionValue}
                        onValueChange={setAccordionValue}
                    >
                        <AccordionItem
                            value="item-1"
                            className="data-[state='closed']:bg-[#11161F] data-[state='open']:bg-[#222C3A] transition-colors px-6 py-4 rounded-xl mb-6 border-2 border-[#222C3A]"
                        >
                            <AccordionTrigger className="hover:no-underline text-white">
                                <div className="flex gap-x-5 items-center">
                                    <span
                                        className={cn(
                                            accordionValue === "item-1"
                                                ? "bg-white text-[#222C3A]"
                                                : "bg-transparent text-white",
                                            "rounded-full text-xl font-bold w-10 h-10 flex items-center justify-center transition-colors",
                                        )}
                                    >
                                        1
                                    </span>

                                    <h4 className="text-white text-xl font-semibold">
                                        Landing Page
                                    </h4>
                                </div>
                            </AccordionTrigger>

                            <AccordionContent>
                                <p className="text-white text-base leading-[25px] ml-[60px] mb-6">
                                    Transforme visitantes em clientes com páginas direcionadas,
                                    destacando ofertas específicas para máxima conversão.
                                </p>

                                <Link
                                    href="/projetos?category=landing-page"
                                    className="w-full bg-white flex items-center justify-center py-2 px-6 text-[#222C3A] text-lg font-bold rounded-lg"
                                >
                                    Ver mais
                                </Link>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-2"
                            className="data-[state='closed']:bg-[#11161F] data-[state='open']:bg-[#222C3A] transition-colors px-6 py-4 rounded-xl mb-6 border-2 border-[#222C3A]"
                        >
                            <AccordionTrigger className="hover:no-underline text-white">
                                <div className="flex gap-x-5 items-center">
                                    <span
                                        className={cn(
                                            accordionValue === "item-2"
                                                ? "bg-white text-[#222C3A]"
                                                : "bg-transparent text-white",
                                            "rounded-full text-xl font-bold w-10 h-10 flex items-center justify-center transition-colors",
                                        )}
                                    >
                                        2
                                    </span>

                                    <h4 className="text-white text-xl font-semibold">
                                        Site Institucional
                                    </h4>
                                </div>
                            </AccordionTrigger>

                            <AccordionContent>
                                <p className="text-white text-base leading-[25px] ml-[60px] mb-6">
                                    Vitrine online que revela identidade, valores e serviços,
                                    construindo confiança e relacionamentos duradouros.
                                </p>

                                <Link
                                    href="/projetos?category=site-institucional"
                                    className="w-full bg-white flex items-center justify-center py-2 px-6 text-[#222C3A] text-lg font-bold rounded-lg"
                                >
                                    Ver mais
                                </Link>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-3"
                            className="data-[state='closed']:bg-[#11161F] data-[state='open']:bg-[#222C3A] transition-colors px-6 py-4 rounded-xl border-2 border-[#222C3A]"
                        >
                            <AccordionTrigger className="hover:no-underline text-white">
                                <div className="flex gap-x-5 items-center">
                                    <span
                                        className={cn(
                                            accordionValue === "item-3"
                                                ? "bg-white text-[#222C3A]"
                                                : "bg-transparent text-white",
                                            "rounded-full text-xl font-bold w-10 h-10 flex items-center justify-center transition-colors",
                                        )}
                                    >
                                        3
                                    </span>

                                    <h4 className="text-white text-xl font-semibold">Plataforma</h4>
                                </div>
                            </AccordionTrigger>

                            <AccordionContent>
                                <p className="text-white text-base leading-[25px] ml-[60px] mb-6">
                                    Solução robusta para interatividade avançada, comércio
                                    eletrônico e experiências online dinâmicas e personalizadas.
                                </p>

                                <Link
                                    href="/projetos?category=plataforma"
                                    className="w-full bg-white flex items-center justify-center py-2 px-6 text-[#222C3A] text-lg font-bold rounded-lg"
                                >
                                    Ver mais
                                </Link>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </motion.div>

                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={imageAnimation}
                    className="w-full lg:max-w-xl"
                >
                    <div className="flex justify-end mb-1">
                        <span className="text-sm text-white/50">MAIS RECENTES</span>
                    </div>

                    <Swiper
                        modules={[Navigation]}
                        navigation
                        className="rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg overflow-hidden select-none md:rounded-tl-[60px] md:rounded-br-[60px]"
                    >
                        <SwiperSlide className="relative w-full aspect-square">
                            <Link href="/projetos/landing-page">
                                <Image
                                    src="/images/services-print-placeholder.png"
                                    alt="Projeto"
                                    fill
                                    className="object-contain"
                                />
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide className="relative w-full aspect-square">
                            <Link href="/projetos/site-institucional">
                                <Image
                                    src="/images/services-print-placeholder.png"
                                    alt="Projeto"
                                    fill
                                    className="object-contain"
                                />
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide className="relative w-full aspect-square">
                            <Link href="/projetos/plataforma">
                                <Image
                                    src="/images/services-print-placeholder.png"
                                    alt="Projeto"
                                    fill
                                    className="object-contain"
                                />
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
};
