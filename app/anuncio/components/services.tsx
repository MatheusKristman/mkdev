"use client";

import { ServicesCard } from "./services-card";
import { motion } from "framer-motion";

import {
  containerAnimation,
  titleAnimation,
} from "@/constants/framer/ad/services-animation";

export const Services = () => {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerAnimation}
      className="w-full px-6 mt-12 sm:px-16 lg:mx-auto lg:container"
    >
      <div className="w-full flex flex-col gap-y-6">
        <div className="w-full flex items-center justify-center">
          <motion.h2
            variants={titleAnimation}
            className="text-3xl text-white font-bold sm:text-4xl lg:text-5xl"
          >
            <strong className="text-gradient-blue-to-green text-3xl font-bold sm:text-4xl lg:text-5xl">
              Nossos
            </strong>{" "}
            Trabalhos
          </motion.h2>
        </div>

        <div className="w-full flex flex-col items-center gap-y-9 lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-9 lg:items-start">
          {/* TODO alterar imagens correspondentes para sua categoria */}
          <ServicesCard
            imageUrl="/images/landing-page-desktop-1.png"
            categoryTitle="Landing Page"
            categoryDesc="Converta visitantes em clientes através de páginas estratégicas, ressaltando ofertas específicas para otimizar as taxas de conversão ao máximo."
          />

          <ServicesCard
            imageUrl="/images/landing-page-desktop-1.png"
            categoryTitle="Site Institucional"
            categoryDesc="Presença digital que expõe identidade, princípios e serviços, estabelecendo confiança e conexões duradouras."
          />

          <ServicesCard
            imageUrl="/images/landing-page-desktop-1.png"
            categoryTitle="Plataforma"
            categoryDesc="Solução poderosa para interatividade avançada, comércio eletrônico e experiências online dinâmicas e personalizadas."
          />
        </div>
      </div>
    </motion.section>
  );
};
