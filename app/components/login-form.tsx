"use client";

import { z } from "zod";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";

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
import useModalStore from "@/stores/useModalStore";

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, { message: "E-mail é obrigatório" })
        .email({ message: "E-mail inválido" }),
    password: z.string().min(1, { message: "Senha é obrigatória" }),
});

export const LoginForm = () => {
    const [passwordVisibility, setPasswordVisibility] = useState<
        "password" | "text"
    >("password");

    const { closeLoginModal, openRegisterModal, openForgotPasswordModal } =
        useModalStore();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof loginSchema>) => {
        signIn("credentials", {
            ...values,
            redirect: false,
            redirectTo: "/dashboard",
        });
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
                    <Button size="lg" className="w-full">
                        Entrar
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
