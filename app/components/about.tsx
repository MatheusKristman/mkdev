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
    <section className="relative w-full px-6 py-12 flex flex-col md:px-16 md:py-24 md:mb-24 md:gap-y-12 lg:py-36 lg:container lg:mx-auto lg:flex-row lg:justify-center lg:items-center">
      <Image
        src="/images/about-grid.png"
        alt="Conectando Marcas ao Mundo Digital."
        fill
        className="absolute top-0 left-0 w-full h-full hidden md:block"
      />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={infoContainerAnimation}
        className="relative z-10 w-full bg-gradient-to-br from-[#155FDA] to-[#6E37DE] rounded-3xl p-12 max-w-3xl mx-auto"
      >
        <div className="flex flex-col gap-y-6">
          <motion.h2
            variants={textAnimation}
            className="text-2xl text-light-primary font-bold text-center md:text-4xl"
          >
            Conectando Marcas ao Mundo Digital.
          </motion.h2>

          <motion.p
            variants={textAnimation}
            className="text-lg font-medium text-light-primary leading-[27px] text-center"
          >
            Somos impulsionados pela paixão em cada projeto que abraçamos. Nosso{" "}
            <strong>compromisso </strong>vai além de simplesmente alcançar
            objetivos. Aqui, reconhecemos que cada cliente é{" "}
            <strong>único</strong>, e é por isso que oferecemos um atendimento{" "}
            <strong>personalizado</strong>, dedicado a compreender suas
            necessidades específicas. Descubra como nossa paixão pela excelência
            digital pode levar sua presença online a novos horizontes.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};
