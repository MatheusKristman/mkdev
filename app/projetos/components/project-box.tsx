"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { projectBoxAnimation } from "@/constants/framer/projects/projects-page-animation";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectBoxProps {
  desktopImage: string;
  desktopWidth: number;
  desktopHeight: number;
  category: string;
  link: string;
  title: string;
  desc: string;
}

export const ProjectBox = ({
  desktopImage,
  desktopWidth,
  desktopHeight,
  category,
  link,
  title,
  desc,
}: ProjectBoxProps) => {
  return (
    <motion.div
      variants={projectBoxAnimation}
      className="w-full flex flex-col rounded-2xl overflow-hidden bg-slate-700"
    >
      <div className="w-full aspect-video overflow-hidden shrink-0">
        <Image
          src={desktopImage}
          alt={title}
          width={desktopWidth}
          height={desktopHeight}
          className="object-contain object-center"
        />
      </div>

      <div className="w-full h-full px-6 py-9 flex flex-col gap-9 justify-between items-center md:px-11">
        <div className="flex flex-col gap-6">
          <div className="w-full flex items-center justify-between gap-x-12">
            <h4 className="text-2xl text-white font-bold">{title}</h4>

            <span
              className={cn(
                "flex items-center justify-center px-2 py-1 rounded-sm text-white text-sm font-normal text-center",
                category === "Landing Page" && "bg-[#2670DF]/70",
                category === "Site Institucional" && "bg-[#44BC87]/70",
                category === "Plataforma" && "bg-[#5957E2]/70"
              )}
            >
              {category}
            </span>
          </div>

          <p className="text-white text-base leading-[30px]">{desc}</p>
        </div>

        <div className="w-full flex flex-col items-center gap-y-6 md:flex-row md:justify-between">
          <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="w-full bg-[#2670DF] py-2 px-4 flex items-center justify-center gap-x-1 rounded-lg text-white text-xl font-medium transition-colors md:w-fit hover:bg-sky-500 hover:text-white"
          >
            Ver projeto
            <ArrowRight strokeWidth={2} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
