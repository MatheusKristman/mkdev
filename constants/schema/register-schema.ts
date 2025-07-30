import z from "zod";

export const registerSchema = z
    .object({
        name: z.string().min(1, { message: "Nome é obrigatório" }),
        cel: z
            .string()
            .min(1, { message: "Celular é obrigatório" })
            .max(15, { message: "Celular inválido" }),
        email: z
            .email({ message: "E-mail inválido" })
            .min(1, { message: "E-mail é obrigatório" }),
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
