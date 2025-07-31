"use client";

import { z } from "zod";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Loader2Icon } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";

import { useTRPC } from "@/trpc/client";
import useModalStore from "@/stores/useModalStore";
import { forgotPasswordSchema } from "@/constants/schema/forgot-password-schema";

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
import { TRPCError } from "@trpc/server";

export const ForgotPasswordForm = () => {
    const { closeForgotPasswordModal, openPasswordRecoveryMessageModal } =
        useModalStore();

    const form = useForm<z.infer<typeof forgotPasswordSchema>>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
        },
    });

    const trpc = useTRPC();
    const { mutate: submitForgotPassword, isPending } = useMutation(
        trpc.users.forgotPassword.mutationOptions({
            onSuccess: () => {
                closeForgotPasswordModal();

                setTimeout(() => {
                    openPasswordRecoveryMessageModal();
                }, 200);
            },
            onError: (error) => {
                console.error(error);

                if (error.data?.code === "NOT_FOUND") {
                    toast.error(error.message);
                } else {
                    toast.error("Ocorreu um erro, tente novamente mais tarde");
                }
            },
        }),
    );

    const onSubmit = (values: z.infer<typeof forgotPasswordSchema>) => {
        submitForgotPassword(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>E-mail de recuperação</FormLabel>

                            <FormControl>
                                <Input disabled={isPending} {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

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
