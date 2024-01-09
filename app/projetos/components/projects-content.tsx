"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { ProjectBox } from "./project-box";
import { projectsData } from "@/constants/projects";
import { projectsWrapperAnimation } from "@/constants/framer/projects/projects-page-animation";

type projectType = {
    desktopUrl: string;
    desktopWidth: number;
    desktopHeight: number;
    mobileUrl: string;
    mobileWidth: number;
    mobileHeight: number;
    category: string;
    link: string;
    title: string;
    description: string;
};

export const ProjectsContent = () => {
    const [projects, setProjects] = useState<projectType[]>([]);

    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    useEffect(() => {
        if (category === "landing-page") {
            const filteredProjects = projectsData.filter(
                (project) => project.category === "Landing Page",
            );

            setProjects(filteredProjects);
        } else if (category === "site-institucional") {
            const filteredProjects = projectsData.filter(
                (project) => project.category === "Site Institucional",
            );

            setProjects(filteredProjects);
        } else if (category === "plataforma") {
            const filteredProjects = projectsData.filter(
                (project) => project.category === "Plataforma",
            );

            setProjects(filteredProjects);
        } else {
            setProjects(projectsData);
        }
    }, [category]);

    return (
        <section className="w-full flex flex-col gap-y-12 pb-40 px-6 md:px-16 lg:container lg:mx-auto">
            <h2 className="w-full text-white text-4xl font-bold text-center md:text-5xl">
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-300">
                    Projetos
                </strong>{" "}
                que Contam Nossa{" "}
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-300">
                    História
                </strong>
            </h2>

            <div className="w-full flex flex-col gap-y-9">
                <div className="w-full grid grid-cols-1 grid-rows-4 gap-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
                    <Link
                        href="/projetos"
                        className={cn(
                            "w-full max-w-[250px] mx-auto rounded-full text-lg font-bold flex items-center justify-center p-2 transition-colors hover:text-blue-400",
                            !category
                                ? "bg-blue-600 text-white hover:text-white"
                                : "bg-transparent border-2 border-blue-400 text-white",
                        )}
                    >
                        Todos
                    </Link>

                    <Link
                        href="/projetos?category=landing-page"
                        className={cn(
                            "w-full max-w-[250px] mx-auto rounded-full text-lg font-bold flex items-center justify-center p-2 transition-colors hover:text-blue-400",
                            category === "landing-page"
                                ? "bg-blue-600 text-white hover:text-white"
                                : "bg-transparent border-2 border-blue-400 text-white",
                        )}
                    >
                        Landing Page
                    </Link>

                    <Link
                        href="/projetos?category=site-institucional"
                        className={cn(
                            "w-full max-w-[250px] mx-auto rounded-full text-lg font-bold flex items-center justify-center p-2 transition-colors hover:text-blue-400",
                            category === "site-institucional"
                                ? "bg-blue-600 text-white hover:text-white"
                                : "bg-transparent border-2 border-blue-400 text-white",
                        )}
                    >
                        Site Institucional
                    </Link>

                    <Link
                        href="/projetos?category=plataforma"
                        className={cn(
                            "w-full max-w-[250px] mx-auto rounded-full text-lg font-bold flex items-center justify-center p-2 transition-colors hover:text-blue-400",
                            category === "plataforma"
                                ? "bg-blue-600 text-white hover:text-white"
                                : "bg-transparent border-2 border-blue-400 text-white",
                        )}
                    >
                        Plataforma
                    </Link>
                </div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={projectsWrapperAnimation}
                    className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                    {projects.length !== 0 ? (
                        projects.map((project, index) => (
                            <ProjectBox
                                key={`${project.title}-${index}`}
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
                        ))
                    ) : (
                        <div className="w-full h-36 flex items-center justify-center col-span-2">
                            <span className="text-white/60 text-xl text-center font-semibold max-w-xl lg:text-2xl">
                                Estamos trabalhando em novos projetos para esta categoria. Fique
                                ligado para futuras atualizações!
                            </span>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};
