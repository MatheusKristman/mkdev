"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const formSchema = z
    .object({
        newPassword: z
            .string()
            .min(1, { message: "Nova senha é obrigatória" })
            .min(6, {
                message: "Nova senha precisa ter no mínimo 6 caracteres",
            }),
        confirmNewPassword: z
            .string()
            .min(1, { message: "Confirmação da nova senha é obrigatória" }),
    })
    .superRefine(({ newPassword, confirmNewPassword }, ctx) => {
        if (confirmNewPassword !== newPassword) {
            ctx.addIssue({
                code: "custom",
                message: "As senhas não coincidem",
                path: ["confirmNewPassword"],
            });
        }
    });

export const PasswordRecoveryForm = () => {
    const [newPasswordVisibility, setNewPasswordVisibility] = useState<
        "password" | "text"
    >("password");
    const [confirmNewPasswordVisibility, setConfirmNewPasswordVisibility] =
        useState<"password" | "text">("password");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            newPassword: "",
            confirmNewPassword: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log({ values });
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
                                                    .newPassword &&
                                                    "text-destructive"
                                            )}
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
                                                    .confirmNewPassword &&
                                                    "text-destructive"
                                            )}
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

                <Button type="submit" size="lg" className="w-full">
                    Enviar
                </Button>
            </form>
        </Form>
    );
};
