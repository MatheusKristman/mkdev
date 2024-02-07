"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  staggerAnimation,
  textAnimation,
  cardAnimation,
  scrollIndicatorAnimation,
} from "@/constants/framer/ad/hero-animation";

export const Hero = () => {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={staggerAnimation}
      className="w-full px-6 mt-12 flex flex-col sm:mt-16 sm:px-16 lg:mx-auto lg:container lg:mt-0 lg:gap-y-24 lg:h-[calc(100vh-70px)] lg:justify-center"
    >
      <motion.div
        variants={staggerAnimation}
        className="w-full flex flex-col items-center gap-y-12 lg:flex-row lg:justify-between lg:items-start lg:gap-x-24"
      >
        <motion.div
          variants={staggerAnimation}
          className="w-full flex flex-col items-center gap-4 lg:items-start"
        >
          <motion.h1
            variants={textAnimation}
            className="text-4xl text-center text-white font-bold sm:text-5xl sm:max-w-sm lg:text-7xl lg:max-w-xl lg:text-left"
          >
            <strong className="text-gradient-purple-to-green text-4xl font-bold sm:text-5xl lg:text-7xl">
              Conquiste
            </strong>{" "}
            a Web com a{" "}
            <strong className="text-gradient-purple-to-green text-4xl font-bold sm:text-5xl lg:text-7xl">
              Sua Marca
            </strong>
          </motion.h1>

          <motion.p
            variants={textAnimation}
            className="text-xl font-medium text-white/80 text-center leading-8 sm:text-2xl sm:leading-[35px] lg:text-left lg:text-2xl lg:leading-[40px] lg:max-w-2xl"
          >
            Destaque-se com designs envolventes e funcionalidades intuitivas. Da
            landing page ao e-commerce, criamos experiências digitais memoráveis
            para impulsionar o seu negócio.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerAnimation}
          className="w-full bg-[#11171E] border-2 border-[#232D3A] px-9 py-6 rounded-2xl flex flex-col gap-y-6 sm:max-w-sm"
        >
          <div className="w-full flex flex-col gap-y-2">
            <motion.p
              variants={cardAnimation}
              className="text-white text-xl font-bold"
            >
              Entre em contato conosco
            </motion.p>

            <motion.div variants={cardAnimation}>
              <Button
                size="lg"
                className="w-full bg-[#30D265] text-white text-base font-bold rounded-lg flex items-center gap-x-2 hover:bg-[#30D265]/80"
              >
                <Image
                  src="/images/whatsapp-white-icon.svg"
                  alt="Whatsapp"
                  width={27}
                  height={27}
                  className="object-contain object-center"
                />
                WhatsApp
              </Button>
            </motion.div>
          </div>

          <div className="w-full flex flex-col gap-y-2">
            <motion.p
              variants={cardAnimation}
              className="text-white text-xl font-bold"
            >
              Ou se preferir
            </motion.p>

            <motion.div variants={cardAnimation}>
              <Button
                size="lg"
                className="w-full bg-[#1FA8ED] text-white text-base font-bold rounded-lg flex items-center gap-x-2 hover:bg-[#1FA8ED]/80"
              >
                Visite o site
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <div className="hidden lg:flex lg:w-full lg:justify-center lg:items-center">
        <div className="w-7 h-16 rounded-full p-2 border-2 border-[#1F2A37]">
          <motion.span
            initial="initial"
            animate="animate"
            variants={scrollIndicatorAnimation}
            className="block w-full h-6 rounded-full bg-[#1F2A37]"
          />
        </div>
      </div>
    </motion.section>
  );
};
