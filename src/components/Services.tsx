import { Reveal } from "@/components/Reveal";
import type { Service } from "@/types/content";

const SERVICES: Service[] = [
  {
    title: "Posicionamento & Estratégia",
    description:
      "Definimos a percepção que sua marca precisa comandar e construímos o plano de conteúdo que transforma seguidores em clientes.",
  },
  {
    title: "Gestão de Redes Sociais",
    description:
      "Operação completa do seu perfil: planejamento, calendário, publicação e relacionamento, com consistência profissional todos os dias.",
  },
  {
    title: "Conteúdo Estratégico",
    description:
      "Roteiros, copys e pautas pensados para autoridade e venda — conteúdo que para o scroll e gera desejo, não só curtidas.",
  },
  {
    title: "Identidade Visual & Branding",
    description:
      "Um feed coeso e sofisticado que comunica o real valor da sua marca e te posiciona no padrão dos melhores do seu mercado.",
  },
  {
    title: "Tráfego Pago",
    description:
      "Anúncios estratégicos para alcançar as pessoas certas, atrair leads qualificados e acelerar as vendas com previsibilidade.",
  },
  {
    title: "Audiovisual & Produção",
    description:
      "Direção de fotos e vídeos com estética de alto padrão para campanhas, reels e conteúdos que valorizam a sua marca.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-emerald-deep py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            O que fazemos
          </span>
          <h2 className="mt-4 text-[28px] font-bold leading-[1.12] tracking-[-0.5px] text-cream md:text-[40px]">
            Social media de ponta a ponta, com{" "}
            <span className="font-script text-[40px] font-normal tracking-normal text-gold md:text-[54px]">
              estratégia
            </span>{" "}
            em cada detalhe
          </h2>
          <p className="mx-auto mt-5 max-w-[600px] text-[16px] font-light leading-[26px] text-cream/70 md:text-[18px]">
            Da estratégia à execução, cuidamos de tudo para a sua marca crescer
            com consistência e autoridade.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.title}
              as="article"
              delay={(i % 3) * 80}
              className="group rounded-2xl border border-cream/10 bg-bg/40 p-7 transition-colors hover:border-gold/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/12 text-[16px] font-bold text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-[19px] font-bold leading-[1.3] text-cream">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] font-light leading-[25px] text-cream/65">
                {s.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
