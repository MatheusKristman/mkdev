"use client";

import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import useModalStore from "@/stores/useModalStore";
import {
    boxAnimation,
    overlayAnimation,
} from "@/constants/framer/modal-animation";

import { LoginForm } from "./login-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface LoginModalProps {
    notLogged: string | undefined;
}

export const LoginModal = ({ notLogged }: LoginModalProps) => {
    const { isLoginModalOpen, closeLoginModal } = useModalStore();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { openLoginModal } = useModalStore();

    const router = useRouter();

    useEffect(() => {
        if (isLoginModalOpen) {
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.documentElement.style.overflowY = "unset";
        }
    }, [isLoginModalOpen]);

    useEffect(() => {
        if (notLogged) {
            openLoginModal();
            toast.error("Acesso não autorizado, faça o login!");
            router.replace("/");
        }
    }, [notLogged, router, openLoginModal]);

    return (
        <>
            <AnimatePresence>
                {isLoginModalOpen && (
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={overlayAnimation}
                        className={cn(
                            "w-full h-full fixed top-0 bottom-0 left-0 right-0 bg-gray-primary/80 backdrop-blur z-50 py-12 px-6 overflow-y-auto md:px-12 before:content-[''] before:h-full before:inline-block before:align-middle",
                            "scrollbar scrollbar-thumb-slate-700 scrollbar-thumb-rounded-lg scrollbar-w-2",
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
                                <h2 className="text-2xl text-light-primary font-bold md:text-4xl">
                                    Entre na sua conta
                                </h2>

                                <button
                                    type="button"
                                    disabled={isLoading}
                                    onClick={closeLoginModal}
                                >
                                    <XIcon
                                        size={40}
                                        color="#CCDAE7"
                                        strokeWidth={1}
                                    />
                                </button>
                            </div>

                            <LoginForm
                                isLoading={isLoading}
                                setIsLoading={setIsLoading}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
