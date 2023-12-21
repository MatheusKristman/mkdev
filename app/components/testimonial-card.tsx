import Image from "next/image";
import { motion, useScroll } from "framer-motion";

import { cn } from "@/lib/utils";
import useParallax from "@/hooks/useParallax";
import { ElementRef, useRef } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

interface TestimonialCardProps {
  imageUrl: string;
  name: string;
  job: string;
  desc: string;
  isLeft?: boolean;
  isRight?: boolean;
  isBottom?: boolean;
}

export const TestimonialCard = ({
  imageUrl,
  name,
  job,
  desc,
  isLeft,
  isRight,
  isBottom,
}: TestimonialCardProps) => {
  const ref = useRef<ElementRef<"div">>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const firstRectY = useParallax(scrollYProgress, 15);
  const secondRectY = useParallax(scrollYProgress, 30);
  const thirdRectY = useParallax(scrollYProgress, 45);
  const fourthRectY = useParallax(scrollYProgress, 60);
  const firstLeftRectX = useParallax(scrollYProgress, -7);
  const secondLeftRectX = useParallax(scrollYProgress, -14);
  const thirdLeftRectX = useParallax(scrollYProgress, -21);
  const fourthLeftRectX = useParallax(scrollYProgress, -28);
  const firstRightRectX = useParallax(scrollYProgress, 7);
  const secondRightRectX = useParallax(scrollYProgress, 14);
  const thirdRightRectX = useParallax(scrollYProgress, 21);
  const fourthRightRectX = useParallax(scrollYProgress, 28);

  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <div className="relative w-full">
        <motion.div
          style={{
            y: firstRectY,
            x: isLargeScreen
              ? isLeft
                ? firstLeftRectX
                : isRight
                ? firstRightRectX
                : "-50%"
              : "-50%",
          }}
          className={cn(
            "absolute bg-[#2069D6]/10 rounded-3xl z-10",
            isLeft &&
              "-top-[0px] left-1/2 -translate-x-1/2 w-[calc(100%-10px)] h-full lg:left-[0px] lg:translate-x-0 lg:w-full",
            isRight &&
              "-top-[0px] left-1/2 -translate-x-1/2 w-[calc(100%-10px)] h-full lg:-left-[0px] lg:translate-x-0 lg:w-full",
            isBottom &&
              "-top-[0px] left-1/2 -translate-x-1/2 w-[calc(100%-10px)] h-full"
          )}
        />

        <motion.div
          style={{
            y: secondRectY,
            x: isLargeScreen
              ? isLeft
                ? secondLeftRectX
                : isRight
                ? secondRightRectX
                : "-50%"
              : "-50%",
          }}
          className={cn(
            "absolute bg-[#2069D6]/10 rounded-3xl z-10",
            isLeft &&
              "-top-[0px] left-1/2 -translate-x-1/2 w-[calc(100%-20px)] h-full lg:left-[0px] lg:translate-x-0 lg:w-full",
            isRight &&
              "-top-[0px] left-1/2 -translate-x-1/2 w-[calc(100%-20px)] h-full lg:-left-[0px] lg:translate-x-0 lg:w-full",
            isBottom &&
              "-top-[0px] left-1/2 -translate-x-1/2 w-[calc(100%-20px)] h-full"
          )}
        />

        <motion.div
          style={{
            y: thirdRectY,
            x: isLargeScreen
              ? isLeft
                ? thirdLeftRectX
                : isRight
                ? thirdRightRectX
                : "-50%"
              : "-50%",
          }}
          className={cn(
            "absolute bg-[#2069D6]/10 rounded-3xl z-10",
            isLeft &&
              "-top-[0px] left-1/2 -translate-x-1/2 w-[calc(100%-30px)] h-full lg:left-[0px] lg:translate-x-0 lg:w-full",
            isRight &&
              "-top-[0px] left-1/2 -translate-x-1/2 w-[calc(100%-30px)] h-full lg:-left-[0px] lg:translate-x-0 lg:w-full",
            isBottom &&
              "-top-[0px] left-1/2 -translate-x-1/2 w-[calc(100%-30px)] h-full"
          )}
        />

        <motion.div
          style={{
            y: fourthRectY,
            x: isLargeScreen
              ? isLeft
                ? fourthLeftRectX
                : isRight
                ? fourthRightRectX
                : "-50%"
              : "-50%",
          }}
          className={cn(
            "absolute bg-[#2069D6]/10 rounded-3xl z-10",
            isLeft &&
              "-top-[0px] left-1/2 -translate-x-1/2 w-[calc(100%-40px)] h-full lg:left-[0px] lg:translate-x-0 lg:w-full",
            isRight &&
              "-top-[0px] left-1/2 -translate-x-1/2 w-[calc(100%-40px)] h-full lg:-left-[0px] lg:translate-x-0 lg:w-full",
            isBottom &&
              "-top-[0px] left-1/2 -translate-x-1/2 w-[calc(100%-40px)] h-full"
          )}
        />

        <div className="relative bg-[#222C3A] border-2 border-[#7236DE] rounded-3xl p-9 w-full z-20">
          <div className="w-full flex items-center gap-x-6 mb-9">
            <div className="relative min-w-[56px] aspect-square bg-gradient-to-br from-[#7037DE] to-[#19D0F0] p-1 rounded-full overflow-hidden flex items-center justify-center">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={imageUrl}
                  alt="Cliente"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-1">
              <span className="text-white text-xl font-bold">{name}</span>

              <span className="text-white/50 text-base">{job}</span>
            </div>
          </div>

          <p className="text-white font-normal text-base leading-7">{desc}</p>
        </div>
      </div>
    </>
  );
};
