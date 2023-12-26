import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { contactSchema } from "@/constants/schema/contact-schema";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ChangeEvent } from "react";

export const ContactForm = () => {
    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            cel: "",
            subject: "",
            message: "",
        },
    });

    const inputStyle =
        "w-full h-12 px-4 py-2 border-2 border-blue-600 bg-transparent text-white text-base focus-visible:ring-0 focus-visible:ring-offset-blue-600 transition";

    function handleCel(event: ChangeEvent<HTMLInputElement>) {
        let cel = event.target.value.replace(/\D/g, "");

        console.log(cel.length);

        if (cel.length <= 10) {
            cel = cel.replace(/(\d{2})(\d)/, "($1) $2");
        } else if (cel.length === 11) {
            cel = cel.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        } else {
            return;
        }

        form.setValue("cel", cel);
    }

    function onSubmit(values: z.infer<typeof contactSchema>) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-y-12">
                <div className="w-full flex flex-col gap-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="w-full flex flex-col gap-y-1">
                                <FormLabel className="text-white text-lg font-medium">
                                    Nome
                                </FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Digite seu nome"
                                        className={inputStyle}
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full flex flex-col gap-y-1">
                                <FormLabel className="text-white text-lg font-medium">
                                    E-mail
                                </FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Digite seu melhor e-mail"
                                        className={inputStyle}
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="cel"
                        render={({ field }) => (
                            <FormItem className="w-full flex flex-col gap-y-1">
                                <FormLabel className="text-white text-lg font-medium">
                                    Celular
                                </FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Digite seu celular"
                                        className={inputStyle}
                                        {...field}
                                        onChange={handleCel}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem className="w-full flex flex-col gap-y-1">
                                <FormLabel className="text-white text-lg font-medium">
                                    Assunto
                                </FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Digite o assunto"
                                        className={inputStyle}
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="w-full flex flex-col gap-y-1">
                                <FormLabel className="text-white text-lg font-medium">
                                    Mensagem
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="O que podemos ajudar?"
                                        className={cn(inputStyle, "h-28 resize-none")}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-800 text-white text-lg font-bold w-full flex items-center justify-center"
                >
                    Enviar
                </Button>
            </form>
        </Form>
    );
};