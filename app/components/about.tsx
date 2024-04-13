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
        className="w-full bg-gradient-to-br from-[#155FDA] to-[#6E37DE] rounded-3xl p-12 max-w-3xl mx-auto"
      >
        <div className="flex flex-col gap-y-6">
          <motion.h2
            variants={textAnimation}
            className="text-2xl text-light-primary font-bold md:text-4xl"
          >
            Conectando Marcas ao Mundo Digital.
          </motion.h2>

          <motion.p
            variants={textAnimation}
            className="text-lg font-medium text-light-primary leading-[27px]"
          >
            Somos impulsionados pela paixão em cada projeto que abraçamos. Nosso
            compromisso vai além de simplesmente alcançar objetivos; é moldar
            uma narrativa digital única que captura a essência exclusiva de cada
            marca. Aqui, reconhecemos que cada cliente é único, e é por isso que
            oferecemos um atendimento personalizado, dedicado a compreender suas
            necessidades específicas. Descubra como nossa paixão pela excelência
            digital pode levar sua presença online a novos horizontes.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};
