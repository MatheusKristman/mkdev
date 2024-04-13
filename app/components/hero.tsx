"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  containerAnimation,
  infoAnimation,
  imageAnimation,
} from "@/constants/framer/hero-animation";
import useModalStore from "@/stores/useModalStore";

export const Hero = () => {
  const { openContactModal } = useModalStore();

  return (
    <main className="w-full flex flex-col items-center px-6 mb-12 md:px-16 md:justify-center md:mb-24 lg:mb-40">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={containerAnimation}
        className="w-full flex flex-col items-center mb-12"
      >
        <motion.h1
          variants={infoAnimation}
          className="text-4xl text-light-primary font-bold text-center mb-6 md:text-6xl md:max-w-2xl lg:text-7xl lg:max-w-3xl"
        >
          Precisando de um{" "}
          <strong className="bg-gradient-to-r from-[#2670DF] to-[#3BD776] font-bold text-transparent bg-clip-text">
            site
          </strong>{" "}
          para o seu negócio?
        </motion.h1>

        <motion.p
          variants={infoAnimation}
          className="text-center text-lg sm:text-xl text-light-primary leading-8 mb-9 font-medium md:max-w-2xl"
        >
          Sua empresa merece um site que vá além do visual. Criamos soluções
          digitais personalizadas para impulsionar o crescimento do seu negócio,
          que conectam, convertem e elevam a sua marca a novos patamares.
        </motion.p>

        <motion.button
          variants={infoAnimation}
          type="button"
          onClick={openContactModal}
          className="bg-gradient-to-br from-[#229CF5] to-[#7236DE] py-4 px-6 text-white text-lg font-semibold rounded-xl md:text-2xl"
        >
          Comece agora
        </motion.button>
      </motion.div>
    </main>
  );
};
