"use client";

import { motion } from "framer-motion";

import { TestimonialCard } from "./testimonial-card";
import { titleAnimation } from "@/constants/framer/testimonial-animation";

export const Testimonial = () => {
    return (
        <section className="w-full pb-40 bg-testimonial-mobile bg-no-repeat bg-[length:100%_100%] md:bg-testimonial-tablet lg:bg-testimonial-desktop">
            <div className="w-full px-6 md:px-16 lg:container lg:mx-auto">
                <motion.h2
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={titleAnimation}
                    className="text-white text-3xl font-bold text-center mb-16 md:text-4xl"
                >
                    Histórias de{" "}
                    <strong className="bg-gradient-to-r from-[#229CF5] to-[#23DFEA] text-transparent bg-clip-text">
                        Sucesso
                    </strong>{" "}
                    dos Nossos{" "}
                    <strong className="bg-gradient-to-r from-[#229CF5] to-[#23DFEA] text-transparent bg-clip-text">
                        Clientes.
                    </strong>{" "}
                </motion.h2>

                <div className="w-full flex flex-col gap-y-14">
                    <div className="w-full grid grid-cols-1 grid-rows-2 gap-14 lg:grid-cols-2 lg:grid-rows-1">
                        <TestimonialCard
                            imageUrl="/images/testimonial-1.jpg"
                            name="Maria Silva"
                            job="Empresária"
                            desc="Sou a Maria, dona de um pequeno negócio. A agência fez meu site brilhar! Agora, mais clientes, mais sorrisos. Recomendo de olhos fechados!"
                            isLeft
                        />

                        <TestimonialCard
                            imageUrl="/images/testimonial-2.jpg"
                            name="João Oliveira"
                            job="Consultor Financeiro"
                            desc="Meu site era ultrapassado até conhecer essa equipe incrível. Profissionalismo total! Agora, minha presença online é tão boa quanto meus conselhos financeiros."
                            isRight
                        />
                    </div>

                    <TestimonialCard
                        imageUrl="/images/testimonial-3.jpg"
                        name="Ana Santos"
                        job="Fotógrafa Freelancer"
                        desc="Contratei a agência para dar vida ao meu portfólio online. Resultado? Fotos ganhando mais cliques e contratos! É incrível como um site faz toda a diferença!"
                        isBottom
                    />
                </div>
            </div>
        </section>
    );
};
