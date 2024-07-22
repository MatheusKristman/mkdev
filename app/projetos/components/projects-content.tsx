import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { projectsData } from "@/constants/projects";

import { ProjectsWrapper } from "./projects-wrapper";

export type projectType = {
  desktopUrl: string;
  desktopWidth: number;
  desktopHeight: number;
  category: string;
  link: string;
  title: string;
  description: string;
};

export const ProjectsContent = ({ category }: { category: string | undefined }) => {
  let projects: projectType[] = [];

  if (category === "landing-page") {
    projects = projectsData.filter((project) => project.category === "Landing Page");
  } else if (category === "site-institucional") {
    projects = projectsData.filter((project) => project.category === "Site Institucional");
  } else if (category === "plataforma") {
    projects = projectsData.filter((project) => project.category === "Plataforma");
  } else {
    projects = projectsData;
  }

  return (
    <section className="w-full flex flex-col gap-y-12 pb-40 px-6 md:px-16 lg:container lg:mx-auto">
      <h2 className="w-full text-light-primary text-4xl font-bold text-center md:text-5xl">
        <strong className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-to-br from-[#2670DF] to-[#6E35D6]">
          Projetos
        </strong>{" "}
        que Contam Nossa{" "}
        <strong className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-to-br from-[#6E35D6] to-cyan-300">
          História
        </strong>
      </h2>

      <div className="w-full flex flex-col gap-y-9">
        <div className="w-full grid grid-cols-1 grid-rows-4 gap-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
          <Link
            href="/projetos"
            className={cn(
              "w-full max-w-[250px] mx-auto rounded-full text-lg font-bold flex items-center justify-center p-2 transition-colors hover:text-[#2670DF]",
              !category
                ? "bg-gradient-to-br from-[#2670DF] to-[#6E35D6] text-white hover:text-white"
                : "bg-transparent border-2 border-[#2670DF] text-light-primary"
            )}
          >
            Todos
          </Link>

          <Link
            href="/projetos?category=landing-page"
            className={cn(
              "w-full max-w-[250px] mx-auto rounded-full text-lg font-bold flex items-center justify-center p-2 transition-colors hover:text-[#2670DF]",
              category === "landing-page"
                ? "bg-gradient-to-br from-[#2670DF] to-[#6E35D6] text-white hover:text-white"
                : "bg-transparent border-2 border-[#2670DF] text-light-primary"
            )}
          >
            Landing Page
          </Link>

          <Link
            href="/projetos?category=site-institucional"
            className={cn(
              "w-full max-w-[250px] mx-auto rounded-full text-lg font-bold flex items-center justify-center p-2 transition-colors hover:text-[#2670DF]",
              category === "site-institucional"
                ? "bg-gradient-to-br from-[#2670DF] to-[#6E35D6] text-white hover:text-white"
                : "bg-transparent border-2 border-[#2670DF] text-light-primary"
            )}
          >
            Site Institucional
          </Link>

          <Link
            href="/projetos?category=plataforma"
            className={cn(
              "w-full max-w-[250px] mx-auto rounded-full text-lg font-bold flex items-center justify-center p-2 transition-colors hover:text-[#2670DF]",
              category === "plataforma"
                ? "bg-gradient-to-br from-[#2670DF] to-[#6E35D6] text-white hover:text-white"
                : "bg-transparent border-2 border-[#2670DF] text-light-primary"
            )}
          >
            Plataforma
          </Link>
        </div>

        <ProjectsWrapper projects={projects} />
      </div>
    </section>
  );
};
