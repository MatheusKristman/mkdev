"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  containerAnimation,
  itemsAnimation,
} from "@/constants/framer/ad/footer-animation";

export const FooterCTA = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-[#7037DE] to-[#1560DA] before:content-[''] before:bg-cta-top-left-illustration before:bg-no-repeat before:bg-contain before:bg-left-top before:absolute before:top-0 before:left-0 before:w-[25%] before:aspect-square after:content-[''] after:bg-cta-bottom-right-illustration after:bg-no-repeat after:bg-contain after:bg-right-bottom after:absolute after:bottom-0 after:right-0 after:w-[25%] after:h-[40%] lg:before:w-[15%] lg:after:h-[70%]">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerAnimation}
        className="relative z-10 w-full px-10 py-12 flex flex-col items-center sm:px-12"
      >
        <motion.h2
          variants={itemsAnimation}
          className="text-white text-3xl font-bold text-center mb-5 lg:text-5xl"
        >
          Quer impulsionar o seu negócio?
        </motion.h2>

        <motion.p
          variants={itemsAnimation}
          className="text-white text-xl font-medium text-center mb-9 max-w-lg"
        >
          Estamos prontos para moldar uma presença online exclusiva para o seu
          negócio. Clique agora e entre em contato para transformar sua visão em
          realidade!
        </motion.p>

        <motion.div variants={itemsAnimation} className="w-full sm:w-fit">
          <Button
            asChild
            size="lg"
            className="w-full bg-[#0C3988] text-white text-lg font-bold rounded-xl hover:bg-[#0A2D68] flex items-center gap-x-2 sm:w-fit"
          >
            <a
              href="https://w.app/MKDev"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src="/images/whatsapp-white-icon.svg"
                alt="Whatsapp"
                width={27}
                height={27}
                className="object-contain object-center"
              />
              Solicitar orçamento
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </footer>
  );
};
