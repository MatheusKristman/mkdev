"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

import { servicesData } from "@/constants/services";
import {
  titleAnimation,
  wrapperAnimation,
  boxAnimation,
} from "@/constants/framer/services/services-page-animation";

import "swiper/css";
import "swiper/css/pagination";

export const ServicesContent = () => {
  return (
    <section className="w-full flex flex-col gap-y-12 pb-40 px-6 md:px-16 lg:container lg:mx-auto">
      <motion.h2
        initial="initial"
        animate="animate"
        variants={titleAnimation}
        className="text-light-primary text-4xl text-center font-bold md:text-5xl"
      >
        Conheça os nossos{" "}
        <strong className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#23DFEA] to-[#2670DF]">
          serviços
        </strong>
      </motion.h2>

      <motion.div
        initial="initial"
        animate="animate"
        variants={wrapperAnimation}
        className="lg:hidden"
      >
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {servicesData.map((service, index) => (
            <SwiperSlide
              key={`${service.title}-${index}`}
              className="w-full !h-auto bg-[#11161F] border border-[#222C3A] items-center p-9 rounded-xl"
            >
              <div className="relative w-16 h-16 mx-auto mb-7">
                <Image
                  src={service.url}
                  alt={service.title}
                  fill
                  className="object-contain object-center"
                />
              </div>

              <div className="w-full flex flex-col items-center gap-y-4">
                <h3 className="text-xl text-light-primary text-center font-medium">
                  {service.title}
                </h3>

                <p className="text-base text-light-primary/70 text-center">
                  {service.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={wrapperAnimation}
        className="hidden lg:grid w-full grid-cols-3 grid-rows-2 gap-5"
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={`${service.title}-${index}`}
            variants={boxAnimation}
            className="w-full flex flex-col items-center justify-center bg-[#11161F] border border-[#222C3A] p-9 rounded-xl hover:bg-[#222C3A] transition-colors shadow-md shadow-black/25"
          >
            <div className="relative w-16 h-16 mx-auto mb-7">
              <Image
                src={service.url}
                alt={service.title}
                fill
                className="object-contain object-center"
              />
            </div>

            <div className="w-full flex flex-col items-center gap-y-4">
              <h3 className="text-xl text-light-primary text-center font-medium">
                {service.title}
              </h3>

              <p className="text-lg text-light-primary/70 text-center">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
