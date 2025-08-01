"use client";

import { z } from "zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeOffIcon, Loader2Icon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import { recoveryPasswordSchema } from "@/constants/schema/recovery-password-schema";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useModalStore from "@/stores/useModalStore";
import { useRouter } from "next/navigation";

interface PasswordRecoveryForm {
    recoveryToken: string | undefined;
}

export const PasswordRecoveryForm = ({
    recoveryToken,
}: PasswordRecoveryForm) => {
    const [newPasswordVisibility, setNewPasswordVisibility] = useState<
        "password" | "text"
    >("password");
    const [confirmNewPasswordVisibility, setConfirmNewPasswordVisibility] =
        useState<"password" | "text">("password");

    const { closePasswordRecoveryModal } = useModalStore();

    const router = useRouter();
    const trpc = useTRPC();

    const { mutate: recoveryPassword, isPending } = useMutation(
        trpc.users.recoveryPassword.mutationOptions({
            onSuccess: (data) => {
                toast.success(data.message);
                closePasswordRecoveryModal();
                router.replace("/");
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
                        toast.error("Ocorreu um erro ao recuperar a senha");
                }

                router.replace("/");
            },
        }),
    );

    const form = useForm<z.infer<typeof recoveryPasswordSchema>>({
        resolver: zodResolver(recoveryPasswordSchema),
        defaultValues: {
            recoveryToken: recoveryToken ?? "",
            newPassword: "",
            confirmNewPassword: "",
        },
    });

    const onSubmit = (values: z.infer<typeof recoveryPasswordSchema>) => {
        recoveryPassword(values);
    };

    const handleNewPasswordVisibility = () => {
        if (newPasswordVisibility === "password") {
            setNewPasswordVisibility("text");
            return;
        }

        setNewPasswordVisibility("password");
    };

    const handleConfirmNewPasswordVisibility = () => {
        if (confirmNewPasswordVisibility === "password") {
            setConfirmNewPasswordVisibility("text");
            return;
        }

        setConfirmNewPasswordVisibility("password");
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-12"
            >
                <div className="w-full space-y-4">
                    <FormField
                        name="newPassword"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nova Senha</FormLabel>

                                <FormControl>
                                    <div className="w-full relative">
                                        <Input
                                            type={newPasswordVisibility}
                                            className={cn(
                                                "pr-14",
                                                form.formState.errors
                                                    .newPassword &&
                                                    "border-destructive focus-visible:shadow-destructive",
                                            )}
                                            disabled={isPending}
                                            {...field}
                                        />

                                        <Button
                                            type="button"
                                            variant="link"
                                            size="icon"
                                            className={cn(
                                                "absolute right-2 top-1/2 -translate-y-1/2",
                                                form.formState.errors
                                                    .newPassword &&
                                                    "text-destructive",
                                            )}
                                            disabled={isPending}
                                            onClick={
                                                handleNewPasswordVisibility
                                            }
                                        >
                                            {newPasswordVisibility ===
                                            "password" ? (
                                                <EyeIcon />
                                            ) : (
                                                <EyeOffIcon />
                                            )}
                                        </Button>
                                    </div>
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="confirmNewPassword"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirmar Nova Senha</FormLabel>

                                <FormControl>
                                    <div className="w-full relative">
                                        <Input
                                            type={confirmNewPasswordVisibility}
                                            className={cn(
                                                "pr-14",
                                                form.formState.errors
                                                    .confirmNewPassword &&
                                                    "border-destructive focus-visible:shadow-destructive",
                                            )}
                                            disabled={isPending}
                                            {...field}
                                        />

                                        <Button
                                            type="button"
                                            variant="link"
                                            size="icon"
                                            className={cn(
                                                "absolute right-2 top-1/2 -translate-y-1/2",
                                                form.formState.errors
                                                    .confirmNewPassword &&
                                                    "text-destructive",
                                            )}
                                            disabled={isPending}
                                            onClick={
                                                handleConfirmNewPasswordVisibility
                                            }
                                        >
                                            {confirmNewPasswordVisibility ===
                                            "password" ? (
                                                <EyeIcon />
                                            ) : (
                                                <EyeOffIcon />
                                            )}
                                        </Button>
                                    </div>
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isPending}
                >
                    Enviar{" "}
                    {isPending && <Loader2Icon className="animate-spin" />}
                </Button>
            </form>
        </Form>
    );
};
