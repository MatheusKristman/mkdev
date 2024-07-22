"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Dot, Layers3 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
import { carouselAnimation } from "@/constants/framer/services/services-page-animation";
import { cn } from "@/lib/utils";

import "swiper/css";
import "swiper/css/navigation";

export const Services = () => {
  const [accordionValue, setAccordionValue] = useState<string>("landing-page");

  return (
    <section className="w-full px-6 mb-12 md:px-16 md:mb-24 lg:container lg:mx-auto lg:mb-36">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={titleContainerAnimation}
        className="w-full flex flex-col gap-2 mb-6 md:mb-12"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-[#A7B5C4]/50">01</span>

            <Dot size={10} color="#A7B5C4" />

            <span className="text-sm font-medium text-[#A7B5C4]">Projetos</span>
          </div>

          <div className="w-[300px] h-[1px] bg-gradient-to-r from-[#222C3A] to-[#222C3A]/0" />
        </div>

        <div className="w-full flex flex-row gap-5">
          <motion.span
            variants={titleAnimation}
            className="bg-[#7236DE] rounded-full p-3 flex items-center justify-center h-fit w-fit shadow-[0px_6px_13px_#7236DE]"
          >
            <Layers3 color="#CCDAE7" size={25} />
          </motion.span>

          <motion.h2
            variants={titleAnimation}
            className="text-light-primary text-3xl font-bold text-left md:max-w-lg md:text-4xl"
          >
            O seu{" "}
            <strong className="bg-gradient-to-r from-[#645EC4] to-[#44BC87] text-transparent bg-clip-text">
              Site
            </strong>
            , a Nossa{" "}
            <strong className="bg-gradient-to-r from-[#4AA993] to-[#3BD776] text-transparent bg-clip-text">
              Paixão:{" "}
            </strong>
            Conheça{" "}
            <strong className="bg-gradient-to-r from-[#4AA993] to-[#3BD776] text-transparent bg-clip-text">
              Nossos Serviços.
            </strong>
          </motion.h2>
        </div>
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
              value="landing-page"
              className="data-[state='closed']:bg-[#11161F] data-[state='open']:bg-[#222C3A] transition-colors px-6 py-4 rounded-xl mb-6 border-2 border-[#222C3A]"
            >
              <AccordionTrigger className="hover:no-underline text-light-primary">
                <div className="flex gap-x-5 items-center">
                  <span
                    className={cn(
                      accordionValue === "landing-page"
                        ? "bg-light-primary text-[#222C3A]"
                        : "bg-transparent text-light-primary",
                      "rounded-full text-xl font-bold w-10 h-10 flex items-center justify-center transition-colors",
                    )}
                  >
                    1
                  </span>

                  <h4 className="text-light-primary text-xl font-semibold">
                    Landing Page
                  </h4>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <p className="text-light-primary text-base leading-[25px] ml-[60px] mb-6">
                  Transforme visitantes em clientes com páginas direcionadas,
                  destacando ofertas específicas para máxima conversão.
                </p>

                <Link
                  href="/projetos?category=landing-page"
                  className="w-full bg-light-primary flex items-center justify-center py-2 px-6 text-[#222C3A] text-lg font-bold rounded-lg"
                >
                  Ver mais
                </Link>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="site-institucional"
              className="data-[state='closed']:bg-[#11161F] data-[state='open']:bg-[#222C3A] transition-colors px-6 py-4 rounded-xl mb-6 border-2 border-[#222C3A]"
            >
              <AccordionTrigger className="hover:no-underline text-light-primary">
                <div className="flex gap-x-5 items-center">
                  <span
                    className={cn(
                      accordionValue === "site-institucional"
                        ? "bg-light-primary text-[#222C3A]"
                        : "bg-transparent text-light-primary",
                      "rounded-full text-xl font-bold w-10 h-10 flex items-center justify-center transition-colors",
                    )}
                  >
                    2
                  </span>

                  <h4 className="text-light-primary text-xl font-semibold">
                    Site Institucional
                  </h4>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <p className="text-light-primary text-base leading-[25px] ml-[60px] mb-6">
                  Vitrine online que revela identidade, valores e serviços,
                  construindo confiança e relacionamentos duradouros.
                </p>

                <Link
                  href="/projetos?category=site-institucional"
                  className="w-full bg-light-primary flex items-center justify-center py-2 px-6 text-[#222C3A] text-lg font-bold rounded-lg"
                >
                  Ver mais
                </Link>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="plataforma"
              className="data-[state='closed']:bg-[#11161F] data-[state='open']:bg-[#222C3A] transition-colors px-6 py-4 rounded-xl border-2 border-[#222C3A]"
            >
              <AccordionTrigger className="hover:no-underline text-light-primary">
                <div className="flex gap-x-5 items-center">
                  <span
                    className={cn(
                      accordionValue === "plataforma"
                        ? "bg-light-primary text-[#222C3A]"
                        : "bg-transparent text-light-primary",
                      "rounded-full text-xl font-bold w-10 h-10 flex items-center justify-center transition-colors",
                    )}
                  >
                    3
                  </span>

                  <h4 className="text-light-primary text-xl font-semibold">
                    Plataforma
                  </h4>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <p className="text-light-primary text-base leading-[25px] ml-[60px] mb-6">
                  Solução robusta para interatividade avançada, comércio
                  eletrônico e experiências online dinâmicas e personalizadas.
                </p>

                <Link
                  href="/projetos?category=plataforma"
                  className="w-full bg-light-primary flex items-center justify-center py-2 px-6 text-[#222C3A] text-lg font-bold rounded-lg"
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
            <span className="text-sm text-light-primary/60">MAIS RECENTES</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={accordionValue}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={carouselAnimation}
              exit="exit"
            >
              {accordionValue === "landing-page" ? (
                <Swiper
                  modules={[Navigation]}
                  navigation
                  className="rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg overflow-hidden select-none md:rounded-tl-[60px] md:rounded-br-[60px]"
                >
                  <SwiperSlide className="relative w-full aspect-square">
                    <Image
                      src="/images/landing-page-desktop.png"
                      alt="Projeto"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </SwiperSlide>
                </Swiper>
              ) : accordionValue === "site-institucional" ? (
                <Swiper
                  modules={[Navigation]}
                  navigation
                  className="rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg overflow-hidden select-none md:rounded-tl-[60px] md:rounded-br-[60px]"
                >
                  <SwiperSlide className="relative w-full aspect-square">
                    <Image
                      src="/images/hanazaki-studio-desktop.png"
                      alt="Projeto"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </SwiperSlide>
                </Swiper>
              ) : accordionValue === "plataforma" ? (
                <Swiper
                  modules={[Navigation]}
                  navigation
                  className="rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg overflow-hidden select-none md:rounded-tl-[60px] md:rounded-br-[60px]"
                >
                  <SwiperSlide className="relative w-full aspect-square">
                    <Image
                      src="/images/platform-desktop.png"
                      alt="Projeto"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </SwiperSlide>

                  <SwiperSlide className="relative w-full aspect-square">
                    <Image
                      src="/images/o-sapiente-desktop.png"
                      alt="Projeto"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </SwiperSlide>
                </Swiper>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
