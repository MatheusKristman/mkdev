"use client";

import Link from "next/link";
import Image from "next/image";
import { Lato } from "next/font/google";
import { AlignRight, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useHeaderStore from "@/stores/useHeaderStore";
import useModalStore from "@/stores/useModalStore";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { openMenu } = useHeaderStore();
  const { openContactModal } = useModalStore();

  function handleLogoClick() {
    if (pathname === "/") {
      return;
    }

    router.push("/");
  }

  return (
    <header className="w-full px-6 pt-4 mb-12 flex items-center justify-between md:px-16 md:mb-24 lg:mx-auto lg:container lg:mb-40">
      <div className="relative h-9 w-20 md:h-11 md:w-24">
        <Image
          src="/images/logo.svg"
          alt="MKDev"
          fill
          className="object-contain cursor-pointer"
          onClick={handleLogoClick}
        />
      </div>

      <button
        type="button"
        onClick={openMenu}
        className="flex items-center justify-center lg:hidden"
      >
        <AlignRight color="#CCDAE7" size={40} strokeWidth={1} />
      </button>

      <ul className="hidden lg:flex items-center justify-end gap-x-9">
        <li
          className={cn(
            "relative text-light-primary text-xl font-medium before:content-[''] before:w-0 before:h-[2px] before:bg-light-primary before:absolute before:-bottom-1 before:right-0 after:content-[''] after:w-0 after:h-[2px] after:bg-light-primary after:absolute after:-bottom-3 after:right-0 hover:before:w-full hover:after:w-1/2 before:transition-[width] after:transition-[width]",
            lato.className,
            pathname === "/" && "before:w-full after:w-1/2"
          )}
        >
          <Link href="/">Início</Link>
        </li>

        <li
          className={cn(
            "relative text-light-primary text-xl font-medium before:content-[''] before:w-0 before:h-[2px] before:bg-light-primary before:absolute before:-bottom-1 before:right-0 after:content-[''] after:w-0 after:h-[2px] after:bg-light-primary after:absolute after:-bottom-3 after:right-0 hover:before:w-full hover:after:w-1/2 before:transition-[width] after:transition-[width]",
            lato.className,
            pathname === "/servicos" && "before:w-full after:w-1/2"
          )}
        >
          <Link href="/servicos">Serviços</Link>
        </li>

        <li
          className={cn(
            "text-light-primary text-xl font-medium cursor-pointer",
            lato.className
          )}
        >
          <Popover>
            <PopoverTrigger className="flex items-center gap-x-1">
              Projetos <ChevronDown size={20} />
            </PopoverTrigger>

            <PopoverContent className="w-52 bg-[#10161F] border-[#10161F]">
              <div className="flex flex-col gap-y-4 items-center">
                <Link
                  href="/projetos"
                  className={cn(
                    "text-light-primary/70 font-medium text-base hover:text-light-primary transition"
                  )}
                >
                  Todos
                </Link>

                <Link
                  href="/projetos?category=landing-page"
                  className={cn(
                    "text-light-primary/70 font-medium text-base hover:text-light-primary transition"
                  )}
                >
                  Landing Page
                </Link>

                <Link
                  href="/projetos?category=site-institucional"
                  className="text-light-primary/70 font-medium text-base hover:text-light-primary transition"
                >
                  Site Institucional
                </Link>

                <Link
                  href="/projetos?category=plataforma"
                  className="text-light-primary/70 font-medium text-base hover:text-light-primary transition"
                >
                  Plataforma
                </Link>
              </div>
            </PopoverContent>
          </Popover>
        </li>

        {/* <li className={cn("text-light-primary text-xl font-medium", lato.className)}> */}
        {/*     Contato */}
        {/* </li> */}

        <li>
          <button
            type="button"
            onClick={openContactModal}
            className="bg-transparent py-2 px-5 text-light-primary font-semibold text-xl border-2 border-[#2670DF] rounded-lg transition-shadow hover:shadow-[0px_0px_8px_#2670DF]"
          >
            Entre em contato
          </button>
        </li>
      </ul>
    </header>
  );
};
