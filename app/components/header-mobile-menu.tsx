"use client";

import Image from "next/image";
import Link from "next/link";
import { Dot, X } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useHeaderStore from "@/stores/useHeaderStore";
import { headerMobileMenuContainer } from "@/constants/framer/header-mobile-menu-animation";
import useModalStore from "@/stores/useModalStore";

export const HeaderMobileMenu = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isMenuOpen, closeMenu } = useHeaderStore();
  const { openContactModal } = useModalStore();

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "unset";
    }

    return () => {
      document.documentElement.style.overflowY = "unset";

      if (isMenuOpen) {
        closeMenu();
      }
    };
  }, [isMenuOpen, closeMenu]);

  function openModal() {
    closeMenu();

    setTimeout(() => {
      openContactModal();
    }, 300);
  }

  console.log(searchParams.get("category"));

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={headerMobileMenuContainer}
            className="absolute z-50 w-full h-full top-0 bottom-0 left-0 right-0 lg:hidden bg-gray-primary/30 backdrop-blur px-6 md:px-16 py-4 flex flex-col overflow-y-auto"
          >
            <div className="w-full flex items-center justify-between mb-16">
              <div className="relative h-9 w-20 md:h-11 md:w-24">
                <Image
                  src="/images/logo.svg"
                  alt="MKDev"
                  fill
                  className="object-contain"
                />
              </div>

              <button
                type="button"
                onClick={closeMenu}
                className="flex items-center justify-center"
              >
                <X size={40} color="#CCDAE7" strokeWidth={1} />
              </button>
            </div>

            <ul className="w-full flex flex-col mb-12">
              <li className="w-full py-6 border-b border-b-light-primary flex items-center justify-between group cursor-pointer">
                <Link
                  href="/"
                  className="text-light-primary text-2xl font-medium group-hover:underline"
                >
                  Início
                </Link>

                {pathname === "/" && (
                  <Dot size={40} color="#fff" strokeWidth={3} />
                )}
              </li>

              <li className="w-full py-6 border-b border-b-light-primary flex items-center justify-between group cursor-pointer">
                <Link
                  href="/servicos"
                  className="text-light-primary text-2xl font-medium group-hover:underline"
                >
                  Serviços
                </Link>

                {pathname === "/servicos" && (
                  <Dot size={40} color="#fff" strokeWidth={3} />
                )}
              </li>

              <li className="w-full">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="py-6 text-light-primary text-2xl font-medium">
                      Projetos
                    </AccordionTrigger>

                    <AccordionContent className="bg-[#2670DF] mb-4 rounded-lg p-7">
                      <ul className="w-full flex flex-col">
                        <li className="w-full py-6 border-b border-b-light-primary flex items-center justify-between group cursor-pointer">
                          <Link
                            href="/projetos"
                            className="text-light-primary text-xl font-medium group-hover:underline"
                          >
                            Todos
                          </Link>

                          {!searchParams.get("category") && (
                            <Dot size={40} color="#fff" strokeWidth={3} />
                          )}
                        </li>

                        <li className="w-full py-6 border-b border-b-light-primary flex items-center justify-between group cursor-pointer">
                          <Link
                            href="/projetos?category=landing-page"
                            className="text-light-primary text-xl font-medium group-hover:underline"
                          >
                            Landing Page
                          </Link>

                          {searchParams.get("category") === "landing-page" && (
                            <Dot size={40} color="#fff" strokeWidth={3} />
                          )}
                        </li>

                        <li className="w-full py-6 border-b border-b-light-primary flex items-center justify-between group cursor-pointer">
                          <Link
                            href="/projetos?category=site-institucional"
                            className="text-light-primary text-xl font-medium group-hover:underline"
                          >
                            Site Institucional
                          </Link>

                          {searchParams.get("category") ===
                            "site-institucional" && (
                            <Dot size={40} color="#fff" strokeWidth={3} />
                          )}
                        </li>

                        <li className="w-full py-6 flex items-center justify-between group cursor-pointer">
                          <Link
                            href="/projetos?category=plataforma"
                            className="text-light-primary text-xl font-medium group-hover:underline"
                          >
                            Plataforma
                          </Link>

                          {searchParams.get("category") === "plataforma" && (
                            <Dot size={40} color="#fff" strokeWidth={3} />
                          )}
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
            </ul>

            <button
              type="button"
              onClick={openModal}
              className="w-full mt-auto mb-7 bg-transparent py-2 px-5 text-light-primary font-semibold text-xl border-2 border-[#2670DF] rounded-lg transition-shadow hover:shadow-[0px_0px_8px_#19D0F0]"
            >
              Entre em contato
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
