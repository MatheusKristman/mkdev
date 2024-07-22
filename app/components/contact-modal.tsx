"use client";

import { Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";

import { ContactForm } from "./contact-form";
import useModalStore from "@/stores/useModalStore";
import { overlayAnimation, boxAnimation } from "@/constants/framer/contact-modal-animation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import usePixelStore from "@/stores/usePixelStore";

export const ContactModal = () => {
  const { setContactModalOpened } = usePixelStore();
  const [isSendingMessage, setSendingMessage] = useState<boolean>(false);

  const { isContactModalOpen, closeContactModal } = useModalStore();
  const whatsappLink = process.env.NEXT_PUBLIC_WHATSAPP_LINK;

  function redirectToWhatsapp() {
    window.open(whatsappLink, "_blank");
  }

  useEffect(() => {
    if (isContactModalOpen) {
      setContactModalOpened();
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "unset";
    }
  }, [isContactModalOpen, setContactModalOpened]);

  return (
    <>
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={overlayAnimation}
            className={cn(
              "w-full h-full fixed top-0 bottom-0 left-0 right-0 bg-gray-primary/80 backdrop-blur z-50 py-12 px-6 overflow-y-auto md:px-12 before:content-[''] before:h-full before:inline-block before:align-middle",
              "scrollbar scrollbar-thumb-slate-700 scrollbar-thumb-rounded-lg scrollbar-w-2"
            )}
          >
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={boxAnimation}
              className="bg-[#222C3A]/30 backdrop-blur-xl inline-block w-full max-w-lg align-middle relative left-1/2 -translate-x-1/2 p-6 rounded-3xl shadow-lg lg:p-9"
            >
              <div className="w-full flex items-center justify-between mb-6">
                <span className="w-3/4 flex gap-x-1 text-light-primary/40 text-sm items-center">
                  Contato
                  <div className="w-full bg-gradient-to-r from-light-primary/40 to-transparent h-[1px]" />
                </span>

                <button type="button" disabled={isSendingMessage} onClick={closeContactModal}>
                  <X size={40} color="#CCDAE7" strokeWidth={1} />
                </button>
              </div>

              <div className="w-full">
                <div className="w-full flex mb-6 gap-x-5 md:max-w-lg lg:max-w-2xl">
                  <span className="bg-[#1161DA] rounded-full p-3 flex items-center justify-center h-fit w-fit shadow-[0px_6px_13px_#126CB1]">
                    <Phone color="#CCDAE7" size={25} />
                  </span>

                  <div className="flex flex-col gap-y-4">
                    <h2 className="text-2xl text-light-primary font-bold md:text-4xl">
                      Entre em{" "}
                      <strong className="bg-gradient-to-r from-[#3093EE] to-[#23F6DD] text-transparent bg-clip-text">
                        contato
                      </strong>
                    </h2>

                    <p className="text-base text-light-primary/90 leading-[27px]">
                      Pronto para ter um site incrível ou melhorar o que já tem? Mande mensagem e vamos começar!
                    </p>
                  </div>
                </div>

                <ContactForm
                  closeContactModal={closeContactModal}
                  isSendingMessage={isSendingMessage}
                  setSendingMessage={setSendingMessage}
                />

                <div className="w-full mt-6 space-y-6">
                  <div className="w-full flex items-center justify-between gap-x-2">
                    <div className="w-1/2 h-[1px] bg-light-primary/80" />
                    <span className="text-lg font-normal text-light-primary">OU</span>
                    <div className="w-1/2 h-[1px] bg-light-primary/80" />
                  </div>

                  <Button
                    asChild
                    className="w-full bg-transparent border-2 border-[#25D366] text-lg text-[#25D366] flex items-center gap-x-2 hover:bg-[#25D366] hover:text-light-primary"
                  >
                    <a href={whatsappLink} target="_blank" rel="noreferrer noopener">
                      <BsWhatsapp />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
