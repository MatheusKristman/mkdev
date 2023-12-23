"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { projectBoxAnimation } from "@/constants/framer/projects/projects-page-animation";

interface ProjectBoxProps {
    desktopImage: string;
    desktopWidth: number;
    desktopHeight: number;
    mobileImage: string;
    mobileWidth: number;
    mobileHeight: number;
    category: string;
    link: string;
    title: string;
    desc: string;
}

export const ProjectBox = ({
    desktopImage,
    desktopWidth,
    desktopHeight,
    mobileImage,
    mobileWidth,
    mobileHeight,
    category,
    link,
    title,
    desc,
}: ProjectBoxProps) => {
    const [isMobileActive, setIsMobileActive] = useState<boolean>(false);

    useEffect(() => {
        console.log(isMobileActive);
    }, [isMobileActive]);

    function handleMobileView() {
        setIsMobileActive((prev) => !prev);
    }

    return (
        <motion.div
            variants={projectBoxAnimation}
            className="w-full rounded-2xl overflow-hidden bg-slate-700"
        >
            <div className="w-full aspect-video overflow-y-auto">
                {isMobileActive ? (
                    <Image
                        src={mobileImage}
                        alt={title}
                        width={mobileWidth}
                        height={mobileHeight}
                        className="object-contain object-center w-full"
                    />
                ) : (
                    <Image
                        src={desktopImage}
                        alt={title}
                        width={desktopWidth}
                        height={desktopHeight}
                        className="object-contain object-center"
                    />
                )}
            </div>

            <div className="w-full px-6 py-9 flex flex-col items-center md:px-11">
                <div className="w-full flex items-center justify-between gap-x-12 mb-6">
                    <h4 className="text-2xl text-white font-bold">{title}</h4>

                    {/* TODO definir cores de cada categoria */}
                    <span
                        className={cn(
                            "flex items-center justify-center px-2 py-1 rounded-sm text-white text-sm font-normal text-center",
                            category === "Landing Page" && "bg-cyan-300/70",
                            category === "Site Institucional" && "bg-pink-600/70",
                            category === "Plataforma" && "bg-purple-600/70",
                        )}
                    >
                        {category}
                    </span>
                </div>

                <p className="text-white text-base leading-[30px] mb-9">{desc}</p>

                <div className="w-full flex flex-col items-center gap-y-6 md:flex-row md:justify-between">
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="w-full bg-transparent border-2 border-sky-500 py-2 px-4 flex items-center justify-center gap-x-1 rounded-lg text-sky-500 text-xl font-medium transition-colors md:w-fit hover:bg-sky-500 hover:text-white"
                    >
                        Ver projeto
                        <ArrowRight strokeWidth={2} />
                    </a>

                    <div className="bg-slate-800 w-fit flex items-center justify-center gap-x-2 px-4 py-2 rounded-lg">
                        <span className="text-white/40 text-base font-medium">Desktop</span>
                        <Switch checked={isMobileActive} onCheckedChange={handleMobileView} />
                        <span className="text-white/40 text-base font-medium">Mobile</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
