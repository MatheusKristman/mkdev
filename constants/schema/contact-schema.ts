import * as z from "zod";

const isMobilePhone =
  /^\((?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/;

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Nome precisa ter no mínimo 5 caracteres" }),
  email: z
    .string()
    .min(1, { message: "E-mail é obrigatório" })
    .email({ message: "E-mail inválido" }),
  cel: z.string().refine((value) => isMobilePhone.test(value), {
    message: "Celular inválido",
  }),
  subject: z
    .string()
    .min(10, { message: "Assunto precisa ter no mínimo 10 caracteres" }),
  message: z
    .string()
    .min(100, { message: "Mensagem precisa ter no mínimo 100 caracteres" }),
});
