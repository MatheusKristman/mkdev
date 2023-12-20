import { Phone } from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// TODO adicionar form no modal, já esta instalado, só seguir o passo a passo do shadcnui

export const ContactModal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="bg-transparent py-2 px-5 text-white font-semibold text-xl border-2 border-[#19D0F0] rounded-lg transition-shadow hover:shadow-[0px_0px_8px_#19D0F0]">
                    Entre em contato
                </button>
            </DialogTrigger>
            <DialogContent className="text-white">
                <div>
                    <span>
                        Contato
                        <div />
                    </span>

                    <div>
                        <div className="w-full flex gap-x-5 md:max-w-lg lg:max-w-2xl">
                            <span className="bg-[#1161DA] rounded-full p-3 flex items-center justify-center h-fit w-fit shadow-[0px_6px_13px_#126CB1]">
                                <Phone color="white" size={25} />
                            </span>

                            <div className="flex flex-col gap-y-6">
                                <h2 className="text-2xl text-white font-bold md:text-4xl">
                                    Entre em{" "}
                                    <strong className="bg-gradient-to-r from-[#3093EE] to-[#23F6DD] text-transparent bg-clip-text">
                                        contato
                                    </strong>
                                </h2>

                                <p className="text-base text-white/90 leading-[27px]">
                                    Quer descobrir com nós podemos melhorar o seu negócio? Mande sua
                                    mensagem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
