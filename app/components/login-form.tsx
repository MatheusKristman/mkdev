"use client";

import { z } from "zod";
import { useState } from "react";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeOffIcon, Loader2, Loader2Icon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import useModalStore from "@/stores/useModalStore";
import { loginSchema } from "@/constants/schema/login-schema";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
    const [passwordVisibility, setPasswordVisibility] = useState<
        "password" | "text"
    >("password");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { closeLoginModal, openRegisterModal, openForgotPasswordModal } =
        useModalStore();

    const router = useRouter();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof loginSchema>) => {
        setIsLoading(true);

        try {
            const response = await signIn("credentials", {
                ...values,
                redirect: false,
            });

            if (response.error) {
                toast.error("Credenciais inválidas");
            }

            closeLoginModal();
            router.refresh();
        } catch (error) {
            console.error("Erro no login: ", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handlePasswordVisibility = () => {
        if (passwordVisibility === "password") {
            setPasswordVisibility("text");
            return;
        }

        setPasswordVisibility("password");
    };

    const handleRegisterModal = () => {
        closeLoginModal();

        setTimeout(() => {
            openRegisterModal();
        }, 200);
    };

    const handleForgotPasswordModal = () => {
        closeLoginModal();

        setTimeout(() => {
            openForgotPasswordModal();
        }, 200);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-12"
            >
                <div className="w-full space-y-4">
                    <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>E-mail</FormLabel>

                                <FormControl>
                                    <Input
                                        className={cn(
                                            form.formState.errors.email &&
                                                "border-destructive focus-visible:shadow-destructive",
                                        )}
                                        disabled={isLoading}
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="password"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Senha</FormLabel>

                                <FormControl>
                                    <div className="w-full relative">
                                        <Input
                                            type={passwordVisibility}
                                            className={cn(
                                                "pr-14",
                                                form.formState.errors
                                                    .password &&
                                                    "border-destructive focus-visible:shadow-destructive",
                                            )}
                                            disabled={isLoading}
                                            {...field}
                                        />

                                        <Button
                                            type="button"
                                            variant="link"
                                            size="icon"
                                            className={cn(
                                                "absolute right-2 top-1/2 -translate-y-1/2",
                                                form.formState.errors
                                                    .password &&
                                                    "text-destructive",
                                            )}
                                            disabled={isLoading}
                                            onClick={handlePasswordVisibility}
                                        >
                                            {passwordVisibility ===
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

                <div className="space-y-6">
                    <Button size="lg" className="w-full" disabled={isLoading}>
                        Entrar{" "}
                        {isLoading && <Loader2Icon className="animate-spin" />}
                    </Button>

                    <div className="w-full h-px bg-white/10" />

                    <div className="w-full flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                        <Button
                            type="button"
                            variant="link"
                            size="link"
                            className="text-base font-semibold"
                            onClick={handleForgotPasswordModal}
                        >
                            Esqueceu a senha?
                        </Button>

                        <span className="text-light-primary font-semibold text-base">
                            Não tem conta?{" "}
                            <Button
                                type="button"
                                variant="link"
                                size="link"
                                className="text-base font-semibold"
                                onClick={handleRegisterModal}
                            >
                                Cadastre-se
                            </Button>
                        </span>
                    </div>
                </div>
            </form>
        </Form>
    );
};
