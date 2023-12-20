"use client";

import Image from "next/image";
import Link from "next/link";
import { Lato } from "next/font/google";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { CTA } from "./cta";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const Footer = () => {
    const pathname = usePathname();

    return (
        <footer className="w-full bg-[#141B26] pb-6">
            <div className="relative w-full px-6 md:px-16 lg:container lg:mx-auto">
                <CTA />

                <div className="w-full flex flex-col items-center gap-y-6 mb-12 md:flex-row md:justify-between md:items-start lg:mb-20">
                    <Image
                        src="/images/logo.png"
                        alt="MKDev"
                        width="85"
                        height="35"
                        className="object-contain"
                    />

                    <ul className="w-full flex flex-col items-center gap-y-4 md:w-fit md:items-end lg:flex-row lg:gap-x-10">
                        <li
                            className={cn(
                                "relative text-white text-lg font-medium before:content-[''] before:w-0 before:h-[2px] before:bg-white before:absolute before:-bottom-1 before:right-0 after:content-[''] after:w-0 after:h-[2px] after:bg-white after:absolute after:-bottom-3 after:right-0 hover:before:w-full hover:after:w-1/2 before:transition-[width] after:transition-[width]",
                                lato.className,
                                pathname === "/" && "before:w-full after:w-1/2",
                            )}
                        >
                            <Link href="/">Início</Link>
                        </li>

                        <li
                            className={cn(
                                "relative text-white text-lg font-medium before:content-[''] before:w-0 before:h-[2px] before:bg-white before:absolute before:-bottom-1 before:right-0 after:content-[''] after:w-0 after:h-[2px] after:bg-white after:absolute after:-bottom-3 after:right-0 hover:before:w-full hover:after:w-1/2 before:transition-[width] after:transition-[width]",
                                lato.className,
                                pathname === "/servicos" && "before:w-full after:w-1/2",
                            )}
                        >
                            <Link href="/servicos">Serviços</Link>
                        </li>

                        <li
                            className={cn(
                                "text-white text-lg font-medium cursor-pointer",
                                lato.className,
                            )}
                        >
                            <Popover>
                                <PopoverTrigger className="flex items-center gap-x-1">
                                    Projetos <ChevronDown size={20} />
                                </PopoverTrigger>

                                <PopoverContent className="w-52 bg-[#10161F] border-[#10161F]">
                                    <div className="flex flex-col gap-y-4 items-center">
                                        <Link
                                            href="/projetos/landing-page"
                                            className={cn(
                                                "text-white/70 font-medium text-base hover:text-white transition",
                                            )}
                                        >
                                            Landing Page
                                        </Link>
                                        <Link
                                            href="/projetos/site-institucional"
                                            className="text-white/70 font-medium text-base hover:text-white transition"
                                        >
                                            Site Institucional
                                        </Link>
                                        <Link
                                            href="/projetos/plataforma"
                                            className="text-white/70 font-medium text-base hover:text-white transition"
                                        >
                                            Plataforma
                                        </Link>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </li>

                        {/* <li className={cn("text-white text-xl font-medium", lato.className)}> */}
                        {/*     Contato */}
                        {/* </li> */}

                        <li
                            className={cn(
                                "relative text-white text-lg font-medium cursor-pointer before:content-[''] before:w-0 before:h-[2px] before:bg-white before:absolute before:-bottom-1 before:right-0 after:content-[''] after:w-0 after:h-[2px] after:bg-white after:absolute after:-bottom-3 after:right-0 hover:before:w-full hover:after:w-1/2 before:transition-[width] after:transition-[width]",
                                lato.className,
                            )}
                        >
                            Contato
                        </li>

                        <li
                            className={cn(
                                "relative text-white text-lg font-medium before:content-[''] before:w-0 before:h-[2px] before:bg-white before:absolute before:-bottom-1 before:right-0 after:content-[''] after:w-0 after:h-[2px] after:bg-white after:absolute after:-bottom-3 after:right-0 hover:before:w-full hover:after:w-1/2 before:transition-[width] after:transition-[width]",
                                lato.className,
                                pathname === "/termos-e-condicoes" && "before:w-full after:w-1/2",
                            )}
                        >
                            <Link href="/termos-e-condicoes">Termos e Condições</Link>
                        </li>
                    </ul>
                </div>

                <div className="w-full flex items-center justify-center">
                    <p className="text-white/50 font-sm text-center">
                        Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};
