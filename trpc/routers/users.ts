import crypto from "crypto";
import { hash } from "bcryptjs";
import nodemailer from "nodemailer";

import { db } from "@/lib/db";
import { signIn } from "@/auth";
import { users } from "@/db/schemas";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { registerSchema } from "@/constants/schema/register-schema";
import { forgotPasswordSchema } from "@/constants/schema/forgot-password-schema";
import { eq } from "drizzle-orm";
import { TRPCError } from "@trpc/server";
import { render } from "@react-email/components";
import RecoveryPasswordEmail from "@/emails/recovery-password-email";

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
    forgotPassword: baseProcedure
        .input(forgotPasswordSchema)
        .mutation(async ({ input }) => {
            const { email } = input;

            const token = crypto.randomBytes(32).toString("hex");
            const expires = new Date(Date.now() + 1000 * 60 * 30);

            const usersData = await db
                .update(users)
                .set({
                    passwordRecoveryToken: token,
                    passwordRecoveryExpiresIn: expires,
                })
                .where(eq(users.email, email))
                .returning();

            const user = usersData[0];

            if (!user) {
                throw new TRPCError({
                    code: "NOT_FOUND",
                    message: "Usuário não encontrado",
                });
            }

            const transporter = nodemailer.createTransport({
                host: "smtp.umbler.com",
                port: 587,
                secure: false,
                auth: {
                    user: process.env.NODEMAILER_USER,
                    pass: process.env.NODEMAILER_PASS,
                },
            });

            await new Promise((resolve, reject) => {
                transporter.verify((error, success) => {
                    if (error) {
                        console.log(error);

                        reject(error);
                    } else {
                        console.log("Email server running...");
                        resolve(success);
                    }
                });
            });

            const baseUrl = process.env.VERCEL_URL
                ? process.env.VERCEL_URL
                : "http://localhost:3000";

            const emailHtml = await render(
                RecoveryPasswordEmail({
                    name: user.name,
                    recoveryLink: `${baseUrl}/?recoveryToken=${token}`,
                }),
            );

            const emailMessage = {
                from: process.env.CONTACT_EMAIL,
                to: email,
                subject: `MKDev - Recuperação de senha`,
                html: emailHtml,
            };

            await new Promise((resolve, reject) => {
                transporter.sendMail(emailMessage, (error, info) => {
                    if (error) {
                        console.log(error);

                        reject(error);
                    } else {
                        console.log("Email sended!");

                        resolve(info);
                    }
                });
            });

            return {};
        }),
});
