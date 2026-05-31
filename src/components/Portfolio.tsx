import { Reveal } from "@/components/Reveal";

interface Case {
  name: string;
  image: string;
  href: string;
  tags: string[];
}

const CASES: Case[] = [
  {
    name: "Water Design",
    image: "/assets/2021/04/ARTD-C02-Device-011-scaled-1.jpeg",
    href: "https://agenciadigitals.com.br/cases/water-design/",
    tags: [
      "Comunicação Visual", "Estratégia", "Fotografia", "Gestão de Marca",
      "Identidade Visual", "Posicionamento de Marca", "Vídeo", "Webdesign",
    ],
  },
  {
    name: "Paula Chicralla",
    image: "/assets/2023/08/chicralla1.webp",
    href: "https://agenciadigitals.com.br/cases/paula-chicralla/",
    tags: [
      "Comunicação Visual", "Estratégia", "Fotografia", "Gestão de Marca",
      "Identidade Visual", "Posicionamento de Marca", "Vídeo", "Webdesign",
    ],
  },
  {
    name: "Phiocare",
    image: "/assets/2023/11/Print_03c-1.jpg",
    href: "https://agenciadigitals.com.br/cases/phiocare/",
    tags: [
      "Estratégia", "Identidade Visual", "Logo Design",
      "Posicionamento de Marca", "Webdesign",
    ],
  },
  {
    name: "Danone",
    image: "/assets/2022/03/Screen-Shot-2022-03-29-at-22.04.49.png",
    href: "https://agenciadigitals.com.br/cases/danone-bonafont/",
    tags: [
      "branding", "Design", "Estratégia", "Packaging",
      "Posicionamento de Marca", "Webdesign",
    ],
  },
  {
    name: "Superprix",
    image: "/assets/2023/08/case-superprix-antes-depois.png",
    href: "https://agenciadigitals.com.br/cases/superprix/",
    tags: [
      "Estratégia", "Facebook Ads", "Gestão de Social Media", "Identidade Visual",
      "Logo Design", "Posicionamento de Marca", "Webdesign",
    ],
  },
  {
    name: "Decor Urbano",
    image: "/assets/2023/01/Screen-Shot-2023-03-08-at-17.05.52.png",
    href: "https://agenciadigitals.com.br/cases/decor-urbano/",
    tags: [
      "Estratégia", "Identidade Visual", "Posicionamento de Marca", "Webdesign",
    ],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-black py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[880px] text-[26px] font-bold leading-[1.1] tracking-[-1px] text-white md:text-[44px]">
            Descubra outras marcas que{" "}
            <b className="font-bold">
              se tornaram as preferidas dos clientes mais exigentes
            </b>
          </h2>
          <p className="mx-auto mt-6 max-w-[700px] text-[16px] font-light leading-[27px] text-white/70 md:text-[18px]">
            Somos a Agência de Marketing de algumas das melhores marcas do país,
            trabalhando desde a estratégia até a execução de projetos de
            Marketing 360º
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1180px] gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {CASES.map((c, i) => (
          <Reveal key={c.name} as="article" delay={(i % 3) * 90}>
            <a href={c.href} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white/5">
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <h3 className="absolute bottom-4 left-5 font-script text-[34px] leading-none text-white">
                  {c.name}
                </h3>
              </div>
              <p className="mt-4 text-[12px] font-light leading-[20px] text-white/50">
                {c.tags.join(" | ")}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
