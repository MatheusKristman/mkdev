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

        transporter.verify((error) => {
            if (error) {
                console.log(error);

                return new Response("Erro na conexão do email", { status: 401 });
            }
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

        transporter.sendMail(emailMessage, (error) => {
            if (error) {
                console.log(error);
                return;
            }
        });

        return Response.json({ message: "Mensagem enviada com sucesso, aguarde nosso contato" });
    } catch (error: any) {
        console.log("[ERROR_CONTACT]", error);

        return new Response("Ocorreu um erro no envio da mensagem, tente novamente mais tarde!", {
            status: 500,
        });
    }
}
