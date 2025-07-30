import { hash } from "bcryptjs";

import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { registerSchema } from "@/constants/schema/register-schema";
import { db } from "@/lib/db";
import { users } from "@/db/schemas";

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

            return { message: "Cadastro realizado com sucesso" };
        }),
});
