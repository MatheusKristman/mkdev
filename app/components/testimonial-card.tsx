import Image from "next/image";

import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  imageUrl: string;
  name: string;
  job: string;
  desc: string;
  isLeft?: boolean;
  isRight?: boolean;
  isBottom?: boolean;
}

// TODO criar função de scroll para animar os layers atras do card, e adicionar a variavel isRight e isBottom na props

export const TestimonialCard = ({
  imageUrl,
  name,
  job,
  desc,
  isLeft,
  isRight,
  isBottom,
}: TestimonialCardProps) => {
  return (
    <>
      <div className="relative w-full">
        <div
          className={cn(
            "absolute bg-[#2069D6]/10 rounded-3xl z-10",
            isLeft &&
              "-top-[10px] left-1/2 -translate-x-1/2 w-[calc(100%-10px)] h-full lg:left-[5px] lg:translate-x-0 lg:w-full",
            isRight &&
              "-top-[10px] left-1/2 -translate-x-1/2 w-[calc(100%-10px)] h-full lg:-left-[5px] lg:translate-x-0 lg:w-full",
            isBottom &&
              "-top-[10px] left-1/2 -translate-x-1/2 w-[calc(100%-10px)] h-full"
          )}
        />

        <div
          className={cn(
            "absolute bg-[#2069D6]/10 rounded-3xl z-10",
            isLeft &&
              "-top-[20px] left-1/2 -translate-x-1/2 w-[calc(100%-20px)] h-full lg:left-[10px] lg:translate-x-0 lg:w-full",
            isRight &&
              "-top-[20px] left-1/2 -translate-x-1/2 w-[calc(100%-20px)] h-full lg:-left-[10px] lg:translate-x-0 lg:w-full",
            isBottom &&
              "-top-[20px] left-1/2 -translate-x-1/2 w-[calc(100%-20px)] h-full"
          )}
        />

        <div
          className={cn(
            "absolute bg-[#2069D6]/10 rounded-3xl z-10",
            isLeft &&
              "-top-[30px] left-1/2 -translate-x-1/2 w-[calc(100%-30px)] h-full lg:left-[15px] lg:translate-x-0 lg:w-full",
            isRight &&
              "-top-[30px] left-1/2 -translate-x-1/2 w-[calc(100%-30px)] h-full lg:-left-[15px] lg:translate-x-0 lg:w-full",
            isBottom &&
              "-top-[30px] left-1/2 -translate-x-1/2 w-[calc(100%-30px)] h-full"
          )}
        />

        <div
          className={cn(
            "absolute bg-[#2069D6]/10 rounded-3xl z-10",
            isLeft &&
              "-top-[40px] left-1/2 -translate-x-1/2 w-[calc(100%-40px)] h-full lg:left-[20px] lg:translate-x-0 lg:w-full",
            isRight &&
              "-top-[40px] left-1/2 -translate-x-1/2 w-[calc(100%-40px)] h-full lg:-left-[20px] lg:translate-x-0 lg:w-full",
            isBottom &&
              "-top-[40px] left-1/2 -translate-x-1/2 w-[calc(100%-40px)] h-full"
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
