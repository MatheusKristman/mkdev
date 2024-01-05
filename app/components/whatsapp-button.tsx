"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { buttonAnimation } from "@/constants/framer/whatsapp-button-animation";

export const WhatsappButton = () => {
    return (
        <div className="fixed z-50 bottom-10 right-6 md:right-10">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <motion.a
                            initial="initial"
                            animate="animate"
                            variants={buttonAnimation}
                            href="https://wa.me/11910955882"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="bg-[#25d366] w-12 min-w-12 max-w-12 h-12 min-h-12 max-w-12 rounded-full flex items-center justify-center"
                        >
                            <Image
                                src="/images/whatsapp-icon.svg"
                                alt="Whatsapp"
                                width="35"
                                height="35"
                                className="object-contain object-center"
                            />
                        </motion.a>
                    </TooltipTrigger>

                    <TooltipContent side="left">
                        <p>Texto</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
};
