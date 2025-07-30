"use client";

import { useEffect } from "react";
import { XIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import useModalStore from "@/stores/useModalStore";
import {
    boxAnimation,
    overlayAnimation,
} from "@/constants/framer/modal-animation";

import { Button } from "@/components/ui/button";

export const PasswordRecoveryMessageModal = () => {
    const {
        isPasswordRecoveryMessageModalOpen,
        closePasswordRecoveryMessageModal,
    } = useModalStore();

    useEffect(() => {
        if (isPasswordRecoveryMessageModalOpen) {
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.documentElement.style.overflowY = "unset";
        }
    }, [isPasswordRecoveryMessageModalOpen]);

    return (
        <>
            <AnimatePresence>
                {isPasswordRecoveryMessageModalOpen && (
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
                            <div className="w-full space-y-2 mb-6">
                                <div className="w-full flex items-center justify-between">
                                    <h2 className="text-2xl text-light-primary font-bold md:text-4xl">
                                        E-mail enviado!
                                    </h2>

                                    <button
                                        type="button"
                                        onClick={
                                            closePasswordRecoveryMessageModal
                                        }
                                    >
                                        <XIcon
                                            size={40}
                                            color="#CCDAE7"
                                            strokeWidth={1}
                                        />
                                    </button>
                                </div>

                                <p className="text-base font-semibold text-light-primary">
                                    Você receberá um e-mail com o link para
                                    redefinir sua senha.
                                </p>
                            </div>

                            <Button
                                size="lg"
                                className="w-full"
                                onClick={closePasswordRecoveryMessageModal}
                            >
                                Fechar
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
