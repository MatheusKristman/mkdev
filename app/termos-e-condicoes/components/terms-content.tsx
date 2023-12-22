import Link from "next/link";

import { cn } from "@/lib/utils";

export const TermsContent = () => {
    const container = "w-full flex flex-col gap-y-4 mb-9";
    const orderBox =
        "w-[40px] h-[40px] min-h-[40px] min-w-[40px] max-w-[40px] max-h-[40px] bg-[#1161DA] rounded-full p-3 flex items-center justify-center text-white text-2xl font-bold h-fit w-fit shadow-[0px_6px_13px_#126CB1]";
    const title = "text-3xl text-white font-bold flex items-center gap-x-5";
    const subTitle = "text-2xl text-white font-bold";
    const infoWrapper = "w-full flex flex-col gap-y-2";
    const desc = "text-base leading-[30px] text-white/90";
    const descList = "w-full flex flex-col gap-y-2";

    return (
        <section className="w-full flex flex-col px-6 pb-14 md:px-16 lg:container lg:mx-auto">
            <h2 className="text-4xl text-white font-bold text-center mb-12 md:text-5xl">
                Termos e Condições
            </h2>

            <div className={cn(container)}>
                <h4 className={cn(title)}>
                    <span className={cn(orderBox)}>1</span>
                    Termos
                </h4>

                <div className={cn(infoWrapper)}>
                    <p className={cn(desc)}>
                        Ao acessar ao site <Link href="/">MKDev</Link>, concorda em cumprir estes
                        termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é
                        responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não
                        concordar com algum desses termos, está proibido de usar ou acessar este
                        site. Os materiais contidos neste site são protegidos pelas leis de direitos
                        autorais e marcas comerciais aplicáveis.
                    </p>
                </div>
            </div>

            <div className={cn(container)}>
                <h4 className={cn(title)}>
                    <span className={cn(orderBox)}>2</span>
                    Uso de licença
                </h4>

                <div className={cn(infoWrapper)}>
                    <p className={desc}>
                        Ao acessar ao site <Link href="/">MKDev</Link>, concorda em cumprir estes
                        termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é
                        responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não
                        concordar com algum desses termos, está proibido de usar ou acessar este
                        site. Os materiais contidos neste site são protegidos pelas leis de direitos
                        autorais e marcas comerciais aplicáveis.
                    </p>

                    <ol className={cn(descList, "list-decimal ml-8")}>
                        <li className={cn(desc)}>modificar ou copiar os materiais;</li>

                        <li className={cn(desc)}>
                            usar os materiais para qualquer finalidade comercial ou para exibição
                            pública (comercial ou não comercial);
                        </li>

                        <li className={cn(desc)}>
                            tentar descompilar ou fazer engenharia reversa de qualquer software
                            contido no site MKDev;
                        </li>

                        <li className={cn(desc)}>
                            remover quaisquer direitos autorais ou outras notações de propriedade
                            dos materiais;
                        </li>

                        <li className={cn(desc)}>
                            transferir os materiais para outra pessoa ou 'espelhe' os materiais em
                            qualquer outro servidor.
                        </li>
                    </ol>

                    <p className={cn(desc)}>
                        Esta licença será automaticamente rescindida se você violar alguma dessas
                        restrições e poderá ser rescindida por MKDev a qualquer momento. Ao encerrar
                        a visualização desses materiais ou após o término desta licença, você deve
                        apagar todos os materiais baixados em sua posse, seja em formato eletrónico
                        ou impresso.
                    </p>
                </div>
            </div>

            <div className={cn(container)}>
                <h4 className={cn(title)}>
                    <span className={cn(orderBox)}>3</span>
                    Isenção de responsabilidade
                </h4>

                <div className={cn(infoWrapper)}>
                    <ol className={cn(descList, "list-decimal ml-8")}>
                        <li className={cn(desc)}>
                            Os materiais no site da MKDev são fornecidos 'como estão'. MKDev não
                            oferece garantias, expressas ou implícitas, e, por este meio, isenta e
                            nega todas as outras garantias, incluindo, sem limitação, garantias
                            implícitas ou condições de comercialização, adequação a um fim
                            específico ou não violação de propriedade intelectual ou outra violação
                            de direitos.
                        </li>

                        <li className={cn(desc)}>
                            Além disso, o MKDev não garante ou faz qualquer representação relativa à
                            precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos
                            materiais em seu site ou de outra forma relacionado a esses materiais ou
                            em sites vinculados a este site.
                        </li>
                    </ol>
                </div>
            </div>

            <div className={cn(container)}>
                <h4 className={cn(title)}>
                    <span className={cn(orderBox)}>4</span>
                    Limitação
                </h4>

                <div className={cn(infoWrapper)}>
                    <p className={cn(desc)}>
                        Em nenhum caso o MKDev ou seus fornecedores serão responsáveis ​​por
                        quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro
                        ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade
                        de usar os materiais em MKDev, mesmo que MKDev ou um representante
                        autorizado da MKDev tenha sido notificado oralmente ou por escrito da
                        possibilidade de tais danos. Como algumas jurisdições não permitem
                        limitações em garantias implícitas, ou limitações de responsabilidade por
                        danos conseqüentes ou incidentais, essas limitações podem não se aplicar a
                        você.
                    </p>
                </div>
            </div>

            <div className={cn(container)}>
                <h4 className={cn(title)}>
                    <span className={cn(orderBox)}>5</span>
                    Precisão dos materiais
                </h4>

                <div className={cn(infoWrapper)}>
                    <p className={cn(desc)}>
                        Os materiais exibidos no site da MKDev podem incluir erros técnicos,
                        tipográficos ou fotográficos. MKDev não garante que qualquer material em seu
                        site seja preciso, completo ou atual. MKDev pode fazer alterações nos
                        materiais contidos em seu site a qualquer momento, sem aviso prévio. No
                        entanto, MKDev não se compromete a atualizar os materiais.
                    </p>
                </div>
            </div>

            <div className={cn(container)}>
                <h4 className={cn(title)}>
                    <span className={cn(orderBox)}>6</span>
                    Links
                </h4>

                <div className={cn(infoWrapper)}>
                    <p className={cn(desc)}>
                        O MKDev não analisou todos os sites vinculados ao seu site e não é
                        responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer
                        link não implica endosso por MKDev do site. O uso de qualquer site vinculado
                        é por conta e risco do usuário.
                    </p>
                </div>
            </div>

            <div className={cn(container)}>
                <h5 className={cn(subTitle)}>Modificações</h5>

                <div className={cn(infoWrapper)}>
                    <p className={cn(desc)}>
                        O MKDev pode revisar estes termos de serviço do site a qualquer momento, sem
                        aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão
                        atual desses termos de serviço.
                    </p>
                </div>
            </div>

            <div className={cn(container)}>
                <h5 className={cn(subTitle)}>Lei aplicável</h5>

                <div className={cn(infoWrapper)}>
                    <p className={cn(desc)}>
                        Estes termos e condições são regidos e interpretados de acordo com as leis
                        do MKDev e você se submete irrevogavelmente à jurisdição exclusiva dos
                        tribunais naquele estado ou localidade.
                    </p>
                </div>
            </div>
        </section>
    );
};
