"use client";

import { z } from "zod";
import { useState } from "react";
import toast from "react-hot-toast";
import InputMask from "react-input-mask";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon, Loader2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import useModalStore from "@/stores/useModalStore";
import { registerSchema } from "@/constants/schema/register-schema";

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
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";

export const RegisterForm = () => {
    const [passwordVisibility, setPasswordVisibility] = useState<
        "password" | "text"
    >("password");
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState<
        "password" | "text"
    >("password");

    const trpc = useTRPC();

    const { closeRegisterModal, openLoginModal } = useModalStore();

    const { mutate: register, isPending } = useMutation(
        trpc.users.register.mutationOptions({
            onSuccess: (data) => {
                toast.success(data.message);
                closeRegisterModal();
            },
        }),
    );

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
        register(values);
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
                                                "border-destructive focus-visible:shadow-destructive",
                                        )}
                                        disabled={isPending}
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
                                    <InputMask
                                        mask="(99) 99999-9999"
                                        disabled={isPending}
                                        {...field}
                                    >
                                        {(inputProps) => (
                                            <Input
                                                className={cn(
                                                    form.formState.errors.cel &&
                                                        "border-destructive focus-visible:shadow-destructive",
                                                )}
                                                {...inputProps}
                                            />
                                        )}
                                    </InputMask>

                                    {/* <Input */}
                                    {/*     className={cn( */}
                                    {/*         form.formState.errors.cel && */}
                                    {/*             "border-destructive focus-visible:shadow-destructive", */}
                                    {/*     )} */}
                                    {/*     {...field} */}
                                    {/* /> */}
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
                                                "border-destructive focus-visible:shadow-destructive",
                                        )}
                                        disabled={isPending}
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
                                                    .password &&
                                                    "text-destructive",
                                            )}
                                            disabled={isPending}
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
                                                    .confirmPassword &&
                                                    "text-destructive",
                                            )}
                                            disabled={isPending}
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
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isPending}
                    >
                        Criar conta{" "}
                        {isPending && <Loader2Icon className="animate-spin" />}
                    </Button>

                    <div className="w-full h-px bg-white/10" />

                    <span className="block text-light-primary font-semibold text-base text-center">
                        Já possui conta?{" "}
                        <Button
                            type="button"
                            variant="link"
                            size="link"
                            className="text-base font-semibold"
                            disabled={isPending}
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
