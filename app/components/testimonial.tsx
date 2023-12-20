import { TestimonialCard } from "./testimonial-card";

export const Testimonial = () => {
  return (
    <section className="w-full pb-40 bg-testimonial-mobile bg-no-repeat bg-[length:100%_100%] md:bg-testimonial-tablet lg:bg-testimonial-desktop">
      <div className="w-full px-6 md:px-16 lg:container lg:mx-auto">
        <h2 className="text-white text-3xl font-bold text-center mb-16 md:text-4xl">
          O que nossos{" "}
          <strong className="bg-gradient-to-r from-[#229CF5] to-[#23DFEA] text-transparent bg-clip-text">
            clientes
          </strong>{" "}
          tem a dizer
        </h2>

        <div className="w-full flex flex-col gap-y-14">
          <div className="w-full flex flex-col items-center justify-between gap-14 lg:flex-row">
            <TestimonialCard
              imageUrl="/images/testimonial-example-1.jpg"
              name="Luiz Afonso Fuganti Jaria"
              job="Gestor estratégico, inovação e tecnologia."
              desc="Os serviços customizados de site, tanto de confecção, hospedagem e manutenção são de extrema qualidade e o atendimento realmente condizente com a necessidade e capacidade do cliente. Recomendo os serviços da All marketing."
              isLeft
            />

            <TestimonialCard
              imageUrl="/images/testimonial-example-2.jpg"
              name="Regina Campagnone"
              job="Empresária."
              desc="Contatei o Marcelo através de um grupo empresarial, e em nossa primeira conversa já fechamos a confecção do site. Em pouco tempo sua equipe conseguiu desenvolver o site de maneira personalizada e com excelência, sempre com um atendimento de ponta."
              isRight
            />
          </div>

          <TestimonialCard
            imageUrl="/images/testimonial-example-3.jpg"
            name="Gianlucca Dimarzio"
            job="Gestor."
            desc="Quando contratei a Simone para trabalhar em minha página, não sabia e nem imaginava que eu ganharia muito mais que uma profissional competente para me auxiliar com o meu Instagram. Extremamente precisa e muito criativa, Simone se revelou uma enorme parceira! De uma entrega e envolvimento que nunca vi, foi me ajudando a entender o que eu buscava em meu trabalho nas redes sociais. Devo muito a ela, a construção de minha identidade digital e mais do que tudo, minha segurança em sair de minha zona de conforto. Simone captou claramente minha essência e fez e faz isso transparecer nas redes, exatamente como queria. E assim seguimos em enorme parceria, que muito tem ajudado meu trabalho se desenvolver e frutificar e o melhor de tudo, ganhei uma amiga, uma grande companheira em minha jornada nessa vida!"
            isBottom
          />
        </div>
      </div>
    </section>
  );
};
