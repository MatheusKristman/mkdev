"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { ProjectBox } from "@/app/projetos/components/project-box";
import { projectsData } from "@/constants/projects";
import { projectsWrapperAnimation } from "@/constants/framer/projects/projects-page-animation";

export const PlatformContent = () => {
    const pathname = usePathname();

    return (
        <section className="w-full flex flex-col gap-y-12 pb-40 px-6 md:px-16 lg:container lg:mx-auto">
            <h2 className="w-full text-white text-4xl font-bold text-center md:text-5xl">
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-300">
                    Trabalhos
                </strong>{" "}
                que já realizamos
            </h2>

            <div className="w-full flex flex-col gap-y-9">
                <div className="w-full grid grid-cols-1 grid-rows-4 gap-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
                    <Link
                        href="/projetos"
                        className={cn(
                            "w-full max-w-[250px] mx-auto rounded-full text-lg font-bold flex items-center justify-center p-2 transition-colors hover:text-white",
                            pathname === "/projetos"
                                ? "bg-violet-500 text-white"
                                : "bg-transparent border-2 border-violet-500 text-violet-500",
                        )}
                    >
                        Todos
                    </Link>

                    <Link
                        href="/projetos/landing-page"
                        className={cn(
                            "w-full max-w-[250px] mx-auto rounded-full text-lg font-bold flex items-center justify-center p-2 transition-colors hover:text-white",
                            pathname === "/projetos/landing-page"
                                ? "bg-violet-500 text-white"
                                : "bg-transparent border-2 border-violet-500 text-violet-500",
                        )}
                    >
                        Landing Page
                    </Link>

                    <Link
                        href="/projetos/site-institucional"
                        className={cn(
                            "w-full max-w-[250px] mx-auto rounded-full text-lg font-bold flex items-center justify-center p-2 transition-colors hover:text-white",
                            pathname === "/projetos/site-institucional"
                                ? "bg-violet-500 text-white"
                                : "bg-transparent border-2 border-violet-500 text-violet-500",
                        )}
                    >
                        Site Institucional
                    </Link>

                    <Link
                        href="/projetos/plataforma"
                        className={cn(
                            "w-full max-w-[250px] mx-auto rounded-full text-lg font-bold flex items-center justify-center p-2 transition-colors hover:text-white",
                            pathname === "/projetos/plataforma"
                                ? "bg-violet-500 text-white"
                                : "bg-transparent border-2 border-violet-500 text-violet-500",
                        )}
                    >
                        Plataforma
                    </Link>
                </div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={projectsWrapperAnimation}
                    className="w-full grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-12"
                >
                    {projectsData
                        .filter((project) => project.category === "Plataforma")
                        .map((project) => (
                            <ProjectBox
                                key={project.title}
                                desktopImage={project.desktopUrl}
                                desktopWidth={project.desktopWidth}
                                desktopHeight={project.desktopHeight}
                                mobileImage={project.mobileUrl}
                                mobileWidth={project.mobileWidth}
                                mobileHeight={project.mobileHeight}
                                category={project.category}
                                link={project.link}
                                title={project.title}
                                desc={project.description}
                            />
                        ))}
                </motion.div>
            </div>
        </section>
    );
};
