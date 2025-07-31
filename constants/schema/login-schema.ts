import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, { message: "E-mail é obrigatório" })
        .email({ message: "E-mail inválido" }),
    password: z.string().min(1, { message: "Senha é obrigatória" }),
});
