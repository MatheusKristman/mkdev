import { hash } from "bcryptjs";

import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { registerSchema } from "@/constants/schema/register-schema";
import { db } from "@/lib/db";
import { users } from "@/db/schemas";
import { signIn } from "@/auth";

export const usersRouter = createTRPCRouter({
    register: baseProcedure
        .input(registerSchema)
        .mutation(async ({ input }) => {
            const { name, cel, email, password } = input;

            const hashedPassword = await hash(password, 10);

            await db.insert(users).values({
                email,
                name,
                password: hashedPassword,
                cel,
            });

            await signIn("credentials", { email, password, redirect: false });

            return {
                message: "Cadastro realizado com sucesso",
                email,
                password,
            };
        }),
});
