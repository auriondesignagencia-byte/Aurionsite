import type { Metadata } from "next";
import { Open_Sans, Qwigley } from "next/font/google";
import "./globals.css";
import { MetaPixel } from "@/components/MetaPixel";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const qwigley = Qwigley({
  variable: "--font-qwigley",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auriondesign.com.br"),
  title: "Aurion Design | Agência de Social Media Estratégica",
  description:
    "Marcas que comandam a percepção vendem mais. A Aurion Design transforma seu posicionamento digital em autoridade, desejo e vendas com social media estratégico.",
  icons: {
    icon: "/assets/brand/aurion-mark.jpeg",
    apple: "/assets/brand/aurion-mark.jpeg",
  },
  openGraph: {
    title: "Aurion Design | Agência de Social Media Estratégica",
    description:
      "Posicionamento & estratégia digital para marcas que querem comandar a percepção e vender mais.",
    images: ["/assets/brand/aurion-ig.jpeg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${openSans.variable} ${qwigley.variable} antialiased`}>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
