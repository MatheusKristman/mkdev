import { eq } from "drizzle-orm";
import NextAuth from "next-auth";
import { compare } from "bcryptjs";
import Credentials from "next-auth/providers/credentials";

import { db } from "@/lib/db";
import { users } from "./db/schemas";
import { loginSchema } from "./app/components/login-form";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                try {
                    let user = null;

                    const { email, password } = await loginSchema.parseAsync(
                        credentials
                    );

                    const existingUserQuery = await db
                        .select()
                        .from(users)
                        .where(eq(users.email, email));

                    const existingUser = existingUserQuery[0];

                    if (!existingUser) {
                        throw new Error("Usuário não encontrado");
                    }

                    const isPasswordCorrect = await compare(
                        password,
                        existingUser.password
                    );

                    if (!isPasswordCorrect) {
                        throw new Error("Credenciais inválidas");
                    }

                    return user;
                } catch (error) {
                    return null;
                }
            },
        }),
    ],
});
