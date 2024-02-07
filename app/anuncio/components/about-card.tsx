"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { cardAnimation } from "@/constants/framer/ad/about-animation";

interface AboutCardProps {
  className: string;
  icon: string;
  title: string;
}

export const AboutCard = ({ className, icon, title }: AboutCardProps) => {
  return (
    <motion.div variants={cardAnimation} className={cn(className)}>
      <span className={cn(icon, "w-9 h-9 bg-contain bg-center bg-no-repeat")} />

      <h4 className="text-xl text-center font-bold text-white/80 max-w-36">
        {title}
      </h4>
    </motion.div>
  );
};
