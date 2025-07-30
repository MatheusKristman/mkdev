"use client";

import { z } from "zod";
import { useState } from "react";
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
    FormControl,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import useModalStore from "@/stores/useModalStore";

const registerSchema = z
    .object({
        name: z.string().min(1, { message: "Nome é obrigatório" }),
        cel: z
            .string()
            .min(1, { message: "Celular é obrigatório" })
            .max(15, { message: "Celular inválido" }),
        email: z
            .string()
            .min(1, { message: "E-mail é obrigatório" })
            .email({ message: "E-mail inválido" }),
        password: z
            .string()
            .min(1, { message: "Senha é obrigatória" })
            .min(6, { message: "Senha precisa ter no mínimo 6 caracteres" }),
        confirmPassword: z
            .string()
            .min(1, { message: "Confirmação da senha é obrigatória" })
            .min(6, {
                message:
                    "Confirmação da senha precisa ter no mínimo 6 caracteres",
            }),
    })
    .superRefine(({ password, confirmPassword }, ctx) => {
        if (confirmPassword !== password) {
            ctx.addIssue({
                code: "custom",
                message: "Senhas não coincidem",
                path: ["confirmPassword"],
            });
        }
    });

export const RegisterForm = () => {
    const [passwordVisibility, setPasswordVisibility] = useState<
        "password" | "text"
    >("password");
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState<
        "password" | "text"
    >("password");

    const { closeRegisterModal, openLoginModal } = useModalStore();

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            cel: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = (values: z.infer<typeof registerSchema>) => {
        console.log({ values });
    };

    const handlePasswordVisibility = () => {
        if (passwordVisibility === "password") {
            setPasswordVisibility("text");
            return;
        }

        setPasswordVisibility("password");
    };

    const handleConfirmPasswordVisibility = () => {
        if (confirmPasswordVisibility === "password") {
            setConfirmPasswordVisibility("text");
            return;
        }

        setConfirmPasswordVisibility("password");
    };

    const handleLoginModal = () => {
        closeRegisterModal();

        setTimeout(() => {
            openLoginModal();
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
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>

                                <FormControl>
                                    <Input
                                        className={cn(
                                            form.formState.errors.name &&
                                                "border-destructive focus-visible:shadow-destructive"
                                        )}
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="cel"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Celular</FormLabel>

                                <FormControl>
                                    <Input
                                        className={cn(
                                            form.formState.errors.cel &&
                                                "border-destructive focus-visible:shadow-destructive"
                                        )}
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

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
                                                "border-destructive focus-visible:shadow-destructive"
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
                                                    "border-destructive focus-visible:shadow-destructive"
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
                                                    "text-destructive"
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

                    <FormField
                        name="confirmPassword"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirmar Senha</FormLabel>

                                <FormControl>
                                    <div className="w-full relative">
                                        <Input
                                            type={confirmPasswordVisibility}
                                            className={cn(
                                                "pr-14",
                                                form.formState.errors
                                                    .confirmPassword &&
                                                    "border-destructive focus-visible:shadow-destructive"
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
                                                    .confirmPassword &&
                                                    "text-destructive"
                                            )}
                                            onClick={
                                                handleConfirmPasswordVisibility
                                            }
                                        >
                                            {confirmPasswordVisibility ===
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
                        Criar conta
                    </Button>

                    <div className="w-full h-px bg-white/10" />

                    <span className="block text-light-primary font-semibold text-base text-center">
                        Já possui conta?{" "}
                        <Button
                            type="button"
                            variant="link"
                            size="link"
                            className="text-base font-semibold"
                            onClick={handleLoginModal}
                        >
                            Faça o login
                        </Button>
                    </span>
                </div>
            </form>
        </Form>
    );
};
