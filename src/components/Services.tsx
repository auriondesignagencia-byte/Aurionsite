import { Reveal } from "@/components/Reveal";
import type { Service } from "@/types/content";

const SERVICES: Service[] = [
  {
    title: "Consultoria de Marketing, Vendas e BI",
    description:
      "Consultoria especializada em Marketing, Vendas e Business Intelligence, para aumentar as vendas do seu negócio de forma exponencial, usando as tecnologias mais avançadas do mercado.",
  },
  {
    title: "Gestão de Redes Sociais e Plataformas",
    description:
      "Operação de Marketing, com gerenciamento de redes sociais e de outras plataformas digitais; produção de conteúdo direcionado para performance de vendas usando o digital.",
  },
  {
    title: "Identidade e Visuais de Marca",
    description:
      "Estratégia, identidade visual para empresas e campanhas, criação de logo, desenvolvimento de layouts e serviços gerais de Branding, para comunicar eficazmente a sua marca.",
  },
  {
    title: "Design de Sites e Interfaces",
    description:
      "Sites e e-commerce 100% customizados, UI Design & front-end para aplicativos.",
  },
  {
    title: "Design de Impressos e Packaging",
    description:
      "Projetos gráficos para embalagens, impressos e materiais personalizados on e offline.",
  },
  {
    title: "Tráfego Pago de Alta Performance",
    description:
      "Gestão de Ads, estratégia e criação de campanhas publicitárias para mídias on e offline. Direção de arte e captação de conteúdo audiovisual para anúncios nas principais plataformas online.",
  },
  {
    title: "Design de Colaterais de marca",
    description:
      "Projetos gráficos para iscas digitais, ebooks, checklists e outros materiais de marca, para uso em campanhas de inbound.",
  },
  {
    title: "Design de Apresentações e Visual Aids",
    description:
      "Design de Visual Aids, templates para apresentações e relatórios. Elaboração de Key Visuals para comunicação interna e comercial.",
  },
  {
    title: "Fotos e Vídeos Cinematográficos",
    description:
      "Captação de fotos e vídeos profissionais para conteúdos de redes sociais, anúncios, campanhas publicitárias e construção de identidade de marca.",
  },
];

export function Services() {
  return (
    <section id="o-que-fazemos" className="bg-black py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal className="mx-auto max-w-[840px] text-center">
          <h2 className="text-[28px] font-bold leading-[1.15] text-white md:text-[36px]">
            O que as pessoas pensam sobre você{" "}
            <b className="font-bold">impacta os seus resultados</b>
          </h2>
          <p className="mx-auto mt-6 max-w-[640px] text-[18px] font-light leading-[28px] text-white/70 md:text-[20px]">
            Descubra a Agência de Marketing que vai transformar a percepção do
            mercado sobre a sua empresa
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-12 text-left sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} as="article" delay={(i % 3) * 90}>
              <h3 className="text-[19px] font-bold leading-[1.3] text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] font-light leading-[25px] text-white/60">
                {s.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
