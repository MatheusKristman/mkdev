import Image from "next/image";

import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="w-full px-6 mt-12 flex flex-col sm:mt-16 sm:px-16 lg:mx-auto lg:container lg:mt-0 lg:gap-y-24 lg:h-[calc(100vh-70px)] lg:justify-center">
      <div className="w-full flex flex-col items-center gap-y-12 lg:flex-row lg:justify-between lg:items-start lg:gap-x-24">
        <div className="w-full flex flex-col items-center gap-4 lg:items-start">
          <h1 className="text-4xl text-center text-white font-bold sm:text-5xl sm:max-w-sm lg:text-7xl lg:max-w-xl lg:text-left">
            <strong className="text-gradient-purple-to-green text-4xl font-bold sm:text-5xl lg:text-7xl">
              Conquiste
            </strong>{" "}
            a Web com a{" "}
            <strong className="text-gradient-purple-to-green text-4xl font-bold sm:text-5xl lg:text-7xl">
              Sua Marca
            </strong>
          </h1>

          <p className="text-xl font-medium text-white/80 text-center leading-8 sm:text-2xl sm:leading-[35px] lg:text-left lg:text-2xl lg:leading-[40px] lg:max-w-2xl">
            Destaque-se com designs envolventes e funcionalidades intuitivas. Da
            landing page ao e-commerce, criamos experiências digitais memoráveis
            para impulsionar o seu negócio.
          </p>
        </div>

        <div className="w-full bg-[#11171E] border-2 border-[#232D3A] px-9 py-6 rounded-2xl flex flex-col gap-y-6 sm:max-w-sm">
          <div className="w-full flex flex-col gap-y-2">
            <p className="text-white text-xl font-bold">
              Entre em contato conosco
            </p>

            <Button
              size="lg"
              className="w-full bg-[#30D265] text-white text-base font-bold rounded-lg flex items-center gap-x-2 hover:bg-[#30D265]/80"
            >
              <Image
                src="/images/whatsapp-white-icon.svg"
                alt="Whatsapp"
                width={27}
                height={27}
                className="object-contain object-center"
              />
              WhatsApp
            </Button>
          </div>

          <div className="w-full flex flex-col gap-y-2">
            <p className="text-white text-xl font-bold">Ou se preferir</p>

            <Button
              size="lg"
              className="w-full bg-[#1FA8ED] text-white text-base font-bold rounded-lg flex items-center gap-x-2 hover:bg-[#1FA8ED]/80"
            >
              Visite o site
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-full lg:justify-center lg:items-center">
        <div className="w-7 h-16 rounded-full p-2 border-2 border-[#1F2A37]">
          <span className="block w-full h-6 rounded-full bg-[#1F2A37]" />
        </div>
      </div>
    </section>
  );
};
