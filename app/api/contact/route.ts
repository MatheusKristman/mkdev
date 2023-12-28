import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, name, cel, subject, message } = body;

        if (!email || !name || !cel || !subject || !message) {
            return new Response("Dados invalidos, verifique e tente novamente", { status: 400 });
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
                    console.log("Servidor do email rodando");
                    resolve(success);
                }
            });
        });

        const emailMessage = {
            from: process.env.CONTACT_EMAIL,
            to: process.env.CONTACT_EMAIL,
            subject: `Contato de ${name} - <${email}>`,
            text: `
                Nome: ${name}
                E-mail: ${email}
                Celular: ${cel}
                Assunto: ${subject}
                Mensagem: ${message}
`,
        };

        await new Promise((resolve, reject) => {
            transporter.sendMail(emailMessage, (error, info) => {
                if (error) {
                    console.log(error);

                    reject(error);
                } else {
                    resolve(info);
                }
            });
        });

        return Response.json({ message: "Mensagem enviada com sucesso, aguarde nosso contato" });
    } catch (error: any) {
        console.log("[ERROR_CONTACT]", error);

        return new Response("Ocorreu um erro no envio da mensagem, tente novamente mais tarde!", {
            status: 500,
        });
    }
}
