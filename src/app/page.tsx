import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClientLogos } from "@/components/ClientLogos";
import { PerformanceIntro } from "@/components/PerformanceIntro";
import { Services } from "@/components/Services";
import { ValueProp } from "@/components/ValueProp";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <PerformanceIntro />
        <Services />
        <ValueProp />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
