import type { Metadata } from "next";
import { Open_Sans, Qwigley } from "next/font/google";
import "./globals.css";

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
  title: "Agência de Marketing | Sofisticação e Resultados",
  description:
    "Agência de Marketing de padrão internacional, com soluções completas para transformar sua marca em objeto de desejo e aumentar suas vendas",
  icons: {
    icon: [
      { url: "/assets/2023/08/cropped-AGD-SIMBOLO-V2-favicon-branco-32x32.png", sizes: "32x32" },
      { url: "/assets/2023/08/cropped-AGD-SIMBOLO-V2-favicon-branco-192x192.png", sizes: "192x192" },
    ],
    apple: "/assets/2023/08/cropped-AGD-SIMBOLO-V2-favicon-branco-180x180.png",
  },
  openGraph: {
    title: "Agência de Marketing | Sofisticação e Resultados",
    description:
      "Agência de Marketing de padrão internacional, com soluções completas para transformar sua marca em objeto de desejo e aumentar suas vendas",
    images: ["/assets/2022/03/agd-hero-v4.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${openSans.variable} ${qwigley.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
