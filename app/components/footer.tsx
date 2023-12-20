import Image from "next/image";
import Link from "next/link";

import { CTA } from "./cta";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#141B26] pt-64 pb-6 lg:pt-72">
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
            <li className="text-white text-lg font-medium">
              <Link href="/">Início</Link>
            </li>

            <li className="text-white text-lg font-medium">
              <Link href="/servicos">Serviços</Link>
            </li>

            <li className="text-white text-lg font-medium">
              {/* Mudar depois */}
              <Link href="/projetos">Projetos</Link>
            </li>

            <li className="text-white text-lg font-medium">
              {/* mudar depois */}
              <Link href="/contato">Contato</Link>
            </li>

            <li className="text-white text-lg font-medium">
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
