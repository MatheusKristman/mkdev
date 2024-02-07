"use client";

import { motion } from "framer-motion";

import { AboutCard } from "./about-card";
import {
  containerAnimation,
  textAnimation,
} from "@/constants/framer/ad/about-animation";

export const About = () => {
  return (
    <section className="w-full mt-24 pb-24 bg-ad-mobile-bottom bg-no-repeat bg-cover sm:bg-ad-tablet-bottom lg:bg-ad-desktop-bottom lg:bg-[length:100%_100%] lg:mt-36">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerAnimation}
        className="w-full px-6 flex flex-col gap-y-12 sm:px-16 lg:mx-auto lg:container lg:flex-row lg:justify-between"
      >
        <div className="w-full flex flex-col gap-y-6 items-center lg:items-start">
          <motion.h2
            variants={textAnimation}
            className="text-3xl text-white font-bold text-center sm:text-4xl lg:text-5xl lg:text-left"
          >
            Nossos{" "}
            <strong className="text-gradient-blue-to-green text-3xl font-bold sm:text-4xl lg:text-5xl">
              Diferenciais
            </strong>
          </motion.h2>

          <motion.p
            variants={textAnimation}
            className="text-base font-normal text-center text-white/80 leading-[26px] lg:text-left lg:text-xl lg:leading-[31px] lg:max-w-lg"
          >
            Somos uma equipe qualificada e dedicada a criar experiências
            digitais únicas! Nossos projetos tem layouts personalizados que
            refletem a essência da sua marca e encantam seus clientes. Além
            disso, dominamos as regras do SEO para colocar sua empresa no topo
            das pesquisas do Google. Aumente a visibilidade, cative novos
            clientes e fortaleça seu relacionamento com o público junto à MK
            Dev!
          </motion.p>
        </div>

        <div className="w-full flex flex-col gap-y-6">
          <div className="w-full flex items-center justify-between gap-x-1">
            <div className="h-[1px] bg-gradient-to-r from-white/0 to-white/60 flex-grow" />
            <span className="text-sm text-white/60">
              Por que escolher nossa agência?
            </span>
          </div>

          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:mx-auto sm:max-w-md sm:mb-10">
              <AboutCard
                className="w-fit p-5 rounded-2xl bg-gradient-to-br from-[#7236DE] to-[#1161DA] flex flex-col items-center self-start shadow-lg mb-4 sm:mb-0"
                icon="bg-about-card-pen"
                title="Layout Personalizado"
              />

              <AboutCard
                className="w-fit p-5 rounded-2xl bg-gradient-to-br from-[#1161DA] to-[#20AA80] flex flex-col items-center self-end shadow-lg mb-4 sm:mb-0"
                icon="bg-about-card-search"
                title="Pronto para o Google"
              />
            </div>

            <AboutCard
              className="w-fit p-5 rounded-2xl bg-gradient-to-br from-[#20AA80] to-[#7236DE] flex flex-col items-center self-start shadow-lg ml-10 sm:self-center sm:ml-28"
              icon="bg-about-card-gear"
              title="Suporte contínuo"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
