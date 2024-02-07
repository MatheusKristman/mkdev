"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { headerAnimation } from "@/constants/framer/ad/header-animation";

export const AdHeader = () => {
  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={headerAnimation}
      className="w-full py-3 flex items-center justify-center border-b border-blue-600"
    >
      <div className="relative w-[74px] h-[31px] sm:w-[84px] sm:h-[35px] lg:w-[110px] lg:h-[45px]">
        <a
          href="https://www.mkdevsolutions.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="/images/logo.svg"
            alt="MKDev"
            fill
            className="object-contain object-center"
          />
        </a>
      </div>
    </motion.header>
  );
};
