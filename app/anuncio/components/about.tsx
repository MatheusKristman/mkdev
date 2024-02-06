import { AboutCard } from "./about-card";

export const About = () => {
  return (
    <section className="w-full bg-ad-mobile-bottom bg-no-repeat bg-cover sm:bg-ad-tablet-bottom lg:bg-ad-desktop-bottom lg:bg-[length:100%_100%]">
      <div>
        <div>
          <h2>
            Nossos <strong>Diferenciais</strong>
          </h2>

          <p>
            Somos uma equipe qualificada e dedicada a criar experiências
            digitais únicas! Nossos projetos tem layouts personalizados que
            refletem a essência da sua marca e encantam seus clientes. Além
            disso, dominamos as regras do SEO para colocar sua empresa no topo
            das pesquisas do Google. Aumente a visibilidade, cative novos
            clientes e fortaleça seu relacionamento com o público junto à MK
            Dev!
          </p>
        </div>

        <div>
          <div>
            <div />
            <span>Por que escolher nossa agência?</span>
          </div>

          <div>
            <AboutCard />
            <AboutCard />
            <AboutCard />
          </div>
        </div>
      </div>
    </section>
  );
};
