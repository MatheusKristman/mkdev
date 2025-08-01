import { z } from "zod";

export const recoveryPasswordSchema = z
    .object({
        recoveryToken: z
            .string()
            .min(1, { message: "Token de recuperação é obrigatório" }),
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
