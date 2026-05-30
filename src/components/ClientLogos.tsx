import type { ClientLogo } from "@/types/content";

const LOGOS: ClientLogo[] = [
  { src: "/assets/2021/12/Danone-logo-1-branca-300x169.png", alt: "Danone" },
  { src: "/assets/2021/12/AJUSTE_RETORNA_02-300x194.png", alt: "Bonafont Retorna" },
  { src: "/assets/2021/12/logo-canaloff.png", alt: "Canal Off" },
  { src: "/assets/2021/12/logoAsset-1prix-300x273.png", alt: "Super Prix" },
  { src: "/assets/2025/05/gerdau-logo-300x244.png", alt: "Gerdau" },
  { src: "/assets/2023/10/Intel_logo_2022_white_blue-300x117.png", alt: "Intel" },
  { src: "/assets/2025/05/AGD-Chicralla-Logo-2024-Asset-6high.png", alt: "Grupo Paula Chicralla" },
  { src: "/assets/2023/01/Servier_Logo_Sign_RVB-300x100.png", alt: "Servier" },
  { src: "/assets/2023/01/logo_branco.png", alt: "Cedraflon" },
  { src: "/assets/2025/05/Logo-VoIPms-light.png", alt: "VoIP.ms" },
  { src: "/assets/2023/09/AGD-Waterdesign_logotipo-horizontal-Branco.png", alt: "Water Design" },
];

export function ClientLogos() {
  const loop = [...LOGOS, ...LOGOS];
  return (
    <section id="section-clients" className="bg-black py-20">
      <div className="agd-marquee-mask relative overflow-hidden">
        <div className="agd-marquee-track items-center">
          {loop.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex w-[200px] shrink-0 items-center justify-center px-8"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-[58px] w-auto object-contain opacity-50"
                style={{ filter: "grayscale(1)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
