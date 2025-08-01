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

import { PasswordRecoveryForm } from "./password-recovery-form";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface PasswordRecoveryModalProps {
    token: string | undefined;
}

export const PasswordRecoveryModal = ({
    token,
}: PasswordRecoveryModalProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {
        isPasswordRecoveryModalOpen,
        openPasswordRecoveryModal,
        closePasswordRecoveryModal,
    } = useModalStore();

    const router = useRouter();
    const trpc = useTRPC();

    const { mutate: verifyRecoveryPasswordToken } = useMutation(
        trpc.users.verifyRecoveryPasswordToken.mutationOptions({
            onSuccess: (data) => {
                openPasswordRecoveryModal();
            },
            onError: (error) => {
                console.error(error);

                switch (error.data?.code) {
                    case "NOT_FOUND":
                        toast.error(error.message);
                        break;
                    case "UNAUTHORIZED":
                        toast.error(error.message);
                        break;
                    default:
                        toast.error("Token inválido");
                }

                router.replace("/");
            },
        }),
    );

    useEffect(() => {
        if (isPasswordRecoveryModalOpen) {
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.documentElement.style.overflowY = "unset";
        }
    }, [isPasswordRecoveryModalOpen]);

    useEffect(() => {
        if (token) {
            verifyRecoveryPasswordToken({ token });
        }
    }, [token, verifyRecoveryPasswordToken]);

    return (
        <>
            <AnimatePresence>
                {isPasswordRecoveryModalOpen && (
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
                            <div className="w-full flex items-center justify-between  mb-6">
                                <h2 className="text-2xl text-light-primary font-bold md:text-4xl">
                                    Recupere sua senha
                                </h2>

                                <button
                                    type="button"
                                    disabled={isLoading}
                                    onClick={closePasswordRecoveryModal}
                                >
                                    <XIcon
                                        size={40}
                                        color="#CCDAE7"
                                        strokeWidth={1}
                                    />
                                </button>
                            </div>

                            <PasswordRecoveryForm recoveryToken={token} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
