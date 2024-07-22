"use client";

import { motion } from "framer-motion";

import { projectType } from "./projects-content";
import { projectsWrapperAnimation } from "@/constants/framer/projects/projects-page-animation";
import { ProjectBox } from "./project-box";

interface Props {
  projects: projectType[];
}

export function ProjectsWrapper({ projects }: Props) {
  return (
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
            category={project.category}
            link={project.link}
            title={project.title}
            desc={project.description}
          />
        ))
      ) : (
        <div className="w-full h-36 flex items-center justify-center col-span-2">
          <span className="text-light-primary/60 text-xl text-center font-semibold max-w-xl lg:text-2xl">
            Estamos trabalhando em novos projetos para esta categoria. Fique ligado para futuras atualizações!
          </span>
        </div>
      )}
    </motion.div>
  );
}
